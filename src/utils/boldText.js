//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from './theme';

// create a component
const BoldText = ({selectable, customStyle, children, customColor}) => {
  const colors = useTheme();
  return (
    <View>
      <Text
        allowFontScaling={false}
        selectable={selectable}
        style={[
          styles.defaultStyles,
          customStyle,
          {color: customColor || colors.text},
        ]}>
        {children}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  defaultStyles: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(16),
    fontWeight: '700',
  },
});

//make this component available to the app
export default BoldText;
