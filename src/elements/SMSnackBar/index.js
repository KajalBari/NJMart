import React from 'react';
import PropTypes from 'prop-types';
import {Snackbar} from 'react-native-paper';

function SMSnackBar(props) {
  const {
    visible,
    onDismiss,
    duration,
    children,
    wrapperStyle,
    style,
    actionLabel,
    onActionPress,
  } = props;
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={duration || 3000}
      wrapperStyle={wrapperStyle}
      style={style}
      action={{
        label: actionLabel || 'CLOSE',
        onPress: () => {
          onActionPress();
        },
      }}>
      {children}
    </Snackbar>
  );
}

SMSnackBar.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
  duration: PropTypes.number,
  children: PropTypes.any,
  wrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  actionLabel: PropTypes.string,
  onActionPress: PropTypes.func,
};

SMSnackBar.defaultProps = {
  visible: false,
  onDismiss: () => {},
  duration: 3000,
  wrapperStyle: {},
  style: {},
  actionLabel: 'CLOSE',
  onActionPress: () => {},
};

export default SMSnackBar;
