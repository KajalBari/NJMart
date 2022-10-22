import React from "react";
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox } from '../../elements';
import {
    NJMartLogo,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { normalize } from '../../constants/Platform';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native";
import { Text } from "react-native-paper";

function RegisterBankInfoPage(props) {
    const { navigation } = props;
    const handleRegisterSecurityInfoPage = () => {
        navigation.navigate('RegisterSecurityInfoPage');
    };

return(
   
    <LinearGradient colors={["#FD6510","#FFBF43"]} 
    style={styles.gradient}  
    start={{x: 1, y: 0.5}} 
    end={{x: 0, y: 0.5}} >

    <SMImage source={NJMartLogo}  style={styles.njMartImage} /> 
{/* 
    <KeyboardAwareScrollView
  extraScrollHeight={normalize(100)}
  nestedScrollEnabled>   */}

     <SMView style={[styles.tableStyle,styles.elevation]}>

  
    
          <SMText style={styles.registerStyle}>
            Register
          </SMText>
          <SMText style={styles.mandatoryStyle}>
            *Marks Are Mandatory 
          </SMText>
          <SMText style={styles.bankInfoHeading}>
            Bank Information
          </SMText>


          <KeyboardAwareScrollView
  extraScrollHeight={normalize(100)}
  nestedScrollEnabled>  

<SMView style={styles.divStyle1}>
  
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
    </KeyboardAwareScrollView>
          </SMView>
          {/* </KeyboardAwareScrollView>    */}
      </LinearGradient>


        
    
);
}
export default RegisterBankInfoPage;