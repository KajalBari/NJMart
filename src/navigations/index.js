import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CreateAccount,
  Login,
  Splash,
  UIElements,
  ForgotPassword,
  Profile,
  AddBankDetails,
  KYC,
  Appearance,
  Support,
  Logout,
  ChangePassword,
  ManualDeposit,
  Withdrawal,
  WalletTransactionHistory,
  DepositOptions,
  AllCoinsDeposit,
  AllCoinsWithdraw,
  QrCodeScanner,
  ExchangeOrder,
  ExchangeBuy,
  ExchangeSell,
  Notifications,
  DepositWithdrawalFees,
  ReferAndTeams,
  ReferAndEarn,
  ReferralProgram,
  AppPassCode,
  SetAppPassCode,
} from '../screens';
import {COLORS} from '../constants/Colors';
import {SMImage} from '../elements';
import {backButtonPNG, homeButtonPNG} from '../assets';
import {styles} from './styles';
import store from '../services/storageServices';
import{
  Register,
} from '../screens';

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
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
