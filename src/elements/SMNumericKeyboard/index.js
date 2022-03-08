import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, TouchableOpacity} from 'react-native';
import {SMIcons, SMText, SMView} from '..';
import {normalize} from '../../constants/Platform';
import useStyles from './styles';

function SMNumericKeyboard(props) {
  const {style, onNumericKeyPress, onBackKeyPress, disabled} = props;
  const styles = useStyles();
  const numericData = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '6', value: '6'},
    {label: '7', value: '7'},
    {label: '8', value: '8'},
    {label: '9', value: '9'},
    {label: '', value: 'nothing'},
    {label: '0', value: '0'},
    {label: '', value: 'backspace'},
  ];

  const renderItem = ({item, index}) => {
    if (item.value === 'backspace') {
      return (
        <TouchableOpacity style={styles.keyboardKey} onPress={onBackKeyPress}>
          <SMIcons
            style={styles.backspaceIcon}
            name="keyboard-backspace"
            type="MaterialCommunityIcons"
            size={normalize(22)}
          />
        </TouchableOpacity>
      );
    } else if (item.value === 'nothing') {
      return (
        <TouchableOpacity
          style={styles.keyboardKey}
          onPress={() => onNumericKeyPress(item.value)}
          disabled={true}>
          {/* <SMText style={styles.keyText}>{item?.label}</SMText> */}
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.keyboardKey}
          onPress={() => onNumericKeyPress(item.value)}
          disabled={disabled}>
          <SMText style={styles.keyText}>{item?.label}</SMText>
        </TouchableOpacity>
      );
    }
  };

  return (
    <SMView style={[styles.container, style]}>
      <FlatList
        style={styles.flatlist}
        data={numericData}
        numColumns={3}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </SMView>
  );
}

SMNumericKeyboard.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onNumericKeyPress: PropTypes.func,
  onBackKeyPress: PropTypes.func,
  disabled: PropTypes.bool,
};

SMNumericKeyboard.defaultProps = {
  style: {},
  disabled: false,
};

export default SMNumericKeyboard;
