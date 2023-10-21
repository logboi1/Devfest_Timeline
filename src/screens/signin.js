//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../utils/imagePath';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '../utils/theme';
import CButton from '../components/button';
import {SIZES} from '../utils/size';
import MediumText from '../utils/mediumText';
import useStore from '../../store';
import {_signInWithGoogle} from '../../firebase/firebase';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const SignIn = ({navigation}) => {
  const setUserAuthorized = useStore(state => state.setUserAuthorized);
  const setUserProfile = useStore(state => state.setUserProfile);
  const [user, setUser] = useState(null);

  const colors = useTheme();

  async function signInWithGoogle() {
    _signInWithGoogle().then(data => {
      console.log('user data=>', data);
      setUserLogin(data.user);
      navigation.navigate('Dashboard');
    });
  }

  const setUserLogin = async user => {
    try {
      // Check if the user object is present in AsyncStorage
      setUserProfile(user);
      // Save the user object to AsyncStorage during sign-in
      AsyncStorage.setItem('userObject', JSON.stringify(user));
    } catch (error) {
      console.error('Error checking user token:', error);
    }
  };

  useEffect(() => {
    const unsubscrible = auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        setUserAuthorized(true);
        setUserProfile(user);
        // Save the user object to AsyncStorage during sign-in
        AsyncStorage.setItem('userObject', JSON.stringify(user));
      } else {
        setUser(null);
        console.log('No User Found');
      }
    });

    return () => unsubscrible();
  }, []);

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
        onPress={() => signInWithGoogle()}
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
    fontSize: RFValue(12),
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
