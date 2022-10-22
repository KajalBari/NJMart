import React, {useEffect, useState} from 'react';
import {SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput} from '../../elements';
import {
    NJMartLogo,
  } from '../../assets';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native';

// const [text, onChangeText] = React.useState(null);

// const handleChange = event =>{
//   const result = event.target.value('');
//   setMessage(result);
// };

function Register(props) {
    const {navigation} = props;
    const handleRegisterPersonalPage = () => {
      navigation.navigate('RegisterPersonalPage');
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
          <SMText style={styles.mandatoryStyle}>
            *Marks Are Mandatory 
          </SMText>
          <SMText style={styles.sponsorHeading}>
              Sponsor Information 
          </SMText>

           <SMTextInput 
          style={styles.sponsorId}  
          placeholder={"Sponsor ID*"}
          />
          {/* onChangeText={(e)=>{console.warn(e)}}
          onChangeText={(e)=>{this.styles({sponserid:e})}} */}
         
          <SMTextInput 
          style={styles.sponsorName}  
          placeholder={"Sponsor Name"}
          />

        <SMTextInput 
          style={styles.positionStyle}  
          placeholder={"Your Position"}
          />
          
          <SMButton
          buttonText="Next"
          type="nextbutton"
          buttonStyle={[styles.nextButtonStyle]}
          onPress={handleRegisterPersonalPage}
          />   
          </SMView>  
     
          </LinearGradient>

);

}

export default Register;