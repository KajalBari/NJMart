import React from 'react';
import PropTypes from 'prop-types';
import {SMView} from '..';
import {styles} from './styles';

function SMFooter(props) {
  const {children, footerStyle} = props;
  return <SMView style={[styles.container, footerStyle]}>{children}</SMView>;
}

SMFooter.propTypes = {
  children: PropTypes.any,
  footerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SMFooter.defaultProps = {};

export default SMFooter;
