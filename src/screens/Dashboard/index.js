import React, { useEffect, useState } from 'react';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput } from '../../elements';
import {
  NJMartLogo,
  ShoppingCart,
  menu11,
  ThinCircle,
  Profile,
  Account,
  shopping,
  Reward,
  Files,
  Downline,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { normalize } from '../../constants/Platform';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {TouchableOpacity} from 'react-native';

function Dashboard(props) {
  const { navigation } = props;
  const handleProfilePage = () => {
    navigation.navigate('ProfilePage');
  };

  return (
    <KeyboardAwareScrollView
        //extraScrollHeight={normalize(80)}
        nestedScrollEnabled>


    <SMView style={styles.container}>

      <SMView style={styles.headerStyle}>

      <SMView style={styles.ellipseStyle}>
        <SMImage source={ShoppingCart} style={styles.shoppingCartStyle} />
        </SMView>
     
        <TouchableOpacity onPress={() => navigation.navigate('MenubarNavigation', { name: 'MenubarNavigation' })}>
        <SMImage source={menu11} style={styles.menuStyle} />
        </TouchableOpacity>
{/* 
        <SMImage source={menu11} style={styles.menuStyle} /> */}
        </SMView>
     
      <SMView style={styles.profileDivStyle}>
        <SMImage source={Profile} style={styles.profileStyle} />
        <SMText style={styles.nameStyle}>Navneet Kothari</SMText>
      </SMView>

      <LinearGradient colors={["#FD6510", "#FFBF43"]}
        style={styles.gradient}
        // percentage={["0%","100%"]}  
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }} >

        <SMView style={styles.RectanglesStyle}>

          <SMView style={[styles.rectangle1, styles.elevation]}>
            <SMText style={styles.memberNumberStyle}>10</SMText>
            <SMText style={styles.memberStyle}>Members</SMText>
          </SMView>

          <SMView style={[styles.rectangle2, styles.elevation]}>
            <SMText style={styles.memberNumberStyle}>10K</SMText>
            <SMText style={styles.memberStyle}>Earnings</SMText>
          </SMView>

          <SMView style={[styles.rectangle3, styles.elevation]}>
            <SMText style={styles.memberNumberStyle}>10</SMText>
            <SMText style={styles.memberStyle}>Level</SMText>
          </SMView>
        </SMView>
      </LinearGradient>

    {/* <SMView style={styles.divStyle}> */}

     <SMView style={styles.contentRectangleStyle}> 
     
      <TouchableOpacity onPress={handleProfilePage}>
       <SMView  style={[styles.profileContent, styles.elevation]}>
          <SMImage source={Profile} style={styles.profileImageStyle} />
          <SMText style={styles.profileTextStyle}>Profile</SMText>
        </SMView>
        </TouchableOpacity>

       
        <SMView style={[styles.accountContent, styles.elevation]}>
          <SMImage source={Account} style={styles.accountImageStyle} />
          <SMText style={styles.accountTextStyle}>Account</SMText>
        </SMView>
        
        <TouchableOpacity onPress={() => navigation.navigate('Downlines', { name: 'Downlines' })}>
        <SMView style={[styles.downlineContent, styles.elevation]}>
        <SMImage source={Downline} style={styles.profileImageStyle} />
          <SMText style={styles.downlineTextStyle}>Downline</SMText>
        </SMView>
        </TouchableOpacity>
    
        <SMView style={[styles.shoppingContent, styles.elevation]}>
        <SMImage source={shopping} style={styles.accountImageStyle} />
          <SMText style={styles.shoppingTextStyle}>Shopping</SMText>
        </SMView>

        <SMView style={[styles.rewardContent, styles.elevation]}>
        <SMImage source={Reward} style={styles.profileImageStyle} />
          <SMText style={styles.rewardTextStyle}>Rewards</SMText>
        </SMView> 
      
         <SMView style={[styles.filesContent, styles.elevation]}>
        <SMImage source={Files} style={styles.accountImageStyle} />
          <SMText style={styles.filesTextStyle}>Files</SMText>
        </SMView>   
      </SMView>
      </SMView>
              
      </KeyboardAwareScrollView>
  );
}
export default Dashboard;
