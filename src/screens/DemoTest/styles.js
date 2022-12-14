import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {dim, normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  createAccountText: {
    color: COLORS.BRAND_BLUE,
    marginVertical: normalize(10),
    fontSize: normalize(24),
    fontWeight: '600',
  },
  firstNamePNG: {
    width: normalize(20),
    height: normalize(20),
    resizeMode: 'contain',
  },
  lastNamePNG: {
    width: normalize(20),
    height: normalize(20),
    resizeMode: 'contain',
  },
  emailPNG: {
    width: normalize(20),
    height: normalize(20),
    resizeMode: 'contain',
  },
  passwordKeyPNG: {
    width: normalize(20),
    height: normalize(20),
    resizeMode: 'contain',
  },
  showPasswordPNG: {
    width: normalize(18),
    height: normalize(18),
    resizeMode: 'contain',
    tintColor: COLORS.WHITE,
  },
  firstNameInput: {
    fontSize: normalize(15),
    fontWeight: '700',
  },
  lastNameInput: {
    fontSize: normalize(15),
    fontWeight: '700',
  },
  emailInput: {
    fontSize: normalize(15),
    fontWeight: '700',
  },
  passwordInput: {
    fontSize: normalize(15),
    fontWeight: '700',
  },
  confirmPasswordInput: {
    fontSize: normalize(15),
    fontWeight: '700',
  },
  countryCodeMobileNumberView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: normalize(18),
    zIndex: 10,
  },
  countryCodeContainerStyle: {
    width: normalize(80),
  },
  countryCodeStyle: {
    width: normalize(80),
    height: normalize(50),
  },
  mobileNumberInput: {
    fontSize: normalize(15),
    fontWeight: '700',
    marginLeft: normalize(10),
  },
  mobileNumberStyle: {
    width: dim().width * 0.6,
  },
  referralIDStyle: {
    width: dim().width * 0.7,
  },
  referralIDInput: {
    fontSize: normalize(15),
    fontWeight: '700',
    textAlign: 'center',
  },
  termsAndConditionsLabel: {
    fontSize: normalize(9),
    color: COLORS.BRAND_BLUE,
  },
  termsAndConditionsCheckBox: {
    width: normalize(12),
    height: normalize(12),
    backgroundColor: COLORS.BRAND_BLUE,
  },
  registerButton: {
    width: normalize(140),
    height: normalize(50),
    marginVertical: normalize(20),
  },
  registerButtonText: {
    fontSize: normalize(18),
    fontWeight: '600',
  },
  countryCodePlaceholderStyle: {
    fontSize: normalize(15),
    fontWeight: '600',
    textAlign: 'center',
  },
  countryCodeTextStyle: {
    fontSize: normalize(15),
    fontWeight: '600',
    textAlign: 'center',
  },
  confirmationDialogContent: {
    fontSize: normalize(14),
    fontWeight: '600',
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  passwordInfoDialogContent: {
    fontSize: normalize(14),
    fontWeight: '600',
    color: COLORS.WHITE,
  },
  referalPNG: {
    width: normalize(20),
    height: normalize(20),
    resizeMode: 'contain',
    tintColor:COLORS.WHITE
  },
});