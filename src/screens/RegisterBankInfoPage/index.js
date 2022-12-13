import React ,{ useState , useEffect } from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { bankValidator } from './bankValidator';
import { loginValidator } from '../LoginPage/loginValidator';
function RegisterBankInfoPage(props) {
  const { navigation } = props;

  const [bankInfo, setBankInfo] = useState({
    bankName: '',
    branchName: '',
    accNumber: '',
    panNum: '',
    ifsc: '',
  })
  const handleOnChange = (key, value) => {
    setBankInfo({
      ...bankInfo,
      [key]:value,
    });
  };
  const [errorMessageObj, seterrorMessageObj] = useState({
    valid: false,
  });
  const clearErrorMessageObj = () => {
    seterrorMessageObj({
      valid: false,
    });
  };
  const handleRegisterSecurityInfoPage = () => {
    const validatedData  = loginValidator({...bankInfo});
    if (validatedData.valid) {
      clearErrorMessageObj();
      navigation.navigate('RegisterSecurityInfoPage');
    } else {
      seterrorMessageObj({ ...validatedData });
    }
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
                value={bankInfo.bankName}
                onChangeText={value => {
                  handleOnChange('bankName', value);
                }}
              />

              <SMTextInput
                style={styles.branchStyle}
                placeholder={"Branch Name"}
                value={bankInfo.branchName}
                onChangeText={value => {
                  handleOnChange('branchName', value);
                }}
              />

              <SMTextInput
                style={styles.accountStyle}
                placeholder={"Account Number"}
                value={bankInfo.accNumber}
                onChangeText={value => {
                  handleOnChange('accNumber', value);
                }}
              />

              <SMTextInput
                style={styles.pancardStyle}
                placeholder={"Pan Number*"}
                value={bankInfo.panNum}
                onChangeText={value => {
                  handleOnChange('panNum', value);
                }}
                errorMessage={errorMessageObj?.panNum}
              />

              <SMTextInput
                style={styles.ifscStyle}
                placeholder={"IFSC Code"}
                value={bankInfo.ifsc}
                onChangeText={value => {
                  handleOnChange('ifsc', value);
                }}
              />

              <SMButton
                buttonText="Next"
                type="nextbutton"
                buttonStyle={styles.nextButtonStyle}
                // onPress={() =>handleRegisterSecurityInfoPage()}}
                onPress={() =>handleRegisterSecurityInfoPage()}
              />

            </SMView>
          </ScrollView>
        </SMView>
      </SMView>
    </SMView>
  );
}
export default RegisterBankInfoPage;