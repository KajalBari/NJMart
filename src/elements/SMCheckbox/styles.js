import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxSelected: {
    width: normalize(25),
    height: normalize(25),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.SUB_COLOR_LIGHT_GREY,
    // border:normalize(1),
    // borderColor:"red,"
  },
  checkbox: {
    color: COLORS.WHITE,
  },
  checkBoxNotSelected: {
    width: normalize(25),
    height: normalize(25),
    backgroundColor: COLORS.SUB_COLOR_LIGHT_GREY,
    // border:normalize(1),
    // borderColor:"red,"
  },
  labelStyle: {
    fontSize: normalize(12),
    marginHorizontal: normalize(10),
  },
});
