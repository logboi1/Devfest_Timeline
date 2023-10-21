//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainLayout from '../components/layout';
import AskQuestionPage from '../components/askaquestion';
import {timelineData} from '../data/timelinedat';
import TopBar from '../components/topbar';

// create a component
const QuestionScreen = ({navigation}) => {
  return (
    <MainLayout
      topBar={
        <TopBar showBack navigation={navigation} title={'Ask A Question'} />
      }>
      <View style={styles.container}>
        <AskQuestionPage timelineData={timelineData} navigation={navigation} />
      </View>
    </MainLayout>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default QuestionScreen;
