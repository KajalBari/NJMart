import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CreateAccount,
  Login,
  Splash,
  Register,
  RegisterPersonalPage,
  RegisterContactPage,
  RegisterNomineePage,
  RegisterBankInfoPage,
  RegisterSecurityInfoPage,
  TermsandConditions,
  LoginPage,
  Dashboard,
  ProfilePage,
  Downlines,
  ProfileMenuBar,
  ProfileEdit,
  MenubarNavigation,
  ForgetPassword,
} from '../screens';
import {COLORS} from '../constants/Colors';
import {SMImage} from '../elements';
import {backButtonPNG, homeButtonPNG} from '../assets';
import {styles} from './styles';
import store from '../services/storageServices';


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

        <Stack.Screen
          name="RegisterPersonalPage"
          component={RegisterPersonalPage}
          options={{headerTitle: '', gestureEnabled: false}}
        />

        <Stack.Screen
          name="RegisterContactPage"
          component={RegisterContactPage}
          options={{headerTitle: '', gestureEnabled: false}}
        />

        <Stack.Screen
          name="RegisterNomineePage"
          component={RegisterNomineePage}
          options={{headerTitle: '', gestureEnabled: false}}
        />

        <Stack.Screen
          name="RegisterBankInfoPage"
          component={RegisterBankInfoPage}
          options={{headerTitle: '', gestureEnabled: false}}
        />

        <Stack.Screen
          name="RegisterSecurityInfoPage"
          component={RegisterSecurityInfoPage}
          options={{headerTitle: '', gestureEnabled: false}}
        />

        <Stack.Screen
          name="TermsandConditions"
          component={TermsandConditions}
          options={{headerTitle: '', gestureEnabled: false}}
        />

        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerTitle: '', gestureEnabled: false}}
        />
        
        <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerTitle:'',gestureEnabled:false}}
        />
   
        <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{headerTitle:'',gestureEnabled:false}}
        />

      <Stack.Screen
        name="Downlines"
        component={Downlines}
        options={{headerTitle:'',gestureEnabled:false}}
        />

      <Stack.Screen
        name="ProfileMenuBar"
        component={ProfileMenuBar}
        options={{headerTitle:'',gestureEnabled:false}}
        />

        <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{headerTitle:'',gestureEnabled:false}}
        />
        
        <Stack.Screen
        name="MenubarNavigation"
        component={MenubarNavigation}
        options={{headerTitle:'',gestureEnabled:false}}
        />
        
        <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{headerTitle:'',gestureEnabled:false}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
