import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {SMIcons} from '..';
import {normalize} from '../../constants/Platform';
import {COLORS} from '../../constants/Colors';
import {View, Text} from 'react-native';

function SMPicker(props) {
  const {
    type,
    open,
    setOpen,
    containerStyle,
    style,
    value,
    setValue,
    onSelectItem,
    items,
    setItems,
    labelStyle,
    textStyle,
    placeholder,
    placeholderStyle,
    dropDownContainerStyle,
    ArrowUpIconComponentSize,
    ArrowDownIconComponentSize,
    disabled,
    errorMessage,
    listItemLabelStyle,
    listItemContainerStyle,
  } = props;
  return (
    <View>
      <DropDownPicker
        open={open}
        disabled={disabled}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onSelectItem={onSelectItem}
        setItems={setItems}
        placeholder={placeholder}
        placeholderStyle={placeholderStyle}
        containerStyle={[styles.containerStyle, containerStyle]}
        style={[
          styles.style,
          {
            color: type === 'primary' ? COLORS.WHITE : COLORS.BRAND_BLUE,
            backgroundColor:
              type === 'primary' ? COLORS.BRAND_BLUE : COLORS.WHITE,
          },
          style,
        ]}
        labelStyle={[
          styles.labelStyle,
          {
            color: type === 'primary' ? COLORS.WHITE : COLORS.BRAND_BLUE,
          },
          labelStyle,
        ]}
        textStyle={[
          styles.textStyle,
          {
            color: type === 'primary' ? COLORS.WHITE : COLORS.BRAND_BLUE,
          },
          textStyle,
        ]}
        ArrowUpIconComponent={({style}) => (
          <SMIcons
            type="AntDesign"
            name="caretup"
            style={style}
            color={type === 'primary' ? COLORS.WHITE : COLORS.BRAND_BLUE}
            size={
              ArrowUpIconComponentSize
                ? ArrowUpIconComponentSize
                : normalize(10)
            }
          />
        )}
        ArrowDownIconComponent={({style}) => (
          <SMIcons
            type="AntDesign"
            name="caretdown"
            style={style}
            color={type === 'primary' ? COLORS.WHITE : COLORS.BRAND_BLUE}
            size={
              ArrowDownIconComponentSize
                ? ArrowDownIconComponentSize
                : normalize(10)
            }
          />
        )}
        itemSeparator
        dropDownContainerStyle={[
          styles.dropDownContainerStyle,
          {
            backgroundColor:
              type === 'primary' ? COLORS.WHITE : COLORS.BRAND_BLUE,
          },
          dropDownContainerStyle,
        ]}
        listItemLabelStyle={[
          styles.listItemLabelStyle,
          {
            color: type === 'primary' ? COLORS.BRAND_BLUE : COLORS.WHITE,
          },
          listItemLabelStyle,
        ]}
        closeAfterSelecting
        listItemContainerStyle={[
          styles.listItemContainerStyle,
          {
            color: type === 'primary' ? COLORS.BRAND_BLUE : COLORS.WHITE,
          },
          listItemContainerStyle,
        ]}
        itemSeparatorStyle={[
          styles.itemSeparatorStyle,
          {
            backgroundColor:
              type === 'primary' ? COLORS.BRAND_BLUE : COLORS.WHITE,
          },
        ]}
        tickIconStyle={[
          styles.tickIconStyle,
          {
            tintColor: type === 'primary' ? COLORS.BRAND_BLUE : COLORS.WHITE,
          },
        ]}
        listMode="SCROLLVIEW"
      />
      <View style={styles.errorMessageView}>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </View>
    </View>
  );
}

SMPicker.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setValue: PropTypes.func,
  onSelectItem: PropTypes.func,
  items: PropTypes.array,
  setItems: PropTypes.func,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  dropDownContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  placeholder: PropTypes.string,
  placeholderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  ArrowUpIconComponentSize: PropTypes.number,
  ArrowDownIconComponentSize: PropTypes.number,
  errorMessage: PropTypes.string,
  listItemLabelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  listItemContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

SMPicker.defaultProps = {
  disabled: false,
  type: 'primary',
  open: false,
  placeholder: 'Select an item',
  errorMessage: '',
};

export default SMPicker;
