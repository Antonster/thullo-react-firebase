import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDakzPySpdIR_gxBxph410yBoLS_Y-au9o',
  authDomain: 'thullo-react.firebaseapp.com',
  projectId: 'thullo-react',
  storageBucket: 'thullo-react.appspot.com',
  messagingSenderId: '287649253082',
  appId: '1:287649253082:web:55bb475c92241b8f7407e3',
  measurementId: 'G-Z43WJ47222',
};

initializeApp(firebaseConfig);

export const firebaseAuth = getAuth();
export const firestore = getFirestore();
