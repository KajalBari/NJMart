import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
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
});
