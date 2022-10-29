import React from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { normalize } from '../../constants/Platform';
import {ScrollView,Text, View} from 'react-native';



function RegisterPersonalPage(props) {
  const { navigation } = props;
  const handleRegisterContactPage = () => {
    navigation.navigate('RegisterContactPage');
  };

  return (
    // <KeyboardAwareScrollView
    // extraScrollHeight={normalize(100)}
    // nestedScrollEnabled>
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
          <SMText style={styles.personalInfoHeading}>
            Personal Information
          </SMText>


          <ScrollView style={{flexGrow:1}}>
             
             <SMView style={styles.divStyle}>

             <SMTextInput
                style={styles.titleStyle}
                placeholder={"Title"}
              />

              <SMTextInput
                style={styles.applicantNameStyle}
                placeholder={"Applicant's Name*"}
              />

              <SMTextInput
                style={styles.dobStyle}
                placeholder={"DOB"}
              />

              <SMTextInput
                style={styles.fatherNameStyle}
                placeholder={"Father's/Husband Name"}
              />

              <SMTextInput
                style={styles.maritalStatusStyle}  
                placeholder={"Marital Status"}
              />

              <SMTextInput
                style={styles.genderStyle}
                placeholder={"Gender"}
              />

            
             <SMButton
                buttonText="Next"
                type="nextbutton"
                buttonStyle={styles.nextButtonStyle}
                onPress={handleRegisterContactPage}
              /> 


             </SMView>
            </ScrollView>
        </SMView>
      </LinearGradient>
    </SMView>
    // </KeyboardAwareScrollView>
  );

}
export default RegisterPersonalPage;

