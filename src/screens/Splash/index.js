import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {
  splashBottomVectorPNG,
  splashSonitixLogoPNG,
  splashIndiaFlagPNG,
  NJMartLogo,
} from '../../assets';
import {SMImage, SMText, SMView} from '../../elements';
import store from '../../services/storageServices';
import * as authAction from '../../actions';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

function Splash(props) {
  const {navigation} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    handleNavigation();
  }, []);

  useEffect(() => {
     setTimeout(() => {
       navigation.navigate('LoginPage');
    }, 1000);
   }, []);


  const handleNavigation = async () => {
    //navigation.navigate('LoginPage');
  };

  return (

    <LinearGradient colors={["#FD6510","#FFBF43"]} 
    style={styles.gradient}  
    start={{x: 0.5, y: 0}} 
    end={{x: 1, y: 0.5}}>

      <SMImage 
      source={NJMartLogo} 
      style={styles.njMartImage} />

    </LinearGradient>
   
  );
}

export default Splash;
