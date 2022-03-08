import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/Colors';
import {normalize} from '../constants/Platform';

export const styles = StyleSheet.create({
  headerBackButton: {
    width: normalize(28),
    height: normalize(53),
  },
  headerRightImage: {
    width: normalize(20),
    height: normalize(20),
  },
  tabStyle: {
    position: 'absolute',
    height: normalize(65),
    borderTopRightRadius: normalize(20),
    borderTopLeftRadius: normalize(20),
  },
  tabShadow: {
    shadowColor: COLORS.SUB_COLOR_LIGHT_GREY,
    shadowOpacity: 0.25,
    shadowRadius: normalize(4),
    shadowOffset: {
      width: 0,
      height: normalize(-10),
    },
    elevation: normalize(5),
  },
  tabBarIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(15),
  },
  tabBarIconCenterView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BRAND_YELLOW,
  },
  tabBarIcon: {
    width: normalize(20),
    height: normalize(20),
    resizeMode: 'contain',
    marginTop: normalize(5),
  },
  tabBarIconCenter: {
    width: normalize(35),
    height: normalize(35),
    resizeMode: 'contain',
  },
  tabBarIconLabel: {
    fontSize: normalize(8),
    marginTop: normalize(5),
  },
  tabBarIconCenterLabel: {
    fontSize: normalize(12),
    fontWeight: '700',
    marginBottom: normalize(10),
    paddingVertical: normalize(5),
  },
  tabBarCenterLabelStyle: {
    fontSize: normalize(13),
    fontWeight: '700',
    color: COLORS.BRAND_BLUE,
  },
  customTabBarCenterButtonView: {
    top: normalize(-15),
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  customTabBarButton: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.SUB_COLOR_LIGHT_GREY,
    shadowOpacity: 0.25,
    shadowRadius: normalize(4),
    shadowOffset: {
      width: 0,
      height: normalize(10),
    },
    elevation: normalize(5),
  },
  customTabBarButtonView: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(30),
    backgroundColor: COLORS.BRAND_YELLOW,
  },
});
