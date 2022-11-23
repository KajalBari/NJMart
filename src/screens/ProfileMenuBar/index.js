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

function ProfileMenuBar(props) {
  const { navigation } = props;
  const handleDownlines = () => {
    navigation.navigate('Downlines');
  };

return(
<SMView >
  <SMText>Kajal</SMText>
</SMView>
);
}
export default ProfileMenuBar;