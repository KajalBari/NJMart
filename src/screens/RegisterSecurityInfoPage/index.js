import React, { useEffect, useState } from 'react';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput,SMPicker } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput,ScrollView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {normalize} from '../../constants/Platform';
import {securityInfoValidator} from './securityInfoValidator';

function RegisterSecurityInfoPage(props) {
  const { navigation } = props;

  const [securityInfo, setSecurityInfo] = useState({
    userId: '',
    password: '',
    confirmPass: '',
    yourAns: '',
  })

  const [errorMessageObj, seterrorMessageObj] = useState({
    valid: false,
  });
  const clearErrorMessageObj = () => {
    seterrorMessageObj({
      valid: false,
    });
  };

  const [loginState, setloginState] = useState({
    userId: '',
    password: '',
    confirmPass:'',
  })

  const handleOnChange = (key, value) => {
    setSecurityInfo({
      ...securityInfo,
      [key]:value,
    });
  };

  const submit = () => {
    const validatedData  = securityInfoValidator({...securityInfo});
      // console.log("otpValidator",otpValidator.valid);
      if (validatedData.valid) {
        clearErrorMessageObj();
        navigation.navigate('TermsandConditions');
      } else {
        seterrorMessageObj({ ...validatedData });
      }
    }

  // const [userId, setUserId] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPass, setConfirmPass] = useState('')
  // const [yourAns, setYourAns] = useState('')

  const [applicantRelation, setApplicantRelation] = useState('Select');
  const [openApplicantRelationPicker, setOpenApplicantRelationPicker] = useState(false);
  const [applicantRelationPickerItems, setApplicantRelationPickerItems] = useState([
    {label: 'What is Your Father Middle Name?', value: 'fatherName'},
    {label: 'What Was The Name Of Your First School?', value: 'schoolName'},
    {label: 'Who Was Your Childhood Hero?', value: 'childhoodHero'},
    {label: 'What Is Your Favorite PastTime?', value: 'favPastTime'},
    {label: 'What is Your All-Time Favorite Sports Team?', value: 'favTeam'},
    {label: 'What Was Your High School Mascot?', value: 'schoolMascot'},
    {label: 'What Is Your Pet Name?', value: 'petName'}, 
  ]);

  // const handleTermsandConditions = () => {
  //   navigation.navigate('TermsandConditions');
  // };

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
          <SMText style={styles.securityInfoHeading}>
            Security Information
          </SMText>


          <ScrollView nestedScrollEnabled>
          <SMView style={styles.divStyle}>

          <SMTextInput
            style={styles.userIdStyle}
            placeholder={"User Id*"}
            value={securityInfo.userId}
            //onChangeText={value => setUserId(value)}
            onChangeText={value => {
              handleOnChange('userId', value);
            }}
            errorMessage={errorMessageObj?.userId}
          />

          <SMTextInput
            style={styles.passwordStyle}
            placeholder={"Password*"}
            value={securityInfo.password}
           // onChangeText={value => setPassword(value)}
           onChangeText={value => {
            handleOnChange('password', value);
          }}
          errorMessage={errorMessageObj?.password}
          />

          <SMTextInput
            style={styles.confirmPassStyle}
            placeholder={"Confirm Password*"}
            value={securityInfo.confirmPass}
            //onChangeText={value => setConfirmPass(value)}
            onChangeText={value => {
              handleOnChange('confirmPass', value);
            }}
            errorMessage={errorMessageObj?.confirmPass}
          />

            <SMView style={styles.applicantRelationView}>
              <SMText  style={styles.applicantRelationText}>
               Security Question:
              </SMText>
              <SMPicker
                type="secondary"
                open={openApplicantRelationPicker}
                value={applicantRelation}
                items={applicantRelationPickerItems}
                setOpen={setOpenApplicantRelationPicker}
                setItems={setApplicantRelationPickerItems}
                containerStyle={styles.DropDownContainer}
                style={styles.applicantRelationTextBoxStyle}
                placeholder={'Select'}
                setValue={setApplicantRelation}
                placeholderStyle={styles.applicantRelationPlaceholder}
                ArrowUpIconComponentSize={normalize(14)}
                ArrowDownIconComponentSize={normalize(14)}
                //textStyle={styles.accountTypeTextStyle}
              //disabled={bankDetails.length >= 5}
              />
              </SMView>

          <SMTextInput
            style={styles.answerStyle}
            placeholder={"Your Answer"}
            value={securityInfo.yourAns}
            onChangeText={value => setYourAns(value)}
          />

          <SMButton
            buttonText="Next"
            type="nextbutton"
            buttonStyle={styles.nextButtonStyle}
           // onPress={handleTermsandConditions}
           onPress={() => {submit()}}
          />

          </SMView>
          </ScrollView>
        </SMView>
        </SMView>
    
    </SMView>

  );
}
export default RegisterSecurityInfoPage;
