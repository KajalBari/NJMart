import { StyleSheet } from 'react-native';
import { dim, normalize } from '../../constants/Platform';
import { COLORS } from '../../constants/Colors';

export const styles = StyleSheet.create({

  gradient: {
    width: normalize(400),
    // minHeight: dim().height * 0.4,
    height: normalize(250),
    marginLeft: normalize(-20),
    marginRight: normalize(-20),
    borderBottomLeftRadius: normalize(200),
    borderBottomRightRadius: normalize(200),
    borderBottomEndRadius: normalize(370),
    borderBottomStartRadius: normalize(360),
  },

  njMartImage: {
    width: normalize(150),
    //  height: normalize(150),
      minHeight: dim().height * 0.30,
      display:'flex',
      justifyContent:'center',
      resizeMode: 'contain',
      justifyContent: 'center',
      alignSelf: "center",
  },

  tableStyle: {
   // width: normalize(250),
   width: dim().width * 0.74,
    minHeight: dim().height * 0.55,
    marginLeft: normalize(15),
    marginTop: normalize(-10),
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: normalize(40),
  },

  elevation: {
    elevation: normalize(30),
    boxShadow: "-10px 4px 14px rgba(0, 0, 0, 0.25), 12px 21px 17px rgba(73, 66, 66, 0.36)",
  },

  registerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(20),
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: '100',
    fontSize: normalize(24),
    lineHeight: normalize(29),
    textAlign: "center",
    color: "#FD6510",
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(40),
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: normalize(20),
    height: normalize(20),
    marginTop: normalize(40),
    marginLeft: normalize(-150),
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