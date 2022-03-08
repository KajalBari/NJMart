import React from 'react';
import {Surface} from 'react-native-paper';
import PropTypes from 'prop-types';
import {styles} from './styles';

function SMView({style, children}) {
  return <Surface style={[styles.defaultStyle, style]}>{children}</Surface>;
}

SMView.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.any,
};

SMView.defaultProps = {};

export default SMView;
