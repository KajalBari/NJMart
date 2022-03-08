import {StyleSheet} from 'react-native';
import {normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  imageStyle: {
    width: normalize(16),
    height: normalize(16),
    resizeMode: 'contain',
    marginHorizontal: normalize(10),
    marginVertical: normalize(4),
  },
});
