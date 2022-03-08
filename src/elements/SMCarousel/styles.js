import {wrap} from 'lodash';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {normalize, dim} from '../../constants/Platform';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: dim().width * 0.9,
    maxHeight: dim().height * 0.2,
  },
  paginationContainerStyle: {
    width: normalize(5),
    paddingVertical: 0,
    alignItems: 'center',
  },
  paginationDotStyle: {
    width: normalize(8),
    height: normalize(8),
    borderRadius: normalize(5),
    marginHorizontal: normalize(30),
    backgroundColor: COLORS.BRAND_BLUE,
  },
  dotContainerStyle: {
    marginTop: normalize(10),
  },
});
