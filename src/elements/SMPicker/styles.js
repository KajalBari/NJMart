import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {dim, normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  style: {
    justifyContent: 'center',
    alignSelf: 'center',
    maxWidth: dim().width * 0.9,
    backgroundColor: COLORS.BRAND_BLUE,
    borderRadius: normalize(20),
    color: COLORS.WHITE,
    marginVertical: normalize(5),
    borderColor: COLORS.TRANSPARENT,
  },
  containerStyle: {},
  textStyle: {
    color: COLORS.WHITE,
  },
  labelStyle: {
    color: COLORS.WHITE,
  },
  dropDownContainerStyle: {
    alignSelf: 'center',
    maxWidth: dim().width * 0.9,
    borderColor: COLORS.WHITE,
  },
  listItemContainerStyle: {
    borderColor: COLORS.BRAND_BLUE,
  },
  listItemLabelStyle: {
    color: COLORS.BRAND_BLUE,
    textAlign: 'left',
  },
  itemSeparatorStyle: {
    backgroundColor: COLORS.BRAND_BLUE,
  },
  tickIconStyle: {
    tintColor: COLORS.BRAND_BLUE,
  },
  errorMessageView: {
    alignSelf: 'flex-start',
    marginLeft: normalize(13),
  },
  errorMessage: {
    fontSize: normalize(12),
    color: COLORS.ERROR,
  },
});
