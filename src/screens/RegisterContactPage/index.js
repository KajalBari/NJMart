import React from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox } from '../../elements';
import {
    NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import {FlatList,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import { TextInput } from "react-native-paper";
import { normalize } from '../../constants/Platform';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function RegisterContactPage(props) {
    const { navigation } = props;
    const handleRegisterNomineePage = () => {
        navigation.navigate('RegisterNomineePage');
    };

return(

  <SMView style={styles.containerStyle}>  
    <LinearGradient colors={["#FD6510","#FFBF43"]} 
    style={styles.gradient}  
    start={{x: 1, y: 0.5}} 
    end={{x: 0, y: 0.5}} >

    <SMImage source={NJMartLogo}  style={styles.njMartImage} />   
     <SMView style={[styles.tableStyle,styles.elevation]}>
{/* 
     <KeyboardAwareScrollView
      extraScrollHeight={normalize(100)}
      nestedScrollEnabled> */}
    
          <SMText style={styles.registerStyle}>
            Register
          </SMText>
          <SMText style={styles.mandatoryStyle}>
            *Marks Are Mandatory 
          </SMText>
          <SMText style={styles.contactHeading}>
            Contact Information
          </SMText>

          <KeyboardAwareScrollView
       extraScrollHeight={normalize(100)}
      nestedScrollEnabled>

      <SMView style={styles.divStyle}>

          <SMTextInput
           style={styles.addressStyle}
            placeholder={"Postal Address"}
          />
          <SMTextInput
             style={styles.countryStyle}
            placeholder={"Country"}
            />
          
          <SMTextInput
           style={styles.stateStyle}
              placeholder={"State"}
            />

          <SMTextInput 
            style={styles.districtStyle}
             placeholder={"District"}
             />

          <SMTextInput
           style={styles.pincodeStyle}
           placeholder={"Pin Code"}
          />

          <SMTextInput
           style={styles.mobileStyle}
            placeholder={"Mobile*"}
          />

          <SMTextInput
           style={styles.emailStyle}
           placeholder={"Email"}
          />

          <SMButton
          buttonText="Next"
          type="nextbutton"
          buttonStyle={styles.nextButtonStyle}
          onPress={handleRegisterNomineePage}
          />  
</SMView>
          </KeyboardAwareScrollView> 
          </SMView>  
     </LinearGradient>
     </SMView>         
);
}
export default RegisterContactPage;