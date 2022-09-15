import { StyleSheet } from 'react-native';
import { orange100 } from 'react-native-paper/lib/typescript/styles/colors';
import { COLORS } from '../../constants/Colors';
import { dim, normalize } from '../../constants/Platform';

export const styles = StyleSheet.create({
  Container1: {
    position: "absolute",
    width: normalize(400),
    minHeight: dim().height * 0.4,
    //height: normalize(230),
    marginLeft: normalize(-20),
    marginRight: normalize(-20),
    backgroundColor: "orange",
    //backgroundImage: "linear-gradient(yellow, orange)",
     // color: "darkred",
    //  borderBottomLeftRadius:normalize(100),
    //   borderBottomRightRadius:normalize(100),
    borderBottomEndRadius: normalize(370),
    borderBottomStartRadius: normalize(360),
    // background: linear-gradient(228.18deg, #FD6510 30.98%, #FFBF43 85.49%);
  },

  njMartImage:{
    width: normalize(150),
   // minHeight: dim().height * 0.4,
   height: normalize(150),
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    // backgroundColor:"grey",
    // borderRadius:normalize(20),
    
  },

  tableStyle:{
        position: "absolute",
        width: normalize(250),
        height: normalize(331),
       // minHeight: dim().height * 0.5,
        marginLeft: normalize(69),
       marginTop: normalize(154),
       alignItems:"center",
       alignSelf:"center",
        //backgroundColor: "#F6F6F6",
        backgroundColor:"#E8E8E8",
        borderRadius: normalize(40),
        
    //boxShadow: "2px 3px 1px #000000",

       // borderColor:"black",
      // boxShadow: -10px 4px 14px rgba(0, 0, 0, 0.25), 12px 21px 17px rgba(73, 66, 66, 0.36);
  },

  registerStyle:{
    position: "absolute",
    width: normalize(180),
    height: normalize(38),
    marginLeft: normalize(130),
    marginTop: normalize(20),
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: '100',
    fontSize: normalize(24),
    lineHeight: normalize(29),
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FD6510",
  },

  mandatoryStyle:{
      position: "absolute",
      width: normalize(180),
      height: normalize(36),
      marginLeft: normalize(50),
      marginTop: normalize(60),
      fontFamily: 'Inter',
      fontStyle: "normal",
      fontWeight: "100",
      fontSize: normalize(13),
      lineHeight: normalize(16),
      display: "flex",
      alignItems: "center",
      textAlign: "left",
      color: "#FD6510",
},

sponsorHeading:{
  position: "absolute",
  width: normalize(206),
  height: normalize(38),
  marginLeft: normalize(103),
  marginTop: normalize(90),
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: "200",
  fontSize: normalize(18),
  lineHeight: normalize(22),
  display: "flex",
  textAlign: "center",
  color: "#FD6510",
},


sponsorId:{
    position: "absolute",
    width: normalize(203),
    height: normalize(22),
    marginLeft: normalize(0),
    marginTop: normalize(130),
    fontFamily: 'Inter',
  //  fontStyle: "normal",
    fontWeight: "200",
    fontSize: normalize(15),
   // lineHeight: normalize(20),
    display: "flex",
   // alignItems: "center",
    color:"#888888",
    // textAlign: "left",
    textAlign: "left",
},

sponsorName:{
  position: "absolute",
  width: normalize(203),
  height: normalize(22),
  marginLeft: normalize(103),
  marginTop: normalize(170),
  fontFamily: 'Inter',
 // fontStyle: "normal",
  fontWeight: "200",
  fontSize: normalize(15),
  //lineHeight: normalize(18),
  display: "flex",
 // alignItems: "center",
  color:"#888888",
  textAlign: "left",
},

positionStyle:{
  position: "absolute",
  width: normalize(203),
  height: normalize(22),
  marginLeft: normalize(103),
  marginTop: normalize(210),
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: "200",
  fontSize: normalize(15),
  //lineHeight: normalize(18),
  display: "flex",
 // alignItems: "center",
  color:"#888888",
  textAlign: "left",
},

nextButtonStyle:{
  boxSizing: "border-box",
  position: "absolute",
  display:"flex",
  width: normalize(190),
  height: normalize(40),
 justifyContent:"center",
 // marginLeft: normalize(-20),
  //marginRight:normalize(20),
  marginTop: normalize(270),
  lineHeight: normalize(10),
  borderRadius: normalize(50),
  alignItems:"center",
  textAlign: "center",
  fontSize:normalize(10),
  alignSelf:'center',
// background: rgba(253, 101, 16, 0.83);
//box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.25);

},


});