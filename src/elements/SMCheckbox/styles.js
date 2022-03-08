import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxSelected: {
    width: normalize(16),
    height: normalize(16),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BRAND_BLUE,
  },
  checkbox: {
    color: COLORS.WHITE,
  },
  checkBoxNotSelected: {
    width: normalize(16),
    height: normalize(16),
    backgroundColor: COLORS.BRAND_BLUE,
  },
  labelStyle: {
    fontSize: normalize(12),
    marginHorizontal: normalize(10),
  },
});
