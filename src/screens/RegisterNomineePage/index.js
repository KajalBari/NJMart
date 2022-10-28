import React from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox } from '../../elements';
import {
    NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native';
//import { TextInput } from "react-native-paper";

function RegisterNomineePage(props) {
    const { navigation } = props;
    const handleRegisterBankInfoPage = () => {
        navigation.navigate('RegisterBankInfoPage');
    };

return( 
  <SMView style={styles.containerStyle}>
    <LinearGradient colors={["#FD6510","#FFBF43"]} 
    style={styles.gradient}  
    start={{x: 1, y: 0.5}} 
    end={{x: 0, y: 0.5}} >

    <SMImage source={NJMartLogo}  style={styles.njMartImage} />   
     <SMView style={[styles.tableStyle , styles.elevation]}>
    
          <SMText style={styles.registerStyle}>
            Register 
          </SMText>
          <SMText style={styles.mandatoryStyle}>
            *Marks Are Mandatory 
          </SMText>
          <SMText style={styles.NomineeInfo}>
                Nominee Information
          </SMText>

      <SMView style={styles.divStyle}>

      
          <SMTextInput
          style={styles.titleStyle}
            placeholder={"Nominee Title"}
          />

          <SMTextInput
           style={styles.nameStyle}
              placeholder={"Nominee Name"}
          />

          <SMTextInput
           style={styles.relationStyle}
              placeholder={"Relation with Applicant"}
          />

          <SMButton
          buttonText="Next"
          type="nextbutton"
          buttonStyle={styles.nextButtonStyle}
          onPress={handleRegisterBankInfoPage}
          /> 
          </SMView>  
          </SMView>  
      </LinearGradient>
     </SMView>
);
}
export default RegisterNomineePage;