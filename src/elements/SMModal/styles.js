import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  defaultleftIconStyle: {
    alignItems: 'center',
    marginRight: normalize(5),
  },
  defaultButtonTextStyle: {
    fontSize: normalize(14),
  },
  defaultButtonSubtitleStyle: {
    fontSize: normalize(14),
  },
  defaultrightIconStyle: {
    color: COLORS.WHITE,
    alignItems: 'center',
  },
  defaultLoaderStyle: {
    marginLeft: normalize(15),
  },
  defaultContainerStyle: {
    backgroundColor: COLORS.WHITE,
    padding: normalize(70),
  },
});
