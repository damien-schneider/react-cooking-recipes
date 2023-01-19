import firebase from 'firebase/app'
import 'firebase.firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCnoQmf2IxqC2v-4tuwB0w-OLSDZsi0R0w",
    authDomain: "poly-cooking.firebaseapp.com",
    projectId: "poly-cooking",
    storageBucket: "poly-cooking.appspot.com",
    messagingSenderId: "787647227935",
    appId: "1:787647227935:web:d61406be7e86d8b8e60d2a"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize services
const projectFirestore = firebase.firestore()

export { projectFirestore }