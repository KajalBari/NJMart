import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {dim, normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  doughNutChartView: {
    marginHorizontal: normalize(10),
  },
  legendMainView: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  legendView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: normalize(8),
  },
  legendBox: {
    width: normalize(6),
    height: normalize(6),
  },
  legendDivider: {
    height: 1,
    width: dim().width * 0.15,
    backgroundColor: COLORS.GOOGLE_SIGNIN_BACKGROUND,
    marginHorizontal: normalize(5),
  },
  coinTitle: {
    fontSize: normalize(12),
    fontWeight: '700',
    marginHorizontal: normalize(5),
  },
  currencyText: {
    fontSize: normalize(10),
    fontWeight: '600',
    color: COLORS.TEXT_GREY,
  },
});
