import React from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native';
import { useState } from "react";

function RegisterBankInfoPage(props) {
  const { navigation } = props;
  const [bankName, setBankName] = useState('')
  const [branchName, setBranchName] = useState('')
  const [accNumber, setAccNumber] = useState('')
  const [panNum, setPanNum] = useState('')
  const [ifsc, setIfsc] = useState('')
  const handleRegisterSecurityInfoPage = () => {
    navigation.navigate('RegisterSecurityInfoPage');
  };

  return (
    <SMView style={styles.containerStyle}>
      <LinearGradient colors={["#FD6510", "#FFBF43"]}
        style={styles.gradient}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }} >

        <SMImage source={NJMartLogo} style={styles.njMartImage} />
      </LinearGradient>

      <SMView style={[styles.tableStyle, styles.elevation]}>
        <SMView style={styles.innerDivStyle}>


          <SMText style={styles.registerStyle}>
            Register
          </SMText>
          <SMText style={styles.mandatoryStyle}>
            *Marks Are Mandatory
          </SMText>
          <SMText style={styles.bankInfoHeading}>
            Bank Information
          </SMText>

          <ScrollView nestedScrollEnabled>
            <SMView style={styles.divStyle}>

              <SMTextInput
                style={styles.bankStyle}
                placeholder={"Bank Name"}
                value={bankName}
                onChangeText={value => setBankName(value)}
              />

              <SMTextInput
                style={styles.branchStyle}
                placeholder={"Branch Name"}
                value={branchName}
                onChangeText={value => setBranchName(value)}
              />

              <SMTextInput
                style={styles.accountStyle}
                placeholder={"Account Number"}
                value={accNumber}
                onChangeText={value => setAccNumber(value)}
              />

              <SMTextInput
                style={styles.pancardStyle}
                placeholder={"Pan Number*"}
                value={panNum}
                onChangeText={value => setPanNum(value)}
              />

              <SMTextInput
                style={styles.ifscStyle}
                placeholder={"IFSC Code"}
                value={ifsc}
                onChangeText={value => setIfsc(value)}
              />

              <SMButton
                buttonText="Next"
                type="nextbutton"
                buttonStyle={styles.nextButtonStyle}
                onPress={handleRegisterSecurityInfoPage}
              />

            </SMView>
          </ScrollView>
        </SMView>
      </SMView>
    </SMView>
  );
}
export default RegisterBankInfoPage;