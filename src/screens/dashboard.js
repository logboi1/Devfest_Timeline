//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainLayout from '../components/layout';
import MediumText from '../utils/mediumText';
import Avatar from '../components/avatar';
import images, {slideImages} from '../utils/imagePath';
import {RFValue} from 'react-native-responsive-fontsize';
import BoldText from '../utils/boldText';
import {useTheme} from '../utils/theme';
import ClickCard from '../components/card';
import Slideshow from '../components/slideshow';

// create a component
const Dashboard = ({navigation}) => {
  const colors = useTheme();

  const GotoTimeline = () => {
    navigation.navigate('timeline');
  };
  const GotoQuestion = () => {
    navigation.navigate('questions');
  };
  const GotoRSVP = () => {
    navigation.navigate('Dashboard');
  };
  const GotoSocialMedia = () => {
    navigation.navigate('socialmedia');
  };
  return (
    <MainLayout>
      <View style={styles.dashboard}>
        <View style={styles.topbar}>
          <BoldText customStyle={styles.greeting}>Hi, Ibraheem O.</BoldText>
          <Avatar size={40} source={images.splashImage} />
        </View>
        <View style={styles.content}>
          <MediumText customStyle={styles.ekaabo}>
            {`This is Devfest 2023, Ado Ekiti. \nBelow is Last year event in a glance`}
          </MediumText>

          <View style={styles.slides}>
            <Slideshow images={slideImages} />
          </View>

          <View style={styles.col}>
            <ClickCard
              title={'Order of Event'}
              description={'List of Events and it timelines'}
              onPress={GotoTimeline}
            />

            <ClickCard
              title={'Have A Question?'}
              description={'Submit your questions here'}
              onPress={GotoQuestion}
            />

            <ClickCard
              title={'RSVP'}
              description={'Not yet registered, Register here'}
              onPress={GotoRSVP}
            />

            <ClickCard
              title={'Social Media'}
              description={'Get all #Hash_tag here'}
              onPress={GotoSocialMedia}
            />
          </View>
        </View>
      </View>
    </MainLayout>
  );
};

// define your styles
const styles = StyleSheet.create({
  dashboard: {
    paddingTop: RFValue(10),
  },
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  content: {
    marginTop: RFValue(20),
  },
  ekaabo: {
    fontSize: RFValue(15),
    textAlign: 'center',
    marginBottom: RFValue(10),
  },
  col: {
    marginTop: RFValue(20),
    display: 'flex',
  },
});

//make this component available to the app
export default Dashboard;
