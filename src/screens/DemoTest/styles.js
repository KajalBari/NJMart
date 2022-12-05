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
      alignItems: 'center',
      backgroundColor: colors.smBackground,
      marginBottom: normalize(50),
    },
    addBankDetailsText: {
      fontSize: normalize(20),
      fontWeight: '600',
      color: colors.smHeaderText,
      marginBottom: normalize(20),
    },
    instructionsView: {
      backgroundColor: colors.smInnerBackground,
      width: dim().width * 0.9,
      borderRadius: normalize(8),
      padding: normalize(15),
    },
    instructionTitle: {
      color: COLORS.BRAND_YELLOW,
      fontSize: normalize(14),
      fontWeight: '600',
    },
    instructionsText: {
      fontSize: normalize(13),
      color: COLORS.WHITE,
    },
    warningText: {
      fontSize: normalize(13),
      color: COLORS.BRAND_YELLOW,
    },
    addBankDetailsView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.smInnerBackground,
      margin: normalize(10),
      width: dim().width * 0.9,
      padding: normalize(10),
      borderRadius: normalize(8),
      zIndex: 100,
    },
    innerViewTitle: {
      fontSize: normalize(14),
      fontWeight: '600',
      color: COLORS.WHITE,
      alignSelf: 'flex-start',
      marginLeft: normalize(20),
      marginBottom: normalize(15),
    },
    textInputStyle: {
      width: dim().width * 0.78,
      height: normalize(50),
      backgroundColor: colors.smInputFieldBackground,
    },
    inputStyle: {
      color: colors.smHeaderText,
      fontSize: normalize(12),
      fontWeight: '600',
      backgroundColor: colors.smInputFieldBackground,
    },
    accountTypeView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    accountTypeText: {
      fontSize: normalize(13),
      fontWeight: '600',
      color: COLORS.WHITE,
      marginHorizontal: normalize(10),
    },
    accountTypeContainerStyle: {
      width: normalize(120),
    },
    accountTypeStyle: {
      width: normalize(120),
      height: normalize(35),
    },
    accountTypePlaceholderStyle: {
      fontSize: normalize(14),
      fontWeight: '500',
      textAlign: 'center',
    },
    accountTypeTextStyle: {
      fontSize: normalize(14),
      fontWeight: '500',
      textAlign: 'center',
    },
    submitButton: {
      width: normalize(140),
      height: normalize(50),
      marginVertical: normalize(20),
    },
    submitButtonText: {
      fontSize: normalize(18),
      fontWeight: '600',
    },
  });
};

function useStyles() {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles({ colors }), [colors]);
  return styles;
}

export default useStyles;