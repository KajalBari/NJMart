import React, { useEffect, useState } from 'react';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native';

function RegisterSecurityInfoPage(props) {
  const { navigation } = props;
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [securityQues, setSecurityQues] = useState('')
  const [yourAns, setYourAns] = useState('')

  const handleTermsandConditions = () => {
    navigation.navigate('TermsandConditions');
  };

  return (
    <SMView style={styles.containerStyle}>
      <LinearGradient colors={["#FD6510", "#FFBF43"]}
        style={styles.gradient}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }} >

        <SMImage source={NJMartLogo} style={styles.njMartImage} />
        <SMView style={[styles.tableStyle, styles.elevation]}>

          <SMText style={styles.registerStyle}>
            Register
          </SMText>
          <SMText style={styles.mandatoryStyle}>
            *Marks Are Mandatory
          </SMText>
          <SMText style={styles.securityInfoHeading}>
            Security Information
          </SMText>

          <SMTextInput
            style={styles.userIdStyle}
            placeholder={"User Id*"}
            value={userId}
            onChangeText={value => setUserId(value)}
          />

          <SMTextInput
            style={styles.passwordStyle}
            placeholder={"Password*"}
            value={password}
            onChangeText={value => setPassword(value)}
          />

          <SMTextInput
            style={styles.confirmPassStyle}
            placeholder={"Confirm Password*"}
            value={confirmPass}
            onChangeText={value => setConfirmPass(value)}
          />

          <SMTextInput
            style={styles.securityQueStyle}
            placeholder={"Security Question"}
            value={securityQues}
            onChangeText={value => setSecurityQues(value)}
          />

          <SMTextInput
            style={styles.answerStyle}
            placeholder={"Your Answer"}
            value={yourAns}
            onChangeText={value => setYourAns(value)}
          />

          <SMButton
            buttonText="Next"
            type="nextbutton"
            buttonStyle={styles.nextButtonStyle}
            onPress={handleTermsandConditions}
          />

        </SMView>
      </LinearGradient>
    </SMView>

  );
}
export default RegisterSecurityInfoPage;
