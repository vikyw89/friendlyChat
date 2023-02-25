/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyAzQPKgEhY_-3-dsrI0nKJ8P7MPaD5OE5Q",
  authDomain: "friendlychat-d05d6.firebaseapp.com",
  projectId: "friendlychat-d05d6",
  storageBucket: "friendlychat-d05d6.appspot.com",
  messagingSenderId: "733462038870",
  appId: "1:733462038870:web:04a7c7f9f3479110baeef7"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}