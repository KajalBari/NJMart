import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { dim, normalize } from '../../constants/Platform';

export const styles = StyleSheet.create({
    containerStyle: {
      minWidth:dim().width*0.9,
      minHeight:dim().height*0.8,
      position:'relative',
    },

    gradient: {
        width:dim().width*1,
         minHeight: dim().height * 0.4,
         borderBottomLeftRadius: normalize(150),
         borderBottomRightRadius: normalize(150),
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
    
       iconNameStyle:{
        display:'flex',
        alignItems:'center',  
        flexDirection:'column',
        //marginTop:normalize(50),
    },
    
    profileStyle: {
        marginTop:normalize(70),
        alignSelf:'center',
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
        marginTop:normalize(20),
    },

    divStyle:{
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
            backgroundColor: "red",
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

        profileDiv:{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
        },

        boxStyle:{
            width: normalize(300),
            height: normalize(50),
           marginLeft:normalize(20),
           marginTop:normalize(40),
            backgroundColor: "#FC8847",
            borderRadius: normalize(40),
            //borderColor:'#786C6C',
            borderWidth:1,
        },
        
        profileDetailsText:{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontSize: normalize(25),
            fontWeight:'200',
            marginTop:normalize(10),
            alignSelf:'center',
            color: "#fff",
        },


        addressStyle: {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '200',
            fontSize: normalize(20),
            color: '#888888',
            width: normalize(210),
            height: normalize(50),
            marginTop:normalize(10)
        },
        editButtonStyle:{
            width: normalize(100),
            height: normalize(50),
            marginTop: normalize(10),
            marginLeft:normalize(0),
            lineHeight: normalize(10),
            borderRadius: normalize(15),
            fontSize: normalize(20), 
        },
        ButtonStyle:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
        },
        refText:{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontSize: normalize(15),
            fontWeight:'200',
            marginTop:normalize(25),
            marginLeft:normalize(30),
            color: "black",   

        }

 });

