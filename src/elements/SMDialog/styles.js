import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  defaultDialogStyle: {
    backgroundColor: COLORS.BRAND_BLUE,
    minHeight: normalize(150),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogTitleStyle: {
    color: COLORS.BRAND_BLUE,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dialogContentStyle: {
    backgroundColor: COLORS.BRAND_BLUE,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: normalize(10),
    paddingVertical: normalize(10),
  },
  dialogActionsStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
