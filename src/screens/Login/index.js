import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {normalize} from '../../constants/Platform';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import messaging from '@react-native-firebase/messaging';
import {useDispatch, useSelector} from 'react-redux';
import {Divider} from 'react-native-paper';
import {
  SMButton,
  SMCheckBox,
  SMContainer,
  SMImage,
  SMSnackBar,
  SMText,
  SMTextInput,
  SMView,
  SMOTPInput,
} from '../../elements';
import {
  googleLogoPNG,
  emailPNG,
  passwordKeyPNG,
  showPasswordPNG,
  dontShowPasswordPNG,
} from '../../assets';
import {styles} from './styles';
import {BackHandler, Pressable, TouchableOpacity} from 'react-native';
import {loginValidator} from './loginValidator';
import * as authAction from '../../actions';
import {getHoursMinutesSeconds} from '../../utils/commonUtils';

function Login(props) {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [loginState, setloginState] = useState({
    emailID: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessageObj, seterrorMessageObj] = useState({
    valid: false,
  });
  const loginLoading = useSelector(state => state.auth.loginLoading);
  const snackAlertMessage = useSelector(
    state => state.common.snackAlertMessage,
  );

  const loginResponseComplete = useSelector(
    state => state.auth.loginResponseComplete,
  );
  const loginOTPLoading = useSelector(state => state.auth.loginOTPLoading);

  const [timer, setTimer] = useState(0);
  const {hours, minutes, seconds} = getHoursMinutesSeconds(timer);
  const [otpSubmit, setOtpSubmit] = useState(false);

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(remainingSecs => remainingSecs - 1);
      }, 1000);
    } else {
      setTimer(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOnChange = (key, value) => {
    setloginState({
      ...loginState,
      [key]: value,
    });
  };

  const clearErrorMessageObj = () => {
    seterrorMessageObj({
      valid: false,
    });
  };

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const handleCreateAccountPress = () => {
    navigation.navigate('CreateAccount');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLoginPress = async submitForOTP => {
    const validatedData = loginValidator({...loginState}, submitForOTP);
    if (validatedData.valid) {
      const fcmToken = await messaging().getToken();
      clearErrorMessageObj();
      dispatch(authAction.authenticateUser(loginState, fcmToken, navigation));
      if (!submitForOTP) {
        setTimer(120);
      }
    } else {
      seterrorMessageObj({...validatedData});
    }
  };

  const onSubmitForData = async submitForOTP => {
    const otpValidator = loginValidator(loginState, submitForOTP);
    setOtpSubmit(submitForOTP);
    const fcmToken = await messaging().getToken();
    const payloadData = {
      email: loginState.emailID,
      password: loginState.password,
      Otp: submitForOTP ? loginState.Otp : '0',
      NotificationToken: fcmToken ? fcmToken : null,
    };
    if (otpValidator.valid) {
      clearErrorMessageObj();
      dispatch(authAction.loginOtp(payloadData, submitForOTP, navigation));
    } else {
      seterrorMessageObj({...otpValidator});
    }
  };

  return (
    <SMContainer noFooter homeButton>
      <SMView style={styles.container}>
        {!loginResponseComplete ? (
          <>
            <SMText type="Headline" style={styles.logInText}>
              Log in
            </SMText>
            <SMTextInput
              maxLength={255}
              type="primary"
              placeholder={'Email ID'}
              keyboardType="email-address"
              onChangeText={value => {
                handleOnChange('emailID', value);
              }}
              value={loginState.emailID.toLocaleLowerCase()}
              leftElement={
                <SMImage source={emailPNG} style={styles.emailPNG} />
              }
              inputStyle={styles.emailInput}
              errorMessage={errorMessageObj?.emailID}
            />
            <SMTextInput
              maxLength={20}
              type="primary"
              placeholder={'Password'}
              keyboardType="default"
              onChangeText={value => {
                handleOnChange('password', value);
              }}
              secureTextEntry={!showPassword}
              value={loginState.password}
              leftElement={
                <SMImage
                  source={passwordKeyPNG}
                  style={styles.passwordKeyPNG}
                />
              }
              rightElement={
                <Pressable
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}>
                  {showPassword ? (
                    <SMImage
                      source={showPasswordPNG}
                      style={styles.showPasswordPNG}
                    />
                  ) : (
                    <SMImage
                      source={dontShowPasswordPNG}
                      style={styles.showPasswordPNG}
                    />
                  )}
                </Pressable>
              }
              inputStyle={styles.passwordInput}
              errorMessage={errorMessageObj?.password}
            />
            <SMView style={styles.rememberForgotView}>
              <SMView style={styles.rememberMeView}>
                <SMCheckBox
                  label="Remember me"
                  labelStyle={styles.rememberMeText}
                  style={styles.rememberMeCheckBox}
                  isSelected={loginState.rememberMe}
                  onSelection={() => {
                    handleOnChange('rememberMe', !loginState.rememberMe);
                  }}
                />
              </SMView>
              <SMView style={styles.emptyFlex} />
              <TouchableOpacity
                onPress={() => {
                  handleForgotPassword();
                }}>
                <SMText type="Caption" style={styles.forgotPasswordText}>
                  Forgot Password?
                </SMText>
              </TouchableOpacity>
            </SMView>
            <SMButton
              buttonText="LOGIN"
              type="secondary"
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
              onPress={() => {
                handleLoginPress(false);
              }}
              loader={loginLoading}
              disableButton={loginLoading}
            />
          </>
        ) : null}
        {loginResponseComplete ? (
          <>
            <SMText type="Body_1" style={styles.otpLabelText}>
              Enter your OTP here
            </SMText>
            <SMOTPInput
              otpContainerStyle={styles.otpContainer}
              onOtpEntered={value => handleOnChange('Otp', value)}
              timer={`${hours}:${minutes}:${seconds}`}
              errorMessage={errorMessageObj?.otp}
            />
            <SMButton
              buttonText="SUBMIT"
              type="secondary"
              buttonStyle={styles.submitButton}
              textStyle={styles.submitButtonText}
              onPress={() => {
                onSubmitForData(true);
              }}
              loader={loginOTPLoading && otpSubmit}
              disableButton={loginOTPLoading && otpSubmit}
            />
            <SMView style={styles.otpTextView}>
              <SMText type="Caption" style={styles.notRegisterText}>
                Didn't get the code?
              </SMText>
              <SMButton
                type="link"
                buttonText="Resend OTP"
                textStyle={styles.createAccountText}
                buttonStyle={styles.resendOTPButton}
                onPress={() => {
                  handleLoginPress(false);
                }}
                disableButton={!!timer}
              />
            </SMView>
          </>
        ) : null}
        <SMButton
          type="secondary"
          buttonText="Sign in with Google"
          leftElement={
            <SMImage source={googleLogoPNG} style={styles.googleLogo} />
          }
          buttonStyle={styles.googleSignInButton}
          onPress={() => {
            signIn();
          }}
          disableButton={true}
        />
        <SMView style={styles.middleTextView}>
          <Divider style={styles.divider} />
          <SMText type="Caption" style={styles.signInWithEmailText}>
            or Sign in with Email
          </SMText>
          <Divider style={styles.divider} />
        </SMView>
        <SMView style={styles.bottomTextView}>
          <SMText type="Caption" style={styles.notRegisterText}>
            Not registered yet?
          </SMText>
          <SMButton
            type="link"
            buttonText="Create an Account"
            buttonStyle={styles.createAccount}
            textStyle={styles.createAccountText}
            onPress={handleCreateAccountPress}
          />
        </SMView>
        {snackAlertMessage ? (
          <SMSnackBar
            visible={!!snackAlertMessage}
            onDismiss={() => {
              dispatch(authAction.clearSnackAlert());
            }}
            actionLabel="CLOSE"
            onActionPress={() => {
              dispatch(authAction.clearSnackAlert());
            }}>
            {snackAlertMessage}
          </SMSnackBar>
        ) : null}
      </SMView>
    </SMContainer>
  );
}

export default Login;
