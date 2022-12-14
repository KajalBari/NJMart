import React, { useState ,useEffect} from 'react';
import moment from 'moment';
import {
  SMText,
  SMView,
  SMImage,
  SMContainer,
  SMButton,
  SMTextInput,
  SMCheckBox,
  SMCalendarPicker,
} from '../../elements';
import { NJMartLogo } from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import {personalInfoValidator} from './personalInfoValidator';


function RegisterPersonalPage(props) {
  const { navigation } = props;

  const [personalInfo, setPersonalInfo] = useState({
    applicantName: '',
    dob: '',
    fatherName: '',
  })

  const handleOnChange = (key, value) => {
    setPersonalInfo({
      ...personalInfo,
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

  const handleRegisterContactPage = () => {
    const validatedData  = personalInfoValidator({...personalInfo});
    if (validatedData.valid) {
      clearErrorMessageObj();
      navigation.navigate('RegisterContactPage');
    } else {
      seterrorMessageObj({ ...validatedData });
    }
  };


  // const handleRegisterContactPage = () => {
  //   navigation.navigate('RegisterContactPage');
  // };

   const [pos, setPos] = useState('')
  // const [applicantName, setApplicantName] = useState('')
  // const [dob, setDob] = useState('')
  // const [fatherName, setFatherName] = useState('')
  return (
    <SMView style={styles.containerStyle} >
      <LinearGradient
        colors={['#FD6510', '#FFBF43']}
        style={styles.gradient}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }}>
        <SMImage source={NJMartLogo} style={styles.njMartImage} />
      </LinearGradient>

      <SMView style={[styles.tableStyle, styles.elevation]}>
        <SMView style={styles.innerDivStyle}>

          <SMText style={styles.registerStyle}>Register</SMText>
          <SMText style={styles.mandatoryStyle}>*Marks Are Mandatory</SMText>
          <SMText style={styles.personalInfoHeading}>
            Personal Information
          </SMText>

          <ScrollView nestedScrollEnabled>
            <SMView style={styles.divStyle}>

              <SMView style={styles.containerRadio}>
                <SMText style={styles.textPos}>Title</SMText>

                <SMView style={styles.Wrapper}>
                  {['Mr', 'Mrs', 'Ms'].map(position =>
                    <SMView key={position} style={styles.pos}>
                      <SMText style={styles.position1}>{position}</SMText>

                      <TouchableOpacity style={styles.outer}
                        onPress={() => setPos(position)}>
                        {pos === position && <SMView style={styles.inner} />}
                      </TouchableOpacity>
                    </SMView>
                  )}
                </SMView>
              </SMView>


              <SMTextInput
                style={styles.applicantNameStyle}
                placeholder={"Applicant's Name*"} 
                value={personalInfo.applicantName}
                //onChangeText={value => setApplicantName(value)}
                onChangeText={value => {
                  handleOnChange('applicantName', value);
                }}
                errorMessage={errorMessageObj?.applicantName}
                 />

              <SMTextInput
                style={styles.dobStyle}
                placeholder={'DOB'} 
                value={personalInfo.dob}
                //onChangeText={value => setDob(value)}
                onChangeText={value => {
                  handleOnChange('dob', value);
                }}
                 />


              <SMTextInput
                style={styles.fatherNameStyle}
                placeholder={"Father's/Husband Name"} 
                value={personalInfo.fatherName}
                //onChangeText={value => setFatherName(value)}
                onChangeText={value => {
                  handleOnChange('fatherName', value);
                }}
                 />

              <SMView style={styles.containerRadio}>
                <SMText style={styles.textPos}>Marital Status</SMText>

                <SMView style={styles.Wrapper}>
                  {['Single', 'Married'].map(position =>
                    <SMView key={position} style={styles.pos}>
                      <SMText style={styles.position1}>{position}</SMText>

                      <TouchableOpacity style={styles.outer}
                        onPress={() => setPos(position)}>
                        {pos === position && <SMView style={styles.inner} />}
                      </TouchableOpacity>
                    </SMView>
                  )}
                </SMView>
              </SMView>

              <SMView style={styles.containerRadio}>
                <SMText style={styles.textPos}>Gender</SMText>

                <SMView style={styles.Wrapper}>
                  {['Male', 'Female'].map(position =>
                    <SMView key={position} style={styles.pos}>
                      <SMText style={styles.position1}>{position}</SMText>

                      <TouchableOpacity style={styles.outer}
                        onPress={() => setPos(position)}>
                        {pos === position && <SMView style={styles.inner} />}
                      </TouchableOpacity>
                    </SMView>
                  )}
                </SMView>
              </SMView>

              <SMButton
                buttonText="Next"
                type="nextbutton"
                buttonStyle={styles.nextButtonStyle}
                onPress={handleRegisterContactPage}
              />

            </SMView>
          </ScrollView>
        </SMView>
      </SMView>

    </SMView>
  );
}
export default RegisterPersonalPage;
