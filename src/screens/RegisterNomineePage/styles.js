import { StyleSheet } from 'react-native';
import { dim, normalize } from '../../constants/Platform';
import { COLORS } from '../../constants/Colors';

export const styles = StyleSheet.create({

  containerStyle: {
    minWidth: dim().width * 0.9,
    minHeight: dim().height * 10,
    position: 'relative',
  },

  containerRadio: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  inner: {
    width: normalize(12),
    height: normalize(12),
    backgroundColor: "grey",
    borderRadius: normalize(10),
  },

  outer: {
    width: normalize(20),
    height: normalize(20),
    borderWidth: 1,
    borderRadius: normalize(15),
    justifyContent: 'center',
    alignItems: 'center',
  },

  textPos: {
    marginLeft: normalize(30),
    marginTop: normalize(10),
    fontFamily: 'Inter',
    fonetStyle: "normal",
    fontWight: "200",
    fontSize: normalize(15),
    display: "flex",
    //  flexDirection: 'row',
    alignSelf: 'flex-start',
    color: "#888888",
    width: normalize(210),
    height: normalize(40),
  },

  Wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: normalize(-15)
  },

  pos: {
    marginHorizontal: normalize(15),
    alignItems: 'center',
  },

  position1: {
    fontSize: normalize(15),
    textTransform: 'capitalize',
    color: "#888888"
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
    minHeight: dim().height * 0.55,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    top: dim().height * 0.2,
    backgroundColor: '#E8E8E8',
    paddingBottom: normalize(10),
    paddingTop: normalize(10),
    flex: 1,
    borderRadius: normalize(40),
  },


  elevation: {
    elevation: 30,
    boxShadow: "-10px 4px 14px rgba(0, 0, 0, 0.25), 12px 21px 17px rgba(73, 66, 66, 0.36)",
  },

  registerStyle: {
    marginTop: normalize(10),
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '100',
    fontSize: normalize(24),
    color: '#FD6510',
  },

  mandatoryStyle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '100',
    fontSize: normalize(13),
    lineHeight: normalize(16),
    color: '#FD6510',
  },

  NomineeInfo: {
    marginTop: normalize(10),
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: normalize(18),
    color: '#FD6510',
  },

  divStyle: {
    // height: dim().height*0.6,
    // width:dim().width*0.4
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  titleStyle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: normalize(15),
    color: '#888888',
    width: normalize(210),
    height: normalize(40),
  },

  nameStyle: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: normalize(15),
    color: '#888888',
    width: normalize(210),
    height: normalize(40),
  },

  applicantRelationView: {
    //flex: 1,
   // flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'center',
    zIndex: normalize(5),
  },

  applicantRelationText: {
    fontSize: normalize(15),
    fontWeight: '700',
    color: COLORS.SUB_COLOR_DARK_GREY,
    marginHorizontal: normalize(10),
    lineHeight: normalize(20),
    marginBottom: normalize(40),
    alignSelf: 'flex-start',
    marginLeft: normalize(30),
  
  },

  applicantRelationTextBoxStyle: {
    width: normalize(135),
    height: normalize(35),
    marginTop: normalize(-1),
    alignSelf: 'flex-start',
    marginLeft: normalize(0),
    
  },

  applicantRelationPlaceholder: {
    fontSize: normalize(14),
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: normalize(10),
    marginTop: normalize(10),
  },


  DropDownContainer: {
    width: normalize(130),
    height: normalize(35),
    marginLeft: normalize(-40),
    marginTop: normalize(-20),
   
  },


  nextButtonStyle: {
    width: normalize(190),
    height: normalize(40),
    justifyContent: 'center',
    marginLeft: normalize(30),
    borderRadius: normalize(20),
    fontSize: normalize(10),
    marginTop: normalize(30),
  },

});
