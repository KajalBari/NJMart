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

import { normalize } from '../../constants/Platform';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function Downlines(props) {
  const { navigation } = props;
  const handleProfileMenuBar = () => {
    navigation.navigate('ProfileMenuBar');
  };

  return (

    <KeyboardAwareScrollView
        // extraScrollHeight={normalize(80)}
        nestedScrollEnabled>

        
    <SMView style={styles.containerStyle}>
      <LinearGradient colors={["#FD6510", "#FFBF43"]}
        style={styles.gradient}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }} >


        <TouchableOpacity  onPress={() => navigation.navigate('ProfilePage', { name: 'ProfilePage' })}>
        <SMView style={styles.headerStyle}>
          <SMImage source={arrow} style={styles.arrowStyle} />
        </SMView>
        </TouchableOpacity>

        <SMView style={styles.iconNameStyle}>
          <SMImage source={Profile} style={styles.profileStyle} />
          <SMText style={styles.nameStylee}>Navneet Kothari</SMText>
        </SMView>

        <SMView style={[styles.contentRectangleStyle, styles.elevation]}>
          <SMText style={styles.downlineText}>Downlines</SMText>
          <SMView style={styles.lineStyle}>
          </SMView>

          <SMView style={styles.downlineDetails}>

            <SMView style={styles.downlineStucture}>
              <SMView style={styles.rectangleStyle}>
                <SMText style={styles.genalogyText}>Genealogy</SMText>
              </SMView>
            </SMView>

            <SMView style={styles.downlineStucture}>
              <SMView style={styles.rectangleStyle}>
                <SMText style={styles.treeStructureText}>Tree Structure</SMText>
              </SMView>
            </SMView>

            <SMView style={styles.downlineStucture}>
              <SMView style={styles.rectangleStyle}>
                <SMText style={styles.directStyle}>Directs</SMText>
              </SMView>

              <SMView style={styles.downlineStucture}>
                <SMView style={styles.rectangleStyle}>
                  <SMText style={styles.headCountStyle}>Head Count</SMText>
                </SMView>
              </SMView>

              <SMView style={styles.downlineStucture}>
                <SMView style={styles.rectangleStyle}>
                  <SMText style={styles.businessStyle}>Business Count</SMText>
                </SMView>
              </SMView>

              <SMView style={styles.downlineStucture}>
                <SMView style={styles.rectangleStyle}>
                  <SMText style={styles.directTreeStyle}>Direct Tree</SMText>
                </SMView>
              </SMView>

              <SMButton
                  buttonText="Next"
                  type="nextbutton"
                  buttonStyle={styles.nextButtonStyle}
                  onPress={handleProfileMenuBar}
              />  

            </SMView>
          </SMView>
        </SMView>

      </LinearGradient>
    </SMView>
    </KeyboardAwareScrollView>
  );
}
export default Downlines;