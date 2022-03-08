import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';
import PropTypes from 'prop-types';

function SMImage(props) {
  const {children, style, resizeMode, source} = props;
  return (
    <Image
      resizeMode={resizeMode}
      source={source}
      style={[styles.defaultStyle, style]}
      {...props}>
      {children}
    </Image>
  );
}

SMImage.propTypes = {
  resizeMode: PropTypes.string,
  source: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.any,
};

SMImage.defaultProps = {};

export default SMImage;
