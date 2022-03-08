import React from 'react';
import {Portal, Dialog} from 'react-native-paper';
import PropTypes from 'prop-types';
import {styles} from './styles';

function SMDialog(props) {
  const {
    visible,
    onDismiss,
    title,
    content,
    actions,
    dismissable,
    dialogStyle,
    dialogTitleStyle,
    dialogContentStyle,
    dialogActionsStyle,
  } = props;
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={() => onDismiss(false)}
        dismissable={dismissable}
        style={[styles.defaultDialogStyle, dialogStyle]}>
        {title && (
          <Dialog.Title style={[styles.dialogTitleStyle, dialogTitleStyle]}>
            {title}
          </Dialog.Title>
        )}
        {content && (
          <Dialog.Content
            style={[styles.dialogContentStyle, dialogContentStyle]}>
            {content}
          </Dialog.Content>
        )}
        {actions && (
          <Dialog.Actions
            style={[styles.dialogActionsStyle, dialogActionsStyle]}>
            {actions}
          </Dialog.Actions>
        )}
      </Dialog>
    </Portal>
  );
}

SMDialog.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
  title: PropTypes.any,
  content: PropTypes.any,
  actions: PropTypes.any,
  dismissable: PropTypes.bool,
  dialogTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  dialogContentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  dialogActionsStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  dialogStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SMDialog.defaultProps = {
  visible: false,
  title: null,
  content: null,
  actions: null,
  dismissable: false,
  dialogTitleStyle: {},
  dialogContentStyle: {},
  dialogActionsStyle: {},
  dialogStyle: {},
};

export default SMDialog;
