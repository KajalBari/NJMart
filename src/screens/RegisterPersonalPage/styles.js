import { StyleSheet } from 'react-native';
import { dim, normalize } from '../../constants/Platform';
import { COLORS } from '../../constants/Colors';

export const styles = StyleSheet.create({
    // containerStyle: {
    //     position: "absolute",
    //     width: normalize(400),
    //     minHeight: dim().height * 0.4,
    //     //height: normalize(230),
    //     marginLeft: normalize(-20),
    //     marginRight: normalize(-20),
    //     backgroundColor: "orange",
    //     borderBottomEndRadius: normalize(370),
    //     borderBottomStartRadius: normalize(360),
    //     // background: linear-gradient(228.18deg, #FD6510 30.98%, #FFBF43 85.49%);
    // },

    textStyle:{
        fontSize:normalize(20),
        padding:normalize(30),
        backgroundColor:'blue',
        margin:normalize(20),
        color:'white',
    },
    listStyle:{
        textAlign:'center',
        margin:normalize(20),
        padding:normalize(10),
    },

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
       // alignItems: 'center',
        alignSelf: "center",
    },

    tableStyle: {
       // width: normalize(250),
       width: dim().width * 0.74,
       // height: normalize(331),
        minHeight: dim().height * 0.74,
        marginLeft: normalize(15),
        marginTop: normalize(-10),
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#E8E8E8",
        borderRadius: normalize(40),
        overflow:'scroll',
        flex:1,
       // overflow:'auto',
        // width:'100%',
           // height: normalize(50),
    },

    scrollView:{
      flex:1,
      height:dim().height*0.4,
      flexGrow:1,
      paddingVertical:normalize(10),
    //   maxLength:normalize(100),
           // marginHorizontal:normalize(30),
    },

    divStyle:{        
        height: dim().height*0.6,
        // width:dim().width*0.4
      
    },

    elevation: {
        elevation: 30,
        boxShadow: "-10px 4px 14px rgba(0, 0, 0, 0.25), 12px 21px 17px rgba(73, 66, 66, 0.36)",
        // overflow:'scroll',
        // height: normalize(400),
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

    mandatoryStyle: {   
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "100",
        fontSize: normalize(13),
        lineHeight: normalize(16),
        textAlign:'left',
        color: "#FD6510",
    },

    personalInfoHeading: {
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

    titleStyle: {
       // display: "flex",
      //  flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
       // marginTop: normalize(10),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },

    applicantNameStyle: {
       // display: "flex",
        //flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
       // marginTop: normalize(5),
        fontFamily: 'Inter',
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },

    dobStyle: {
       // display: "flex",
       // flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
      //  marginTop: normalize(5),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },

    fatherNameStyle: {
       // display: "flex",
       // flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
       // marginTop: normalize(25),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },

    maritalStatusStyle: {
       // display: "flex",
       // flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
       // marginTop: normalize(25),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },

    genderStyle: {
        //display: "flex",
       // flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
       // marginTop: normalize(25),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },

    nextButtonStyle: {
       // display: "flex",
        width: normalize(190),
        height: normalize(40),
        justifyContent: "center",
        //marginTop: normalize(10),
        marginTop:normalize(-100),
        lineHeight: normalize(10),
        borderRadius: normalize(20),
        fontSize: normalize(10),
    },

});
