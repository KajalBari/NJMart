import { normalizeUnits } from 'moment';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { dim, normalize } from '../../constants/Platform';

export const styles = StyleSheet.create({

    container: {
        position: "relative",
        backgroundColor: "#FFFFFF",
        width: normalize(500),
        minHeight: dim().height * 0.5,
        marginBottom:normalize(20),
    },

    headerStyle:{
        display:'flex',
        flexDirection:'row',
    },

    ellipseStyle: {
         width: normalize(55),
         height: normalize(55),
         marginLeft: normalize(220),
         marginTop: normalize(10),
         backgroundColor: "#ECDEDE",
        borderRadius: normalize(50),
        borderWidth: 3,
        borderColor: '#66ff66',
    },

    menuContainer:{
       // display: 'flex',
        flexDirection:'row',
        //alignItems:'center',
         width: normalize(55),
         height: normalize(55),
         marginLeft: normalize(260),
        margintop: normalize(50),
    },

    shoppingCartStyle: {
        width: normalize(30),
        height: normalize(30),
         marginLeft: normalize(10),
         marginTop: normalize(12),
         fontSize:normalize(50),
        marginRight:normalize(10),
        tintColor: "#000",
        borderRadius: normalize(15),
    },

    menuStyle: {
        display: 'flex',
       // float: 'right',
        justifyContent: 'space-between',
         width: normalize(37.61),
         height: normalize(35),
         marginLeft: normalize(30),
         marginTop: normalize(20),
        tintColor: "#000",
    },

    profileDivStyle: {
        height: normalize(50),
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
         marginTop: normalize(30),
    },

    profileStyle: {
        marginLeft: normalize(40),
    },

    nameStyle: {
        fontFamily: 'Inter',
        fontStyle: "normal",
       fontWeight: '200',
        fontSize: normalize(25),
        lineHeight: normalize(30),
        color: "#FD6510",
        marginLeft:normalize(20),
    },

    gradient: {
        width: normalize(355),
        height: normalize(200),
        marginTop: normalize(dim().height * 0.04),
        borderTopLeftRadius: normalize(50),
        borderTopRightRadius: normalize(50),
    },

    shoppingStyle:{
        width:normalize(30),
        height:normalize(30),
        resizeMode:'contain',
        marginTop:normalize(10),
        marginLeft:normalize(20),
    },

    elevation: {
        elevation: normalize(30),
        boxShadow: "-10px 4px 14px rgba(0, 0, 0, 0.25), 12px 21px 17px rgba(73, 66, 66, 0.36)",
    },

    RectanglesStyle: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: dim().width * 0.08,
        justifyContent: 'space-evenly',
    },

    rectangle1: {
        //    position: "absolute",
        width: normalize(102),
        height: normalize(102),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#FFFCF8",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: normalize(30),
    },

    memberNumberStyle: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontSize: normalize(16),
    },

    memberStyle: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontSize: normalize(16),
        color: "#675454",
    },

    rectangle2: {
        width: normalize(102),
        height: normalize(102),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#FFFCF8",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: normalize(30),
    },

    rectangle3: {
        width: normalize(102),
        height: normalize(102),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "#FFFCF8",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: normalize(30),
    },
    
    contentRectangleStyle: {
        width: normalize(355),
       minHeight: dim().height*0.9,
        display:'flex',
        paddingTop:dim().width*0.4,
        marginBottom:normalize(0),
        width: normalize(355),
        borderTopLeftRadius: normalize(65),
        borderTopRightRadius: normalize(50),
        backgroundColor: '#FFFCF8',
        marginTop:normalize(-40),
    },

    profileContent:{
        width:normalize(102),
        height:normalize(102),
        marginTop:normalize(-100),
        left:normalize(50),
       backgroundColor: '#FFFCF8',
      //backgroundColor: 'red',
        borderRadius: normalize(15),
        alignItems: 'center',
        display:'flex',
    },
 


    profileImageStyle: {
        width: normalize(52.88),
        height: normalize(50),
        marginTop:normalize(20),
    },

    profileTextStyle: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontSize: normalize(15),
        color: "#675454",
    },

    accountContent:{
        width:normalize(102),
        height:normalize(102),
        marginTop:normalize(-100),
        marginLeft:normalize(200),
        backgroundColor: '#FFFCF8',
       // backgroundColor: 'red',
        borderRadius: normalize(15),
        alignItems: 'center',
        display:'flex',
    },

    accountImageStyle: {
        width: normalize(52.88),
        height: normalize(50),
        marginTop:normalize(20),
    },

    accountTextStyle: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontSize: normalize(15),
        color: "#675454",
    },

    downlineContent:{
        width:normalize(102),
        height:normalize(102),
        marginTop:normalize(40),
        marginLeft:normalize(50),
        backgroundColor: '#FFFCF8',
       //backgroundColor: 'red',
        borderRadius: normalize(15),
        alignItems: 'center',
        display:'flex',
    },

    profileImageStyle: {
        width: normalize(52.88),
        height: normalize(50),
        marginTop:normalize(20),
    },

    downlineTextStyle:{
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontSize: normalize(15),
        color: "#675454",
    },

    shoppingContent:{
        width:normalize(102),
        height:normalize(102),
        marginTop:normalize(-100),
        marginLeft:normalize(200),
       backgroundColor: '#FFFCF8',
       //backgroundColor: 'red',
        borderRadius: normalize(15),
        alignItems: 'center',
        display:'flex', 
    },

    shoppingTextStyle:{
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontSize: normalize(15),
        color: "#675454",
    },

    rewardContent:{
        width:normalize(102),
        height:normalize(102),
        marginTop:normalize(40),
        marginLeft:normalize(50),
        backgroundColor: '#FFFCF8',
        borderRadius: normalize(15),
        alignItems: 'center',
        display:'flex',
    },

    rewardTextStyle:{
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontSize: normalize(15),
        color: "#675454",
    },

    filesContent:{
        width:normalize(102),
        height:normalize(102),
        marginTop:normalize(-100),
        marginLeft:normalize(200),
        backgroundColor: '#FFFCF8',
      
        borderRadius: normalize(15),
        alignItems: 'center',
        display:'flex',   
    },

    filesTextStyle:{
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontSize: normalize(15),
        color: "#675454",
    },


    // secondContent:{
    //     display:'flex',
    //     flexDirection:'row',
    //     alignItems:'center',
    //     justifyContent: 'center',
    //    // marginLeft:normalize(300),
    // },

    // profileContent1: {
    //     width: normalize(122),
    //     height: normalize(122),
    //     left:normalize(45),
    //    // display: "inline-block",
    //      marginTop: normalize(20),
    //     display: 'flex',
    //     flexDirection: "column",
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#FFFCF8',
    //     borderRadius: normalize(15),
    // },

    
    // profileContent2: {
    //     width: normalize(122),
    //     height: normalize(122),
    //     marginTop:normalize(20),
    //    // display: "inline-block",
    //     left:normalize(90),
    //     display: 'flex',
    //     flexDirection: "column",
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#FFFCF8',
    //     borderRadius: normalize(15),
    // },

    // profileContent3:{
    //     width: normalize(122),
    //     height: normalize(122),
    //     marginTop:normalize(100),
    //     display: 'flex',
    //     flexDirection: "column",
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#FFFCF8',
    //     borderRadius: normalize(15),
    // },

    // profileContent4:{
    //     width: normalize(122),
    //     height: normalize(122),
    //     marginTop:normalize(100),
    //     display: 'flex',
    //     flexDirection: "column",
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#FFFCF8',
    //     borderRadius: normalize(15),
    // },

    // submitButtonStyle: {
    //     display: "flex",
    //     width: normalize(190),
    //     height: normalize(40),
    //     justifyContent: "center",
    //     marginTop: normalize(10),
    //     lineHeight: normalize(10),
    //     borderRadius: normalize(20),
    //     fontSize: normalize(10),
    //   },
    
})