import React, { useEffect, useState } from 'react';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput } from '../../elements';
import {
  NJMartLogo,
  ShoppingCart,
  menu11,
  ThinCircle,
  Profile,
  Account,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import { normalize } from '../../constants/Platform';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function ProfilePage(props) {
  const { navigation } = props;
  const handleDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
   
    <KeyboardAwareScrollView
     extraScrollHeight={normalize(100)}
   nestedScrollEnabled>

  
  <SMView style={styles.containerStyle}>
   <LinearGradient colors={["#FD6510","#FFBF43"]} 
    style={styles.gradient}  
    start={{x: 1, y: 0.5}}
    end={{x: 0, y: 0.5}} >

    {/* <SMView style={styles.menuCard}>
    <SMImage source={menu11} style={styles.menuStyle} />
    </SMView> */}

  
    <SMView style={styles.iconNameStyle}>
    <SMImage source={Profile} style={styles.profileStyle} />
    <SMText style={styles.nameStylee}>Navneet Kothari</SMText>
    </SMView>
    
    <SMView style={[styles.contentRectangleStyle,styles.elevation]}>
      <SMText style={styles.profileText}>Profile</SMText>
        <SMView style={styles.lineStyle}>
        </SMView>

        <SMView style={styles.profileDetails}>

          <SMView style={styles.distributorStyle}>
          <SMText style={styles.distributorIdStyle}>Distributor Id</SMText>
            <SMText style={styles.subTitleStyle1}>NJTop</SMText>
          </SMView>
          
          <SMView style={styles.distributorStyle}>
          <SMText style={styles.nameStyle2}>Name</SMText>
            <SMText style={styles.subTitleStyle2}>Test</SMText>
          </SMView>
         
          <SMView style={styles.distributorStyle}>
              <SMText style={styles.dateStyle}>Join Date</SMText>
              <SMText style={styles.subTitleStyle3}>Mar 19 2018</SMText>
            </SMView> 

             <SMView style={styles.distributorStyle}>
              <SMText style={styles.addressStyle}>Address</SMText>
              <SMText style={styles.subTitleStyle4}>Test</SMText>
            </SMView>

            <SMView style={styles.distributorStyle}>
              <SMText style={styles.birthDateStyle}>Birth Date</SMText>
              <SMText style={styles.subTitleStyle6}>1/1/1900 12:00AM</SMText>
            </SMView>

            <SMView style={styles.ButtonStyle}>
              <SMButton
                buttonText="Edit"
                type="nextbutton"
                buttonStyle={styles.editButtonStyle}
              />
                <SMButton
                buttonText="Next"
                type="nextbutton"
                buttonStyle={styles.nextButtonStyle}
              />
              </SMView>
           
        </SMView>
     
    </SMView>

    </LinearGradient>
  </SMView>

</KeyboardAwareScrollView>
    
  );

}
export default ProfilePage;