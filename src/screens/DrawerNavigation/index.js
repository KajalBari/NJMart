import React, { useEffect, useState } from 'react';
import { SMText, SMView, SMImage, SMContainer, SMButton, SMTextInput } from '../../elements';
import {
  NJMartLogo,
  ShoppingCart,
  menu11,
  ThinCircle,
  Profile,
  Account,
  arrow,
} from '../../assets';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'




// const appNavigator = createDrawerNavigator({
//      DrawerNavigation:{
//        screen:DrawerNavigation
//      }
//    })
   
function DrawerNavigation(props) {
  
  return(
    <SMView style={{alignItems:"center",justifyContent:'center',flex:1}}>
      <SMText style={{fontSize:20}}>
        DrawerNavigation
      </SMText>
    <SMButton  buttonText="open" onPress={() =>props.navigation.Downlines()}/>
    </SMView>
  );
  }

// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function DrawerNavigation() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }


export default DrawerNavigation;