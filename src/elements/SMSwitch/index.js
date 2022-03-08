import React from 'react';
import {Switch} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {styles} from './styles';
import PropTypes from 'prop-types';

function SMSwitch(props) {
  const {value, onToogle, isEnabled, style} = props;
  return (
    <Switch
      trackColor={{false: COLORS.BRAND_BLUE, true: COLORS.BRAND_BLUE}}
      thumbColor={isEnabled ? COLORS.BRAND_YELLOW : COLORS.BRAND_YELLOW}
      ios_backgroundColor={COLORS.BRAND_BLUE}
      style={style}
      onValueChange={onToogle}
      value={value}
    />
  );
}

SMSwitch.propTypes = {
  value: PropTypes.bool,
  onToogle: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default SMSwitch;
