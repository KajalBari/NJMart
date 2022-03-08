import {wrap} from 'lodash';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {dim, normalize} from '../../constants/Platform';

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
  borderStyleHighLighted: {
    borderColor: COLORS.WHITE,
  },

  otpView: {
    textAlign: 'center',
    marginTop: normalize(10),
  },

  code: {
    fontSize: normalize(11),
    fontWeight: '900',
  },

  labelText: {
    textAlign: 'center',
    fontSize: normalize(14),
    marginHorizontal: normalize(10),
    color: COLORS.BRAND_BLUE,
  },

  timerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  underlineStyleBase: {
    width: normalize(20),
    borderWidth: 0,
    borderBottomWidth: 2,
    marginBottom: normalize(10),
    fontSize: normalize(18),
    fontWeight: '600',
  },
  underlineStyleHighLighted: {
    borderColor: COLORS.WHITE,
    fontSize: normalize(18),
    fontWeight: '600',
  },
  errorMessage: {
    marginVertical: normalize(10),
    fontSize: normalize(12),
    color: COLORS.ERROR,
    alignSelf: 'center',
  },
  otpcontainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.BRAND_BLUE,
    paddingHorizontal: normalize(30),
    // marginVertical: normalize(10),
    borderRadius: normalize(40),
    color: COLORS.WHITE,
    width: '100%',
    height: normalize(50),
  },
});
