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
    },
    loader: {
      marginTop: dim().height * 0.4,
    },
    notificationBannerView: {
      flexDirection: 'column',
    },
    notificationBody: {
      fontSize: normalize(18),
      fontWeight: '600',
      color: colors.smHeaderText,
    },
    notificationTitle: {
      fontSize: normalize(14),
      fontWeight: 'normal',
      color: colors.smHeaderText,
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
