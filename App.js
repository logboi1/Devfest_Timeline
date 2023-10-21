import React, {useEffect, useState} from 'react';
import Navigation from './src/navigation/navigattion';
import AuthNavigation from './src/navigation/auth';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useStore from './store';

const App = () => {
  const setUserProfile = useStore(state => state.setUserProfile);
  const setUserAuthorized = useStore(state => state.setUserAuthorized);
  const userAuthorized = useStore(state => state.userAuthorized);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserSignIn = async () => {
      try {
        // Check if the user object is present in AsyncStorage
        const userObject = await AsyncStorage.getItem('userObject');

        if (userObject) {
          const parsedUser = JSON.parse(userObject);
          setUser(parsedUser);

          setUserAuthorized(true);
          // You can also set the user profile here if needed
          setUserProfile(user);
        } else {
          setUserAuthorized(false);
          console.log('No User Token Found');
        }
      } catch (error) {
        console.error('Error checking user token:', error);
      }
    };

    checkUserSignIn();
  }, []);

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

  // if (userAuthorized === true) {
  //   return ;
  // } else {
  //   return <AuthNavigation />;
  // }

  return <Navigation />;
};

export default App;
