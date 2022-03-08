import React from 'react';
import {Text} from 'react-native';
import SMText from '../SMText';
import SMView from '../SMView';
import SMIcons from '../SMIcons';
import {COLORS} from '../../constants/Colors';
import {styles} from './styles';
import PropTypes from 'prop-types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import OTPInputView from '@twotalltotems/react-native-otp-input';

function SMOTPInput(props) {
  const {
    style,
    onOtpEntered,
    pinCount,
    timer,
    otpContainerStyle,
    errorMessage,
    underlineStyleBase,
    underlineStyleHighLighted,
    timerTextStyle,
    code,
    secureTextEntry,
  } = props;
  return (
    <SMView>
      <OTPInputView
        style={[styles.otpcontainer, otpContainerStyle]}
        pinCount={6}
        code={code}
        // autoFocusOnLoad
        onCodeChanged={onOtpEntered}
        codeInputFieldStyle={[styles.underlineStyleBase, underlineStyleBase]}
        codeInputHighlightStyle={[
          styles.underlineStyleHighLighted,
          underlineStyleHighLighted,
        ]}
        selectionColor={COLORS.WHITE}
        secureTextEntry={secureTextEntry}
      />
      <SMView style={styles.timerView}>
        <SMText style={styles.code} type="Label">
          Code Expires in
        </SMText>
        <SMText style={[styles.labelText, timerTextStyle]} type="Timer">
          {timer}
        </SMText>
      </SMView>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </SMView>
  );
}

SMOTPInput.propTypes = {
  onOtpEntered: PropTypes.func,
  pinCount: PropTypes.number,
  timer: PropTypes.string,
  otpContainerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  errorMessage: PropTypes.string,
  timerTextStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  underlineStyleBase: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  underlineStyleHighLighted: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  code: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default SMOTPInput;
