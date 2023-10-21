//import liraries
import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import BoldText from '../utils/boldText';
import RegularText from '../utils/regularText';
import {useTheme} from '../utils/theme';
import {RFValue} from 'react-native-responsive-fontsize';

// create a component
const ClickCard = ({title, description, onPress}) => {
  const colors = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, {backgroundColor: colors.accent}]}>
        <BoldText customStyle={{fontSize: RFValue(14)}}>{title}</BoldText>
        <RegularText customStyle={{fontSize: RFValue(10)}}>
          {description}
        </RegularText>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    height: RFValue(60),
    borderRadius: RFValue(10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(15),
  },
});

//make this component available to the app
export default ClickCard;
