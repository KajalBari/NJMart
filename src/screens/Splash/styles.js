import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {dim, normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: COLORS.WHITE,
  },
  njMartImage: {
    display:'flex',
    position:'absolute',
    width: normalize(212),
    height: normalize(550),
    margintop:normalize(100),
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
  },

  gradient:{
    height:normalize(800),
  },

  // bottomVectorImage: {
  //   position: 'absolute',
  //   bottom: normalize(-40),
  //   width: dim().width,
  //   resizeMode: 'contain',
  //   borderColor: COLORS.TRANSPARENT,
  // },
  // bottomImageText: {
  //   position: 'absolute',
  //   bottom: 0,
  //   height: normalize(60),
  //   backgroundColor: COLORS.BRAND_BLUE_1,
  //   width: dim().width,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   paddingVertical: normalize(20),
  //   borderColor: COLORS.TRANSPARENT,
  // },
  // bottomIndiaFlag: {
  //   width: normalize(30),
  //   height: normalize(30),
  // },
  // bottomText: {
  //   fontSize: normalize(14),
  //   color: COLORS.WHITE,
  //   lineHeight: normalize(16),
  // },
});
