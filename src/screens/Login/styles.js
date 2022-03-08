import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {dim, normalize} from '../../constants/Platform';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    minHeight: dim().height * 0.9,
  },
  logInText: {
    color: COLORS.BRAND_BLUE,
    marginVertical: normalize(10),
    fontSize: normalize(24),
    fontWeight: '600',
  },
  rememberForgotView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(10),
  },
  rememberMeView: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalize(20),
  },
  rememberMeCheckBox: {},
  rememberMeText: {
    fontSize: normalize(11),
  },
  emptyFlex: {
    flex: 0.2,
  },
  forgotPasswordText: {
    flex: 0.9,
    fontSize: normalize(11),
    marginHorizontal: normalize(20),
    textAlign: 'right',
  },
  loginButton: {
    width: normalize(140),
    height: normalize(50),
  },
  loginButtonText: {
    fontSize: normalize(18),
    fontWeight: '500',
  },
  bottomTextView: {
    position: 'absolute',
    bottom: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
  },  
  otpTextView: {
    position: 'relative',
    marginTop: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  notRegisterText: {
    fontSize: normalize(12),
  },
  createAccount: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  createAccountText: {
    fontSize: normalize(12),
  },
  middleTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(60),
  },
  googleLogo: {
    width: normalize(20),
    height: normalize(20),
    resizeMode: 'contain',
    marginHorizontal: normalize(10),
  },
  googleSignInButton: {
    backgroundColor: COLORS.GOOGLE_SIGNIN_BACKGROUND,
    marginTop: normalize(50),
    width: dim().width * 0.9,
    height: normalize(40),
  },
  divider: {
    height: 1,
    width: dim().width * 0.25,
    backgroundColor: COLORS.GOOGLE_SIGNIN_BACKGROUND,
  },
  signInWithEmailText: {
    marginHorizontal: normalize(5),
  },
  emailPNG: {
    width: normalize(25),
    height: normalize(25),
    resizeMode: 'contain',
  },
  passwordKeyPNG: {
    width: normalize(30),
    height: normalize(30),
    resizeMode: 'contain',
  },
  showPasswordPNG: {
    width: normalize(18),
    height: normalize(18),
    resizeMode: 'contain',
    tintColor: COLORS.WHITE,
  },
  emailInput: {
    fontSize: normalize(15),
    fontWeight: '700',
  },
  passwordInput: {
    fontSize: normalize(15),
    fontWeight: '700',
  },
  otpcontainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.BRAND_BLUE,
    paddingHorizontal: normalize(30),
    // marginVertical: normalize(10),
    borderRadius: normalize(40),
    color: COLORS.WHITE,
    width: '100%',
    height: normalize(50),
  },
  resendOTPButton: {
    paddingHorizontal: 0,
    backgroundColor: COLORS.TRANSPARENT,
    borderWidth: 0,
    borderColor: COLORS.TRANSPARENT,
  },
  otpLabelText: {
    fontSize: normalize(15),
    alignSelf: 'center',
    color: COLORS.BRAND_BLUE,
  },
  submitButton: {
    width: normalize(140),
    height: normalize(50),
    alignSelf: 'center',
  },
  submitButtonText: {
    fontSize: normalize(18),
    fontWeight: '600',
  },
});
