import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Splash,
  PrivateandSecure,
  Home,
  AssetPalce,
  Exploreapp,
  Tradeasset,
  Secretphase,
  VerifySecretPhase, 
  BackupWallet,
  SendCoin,
  TransferCoin,
  BuyCoin,
  SwapCoin,
  History,
  Browser,
} from '../screens';
import {COLORS} from '../constants/Colors';
import {SMImage} from '../elements';
import {backButtonPNG, homeButtonPNG} from '../assets';
import {styles} from './styles';
import store from '../services/storageServices';
import {
    Register,
    ProfilePage,
}from '../screens';

import {createDrawerNavigator} from 'react-navigation-drawer';

const Stack = createNativeStackNavigator();

export default function MainContainer(props) {
  const {navigation} = props;
  useEffect(() => {
    getUserData();
  }, []);

  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    const userDataObj = await store.get('userData');
    setUserData(userDataObj);
  };


  const DrawerNavigator = createDrawerNavigator({
    ProfilePage
  })


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerBackTitle: '',
          headerTintColor: COLORS.BRAND_BLUE,
          headerBackImageSource: backButtonPNG,
          headerRight: () => (
            <SMImage source={homeButtonPNG} style={styles.headerRightImage} />
          ),
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerTitle: '', gestureEnabled: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerTitle: '', gestureEnabled: false}}
        />
    
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{headerTitle: '', gestureEnabled: false}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

