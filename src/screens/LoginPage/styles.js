import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { dim, normalize } from '../../constants/Platform';

export const styles = StyleSheet.create({
    // loginContainer: {
    //     width: normalize(250),
    //     height: normalize(331),
    //     backgroundColor: "gray"
//},

    gradient: {
        // position: "absolute",
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
        minHeight: dim().height * 0.30,
        display: 'flex',
        justifyContent: 'center',
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: "center",
    },

    tableStyle: {
        //position: "absolute",
        width: normalize(250),
        height: normalize(331),
        marginLeft: normalize(15),
        marginTop: normalize(-10),
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#E8E8E8",
        borderRadius: normalize(40),
    },
    elevation: {
        elevation: 30,
        boxShadow: "-10px 4px 14px rgba(0, 0, 0, 0.25), 12px 21px 17px rgba(73, 66, 66, 0.36)",
    },

    loginStyle: {
        // position: "absolute",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // width: normalize(180),
        // height: normalize(38),
        marginLeft: normalize(-10),
        marginTop: normalize(40),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: '100',
        fontSize: normalize(24),
        lineHeight: normalize(29),
        alignItems: "center",
        textAlign: "center",
        color: "#FD6510",
    },

    emailStyle: {
        display: 'flex',
       // flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(15),
        marginTop: normalize(30),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "100",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(230),
        height:normalize(40),
        //textAlign: "center",
 // verticalAlign: "middle",
    },

    passwordStyle: {
        display: 'flex',
      //  flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(15),
        marginTop: normalize(15),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "100",
        fontSize: normalize(15),
        color: "#888888",
        textAlign: "left",
        width:normalize(230),
        height:normalize(40),
    },

    forgetPassStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: normalize(103),
        marginTop: normalize(10),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
    },

    loginButtonStyle: {
        display: "flex",
        width: normalize(190),
        height: normalize(40),
        borderRadius: normalize(50),
        alignItems: "center",
        textAlign: "center",
        fontSize: normalize(11),
        marginTop: normalize(20),
    },

    nextButtonStyle: {
        display: "flex",
        width: normalize(190),
        height: normalize(40),
        justifyContent: "center",
        marginTop: normalize(10),
        lineHeight: normalize(10),
        borderRadius: normalize(20),
        fontSize: normalize(10),
      },

    signUpDiv: {
        display: 'flex',
        flexDirectonrow: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
    },

    userStyle: {
        // position: "absolute",
        display: "flex",
        flexDirection: 'row',
        marginTop: normalize(290),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
    },

    signUpStyle: {
        marginLeft: normalize(133),
        marginTop: normalize(-18),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#FD6510",
    },

    nextButtonStyle: {
        display: "flex",
        width: normalize(190),
        height: normalize(40),
        justifyContent: "center",
        marginTop: normalize(10),
        lineHeight: normalize(10),
        borderRadius: normalize(20),
        fontSize: normalize(10),
      },

}) 