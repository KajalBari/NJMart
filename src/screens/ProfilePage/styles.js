import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { dim, normalize } from '../../constants/Platform';

export const styles = StyleSheet.create({

     containerStyle: {
        display:'flex',
        flexDirection:'column',
        // width:dim().width*0.99,
        width: normalize(500),
        minHeight: dim().height * 0.4,
        //height: normalize(230),
        marginLeft: normalize(-10),
       // marginRight: normalize(20),
    },

gradient:{
    height:normalize(800),
},

menuCard:{
    display:'flex',
    flexDirection:'row',
},
// menuContainer:{
//    display: 'flex',
//         flexDirection:'row',
//         alignItems:'center',
//          width: normalize(55),
//          height: normalize(55),
//          marginLeft: normalize(260),
//         margintop: normalize(50),  
// },

menuStyle: {
    //  position: "absolute",
    display: 'flex',
    float: 'right',
   // justifyContent: 'space-between',
    // width: normalize(37.61),
    // height: normalize(35),
    // marginRight: normalize(-30),
    left:normalize(150),
     marginTop: normalize(10),
    tintColor: "#000",
},

iconNameStyle:{
    display:'flex',
    alignItems:'center',  
    flexDirection:'row',
    marginTop:normalize(30),
},

profileStyle: {
    marginLeft: normalize(40),
},

nameStylee: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    fontFamily: 'Inter',
    fontStyle: "normal",
     fontWeight: '200',
    fontSize: normalize(25),
    color: 'white',
    marginLeft:normalize(20),
},

contentRectangleStyle: {
   // paddingTop:dim().width*0.4,
    width: normalize(365),
     height: normalize(500),
     marginTop: normalize(30),
     backgroundColor: '#FFFCF8',
    borderTopLeftRadius: normalize(50),
    borderTopRightRadius: normalize(60),   
},

elevation: {
    elevation: normalize(30),
    boxShadow:"-10px -25px 14px rgba(0, 0, 0, 0.25), 12px 21px 17px rgba(73, 66, 66, 0.36)",
},

profileText:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: normalize(25),
    marginTop:normalize(10),
    textAlign:'center',
    flexDirection:'row',
    color: "#FD6510",
},

lineStyle:{ 
    borderWidth: normalize(3),
    borderColor:'grey',
    marginTop:normalize(10), 
},

profileDetails:{
    //display:'flex',
   flexDirection:'column',
    justifyContent:'flex-start', 
},

distributorStyle:{
    display:'flex',
    justifyContent:'space-between',
},

distributorIdStyle:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    marginTop:normalize(20),
   marginLeft: normalize(30),
    color: "#FD6510",
},

subTitleStyle1:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: normalize(22),
   marginLeft:normalize(30),
    color: "#FD6510", 
},

nameStyle2:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    marginTop:normalize(10),
    marginLeft:normalize(30),
    color: "#FD6510",
},

subTitleStyle2:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: normalize(22),
    marginLeft:normalize(30),
    color: "#FD6510", 
},

dateStyle:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    marginTop:normalize(10),
    marginLeft:normalize(30),
    color: "#FD6510",
},

subTitleStyle3:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: normalize(22),
    marginTop:normalize(0),
    marginLeft:normalize(30),
    color: "#FD6510", 
},

addressStyle:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    marginTop:normalize(10),
    marginLeft:normalize(30),
    color: "#FD6510",
},

subTitleStyle4:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: normalize(22),
    marginTop:normalize(0),
    marginLeft:normalize(30),
    color: "#FD6510", 
},

mobileStyle:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    marginTop:normalize(10),
    marginLeft:normalize(30),
    color: "#FD6510",
},

subTitleStyle5:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: normalize(22),
    marginTop:normalize(0),
    marginLeft:normalize(30),
    color: "#FD6510", 
},

birthDateStyle:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    marginTop:normalize(10),
    marginLeft:normalize(30),
    color: "#FD6510",   
},

subTitleStyle6:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: normalize(22),
    marginTop:normalize(0),
    marginLeft:normalize(30),
    color: "#FD6510", 
},

ButtonStyle:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
},

editButtonStyle:{
    width: normalize(160),
    height: normalize(40),
    marginTop: normalize(20),
    marginLeft:normalize(20),
    lineHeight: normalize(10),
    borderRadius: normalize(20),
    fontSize: normalize(10), 
},

nextButtonStyle:{
    width: normalize(160),
    height: normalize(40),
    marginTop: normalize(20),
    marginLeft:normalize(10),
    lineHeight: normalize(10),
    borderRadius: normalize(20),
    fontSize: normalize(10), 
},



});
