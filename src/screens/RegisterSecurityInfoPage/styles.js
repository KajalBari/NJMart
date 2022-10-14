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
        width: normalize(250),
        minHeight: dim().height * 0.70,
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
        marginLeft: normalize(-50),
        marginTop: normalize(20),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "100",
        fontSize: normalize(13),
        lineHeight: normalize(16),
        display: "flex",
        flexDirection: 'row',
        alignContent: 'flex-start',
        color: "#FD6510",
    },

    securityInfoHeading: {
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

    userIdStyle: {
        display: "flex",
       // flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
       // marginTop: normalize(25),
        fontFamily: 'Inter',
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },

    passwordStyle: {
        display: "flex",
        //flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
       // marginTop: normalize(25),
        fontFamily: 'Inter',
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },

    confirmPassStyle: {
        display: "flex",
       // flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
        //marginTop: normalize(25),
        fontFamily: 'Inter',
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },

    securityQueStyle: {
        display: "flex",
       // flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
       // marginTop: normalize(25),
        fontFamily: 'Inter',
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },


    answerStyle: {
        display: "flex",
       // flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: normalize(25),
       // marginTop: normalize(25),
        fontFamily: 'Inter',
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
        width:normalize(210),
        height:normalize(40),
    },

    nextButtonStyle: {
        display: "flex",
        width: normalize(190),
        height: normalize(40),
        justifyContent: "center",
        //marginTop: normalize(20),
        marginTop:normalize(-50),
        lineHeight: normalize(10),
        borderRadius: normalize(20),
        fontSize: normalize(10),
    },


})