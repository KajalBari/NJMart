import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import SMText from '../SMText';
import SMView from '../SMView';
import SMIcons from '../SMIcons';
import {COLORS} from '../../constants/Colors';
import {styles} from './styles';

import PropTypes from 'prop-types';
import {SMButton} from '../../elements';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';

function SMDocumentPicker(props) {
  const {pickerCallBack} = props;
  const [result, setResult] = useState(DirectoryPickerResponse);
  useEffect(() => {
    pickerCallBack(result);
  }, [result]);
  return (
    <SMButton
      buttonText="Upload Document"
      type="Picker"
      onPress={async () => {
        try {
          const pickerResult = await DocumentPicker.pickSingle({
            presentationStyle: 'fullScreen',
            copyTo: 'cachesDirectory',
          });
          setResult([pickerResult]);
        } catch (e) {
          handleError(e);
        }
      }}
    />
  );
}

SMDocumentPicker.propTypes = {
  pickerCallBack: PropTypes.func,
};

export default SMDocumentPicker;
