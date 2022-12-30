import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { dim, normalize } from '../../constants/Platform';

export const styles = StyleSheet.create({
    containerStyle: {
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
        height: dim().height * 0.5,
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        top: dim().height * 0.2,
        backgroundColor: '#E8E8E8',
        paddingTop: normalize(10),
        flex: 0.5,
        borderRadius: normalize(40),
    },

    elevation: {
        elevation: 30,
        boxShadow: "-10px 4px 14px rgba(0, 0, 0, 0.25), 12px 21px 17px rgba(73, 66, 66, 0.36)",
    },

    loginStyle: {
        marginBottom:normalize(10),
        marginTop: normalize(10),
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: normalize(24),
        color: '#FD6510',
    },

    emailStyle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: normalize(15),
        color: '#888888',
        width: normalize(210),
        height: normalize(40),
    },

    passwordStyle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: normalize(15),
        color: '#888888',
        width: normalize(210),
        height: normalize(40),
    },

    showPasswordPNG: {
        width: normalize(14),
        height: normalize(14),
        resizeMode: 'contain',
        tintColor: COLORS.BLACK,
      },

    forgetPassStyle: {
        marginLeft: normalize(103),
        marginTop: normalize(10),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
    },


    loginButtonStyle: {
        width: normalize(190),
        height: normalize(40),
        justifyContent: 'center',
        marginLeft: normalize(30),
        borderRadius: normalize(20),
        fontSize: normalize(10),
        marginTop: normalize(20),
    },

    signUpDiv: {
        display: 'flex',
        flexDirectonrow: 'row',
        justifyContent: 'space-between',
        //marginTop:normalize(5),
    },

    userStyle: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#888888",
    },

    signUpStyle: {
        marginLeft: normalize(133),
        marginTop: normalize(-17),
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "200",
        fontSize: normalize(15),
        color: "#FD6510",
        marginRight:normalize(-10)
    },

    nextButtonStyle: {
        width: normalize(190),
        height: normalize(40),
        justifyContent: 'center',
        marginLeft: normalize(30),
        borderRadius: normalize(20),
        fontSize: normalize(10),
        marginTop: normalize(20),
    },

}) 