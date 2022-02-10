/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyAhZtfIg1rKw9Wzczk7iLjGYuWxhWCPBTI",
  authDomain: "amigochat89.firebaseapp.com",
  databaseURL: "https://amigochat89-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amigochat89",
  storageBucket: "amigochat89.appspot.com",
  messagingSenderId: "440590514531",
  appId: "1:440590514531:web:7d731f21fe9af636a97b56"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
