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
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { normalize } from '../../constants/Platform';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

 import {SafeAreaView,TouchableOpacity} from 'react-native';
 import {FontAwesome5} from '@expo/vector-icons';

function Dashboard(props) {
  const { navigation } = props;
  const handleProfilePage = () => {
    navigation.navigate('ProfilePage');
  };


  return (
    <KeyboardAwareScrollView
  extraScrollHeight={normalize(200)}
  nestedScrollEnabled> 
    
    <SMView style={styles.container}>
      <SMView style={styles.ellipseStyle}>
       
      

        <SMImage source={ShoppingCart} style={styles.shoppingCartStyle} />
{/*       
        <TouchableOpacity style={{alignItems:'flex-end',margin:16}} 
        onPress={this.props.navigation.openDrawer}>
          <FontAwesome5 name="bars" size={24} color="#161924"/>
        </TouchableOpacity>

        <SMView style={{flex:1,alignItems:"center",justifyContent:"center"}}>
          <SMText style={styles.text}>{this.props.name}Screen</SMText>
        </SMView> */}
        
        <TouchableOpacity>
        <SMImage source={menu11} style={styles.menuStyle} />
        </TouchableOpacity>
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

     <SMView style={styles.contentRectangleStyle}> 

      
      <TouchableOpacity onPress={handleProfilePage}>
       <SMView  style={[styles.profileContent, styles.elevation]}>
          <SMImage source={Profile} style={styles.profileContentStyle} />
          <SMText style={styles.profileTextStyle}>Profile</SMText>
        </SMView>
        </TouchableOpacity>

        <TouchableOpacity>
        <SMView style={[styles.accountContent, styles.elevation]}>
          <SMImage source={Account} style={styles.accountImageStyle} />
          <SMText style={styles.accountTextStyle}>Account</SMText>
        </SMView>
        </TouchableOpacity>

   
        <SMView style={[styles.profileContent1, styles.elevation]}>
        <SMImage source={Profile} style={styles.profileContentStyle} />
          <SMText style={styles.profileTextStyle}>Downline</SMText>
        </SMView>
     
       
        <SMView style={[styles.profileContent2, styles.elevation]}>
        <SMImage source={Account} style={styles.accountImageStyle} />
          <SMText style={styles.accountTextStyle}>Shopping</SMText>
        </SMView>
     
          
      </SMView>
      {/* </KeyboardAwareScrollView> */}

      </SMView>
      </KeyboardAwareScrollView>
    
  );
}
export default Dashboard;
