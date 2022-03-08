import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {dim, normalize} from '../../constants/Platform';

const getStyles = props => {
  const {colors} = props;
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: colors.smPrimaryBackground,
      borderTopRightRadius: normalize(30),
      borderTopLeftRadius: normalize(30),
      maxHeight: dim().height * 0.55,
    },
    flatlist: {
      marginTop: normalize(30),
    },
    keyboardKey: {
      width: dim().width * 0.3333,
      height: normalize(80),
      justifyContent: 'center',
      alignItems: 'center',
    },
    keyText: {
      fontSize: normalize(18),
      fontWeight: '500',
      color: colors.smTitleText,
    },
    backspaceIcon: {
      color: colors.smTitleText,
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
