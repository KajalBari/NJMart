import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';
import {FONTS} from '../../constants/Fonts';

export const styles = StyleSheet.create({
  default: {
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    color: COLORS.BLACK,
    fontSize: normalize(22),
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    fontWeight: '500',
    color: COLORS.BLACK,
  },
  body1: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(14),
    fontWeight: '500',
    color: COLORS.BLACK,
  },

  labelText: {
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    color: COLORS.BLACK,
    fontSize: normalize(18),
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '300',
    color: COLORS.SUB_COLOR_DARK_GREY,
    fontSize: normalize(15),
  },
  timer: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    color: COLORS.BRAND_BLUE,
    fontSize: normalize(15),
  },
  subheading: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(14),
    fontWeight: '800',
    color: COLORS.BLACK,
  },
  paragraph: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(16),
    color: COLORS.BLACK,
    textAlign: 'justify',
  },
  headline: {
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: normalize(18),
    color: COLORS.BLACK,
  },
  caption: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(11),
    color: COLORS.TEXT_GREY,
  },
});
