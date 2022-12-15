import React, { useEffect, useState } from 'react';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput,SMDialog} from '../../elements';
import {
    NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import { SliderComponent, TouchableOpacity, Alert } from 'react-native';
import { forgetPasswordValidator } from './forgetPasswordValidator';


function ForgetPassword(props) {
    const {navigation} = props;
    const [dialogPopup, setDialogPopup]=useState(false);
    const [forgotState, setForgotState] = useState({
        emailID: '',
    });

    const [errorMessageObj, seterrorMessageObj] = useState({
        valid: false,
    });
    const clearErrorMessageObj = () => {
        seterrorMessageObj({
            valid: false,
        });
    };

    const handleOnChange = (key, value) => {
        setForgotState({
            ...forgotState,
            [key]: value,
        });
    };

    const handleResetPasswordPress = () => {
        const validatedData = forgetPasswordValidator({ ...forgotState });
        if (validatedData.valid) {
            clearErrorMessageObj();
            setDialogPopup(true);
          } else {
            seterrorMessageObj({...validatedData});
          }
    }
    
  const navigateToLoginScreen = () => {
    setDialogPopup(false);
    
    navigation.navigate('LoginPage');
  };

    return (
        <>
        <SMView style={styles.containerStyle}>
            <LinearGradient colors={["#FD6510", "#FFBF43"]}
                style={styles.gradient}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }} >
                <SMImage source={NJMartLogo} style={styles.njMartImage} />
            </LinearGradient>

            <SMView style={[styles.tableStyle, styles.elevation]}>
                <SMText style={styles.forgetPasswordStyle}>
                    Forgot Password?
                </SMText>
                <SMText style={styles.enterStyle}>
                    Enter your Email to recover your Password
                </SMText>

                <SMTextInput
                    style={styles.emailStyle}
                    placeholder={"Enter your Email"}
                    value={forgotState.emailID}
                    onChangeText={value => {
                        handleOnChange('emailID', value);
                    }}
                    errorMessage={errorMessageObj?.emailID}
                />

                <SMButton
                    buttonText="Reset Password"
                    type="nextbutton"
                    buttonStyle={styles.resetButtonStyle}
                    // loader={forgotPasswordLoading}
                    // disableButton={forgotPasswordLoading}
                    onPress={() => { handleResetPasswordPress() }}
                    //errorMessage={errorMessageObj?.emailID}
                />

            </SMView>
        </SMView>
            
            <SMDialog
            visible={dialogPopup}
            onDismiss={navigateToLoginScreen}
            dismissable
            content={
              <SMText type="Title" style={styles.confirmationDialogContent}>
                {
                  'We have sent a verification link to your Email. Please click on the link to reset password.'
                }
              </SMText>
            }
          />
          </>
    );
}
export default ForgetPassword;
