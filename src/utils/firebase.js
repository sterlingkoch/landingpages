import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCIQQdjtmB_EkihHsJDNrdtBHxdRa3Otu4',
  authDomain: 'landing-19377.firebaseapp.com',
  databaseURL: 'https://landing-19377.firebaseio.com',
  projectId: 'landing-19377',
  storageBucket: 'landing-19377.appspot.com',
  messagingSenderId: '311016780891'
}
const fbApp = firebase.initializeApp(config)

export const db = fbApp.database()
