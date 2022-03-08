import React from 'react';
import {COLORS} from '../../constants/Colors';
import PropTypes from 'prop-types';
import {Modal, Provider, Portal} from 'react-native-paper';
import {normalize} from '../../constants/Platform';
import {styles} from './styles';

function SMModal(props) {
  const {visible, hideModal, containerStyle} = props;

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={[
            styles.defaultContainerStyle,
            containerStyle,
          ]}>
          {props.children}
        </Modal>
      </Portal>
    </Provider>
  );
}
SMModal.defaultProps = {
  visible: false,
  containerStyle: {},
};

SMModal.propTypes = {
  visible: PropTypes.bool,
  hideModal: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default SMModal;
