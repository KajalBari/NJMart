import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: normalize(10),
    marginVertical: normalize(5),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(20),
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
  errorMessage: {
    marginVertical: normalize(10),
    fontSize: normalize(12),
    color: COLORS.ERROR,
  },
  errorMessageView: {
    alignSelf: 'center',
  },
});
