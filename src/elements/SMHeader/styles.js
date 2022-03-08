import React, {useMemo} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {
  normalize,
  AppBarHeight,
  StatusBarHeight,
} from '../../constants/Platform';

const getStyles = props => {
  const {colors} = props;
  return StyleSheet.create({
    title: {
      fontWeight: 'bold',
      color: colors.smTitleText,
      marginHorizontal: normalize(10),
    },
    titlecontainer: {
      flex: 1,
    },
    subTitle: {
      lineHeight: normalize(12),
      marginHorizontal: normalize(10),
    },
    container: {
      alignSelf: 'stretch',
      height: AppBarHeight() + StatusBarHeight(),
      paddingTop: Platform.OS === 'ios' ? normalize(24) : 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.smBackground,
    },
    innerContainer: {
      flex: 0.15,
      alignItems: 'flex-start',
      marginRight: normalize(20),
      marginLeft: normalize(10),
    },
    backButton: {
      tintColor: colors.smIconPrimaryTint,
      width: normalize(20),
      height: normalize(20),
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: normalize(10),
    },
    profileHeaderIcon: {
      tintColor: colors.smIconPrimaryTint,
      width: normalize(20),
      height: normalize(20),
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: normalize(10),
    },
    searchButton: {
      tintColor: colors.smIconPrimaryTint,
      width: normalize(20),
      height: normalize(20),
      marginHorizontal: normalize(10),
      resizeMode: 'contain',
    },
    homeButton: {
      tintColor: colors.smIconPrimaryTint,
      width: normalize(20),
      height: normalize(20),
      marginHorizontal: normalize(10),
      resizeMode: 'contain',
    },
    newsHeaderIcon: {
      tintColor: colors.smIconPrimaryTint,
      width: normalize(20),
      height: normalize(20),
      marginHorizontal: normalize(10),
      resizeMode: 'contain',
    },
    rightView: {
      flex: 0.5,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: colors.smTransparent,
    },
  });
};

function useStyles() {
  const {colors} = useTheme();

  // We only want to recompute the stylesheet on changes in color.
  const styles = useMemo(() => getStyles({colors}), [colors]);

  return styles;
}

export default useStyles;
