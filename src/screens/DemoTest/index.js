import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {
  emailPNG,
  passwordKeyPNG,
  showPasswordPNG,
  dontShowPasswordPNG,
  firstLastNamePNG,
  referralWalletPNG
} from '../../assets';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';
import {
  SMButton,
  SMCheckBox,
  SMContainer,
  SMDialog,
  SMIcons,
  SMImage,
  SMPicker,
  SMSnackBar,
  SMText,
  SMTextInput,
  SMView,
} from '../../elements';
import {createAccountValidator} from './createAccountValidator';
import {styles} from './styles';
import * as authAction from '../../actions';
import { validatePassword } from '../../utils/commonUtils';

function CreateAccount(props) {
  const {navigation,route} = props;
  const dispatch = useDispatch();
  const params = route?.params;
  
  const [createAccountState, setcreateAccountState] = useState({
    firstName: '',
    lastName: '',
    emailID: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    RefferalCode: params?.referralCode?.toString() || '489433837',
    termsAndConditions: false,
  });

  const [countryCode, setCountryCode] = useState('+91');
  const [openCountryCodePicker, setOpenCountryCodePicker] = useState(false);
  const [showRegisterConfirmationDialog, setShowRegisterConfirmationDialog] =
    useState(false);
  const [showPasswordInfo, setShowPasswordInfo] =
    useState(false);
  const [countryCodePickerItems, setCountryCodePickerItems] = useState([
    {label: '+91', value: '+91'},
    {label: '+1', value: '+1'},
  ]);
  const [errorMessageObj, seterrorMessageObj] = useState({
    valid: false,
  });
  const registerUserLoading = useSelector(
    state => state.auth.registerUserLoading,
  );
  const registerUserData = useSelector(
    state => state.auth.registerUserData,
  );
  const registerUserSuccess = useSelector(
    state => state.auth.registerUserSuccess,
  );

  const snackAlertMessage = useSelector(
    state => state.common.snackAlertMessage,
  );

  const navigateToLoginScreen = () => {
    setShowRegisterConfirmationDialog(false);
    navigation.navigate('Login');
  };

  useEffect(() => {
    if (registerUserSuccess) {
      setShowRegisterConfirmationDialog(true);
      // setTimeout(() => {
      //   navigateToLoginScreen();
      // }, 5000);
    }
  }, [registerUserSuccess]);

  useEffect(() => {
    return () => {
      dispatch(authAction.clearAuthState());
    };
  }, []);

  const handleOnChange = (key, value) => {
    setcreateAccountState({
      ...createAccountState,
      [key]: value,
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const clearErrorMessageObj = () => {
    seterrorMessageObj({
      valid: false,
    });
  };
// testing
  const handleRegisterPress = () => {
    const validatedData = createAccountValidator({
      ...createAccountState,
      countryCode,
    });
    if(!validatePassword(createAccountState.password)){
      setShowPasswordInfo(true);
    }
    if (validatedData.valid) {
      clearErrorMessageObj();
      dispatch(
        authAction.registerUser(
          {...createAccountState, countryCode: countryCode},
          navigation,
        ),
      );
    } else {
      seterrorMessageObj({...validatedData});
    }
  };

  return (
    <SMContainer backButton noFooter homeButton>
      <KeyboardAwareScrollView
        extraScrollHeight={normalize(80)}
        nestedScrollEnabled>
        <SMView style={styles.container}>
          <SMText type="Headline" style={styles.createAccountText}>
            Create Account
          </SMText>
          <SMTextInput
            maxLength={50}
            autoFocus
            type="primary"
            keyboardType="default"
            placeholder={'First Name'}
            onChangeText={value => {
              handleOnChange('firstName', value);
            }}
            value={createAccountState.firstName}
            leftElement={
              <SMImage source={firstLastNamePNG} style={styles.firstNamePNG} />
            }
            inputStyle={styles.firstNameInput}
            errorMessage={errorMessageObj?.firstName}
          />
          <SMTextInput
            maxLength={50}
            type="primary"
            keyboardType="default"
            placeholder={'Last Name'}
            onChangeText={value => {
              handleOnChange('lastName', value);
            }}
            value={createAccountState.lastName}
            leftElement={
              <SMImage source={firstLastNamePNG} style={styles.lastNamePNG} />
            }
            inputStyle={styles.lastNameInput}
            errorMessage={errorMessageObj?.lastName}
          />
          <SMTextInput
            maxLength={255}
            type="primary"
            keyboardType="email-address"
            placeholder={'Email'}
            onChangeText={value => {
              handleOnChange('emailID', value);
            }}
            value={createAccountState.emailID.toLocaleLowerCase()}
            leftElement={<SMImage source={emailPNG} style={styles.emailPNG} />}
            inputStyle={styles.emailInput}
            errorMessage={errorMessageObj?.emailID}
          />
          <SMTextInput
            maxLength={20}
            type="primary"
            keyboardType="default"
            placeholder={'Password'}
            onChangeText={value => {
              handleOnChange('password', value);
            }}
            secureTextEntry={!showPassword}
            value={createAccountState.password}
            leftElement={
              <SMImage source={passwordKeyPNG} style={styles.passwordKeyPNG} />
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
          <SMTextInput
            maxLength={20}
            type="primary"
            keyboardType="default"
            placeholder={'Confirm Password'}
            onChangeText={value => {
              handleOnChange('confirmPassword', value);
            }}
            secureTextEntry={!showConfirmPassword}
            value={createAccountState.confirmPassword}
            leftElement={
              <SMImage source={passwordKeyPNG} style={styles.passwordKeyPNG} />
            }
            rightElement={
              <Pressable
                onPress={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}>
                {showConfirmPassword ? (
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
            inputStyle={styles.confirmPasswordInput}
            errorMessage={errorMessageObj?.confirmPassword}
          />
          <SMView style={styles.countryCodeMobileNumberView}>
            <SMPicker
              type="primary"
              open={openCountryCodePicker}
              value={countryCode}
              items={countryCodePickerItems}
              setOpen={setOpenCountryCodePicker}
              setItems={setCountryCodePickerItems}
              containerStyle={styles.countryCodeContainerStyle}
              style={styles.countryCodeStyle}
              placeholder={'+91'}
              setValue={setCountryCode}
              placeholderStyle={styles.countryCodePlaceholderStyle}
              ArrowUpIconComponentSize={normalize(14)}
              ArrowDownIconComponentSize={normalize(14)}
              textStyle={styles.countryCodeTextStyle}
            />
            <SMTextInput
              maxLength={10}
              type="primary"
              keyboardType="phone-pad"
              placeholder={'Mobile Number'}
              onChangeText={value => {
                handleOnChange('mobileNumber', value);
              }}
              value={createAccountState.mobileNumber}
              inputStyle={styles.mobileNumberInput}
              style={styles.mobileNumberStyle}
              errorMessage={errorMessageObj?.mobileNumber}
            />
          </SMView>
          <SMTextInput
             maxLength={10}
             type="primary"
             keyboardType="default"
             placeholder={'Referral ID'}
             onChangeText={value => {
               handleOnChange('RefferalCode', value);
            }}
            value={createAccountState.RefferalCode}
            leftElement={
              <SMImage source={referralWalletPNG} style={styles.referalPNG} />
            }
            inputStyle={styles.firstNameInput}
            errorMessage={errorMessageObj?.RefferalCode}
          />
         
          <SMCheckBox
            label="I agree to terms & conditions for registration"
            labelStyle={styles.termsAndConditionsLabel}
            style={styles.rememberMeCheckBox}
            isSelected={createAccountState.termsAndConditions}
            onSelection={() => {
              handleOnChange(
                'termsAndConditions',
                !createAccountState.termsAndConditions,
              );
            }}
            checkBoxStyle={styles.termsAndConditionsCheckBox}
            checkboxIconSize={normalize(10)}
          />

          <SMButton
            buttonText="REGISTER"
            type="secondary"
            buttonStyle={styles.registerButton}
            textStyle={styles.registerButtonText}
            onPress={handleRegisterPress}
            loader={registerUserLoading}
            disableButton={registerUserLoading}
          />
          {errorMessageObj?.termsAndConditions && (
            <SMSnackBar
              visible={!!errorMessageObj.termsAndConditions}
              onDismiss={() => {
                seterrorMessageObj({
                  ...errorMessageObj,
                  termsAndConditions: null,
                });
              }}
              actionLabel="CLOSE"
              onActionPress={() => {
                seterrorMessageObj({
                  ...errorMessageObj,
                  termsAndConditions: null,
                });
              }}>
              {errorMessageObj?.termsAndConditions}
            </SMSnackBar>
          )}
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
          {showRegisterConfirmationDialog && (
            <SMDialog
              visible={showRegisterConfirmationDialog}
              onDismiss={navigateToLoginScreen}
              dismissable
              content={
                <SMText type="Title" style={styles.confirmationDialogContent}>
                  {registerUserData?.message || 'We have sent you a verification link to your Email ID'}
                </SMText>
              }
            />
          )}
          {showPasswordInfo ? (
            <SMDialog
              visible={showPasswordInfo}
              onDismiss={() => setShowPasswordInfo(false)}
              dismissable
              content={
                <SMView>
                <SMText type="Title" style={styles.passwordInfoDialogContent}>
                  Your password must follow below criteria
                  </SMText>
                  <SMText type="Title" style={styles.passwordInfoDialogContent}>
                  - Atleast 1 lower case letter
                  </SMText>
                  <SMText type="Title" style={styles.passwordInfoDialogContent}>
                  - Atleast 1 capital case letter
                  </SMText>
                  <SMText type="Title" style={styles.passwordInfoDialogContent}>
                  - Atleast 1 number
                  </SMText>
                  <SMText type="Title" style={styles.passwordInfoDialogContent}>
                  - Atleast 1 special character
                  </SMText>
                  <SMText type="Title" style={styles.passwordInfoDialogContent}>
                  - Password length must be 8 character to 15 character long
                </SMText>
                </SMView>
              }
            />
          ) : null}
        </SMView>
      </KeyboardAwareScrollView>
    </SMContainer>
  );
}

export default CreateAccount;