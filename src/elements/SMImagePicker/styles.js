import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {dim, normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    elevation: normalize(10),
    height: normalize(50),
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: COLORS.BRAND_BLUE,
  },

  noImageView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mediaStyle: {
    width: dim().width * 0.9,
    height: normalize(150),
    margin: 0,
    padding: 0,
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: COLORS.BRAND_BLUE,
  },
  addPhotoView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: normalize(5),
    backgroundColor: COLORS.WHITE,
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: COLORS.BRAND_BLUE,
  },
  errorMessage: {
    marginVertical: normalize(5),
    fontSize: normalize(12),
    color: COLORS.ERROR,
    fontWeight: 'normal',
  },
  iconTextStyle: {
    color: COLORS.BRAND_BLUE,
    marginHorizontal: normalize(10),
  },
});
