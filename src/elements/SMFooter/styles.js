import {StyleSheet, Platform} from 'react-native';
import {
  AppBarHeight,
  StatusBarHeight,
  normalize,
} from '../../constants/Platform';

export const styles = StyleSheet.create({
  container: {
    height: AppBarHeight() + StatusBarHeight(),
    paddingTop: Platform.OS === 'ios' ? normalize(24) : 0,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
