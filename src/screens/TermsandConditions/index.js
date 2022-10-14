import React, {useEffect, useState} from 'react';
import {SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox} from '../../elements';
import {
    NJMartLogo,
  } from '../../assets';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';


function TermsandConditions(props) {
    const {navigation} = props;
    const handleLoginPage = () => {
      navigation.navigate('LoginPage');
    };

return(

    <LinearGradient colors={["#FD6510","#FFBF43"]} 
    style={styles.gradient}  
    start={{x: 1, y: 0.5}} 
    end={{x: 0, y: 0.5}} >
    
    <SMImage source={NJMartLogo}  style={styles.njMartImage} />   
     <SMView style={[styles.tableStyle,styles.elevation]}>
    
          <SMText style={styles.registerStyle}>
            Register 
          </SMText>
          <SMText style={styles.termsAndConditionStyle}>
              Terms And Conditions
          </SMText>

        <SMView style={styles.divStyle}> 
          <SMCheckBox 
           style={styles.checkboxStyle}/>
          <SMText style={styles.termsStyle}>
          Please accept Terms
              and Condition before Proceed.
           </SMText>  
        </SMView>
          <SMButton
          buttonText="Submit"
          type="nextbutton"
          buttonStyle={styles.submitButtonStyle}
          onPress={handleLoginPage}
          />  
          </SMView>  
     
          </LinearGradient>
);
}
export default TermsandConditions;