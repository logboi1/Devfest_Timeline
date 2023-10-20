//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '../utils/theme';

// create a component
const CButton = ({title, onPress, style, titleStyle, backColor, txtColor}) => {
  const colors = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        {backgroundColor: backColor || colors.accent},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          titleStyle,
          {color: txtColor || colors.text},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    borderRadius: RFValue(6),
    paddingVertical: RFValue(4),
    height: RFValue(45),
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-Medium',
  },
});

//make this component available to the app
export default CButton;
