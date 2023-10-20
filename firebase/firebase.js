// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDy5G4QM-42Sp-3YoFBJ_z4ikUHLCaI_xc',
  authDomain: 'devfest23.firebaseapp.com',
  projectId: 'devfest23',
  storageBucket: 'devfest23.appspot.com',
  messagingSenderId: '191016265955',
  appId: '1:191016265955:web:7d8ecbfda4c8e24a77fdd6',
  measurementId: 'G-1TMVDW52WZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
