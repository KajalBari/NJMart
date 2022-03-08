import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import SMText from '../SMText';
import SMView from '../SMView';
import SMIcons from '../SMIcons';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';
import {styles} from './styles';
import PropTypes from 'prop-types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Checkbox, ProgressBar} from 'react-native-paper';

function SMProgressbar(props) {
  const {value, color, pstyle} = props;
  return (
    <SMView style={styles.container}>
      <ProgressBar progress={value} color={color} style={pstyle} />
      <SMText
        style={{color: color, marginLeft: normalize(30)}}
        type="Paragraph">
        {value * 100} %
      </SMText>
    </SMView>
  );
}

SMProgressbar.propTypes = {
  value: PropTypes.number,
  color: PropTypes.any,
  pstyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default SMProgressbar;
