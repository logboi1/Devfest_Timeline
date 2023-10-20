//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../utils/imagePath';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '../utils/theme';
import CButton from '../components/button';
import {SIZES} from '../utils/size';
import MediumText from '../utils/mediumText';

// create a component
const SignIn = ({navigation}) => {
  const colors = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.splash}]}>
      <Image style={styles.image} source={images.logo} />
      <MediumText customStyle={styles.tag}>
        Welcome to the biggest Tech event in Ekiti State. Google Developer
        Group, Ado Ekiti
      </MediumText>
      <CButton
        title={'Sign in'}
        style={styles.button}
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tag: {
    textAlign: 'center',
    width: SIZES.width * 0.7,
    marginTop: RFValue(50),
    lineHeight: RFValue(24),
    fontSize: RFValue(15),
  },

  image: {
    height: 120,
    width: 120,
  },

  button: {
    width: SIZES.width * 0.8,
    position: 'absolute',
    bottom: 30,
  },
});

//make this component available to the app
export default SignIn;
