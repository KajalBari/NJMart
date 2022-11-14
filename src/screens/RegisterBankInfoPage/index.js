import React from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native';

function RegisterBankInfoPage(props) {
  const { navigation } = props;
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
              />

              <SMTextInput
                style={styles.branchStyle}
                placeholder={"Branch Name"}
              />

              <SMTextInput
                style={styles.accountStyle}
                placeholder={"Account Number"}
              />

              <SMTextInput
                style={styles.pancardStyle}
                placeholder={"Pan Number*"}
              />

              <SMTextInput
                style={styles.ifscStyle}
                placeholder={"IFSC Code"}
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