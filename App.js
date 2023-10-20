import React, {useEffect, useState} from 'react';
import Navigation from './src/navigation/navigattion';
import AuthNavigation from './src/navigation/auth';

const App = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
  //       setIsSignIn(true);
  //     } else {
  //       // User is signed out
  //       setIsSignIn(false);
  //     }
  //   });
  // }, []);

  if (isSignIn == true) {
    return <AuthNavigation />;
  } else {
    return <Navigation />;
  }
};

export default App;
