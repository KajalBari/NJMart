import React, { useState } from 'react';
import {
  SMText,
  SMView,
  SMImage,
  SMContainer,
  SMButton,
  SMTextInput,
  SMCheckBox,
} from '../../elements';
import { NJMartLogo } from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { normalize } from '../../constants/Platform';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';

function RegisterPersonalPage(props) {
  const { navigation } = props;
  const handleRegisterContactPage = () => {
    navigation.navigate('RegisterContactPage');
  };

  const [pos, setPos] = useState("")
  const [applicantName, setApplicantName] = useState('')
  const [dob, setDob] = useState('')
  const [fatherName, setFatherName] = useState('')
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
                placeholder={"Applicant's Name*"} value={applicantName}
                onChangeText={value => setApplicantName(value)} />

              <SMTextInput
                style={styles.dobStyle}
                placeholder={'DOB'} value={dob}
                onChangeText={value => setDob(value)} />

              <SMTextInput
                style={styles.fatherNameStyle}
                placeholder={"Father's/Husband Name"} value={fatherName}
                onChangeText={value => setFatherName(value)} />

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
