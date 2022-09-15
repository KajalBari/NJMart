import React, {useEffect, useState} from 'react';
import {SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput} from '../../elements';
import {
    NJMartLogo,
  } from '../../assets';
import {styles} from './styles';



function Register(props) {
    const {navigation} = props;
    const handleAssetplace = () => {
      navigation.navigate('AssetPalce');
    };

return(
    <SMView style={styles.Container1}> 
    <SMImage source={NJMartLogo}  style={styles.njMartImage} />   
     <SMView style={styles.tableStyle}>
    
          <SMText style={styles.registerStyle}>
            Register
          </SMText>
          <SMText style={styles.mandatoryStyle}>
            *Marks Are Mandatory 
          </SMText>
          <SMText style={styles.sponsorHeading}>
              Sponsor Information*
          </SMText>

          <SMText style={styles.sponsorId}>
              Sponsor ID*
          </SMText>
          <SMText style={styles.sponsorName}>
              Sponsor Name
          </SMText>
          <SMText style={styles.positionStyle}>
              Your Position
          </SMText>

          <SMButton
          buttonText="Next"
          type="nextbutton"
          buttonStyle={styles.nextButtonStyle}
          />     
      </SMView>

        
    </SMView>


  

);
}

export default Register;