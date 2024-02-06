// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAY3s9iQYL-2C348IXF3H_Ian8ctgslza4',
  authDomain: 'psychologists-services-b5270.firebaseapp.com',
  databaseURL:
    'https://psychologists-services-b5270-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'psychologists-services-b5270',
  storageBucket: 'psychologists-services-b5270.appspot.com',
  messagingSenderId: '473350768762',
  appId: '1:473350768762:web:112e991de86e77d36e53c3',
  measurementId: 'G-25ZWVR3LQE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
