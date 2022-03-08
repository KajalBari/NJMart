import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {dim, normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  container: {
    borderRadius: normalize(20),
    backgroundColor: COLORS.BRAND_BLUE,
    borderWidth: 1,
    borderColor: COLORS.TRANSPARENT,
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(6),
    width: dim().width * 0.9,
    marginHorizontal: normalize(20),
    height: normalize(50),
    marginVertical: normalize(10),
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  input: {
    flex: 1,
    marginTop: normalize(10),
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(5),
    backgroundColor: COLORS.BRAND_BLUE,
    color: COLORS.WHITE,
  },
  leftElement: {
    marginHorizontal: normalize(6),
    maxWidth: '70%',
  },
  rightElement: {
    marginHorizontal: normalize(6),
    maxWidth: '70%',
  },
  errorMessage: {
    marginVertical: normalize(6),
    fontSize: normalize(12),
    color: COLORS.ERROR,
  },
});
