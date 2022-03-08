import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {SMIcons, SMText, SMView} from '..';
import {styles} from './styles';
import {COLORS} from '../../constants/Colors';
import {normalize} from '../../constants/Platform';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

function SMCalendarPicker(props) {
  const {
    onCalendarPickerPress,
    visible,
    onDismiss,
    selectedDate,
    current,
    minDate,
    maxDate,
    onDayPress,
    calendarStyle,
    errorMessage,
    mode,
  } = props;
  return (
    <>
      <TouchableOpacity
        style={[styles.datePickerView, calendarStyle]}
        onPress={onCalendarPickerPress}>
        <SMText
          type={selectedDate ? 'Paragraph' : 'Caption'}
          style={styles.dateText}>
          {selectedDate
            ? moment(selectedDate).format('DD-MM-YYYY')
            : 'DD-MM-YYYY'}
        </SMText>
        <SMIcons
          color={COLORS.BRAND_BLUE}
          name={'calendar-today'}
          type={'MaterialCommunityIcons'}
          size={normalize(22)}
        />
      </TouchableOpacity>
      {errorMessage ? (
        <SMText type="Text" style={styles.errorMessage}>
          {errorMessage}
        </SMText>
      ) : null}
      {visible && (
        <DatePicker
          modal
          open={visible}
          mode={mode}
          date={selectedDate ? selectedDate : new Date(current)}
          onConfirm={date => {
            onDismiss();
            onDayPress(date);
          }}
          textColor={COLORS.BRAND_BLUE}
          onCancel={onDismiss}
          maximumDate={maxDate ? new Date(maxDate) : null}
          minimumDate={minDate ? new Date(minDate) : null}
        />
      )}
    </>
  );
}

SMCalendarPicker.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
  selectedDate: PropTypes.any,
  current: PropTypes.string,
  minDate: PropTypes.string,
  onCalendarPickerPress: PropTypes.func,
  maxDate: PropTypes.string,
  onDayPress: PropTypes.func,
  calendarStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  errorMessage: PropTypes.string,
  mode: PropTypes.string,
};

SMCalendarPicker.defaultProps = {
  visible: false,
  selectedDate: moment().format('DD MMM YYYY'),
  current: moment().format('YYYY-MM-DD'),
  errorMessage: '',
  mode: 'date',
};

export default SMCalendarPicker;
