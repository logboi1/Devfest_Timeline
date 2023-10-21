//import liraries
import React, {useState} from 'react';
import {View, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import MainLayout from '../components/layout';
import MediumText from '../utils/mediumText';
import Avatar from '../components/avatar';
import images, {slideImages} from '../utils/imagePath';
import {RFValue} from 'react-native-responsive-fontsize';
import BoldText from '../utils/boldText';
import {useTheme} from '../utils/theme';
import ClickCard from '../components/card';
import Slideshow from '../components/slideshow';
import CustomAlert from '../components/customAlert';
import useStore from '../../store';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Dashboard = ({navigation}) => {
  const userProfile = useStore(state => state.userProfile);
  const setUserProfile = useStore(state => state.setUserProfile);
  const setUserAuthorized = useStore(state => state.setUserAuthorized);

  const [alertVisible, setAlertVisible] = useState(false);

  const colors = useTheme();

  const showSignOut = () => {
    setAlertVisible(true);
  };

  const SignOut = () => {
    setAlertVisible(false);
    navigation.navigate('Signin');
  };

  const handleLogout = async () => {
    try {
      // Clear the user token from AsyncStorage during sign-out
      await AsyncStorage.removeItem('userObject');
      // Redirect the user to the login screen
      setUserAuthorized(false);
      navigation.navigate('Signin');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const GotoTimeline = () => {
    navigation.navigate('timeline');
  };
  const GotoQuestion = () => {
    navigation.navigate('questions');
  };
  const GotoRSVP = () => {
    Linking.openURL('https://bit.ly/devfestado23').catch(err =>
      console.error('An error occurred: ', err),
    );
  };
  const GotoSocialMedia = () => {
    navigation.navigate('socialmedia');
  };

  const GotoAllQuestions = () => {
    navigation.navigate('viewquestions');
  };

  return (
    <MainLayout>
      <View style={styles.dashboard}>
        <View style={styles.topbar}>
          <BoldText customStyle={styles.greeting}>
            Hi, {userProfile?.displayName}
          </BoldText>
          <TouchableOpacity onPress={showSignOut}>
            <Avatar size={40} source={{uri: userProfile?.photoURL}} />
          </TouchableOpacity>
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
              description={'List of Events, Speakers and it timelines'}
              onPress={GotoTimeline}
            />

            <ClickCard
              title={'Have A Question?'}
              description={'Submit your questions here'}
              onPress={GotoQuestion}
            />
            <ClickCard
              title={'View Questions'}
              description={'Get all Submitted question'}
              onPress={GotoAllQuestions}
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

      <CustomAlert
        visible={alertVisible}
        title={'Hmmm'}
        btntitle={'Sign out'}
        type="fail"
        message="Bye Bye to swags and fun"
        onClose={handleLogout}
      />
    </MainLayout>
  );
};

// define your styles
const styles = StyleSheet.create({
  dashboard: {
    paddingTop: RFValue(10),
  },
  greeting: {
    fontSize: RFValue(13),
  },
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    marginTop: RFValue(10),
  },
  ekaabo: {
    fontSize: RFValue(12),
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
