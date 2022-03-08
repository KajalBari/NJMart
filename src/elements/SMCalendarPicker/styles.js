import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {dim, normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  datePickerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: dim().width * 0.9,
    minHeight: normalize(50),
    borderRadius: normalize(20),
    borderWidth: 1,
    borderColor: COLORS.BRAND_BLUE,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: normalize(5),
  },
  dateText: {
    marginHorizontal: normalize(10),
    color: COLORS.BRAND_BLUE,
    fontSize: normalize(14),
    fontWeight: '500',
  },
  calendarDialog: {
    borderRadius: normalize(8),
  },
  calendarDialogTitle: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  calendarDialogContent: {
    height: dim().height * 0.43,
  },
  errorMessage: {
    marginHorizontal: normalize(35),
    fontSize: normalize(12),
    marginTop: normalize(-5),
    color: COLORS.ERROR,
    alignSelf: 'flex-start',
  },
});
