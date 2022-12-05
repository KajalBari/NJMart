import { StyleSheet } from 'react-native';
import { dim, normalize } from '../../constants/Platform';
import { COLORS } from '../../constants/Colors';

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
        width: dim().width * 0.75,
        minHeight: dim().height * 0.5,
        position: 'absolute',
        alignItems: 'center',
       alignSelf: 'center',
        top: dim().height * 0.2,
        backgroundColor: '#E8E8E8',
        // paddingBottom: normalize(5),
        paddingTop: normalize(10),
        flex: 1,
        borderRadius: normalize(40),
    },

    divStyle: {
        minHeight: dim().height * 0.6,
        alignItems: 'center',
    },

    innerDivStyle: {
        alignItems: 'center',
        height: dim().height * 0.68,
        paddingBottom: normalize(10),
        paddingTop: normalize(10),
    },


    elevation: {
        elevation: 10,
        boxShadow: "-10px 4px 14px rgba(0, 0, 0, 0.25), 12px 21px 17px rgba(73, 66, 66, 0.36)",
    },

    registerStyle: {
       marginTop: normalize(20),
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: normalize(24),
        color: '#FD6510', 
        marginBottom:normalize(20)
        //paddingBottom:dim().width*0.01,
       // paddingTop:dim().width*0.01,
    },

    mandatoryStyle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: normalize(13),
        lineHeight: normalize(16),
        color: '#FD6510',
        //paddingTop:dim().width*0.01,
        ///paddingBottom:dim().width*0.01,
    },

    bankInfoHeading: {
        marginTop: normalize(10),
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: normalize(18),
        color: '#FD6510',
       // paddingTop:dim().width*0.01,
        //paddingBottom:dim().width*0.01,
    },

    bankStyle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: normalize(15),
        color: '#888888',
        width: normalize(210),
        height: normalize(40),
    },

    branchStyle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: normalize(15),
        color: '#888888',
        width: normalize(210),
        height: normalize(40),
    },

    accountStyle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: normalize(15),
        color: '#888888',
        width: normalize(210),
        height: normalize(40),
    },

    pancardStyle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: normalize(15),
        color: '#888888',
        width: normalize(210),
        height: normalize(40),
    },

    ifscStyle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: normalize(15),
        color: '#888888',
        width: normalize(210),
        height: normalize(40),
    },


    nextButtonStyle: {
        width: normalize(190),
        height: normalize(40),
        justifyContent: 'center',
        marginLeft: normalize(20),
        borderRadius: normalize(20),
        fontSize: normalize(10),
    },

});
