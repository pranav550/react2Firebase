import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDWLxxAR0aDq_28v1qLtjmTMDbf6fjJyUA",
  authDomain: "diary-4f207.firebaseapp.com",
  databaseURL: "https://diary-4f207.firebaseio.com",
  projectId: "diary-4f207",
  storageBucket: "diary-4f207.appspot.com",
  messagingSenderId: "69007097965",
  appId: "1:69007097965:web:b94adc9b5285d92736bf64"
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref('/notes')