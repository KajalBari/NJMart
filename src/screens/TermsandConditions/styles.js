import { StyleSheet } from 'react-native';
import { dim, normalize } from '../../constants/Platform';
import { COLORS } from '../../constants/Colors';

export const styles = StyleSheet.create({

  termsAndConditionsLabel: {
    // fontSize: normalize(9),
     //color: COLORS.BRAND_BLUE,

    width: normalize(150),
    marginLeft: normalize(30),
    marginTop: normalize(20),
    fontFamily: 'Inter',
    fontWeight: "200",
    fontSize: normalize(15),
    color: "#888888",
    lineHeight: normalize(25),
  },

  termsAndConditionsCheckBox: {
    // width: normalize(12),
    // height: normalize(12),
    // backgroundColor: COLORS.BRAND_BLUE,

    width: normalize(20),
    height: normalize(20),
    marginTop: normalize(10),
    marginLeft: normalize(20),
  },






  containerStyle:{
    minWidth: dim().width * 0.9,
    minHeight: dim().height * 10,
    position: 'relative',
  },

  gradient: {
    width: dim().width * 1,
    minHeight: dim().height * 0.4,
    borderBottomLeftRadius: normalize(150),
    borderBottomRightRadius: normalize(150),
  },

  njMartImage: {
    width: normalize(150),
    minHeight: dim().height * 0,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: normalize(10),
  },

  tableStyle: {
    width: dim().width * 0.70,
    minHeight: dim().height * 0.5,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    top: dim().height * 0.2,
    backgroundColor: '#E8E8E8',
    paddingBottom: normalize(10),
    paddingTop: normalize(10),
    flex: 1,
    borderRadius: normalize(40),
  },

  elevation: {
    elevation: normalize(30),
    boxShadow: "-10px 4px 14px rgba(0, 0, 0, 0.25), 12px 21px 17px rgba(73, 66, 66, 0.36)",
  },

  registerStyle: {
    marginTop: normalize(10),
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '100',
    fontSize: normalize(24),
    color: '#FD6510',
  },

  termsAndConditionStyle: {
    marginTop: normalize(20),
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "200",
    fontSize: normalize(18),
    lineHeight: normalize(22),
    display: "flex",
    textAlign: "center",
    color: "#FD6510",
  },

  divStyle: {
    minHeight: dim().height * 0,
    //alignItems: 'center', 
    flex: 1,
    justifyContent: 'center',
  },

  checkBoxWrapper:{
     flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },

  termsStyle: {
    width: normalize(150),
    marginLeft: normalize(50),
    marginTop: normalize(-30),
    fontFamily: 'Inter',
    fontWeight: "200",
    fontSize: normalize(15),
    color: "#888888",
    lineHeight: normalize(25),
  },

  checkboxStyle: {
  // display: 'flex',
    //alignItems: 'center',
  //  justifyContent: 'flex-start',
    width: normalize(20),
    height: normalize(20),
    marginTop: normalize(40),
    marginLeft: normalize(20),
  },

  submitButtonStyle: {
    width: normalize(190),
    height: normalize(40),
    borderRadius: normalize(50),
    alignItems: "center",
    textAlign: "center",
    fontSize: normalize(11),
    marginTop: normalize(40),

  }

})