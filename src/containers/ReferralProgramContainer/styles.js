import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {dim, normalize} from '../../constants/Platform';

const getStyles = props => {
  const {colors} = props;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.smBackground,
      borderRadius: normalize(10),
    },
    tabBarContentContainerStyle: {
      borderRadius: normalize(10),
    },
    tabBarView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      //backgroundColor: colors.smPrimaryBackground,
    },
    tabButtonStyle: {
      width: dim().width * 0.4,
      marginHorizontal: normalize(5),
      marginVertical: normalize(10),
    },
    tabButtonText: {
      fontSize: normalize(11),
      fontWeight: '600',
      color: colors.smWhite,
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
