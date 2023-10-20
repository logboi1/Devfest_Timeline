import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import SignIn from '../screens/signin';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signin" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
