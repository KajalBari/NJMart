import React, { useEffect, useState } from 'react';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { SliderComponent, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';
// import { set } from 'lodash';

function LoginPage(props) {
  const { navigation } = props;

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const handleDashboard = () => {
    // console.log("Button Press")
    navigation.navigate('Dashboard');
  };
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
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <SMTextInput
          style={styles.passwordStyle}
          placeholder={"Enter your password"}
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <TouchableOpacity>
          <SMText style={styles.forgetPassStyle}>Forgot Password?</SMText>
        </TouchableOpacity>
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
        <TouchableOpacity  onPress={() => navigation.navigate('Register', { name: 'Register' })} >
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