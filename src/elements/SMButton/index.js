import React from 'react';
import { TouchableOpacity, ActivityIndicator, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import SMText from '../SMText';
import SMView from '../SMView';
import SMIcons from '../SMIcons';
import { COLORS } from '../../constants/Colors';
import { styles } from './styles';

const ButtonColor = type => {
  switch (type) {
    case 'primary':
      return {
        backgroundColor: COLORS.BRAND_BLUE,
        textColor: COLORS.BRAND_YELLOW,
        borderColor: COLORS.TRANSPARENT,
      };
    case 'secondary':
      return {
        backgroundColor: COLORS.BRAND_YELLOW,
        textColor: COLORS.BRAND_BLUE,
        borderColor: COLORS.TRANSPARENT,
      };
    case 'link':
      return {
        backgroundColor: COLORS.TRANSPARENT,
        textColor: COLORS.BRAND_BLUE,
        borderColor: COLORS.TRANSPARENT,
      };
    case 'bluewhite':
      return {
        backgroundColor: COLORS.WHITE,
        textColor: COLORS.BRAND_BLUE,
        borderColor: COLORS.TRANSPARENT,
      };
    case 'whitegray':
      return {
        backgroundColor: COLORS.WHITE,
        textColor: '#535353',
        borderColor: COLORS.TRANSPARENT,
      };
    case 'whitegreen':
      return {
        backgroundColor: COLORS.WHITE,
        textColor: '#43930e',
        borderColor: COLORS.TRANSPARENT,
      };
    case 'whitered':
      return {
        backgroundColor: COLORS.WHITE,
        textColor: '#d3191a',
        borderColor: COLORS.TRANSPARENT,
      };
    case 'whiteblue':
      return {
        backgroundColor: COLORS.WHITE,
        textColor: '#07325f',
        borderColor: COLORS.TRANSPARENT,
      };
    case 'nextbutton':
      return{
        backgroundColor: "rgba(253, 101, 16, 0.83)",
        textColor:"#fff",
        borderColor: COLORS.TRANSPARENT,
      };

    default:
      return {
        backgroundColor: COLORS.BRAND_BLUE,
        textColor: COLORS.BRAND_YELLOW,
        borderColor: COLORS.TRANSPARENT,
      };
  }
};

function SMButton(props) {
  const {
    type,
    loader,
    buttonText,
    subTitleStyle,
    buttonSubTitle,
    backgroundColor,
    borderColor,
    textColor,
    errorMessage,
    onPress,
    disableButton,
    buttonStyle,
    textStyle,
    leftIcon,
    leftIconStyle,
    rightIcon,
    rightIconStyle,
    leftElement,
    rightElement,
  } = props;
  return (
    <View>
      <TouchableOpacity
        disabled={disableButton}
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor: disableButton
              ? COLORS.SUB_COLOR_LIGHT_GREY
              : backgroundColor
                ? backgroundColor
                : ButtonColor(type).backgroundColor,
            borderColor: disableButton
              ? COLORS.SUB_COLOR_LIGHT_GREY
              : borderColor
                ? borderColor
                : ButtonColor(type).borderColor,
          },
          buttonStyle,
        ]}>
        {leftIcon ? (
          <SMIcons
            size={leftIcon.size}
            type={leftIcon.type}
            name={leftIcon.name}
            color={leftIcon.color}
            style={[styles.defaultleftIconStyle, leftIconStyle]}
          />
        ) : null}
        {leftElement ? leftElement : null}
        <SMView style={{ backgroundColor: COLORS.TRANSPARENT }}>
          {buttonText ? (
            <SMText
              type="Body_1"
              style={[
                styles.defaultButtonTextStyle,
                {
                  color: disableButton
                    ? COLORS.SUB_COLOR_DARK_GREY
                    : textColor
                      ? textColor
                      : ButtonColor(type).textColor,
                },
                textStyle,
              ]}>
              {buttonText}
            </SMText>
          ) : null}
          {buttonSubTitle ? (
            <SMText
              type={'Caption'}
              style={[styles.defaultButtonSubtitleStyle, subTitleStyle]}>
              {buttonSubTitle}
            </SMText>
          ) : null}
        </SMView>
        {loader ? (
          <ActivityIndicator
            style={styles.defaultLoaderStyle}
            size="small"
            color={textColor ? textColor : ButtonColor(type).textColor}
          />
        ) : null}
        {rightIcon ? (
          <SMIcons
            size={rightIcon.size}
            type={rightIcon.type}
            name={rightIcon.name}
            style={[styles.defaultrightIconStyle, rightIconStyle]}
          />
        ) : null}
        {rightElement ? rightElement : null}
      </TouchableOpacity>
      <View style={styles.errorMessageView}>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </View>
    </View>
  );
}

SMButton.propTypes = {
  type: PropTypes.string,
  loader: PropTypes.bool,
  buttonText: PropTypes.string,
  subTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  buttonSubTitle: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
  disableButton: PropTypes.bool,
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  leftIcon: PropTypes.object,
  leftIconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rightIcon: PropTypes.object,
  rightIconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  leftElement: PropTypes.node,
  rightElement: PropTypes.object,
  errorMessage: PropTypes.string,
};

SMButton.defaultProps = {
  type: 'Primary',
};

export default SMButton;
