import React from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox } from '../../elements';
import {
  NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';

// import { ScrollView } from "react-native-gesture-handler";
import { ScrollView, FlatList, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { normalize } from '../../constants/Platform';


function RegisterPersonalPage(props) {
  const { navigation } = props;
  const handleRegisterContactPage = () => {
    navigation.navigate('RegisterContactPage');
  };

  return (
    // <KeyboardAwareScrollView
    // extraScrollHeight={normalize(100)}
    // nestedScrollEnabled>

    <LinearGradient colors={["#FD6510", "#FFBF43"]}
      style={styles.gradient}
      start={{ x: 1, y: 0.5 }}
      end={{ x: 0, y: 0.5 }} >


      <SMImage source={NJMartLogo} style={styles.njMartImage} />

<SMView style={[styles.tableStyle, styles.elevation]}>
        <SMView>
          <SMText style={styles.registerStyle}>
            Register
          </SMText>
          <SMText style={styles.mandatoryStyle}>
            *Marks Are Mandatory
          </SMText>
          <SMText style={styles.personalInfoHeading}>
            Personal Information
          </SMText>
        </SMView>

        <SMView style={styles.divStyle}>

            <SMTextInput
              style={styles.titleStyle}
              placeholder={"Title"}
              // maxLength={20}
            />

            <SMTextInput
              style={styles.applicantNameStyle}
              placeholder={"Applicant's Name*"}
              // maxLength={20}
            />

            <SMTextInput
              style={styles.dobStyle}
              placeholder={"DOB"}
                // maxLength={20}
            />

            <SMTextInput
              style={styles.fatherNameStyle}
              placeholder={"Father's/Husband Name"}
              // maxLength={20}
            />

            <SMTextInput
              style={styles.maritalStatusStyle}
              placeholder={"Marital Status"}
              // maxLength={20}
            />

            <SMTextInput
              style={styles.genderStyle}
              placeholder={"Gender"}
              // maxLength={20}
            />

            <SMButton
              buttonText="Next"
              type="nextbutton"
              buttonStyle={styles.nextButtonStyle}
              onPress={handleRegisterContactPage}
            />
        </SMView>
      </SMView>
    </LinearGradient>
     
  );
}
export default RegisterPersonalPage;

