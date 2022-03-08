import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {
  splashBottomVectorPNG,
  splashSonitixLogoPNG,
  splashIndiaFlagPNG,
} from '../../assets';
import {SMImage, SMText, SMView} from '../../elements';
import store from '../../services/storageServices';
import * as authAction from '../../actions';
import {styles} from './styles';

function Splash(props) {
  const {navigation} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    handleNavigation();
  }, []);

  const handleNavigation = async () => {
    navigation.navigate('Login');
  };

  return (
    <SMView style={styles.mainContainer}>
      <SMImage source={splashSonitixLogoPNG} style={styles.sonitixImage} />

      <SMView style={styles.bottomImageText}>
        <SMImage
          source={splashBottomVectorPNG}
          style={styles.bottomVectorImage}
        />
        <SMImage source={splashIndiaFlagPNG} style={styles.bottomIndiaFlag} />
        <SMText type="Paragraph" style={styles.bottomText}>
          Made In India
        </SMText>
      </SMView>
    </SMView>
  );
}

export default Splash;
