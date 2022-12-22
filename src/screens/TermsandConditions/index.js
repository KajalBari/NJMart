import React, {useEffect, useState} from 'react';
import {SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox,SMSnackBar} from '../../elements';
import {
    NJMartLogo,
  } from '../../assets';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Checkbox } from 'react-native-paper';
import {termsConditionValidator} from './termsConditionValidator';
import {normalize} from '../../constants/Platform';
//import CheckBox from '@react-native-community/checkbox';

function TermsandConditions(props) {
    const {navigation} = props;

    const [termsConditionState, setTermsConditionState] = useState({
      termsAndConditions: false,
    })

    const [errorMessageObj, seterrorMessageObj] = useState({
      valid: false,
    });

    const clearErrorMessageObj = () => {
      seterrorMessageObj({
        valid: false,
      });
    };

    const handleOnChange = (key, value) => {
      setTermsConditionState({
        ...termsConditionState,
        [key]: value,
      });
    };
  

    const handleLoginPage = () => {
      const validatedData  = termsConditionValidator({...termsConditionState});
    if (validatedData.valid) {
      clearErrorMessageObj();
      navigation.navigate('Dashboard');
    } else {
      seterrorMessageObj({ ...validatedData });
    }
  };
      //navigation.navigate('LoginPage');
  

    // const [isSelected, setSelection] = useState(false)

   // const [checked, setChecked] = React.useState(false);

return(

    <SMView style={styles.containerStyle}>

    <LinearGradient colors={["#FD6510","#FFBF43"]} 
    style={styles.gradient}  
    start={{x: 1, y: 0.5}} 
    end={{x: 0, y: 0.5}} >


    <SMImage source={NJMartLogo}  style={styles.njMartImage} />   
    </LinearGradient>
     <SMView style={[styles.tableStyle,styles.elevation]}>

          <SMText style={styles.registerStyle}>
            Register 
          </SMText>
          <SMText style={styles.termsAndConditionStyle}>
              Terms And Conditions
          </SMText>

        <SMView style={styles.divStyle}> 

          {/* <Checkbox 
           status={checked ? 'checked' : 'unchecked'}
           onPress={() => {
              setChecked(!checked);
           }}
           color={'grey'}
           uncheckColor={'white'}
           style={styles.checkboxStyle}
           />
          
          <SMText style={styles.termsStyle}>
              Please accept Terms
              and Condition before Proceed
           </SMText>  */}

        <SMCheckBox
            label="Please accept Terms
            and Condition before Proceed"
            labelStyle={styles.termsAndConditionsLabel}
            //style={styles.rememberMeCheckBox}
            isSelected={termsConditionState.termsAndConditions}
            onSelection={() => {
              handleOnChange(
                'termsAndConditions',
                !termsConditionState.termsAndConditions,
              );
            }}
            checkBoxStyle={styles.termsAndConditionsCheckBox}
            checkboxIconSize={normalize(20)}
          />

{errorMessageObj?.termsAndConditions && (
            <SMSnackBar
              visible={!!errorMessageObj.termsAndConditions}
              onDismiss={() => {
                seterrorMessageObj({
                  ...errorMessageObj,
                  termsAndConditions: null,
                });
              }}
              actionLabel="CLOSE"
              onActionPress={() => {
                seterrorMessageObj({
                  ...errorMessageObj,
                  termsAndConditions: null,
                });
              }}>
              {errorMessageObj?.termsAndConditions}
            </SMSnackBar>
          )}

        </SMView>
          <SMButton
          buttonText="Submit"
          type="nextbutton"
          buttonStyle={styles.submitButtonStyle}
         // onPress={handleDashboard}
         onPress={handleLoginPage}
          /> 
         
     </SMView>
         
          </SMView>
);
}
export default TermsandConditions;