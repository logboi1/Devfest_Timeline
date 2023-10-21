//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../utils/theme';
import RegularText from '../utils/regularText';
import BoldText from '../utils/boldText';
import {SIZES} from '../utils/size';

// create a component
const TopBar = ({showBack = false, step, title, navigation}) => {
  const colors = useTheme();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: RFValue(12),
        marginBottom: RFValue(20),
        backgroundColor: colors.accent, // Customize the background color
      }}>
      {showBack && (
        <TouchableOpacity delayPressIn={0} onPress={handleBackPress}>
          <Icon name="chevron-back" size={20} color={colors.text} />
        </TouchableOpacity>
      )}
      <BoldText customStyle={{fontSize: RFValue(12), marginLeft: RFValue(-20)}}>
        {title}
      </BoldText>
      {/* Customize title styles */}
      <RegularText customStyle={{fontSize: RFValue(10)}}>{step}</RegularText>
      {/* // Display the step */}
      {/* {step && (
        <RegularText customStyle={{fontSize: RFSize(10)}}>{step}</RegularText> // Display the step
      )} */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    marginTop: RFValue(15),
  },
  subtitle: {
    marginTop: RFValue(10),
    width: SIZES.width * 0.7,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default TopBar;
