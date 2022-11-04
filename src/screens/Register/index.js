import React, {useEffect, useState} from 'react';
import {SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput, SMCheckBox} from '../../elements';
import {
    NJMartLogo,
  } from '../../assets';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
// import { CheckBox } from 'react-native';
import { normalize } from '../../constants/Platform';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native'

function Register(props) {
    const {navigation} = props;
    const handleRegisterPersonalPage = () => {
      navigation.navigate('RegisterPersonalPage');
    };

    const [pos,setPos] = useState("")

return( 

  <SMView style={styles.containerStyle}>

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

          <SMView style={styles.sponsorFields}>

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

          <SMView style={styles.containerRadio}>
            <SMText style={styles.textPos}>Your Position</SMText>

            <SMView style={styles.Wrapper}>
              {['Left','Right'].map(position=>
             <SMView key={position} style={styles.pos}>
              <SMText style={styles.position1}>{position}</SMText>

            <TouchableOpacity style={styles.outer}
            onPress={()=>setPos(position)}>
              {pos === position  &&<SMView style={styles.inner}/>}
            </TouchableOpacity>
            </SMView>
            )}
            </SMView>
          </SMView>




{/* 
        <SMTextInput 
          style={styles.positionStyle}  
          placeholder={"Your Position"}
        /> */}



          <SMButton
          buttonText="Next"
          type="nextbutton"
          buttonStyle={styles.nextButtonStyle}
          onPress={handleRegisterPersonalPage}
          />  

          </SMView>
          </SMView>  
     
          </LinearGradient>
          </SMView>

         
);

}

export default Register;