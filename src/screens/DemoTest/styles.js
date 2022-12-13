import React, { useMemo } from 'react';
import { useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { dim, normalize } from '../../constants/Platform';

const getStyles = props => {
  const { colors } = props;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.smInnerBackground,
      marginHorizontal: normalize(15),
      marginVertical: normalize(15),
      paddingHorizontal: normalize(21),
      paddingVertical: normalize(15),
      borderRadius: 12,
    },
    panContainer: {
      paddingHorizontal: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addressContainer: {
      flex: 1,
      backgroundColor: colors.smInnerBackground,
      marginHorizontal: normalize(15),
      marginVertical: normalize(15),
      paddingVertical: normalize(15),
      borderRadius: 12,
      paddingHorizontal: normalize(15),
    },
    panTextView: {
      flexDirection: 'row',
      marginLeft: normalize(20),
      alignSelf: 'flex-start',
    },
    HeaderText: {
      color: colors.smHeaderText,
      marginVertical: normalize(10),
      fontSize: normalize(24),
      fontWeight: '600',
      textAlign: 'center',
    },
    spanyellow: {
      color: '#dbaf02',
      fontSize: normalize(20),
      paddingBottom: 10,
    },
    smalltext: {
      color: COLORS.WHITE,
      fontSize: normalize(12),
      fontWeight: '400',
    },
    textcenter: {
      textAlign: 'center',
    },
    pancardButton: {
      width: dim().width * 0.8,
      color: '#07325f',
      backgroundColor: COLORS.WHITE,
      height: normalize(40),
      marginHorizontal: normalize(20),
    },
    panInputTextStyle: {
      width: dim().width * 0.8,
      height: normalize(42),
      paddingLeft: normalize(20),
      color: colors.smInnerBackground,
      backgroundColor: colors.smInnerBackground,
      fontWeight: 700,
    },
    addressRow: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    frontBackImageRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    addressHeader: {
      marginHorizontal: normalize(5),
      color: COLORS.WHITE,
      fontSize: normalize(14),
      fontWeight: '500',
    },
    kycContainerStyle: {
      width: dim().width * 0.4,
    },
    kycStyle: {
      width: dim().width * 0.4,
      height: normalize(35),
      // backgroundColor: colors.smInputFieldBackground,
    },
    innerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    fileLabelText: {
      color: COLORS.WHITE,
      marginLeft: normalize(13),
    },
    kycPlaceholderStyle: {
      fontSize: normalize(14),
      fontWeight: '500',
      textAlign: 'center',
    },
    kycTextStyle: {
      fontSize: normalize(14),
      fontWeight: '500',
      textAlign: 'center',
      color: colors.smButtonPrimaryText,
    },
    pickerZindex: {
      zIndex: 100,
    },
    kycDropDownContainer: {
      width: dim().width * 0.4,
      color:'white',
    },

    addressProofStyle: {
      justifyContent: 'flex-start',
      fontSize: normalize(15),
      fontWeight: '700',
      width: normalize(170),
      margin: 0,
      padding: 0,
    },
    addressProofContainerStyle: {
      color: COLORS.BRAND_BLUE,
    },
    addressProofLabelStyle: {
      color: COLORS.BRAND_BLUE,
    },
    addressProofTextStyle: {
      paddingLeft: normalize(20),
      fontSize: normalize(15),
      fontWeight: '700',
    },
    addressProofDDContainerStyle: {
      width: normalize(170),
      color: COLORS.BRAND_BLUE,
    },
    cameraPNG: {
      width: normalize(20),
      height: normalize(20),
      resizeMode: 'contain',
      paddingRight: 40,
      tintColor: colors.smHeaderText,
    },
    smallcameraPNG: {
      width: normalize(15),
      height: normalize(15),
      marginRight: normalize(5),
      resizeMode: 'contain',
      tintColor: colors.smHeaderText,
    },
    smallButtonStyle: {},
    addFrontBackImageProofStyle: {
      color: COLORS.BRAND_YELLOW,
      backgroundColor: COLORS.WHITE,
      width: dim().width * 0.37,
      paddingRight: 1,
      marginBottom: normalize(10),
      height: normalize(35),
    },
    idProofButtonStyle: {
      color: COLORS.BRAND_YELLOW,
      backgroundColor: COLORS.WHITE,
      height: normalize(40),
      marginBottom: normalize(10),
    },
    submitButtonStyle: {
      width: dim().width * 0.4,
      height: normalize(40),
      marginLeft: dim().width * 0.25,
    },
    submitButtonText: {
      fontSize: normalize(14),
      fontWeight: '500',
    },
    cameraMainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.smButtonPrimaryBackground,
      elevation: normalize(10),
      width: dim().width * 0.78,
      height: normalize(40),
      borderRadius: normalize(8),
      marginVertical: normalize(10),
      borderWidth: 1,
      borderColor: colors.smButtonPrimaryBackground,
      borderRadius: normalize(25),
    },
    smallcameraMainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.WHITE,
      elevation: normalize(10),
      width: dim().width * 0.38,
      height: normalize(40),
      borderRadius: normalize(8),
      marginVertical: normalize(10),
      borderWidth: 1,
      borderColor: COLORS.BRAND_BLUE,
      borderRadius: normalize(25),
      borderColor: colors.smButtonPrimaryBackground,
      backgroundColor: colors.smButtonPrimaryBackground,
    },

    frontImageButton: {
      alignSelf: 'center',
      width: dim().width * 0.4,
    },
    backImageButton: {
      alignSelf: 'center',
      width: dim().width * 0.4,
    },
    cameraBigConatiner: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.WHITE,
      elevation: normalize(10),
      width: dim().width * 0.8,
      height: normalize(40),
      borderRadius: normalize(8),
      marginVertical: normalize(10),
      borderWidth: 1,
      borderColor: COLORS.BRAND_BLUE,
      borderRadius: normalize(25),
    },
    iconTextStyle: {
      fontSize: normalize(11),
      color: colors.smButtonPrimaryText,
    },
    iconBigTextStyle: {
      fontSize: normalize(14),
    },
    errorMessage: {
      marginVertical: normalize(10),
      fontSize: normalize(12),
      color: COLORS.ERROR,
    },
    calendarStyle: {
      width: dim().width * 0.8,
      height: normalize(50),
      marginVertical: normalize(10),
      backgroundColor: colors.smInputFieldBackground,
      borderColor: colors.smInputFieldBackground,
    },
    inputtextplaceholder: {
      color: 'red',
    },
    textInputStyle: {
      width: dim().width * 0.78,
      height: normalize(50),
      backgroundColor: colors.smInputFieldBackground,
    },
    placeholdertext: {
      color: 'red',
    },
    inputStyle: {
      backgroundColor: colors.smInputFieldBackground,
      color: colors.smHeaderText,
      fontSize: normalize(12),
      fontWeight: '500',
    },
    imageLabelView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: dim().width * 0.8,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    addPanCard: {
      color: colors.smButtonPrimaryText,
    },
    photoIdProof: {
      color: colors.smButtonPrimaryText,
    },
  });
};

function useStyles() {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles({ colors }), [colors]);
  return styles;
}

export default useStyles;