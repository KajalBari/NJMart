import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import PropTypes from 'prop-types';
import {COLORS} from '../../constants/Colors';
import {ActivityIndicator} from 'react-native-paper';

function SMTextInput(props) {
  const {
    type,
    style,
    leftElement,
    inputStyle,
    keyboardType,
    onChangeText,
    placeholder,
    placeholderTextColor,
    errorMessage,
    autoFocus,
    rightElement,
    numberOfLines,
    multiline,
    ref,
    loader,
    errorMessageStyle,
  } = props;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            type === 'primary' ? COLORS.BRAND_BLUE : COLORS.WHITE,
        },
        style,
      ]}>
      <View style={styles.inputBox}>
        {leftElement ? (
          <View style={styles.leftElement}>{leftElement}</View>
        ) : null}

        <TextInput
          {...props}
          ref={ref}
          style={[
            styles.input,
            {
              backgroundColor:
                type === 'primary' ? COLORS.BRAND_BLUE : COLORS.WHITE,
              color: type === 'primary' ? COLORS.WHITE : COLORS.BRAND_BLUE,
            },
            ,
            inputStyle,
          ]}
          keyboardType={keyboardType}
          onChangeText={value => {
            onChangeText(value);
          }}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor
              ? placeholderTextColor
              : type === 'primary'
              ? COLORS.WHITE
              : COLORS.BRAND_BLUE
          }
          autoFocus={autoFocus}
          numberOfLines={numberOfLines}
          multiline={multiline}
        />
        {rightElement ? (
          <View style={styles.rightElement}>{rightElement}</View>
        ) : null}
        {loader ? (
          <ActivityIndicator
            size="small"
            animating={true}
            color={COLORS.BRAND_YELLOW}
            style={styles.loader}
          />
        ) : null}
      </View>
      {errorMessage ? (
        <Text style={[styles.errorMessage, errorMessageStyle]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
}

SMTextInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  leftElement: PropTypes.any,
  rightElement: PropTypes.any,
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  errorMessage: PropTypes.string,
  autoFocus: PropTypes.bool,
  numberOfLines: PropTypes.number,
  multiline: PropTypes.bool,
  ref: PropTypes.any,
  type: PropTypes.string,
  loader: PropTypes.bool,
  errorMessageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SMTextInput.defaultProps = {
  autoFocus: false,
  type: 'primary',
  loader: false,
};

export default SMTextInput;
