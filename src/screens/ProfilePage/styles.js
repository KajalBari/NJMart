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
    //height:normalize(700),
    minHeight:dim().height*0.9,
},

menuStyle: {
    display: 'flex',
    float: 'right',
    left:normalize(150),
     marginTop: normalize(10),
    tintColor: "#000",
},

iconNameStyle:{
    display:'flex',
    alignItems:'center',  
    flexDirection:'row',
    marginTop:normalize(10),
},

profileStyle: {
    marginLeft: normalize(40),
},

headerStyle:{
    display:'flex',
    flexDirection:'row',
},

arrowStyle:{
    width:normalize(30),
    height:normalize(30),
    resizeMode:'contain',
   marginTop:normalize(10),
   marginLeft:normalize(20),
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
    //paddingTop:dim().width*0,
    width: normalize(365),
   // minWidth:dim().width*0.2,
    // height: normalize(700),
    minHeight:dim().height*1,
     marginTop: normalize(40),
     backgroundColor: '#FFFCF8',
    borderTopLeftRadius: normalize(50),
    borderTopRightRadius: normalize(50),
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
    marginTop:normalize(15),
    textAlign:'center',
    flexDirection:'row',
    color: "#FD6510",
    marginBottom:normalize(20),
},

lineStyle:{ 
        borderWidth: normalize(4),
        width:normalize(290),
        alignSelf:'center',
        borderColor:'#B9AFAF',
        marginTop:normalize(10), 
        marginBottom:normalize(10),
},

profileDetails:{
   flexDirection:'column',
    justifyContent:'flex-start', 
    //lineHeight:normalize(20),
},

distributorStyle:{
    display:'flex',
    justifyContent:'space-between',
    //lineHeight:normalize(20),
    marginBottom:normalize(10),
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
    marginTop:normalize(10),
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
    // lineHeight: normalize(10),
    borderRadius: normalize(20),
    fontSize: normalize(10), 
},
});
