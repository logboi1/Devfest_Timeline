//import liraries
import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Timeline from '../components/timeline';
import {timelineData} from '../data/timelinedat';
import MainLayout from '../components/layout';
import {RFValue} from 'react-native-responsive-fontsize';
import BoldText from '../utils/boldText';
import RegularText from '../utils/regularText';
import TopBar from '../components/topbar';

// create a component
const EventTimelines = ({navigation}) => {
  return (
    <MainLayout
      topBar={
        <TopBar showBack title={'Event Timelines'} navigation={navigation} />
      }>
      <View style={styles.container}>
        {/* <BoldText customStyle={styles.header}>Devfest Timelines</BoldText> */}
        <RegularText>Click on timeline to see details</RegularText>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingBottom: RFValue(30), marginBottom: RFValue(30)}}>
          <Timeline data={timelineData} />
        </ScrollView>
      </View>
    </MainLayout>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(10),
  },
  header: {
    marginBottom: RFValue(10),
  },
});

//make this component available to the app
export default EventTimelines;
