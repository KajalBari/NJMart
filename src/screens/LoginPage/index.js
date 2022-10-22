import React, { useEffect, useState } from 'react';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { SliderComponent, TouchableOpacity } from 'react-native';
import {TextInput} from 'react-native';

function LoginPage(props) {
  const { navigation } = props;
  const handleDashboard= () => {
    // console.log("Button PRess")
    navigation.navigate('Dashboard');
  };

  return (
    <LinearGradient colors={["#FD6510", "#FFBF43"]}
      style={styles.gradient}
      start={{ x: 1, y: 0.5 }}
      end={{ x: 0, y: 0.5 }} >

      <SMImage source={NJMartLogo} style={styles.njMartImage} />
      <SMView style={[styles.tableStyle, styles.elevation]}>
        <SMText style={styles.loginStyle}>
          Log In
        </SMText>

        {/* <TextInput
         style={styles.emailStyle}
          placeholder={"Enter your email"}
        /> */}
        <SMTextInput
        style={styles.emailStyle}
          placeholder={"Enter your email"}
        />

        <SMTextInput
        style={styles.passwordStyle}
          placeholder={"Enter your password"}
        />
        
          <SMText style={styles.forgetPassStyle}>Forgot Password?</SMText>
        
        <SMButton
          buttonText="Login"
          type="nextbutton"
          buttonStyle={styles.loginButtonStyle}
          onPress={handleDashboard}
        />



        <SMView style={styles.signUpDiv}>
          <SMText style={styles.userStyle}>
            are you a new user?
          </SMText>
          <TouchableOpacity>
          <SMText style={styles.signUpStyle}>
            Sign Up
          </SMText>
          </TouchableOpacity>

        </SMView>
      </SMView>
    </LinearGradient>
  );
}
export default LoginPage;