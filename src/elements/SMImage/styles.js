import {StyleSheet} from 'react-native';
import {normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  defaultStyle: {
    height: normalize(150),
    width: normalize(150),
    alignSelf: 'center',
  },
});
