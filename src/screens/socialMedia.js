//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainLayout from '../components/layout';

// create a component
const SocialMedia = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>SovialMedia</Text>
      </View>
    </MainLayout>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default SocialMedia;
