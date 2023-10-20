import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import SignIn from '../screens/signin';
import Dashboard from '../screens/dashboard';
import EventTimelines from '../screens/EventTimeline';
import QuestionScreen from '../screens/question';
import SocialMedia from '../screens/socialMedia';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="timeline" component={EventTimelines} />
        <Stack.Screen name="questions" component={QuestionScreen} />
        <Stack.Screen name="socialmedia" component={SocialMedia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
