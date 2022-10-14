import React from 'react';
import {Pressable} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {styles} from './styles';
import PropTypes from 'prop-types';
import {SMIcons, SMText, SMView} from '..';
import {normalize} from '../../constants/Platform';

function SMCheckBox(props) {
  const {
    isSelected,
    onSelection,
    disabled,
    label,
    labelStyle,
    style,
    checkBoxStyle,
    checkboxIconStyle,
    checkboxIconSize,
  } = props;
  return (
    <Pressable
      disabled={disabled}
      onPress={onSelection}
      style={[styles.container, style]}>
      {isSelected ? (
        <SMView
          style={[
            styles.checkBoxSelected,
            {
              backgroundColor: disabled
                ? COLORS.SUB_COLOR_DARK_GREY
                : COLORS. SUB_COLOR_LIGHT_GREY,
            },
            checkBoxStyle,
          ]}>
          <SMIcons
            name="check"
            type="MaterialCommunityIcons"
            size={checkboxIconSize ? checkboxIconSize : normalize(15)}
            style={[
              styles.checkbox,
              {
                backgroundColor: disabled
                  ? COLORS.SUB_COLOR_DARK_GREY
                  : COLORS.SUB_COLOR_LIGHT_GREY,
              },
              checkboxIconStyle,
            ]}
          />
        </SMView>
      ) : (
        <SMView style={[styles.checkBoxNotSelected, checkBoxStyle]} />
      )}
      {label ? (
        <SMText type="Caption" style={[styles.labelStyle, labelStyle]}>
          {label}
        </SMText>
      ) : null}
    </Pressable>
  );
}

SMCheckBox.propTypes = {
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onSelection: PropTypes.func,
  labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  checkBoxStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  checkboxIconStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  checkboxIconSize: PropTypes.number,
};

SMCheckBox.defaultProps = {
  label: '',
  disabled: false,
};

export default SMCheckBox;
