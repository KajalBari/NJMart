import React, { useEffect, useState } from 'react';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { SliderComponent, TouchableOpacity, Alert } from 'react-native';
import { loginValidator } from './loginValidator';
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';
// import { set } from 'lodash';

function LoginPage(props) {
  const { navigation } = props;
  const [errorMessageObj, seterrorMessageObj] = useState({
    valid: false,
  });
  const clearErrorMessageObj = () => {
    seterrorMessageObj({
      valid: false,
    });
  };

  // const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('')
  // // console.log(email);

  const [loginState, setloginState] = useState({
    email: '',
    password: '',
  })

  const handleOnChange = (key, value) => {
    setloginState({
      ...loginState,
      [key]:value,
    });
  };
  //console.log("errorMessageObj",errorMessageObj);

  const submit = () => {
    const validatedData  = loginValidator({...loginState});
      // console.log("otpValidator",otpValidator.valid);
      if (validatedData.valid) {
        clearErrorMessageObj();
        navigation.navigate('Dashboard');
      } else {
        seterrorMessageObj({ ...validatedData });
      }
    }

  // const submit = () =>{
  //   //return Alert.alert(email, password);
  //   if (email === "kajal" && password ==="bari")
  //     Alert.alert('Email and Password is Correct')
  //   else{
  //     Alert.alert('Email and Password is not Correct')
  //   } 
  // }

  // const handleDashboard = () => {
  //   // console.log("Button Press")
  //   navigation.navigate('Dashboard');
  // };

  return (
    <SMView style={styles.containerStyle} >
      <LinearGradient colors={["#FD6510", "#FFBF43"]}
        style={styles.gradient}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }} >
        <SMImage source={NJMartLogo} style={styles.njMartImage} />
      </LinearGradient>
      <SMView style={[styles.tableStyle, styles.elevation]}>
        <SMText style={styles.loginStyle}>
          Log In
        </SMText>
        <SMTextInput
          style={styles.emailStyle}
          placeholder={"Enter your email"}
          value={loginState.email}
          onChangeText={value => {
            handleOnChange('email', value);
          }}
          errorMessage={errorMessageObj?.email}
        />
        <SMTextInput
          style={styles.passwordStyle}
          placeholder={"Enter your password"}
          value={loginState.password}
          onChangeText={value => {
            handleOnChange('password', value);
          }}
          errorMessage={errorMessageObj?.password}
        />
        <TouchableOpacity>
          <SMText style={styles.forgetPassStyle}>Forgot Password?</SMText>
        </TouchableOpacity>
        <SMButton
          buttonText="Login"
          type="nextbutton"
          buttonStyle={styles.loginButtonStyle}
          //  onPress={handleDashboard}
          onPress={() => {submit()}}
        />
        <SMView style={styles.signUpDiv}>
          <SMText style={styles.userStyle}>
            are you a new user?
          </SMText>
          <TouchableOpacity onPress={() => navigation.navigate('Register', { name: 'Register' })} >
            <SMText style={styles.signUpStyle}>
              Sign Up
            </SMText>
          </TouchableOpacity>
        </SMView>
      </SMView>
    </SMView>
  );
}
export default LoginPage;