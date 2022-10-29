import 'react-native-gesture-handler';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import MainContainer from './navigations/index';
import {store} from './store';

// import {createAppContainer} from 'react-navigation';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {Dimensions} from 'react-native';

// import {Feather} from '@expo/vector-icons';
// import {ProfilePage} from './screens';

// const DrawerNavigator = createDrawerNavigator({
//   ProfilePage
// })

const customDayTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    smPrimary: '#07325f', // Brand Blue
    smSecondary: '#dbaf02', // Brand Yellow
    smTertiary: '#052B52',
    smBorder: '#707070',
    smBuySellRed: '#d31a1a',
    smBuySellGreen: '#43930d',
    smGoogleSigninButton: '#C1BEBE',
    smBackground: '#ffffff',
    smPrimaryBackground: '#07325f', // Brand Blue
    smSecondaryBackground: '#144171',
    smInnerBackground: '#07325F',
    smButtonPrimaryBackground: '#ffffff',
    smButtonPrimaryText: '#07325f', // Brand Blue
    smButtonSecondaryBackground: '#07325F', // Brand Blue
    smButtonSecondaryText: '#ffffff',
    smHeaderText: '#07325f', // Brand Blue
    smSubHeaderText: '#7F7F7F',
    smParagraphText: '#7F7F7F',
    smTitleText: '#ffffff',
    smSubtitleText: '#7F7F7F',
    smCaptionText: '#787878',
    smDisabledText: '#818181',
    smDoughNutChart: '#B2B1B1',
    smError: '#ff0033',
    smSuccess: '#2C970F',
    smWarning: '#dbaf02', // Brand Yellow
    smIconPrimaryTint: '#07325f', // Brand Blue
    smIconSecondaryTint: '#07325f', // Brand Blue
    smIconTertiaryTint: '#ffffff', // White
    smTransparent: 'transparent',
    smTransparent500: 'rgba(0,0,0,0.5)',
    smImageBackground: '#878585',
    smWhite: '#ffffff',
    smBlack: '#000000',
    smTrade: '#D9CD05',
    smCardBackground: 'rgba(0,0,0,0.16)',
    smTableAlternateGrey: '#E6E6E6', // Grey
    smInputFieldBackground: '#ffffff',
    smInputfieldplaceholder: '7F7F7F',
    smDeleteBackground: '#c2bebf',
    smCoinTableGrayBlue: '#e6e6e6',
    smCoinTableWhiteBlue: '#ffffff',
  },
};

const customNightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    smPrimary: '#07325f', // Brand Blue
    smSecondary: '#dbaf02', // Brand Yellow
    smTertiary: '#052B52',
    smBorder: '#707070',
    smBuySellRed: '#d31a1a',
    smBuySellGreen: '#43930d',
    smGoogleSigninButton: '#C1BEBE',
    smBackground: '#062D55',
    smPrimaryBackground: '#07325f', // Brand Blue
    smSecondaryBackground: '#144171',
    smInnerBackground: '#0B427B',
    smButtonPrimaryBackground: '#144F8C',
    smButtonPrimaryText: '#ffffff',
    smButtonSecondaryBackground: '#0B427B',
    smButtonSecondaryText: '#ffffff',
    smHeaderText: '#ffffff',
    smSubHeaderText: '#7F7F7F',
    smParagraphText: '#7F7F7F',
    smTitleText: '#ffffff',
    smSubtitleText: '#7F7F7F',
    smCaptionText: '#787878',
    smDisabledText: '#818181',
    smDoughNutChart: '#B2B1B1',
    smError: '#ff0033',
    smSuccess: '#2C970F',
    smWarning: '#dbaf02', // Brand Yellow
    smIconPrimaryTint: '#ffffff', // White
    smIconSecondaryTint: '#dbaf02', // Brand Yellow
    smIconTertiaryTint: '#07325f', // Brand Blue
    smTransparent: 'transparent',
    smTransparent500: 'rgba(0,0,0,0.5)',
    smImageBackground: '#878585',
    smWhite: '#ffffff',
    smBlack: '#000000',
    smTrade: '#D9CD05',
    smCardBackground: 'rgba(0,0,0,0.16)',
    smTableAlternateGrey: '#E6E6E6', // Grey
    smInputFieldBackground: '#144f8c',
    smInputfieldplaceholder: '#d31a1a',
    smDeleteBackground: '#144f8c',
    smCoinTableGrayBlue: '#154d86',
    smCoinTableWhiteBlue: '#0d417b',
  },
};

function AppWrapper(props) {
  const customThemeMode = useSelector(state => state.common.customThemeMode);

  const theme = customThemeMode ? customNightTheme : customDayTheme;
  return (
    <PaperProvider theme={theme}>
      <MainContainer />
      {/* <NoInternetModal /> */}
    </PaperProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

export default App;
