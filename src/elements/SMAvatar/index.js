import React from 'react';
import PropTypes from 'prop-types';
import {Avatar} from 'react-native-paper';
import {normalize} from '../../constants/Platform';
import {COLORS} from '../../constants/Colors';
import {styles} from './styles';

function SMAvatar(props) {
  const {source, style, size, type, label, labelColor, labelStyle} = props;
  if (type === 'image' && source) {
    return (
      <Avatar.Image
        size={size}
        source={source}
        style={[styles.defaultStyle, style]}
      />
    );
  }

  if (label) {
    return (
      <Avatar.Text
        size={size}
        label={label}
        color={labelColor}
        style={[styles.defaultStyle, style]}
        labelStyle={[styles.defaultLabelStyle, labelStyle]}
      />
    );
  }
}

SMAvatar.propTypes = {
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  size: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SMAvatar.defaultProps = {
  source: '',
  size: normalize(64),
  style: {},
  type: 'image',
  label: 'No Image',
  labelColor: COLORS.WHITE,
  labelStyle: {},
};

export default SMAvatar;
