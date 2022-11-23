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
        minHeight:dim().height * 0.5,
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
    
contentRectangleStyle: {
    // paddingTop:dim().width*0.4,
     width: normalize(365),
      height: normalize(500),
      marginTop: normalize(20),
      backgroundColor: '#FFFCF8',
     borderTopLeftRadius: normalize(60),
     borderTopRightRadius: normalize(60),   
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

    arrowStyle:{
        width:normalize(30),
        height:normalize(30),
        resizeMode:'contain',
       marginTop:normalize(10),
       marginLeft:normalize(20),
    },

    downlineText:{
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
        borderWidth: normalize(4),
        width:normalize(300),
        alignSelf:'center',
        borderColor:'#B9AFAF',
        marginTop:normalize(10), 
    },
    
    downlineDetails:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start', 
    },

downlineStucture:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
},

rectangleStyle:{
     width: normalize(300),
        height: normalize(50),
       marginLeft:normalize(20),
       marginTop:normalize(20),
        backgroundColor: "#FFE1D0",
        borderRadius: normalize(10),
        borderColor:'#786C6C',
        borderWidth:1,
},

genalogyText:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    fontWeight:'200',
    marginTop:normalize(10),
    alignSelf:'center',
    color: "#FD6510",
},


rectangleStyle2:{
    width: normalize(300),
       height: normalize(50),
      marginLeft:normalize(20),
      marginTop:normalize(20),
       backgroundColor: "#FFE1D0",
       borderRadius: normalize(10),
       borderColor:'#786C6C',
       borderWidth:1,
},


treeStructureText:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    fontWeight:'200',
    marginTop:normalize(10),
    alignSelf:'center',
    color: "#FD6510",
},

rectangleStyle3:{
    width: normalize(300),
    height: normalize(50),
   marginLeft:normalize(20),
   marginTop:normalize(20),
    backgroundColor: "#FFE1D0",
    borderRadius: normalize(10),
    borderColor:'#786C6C',
    borderWidth:1,
},

directStyle:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    fontWeight:'200',
    marginTop:normalize(10),
    alignSelf:'center',
    color: "#FD6510",
},

headCountStyle:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    fontWeight:'200',
    marginTop:normalize(10),
    alignSelf:'center',
    color: "#FD6510",
},

businessStyle:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    fontWeight:'200',
    marginTop:normalize(10),
    alignSelf:'center',
    color: "#FD6510",
},

directTreeStyle:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: normalize(25),
    fontWeight:'200',
    marginTop:normalize(10),
    alignSelf:'center',
    color: "#FD6510",
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