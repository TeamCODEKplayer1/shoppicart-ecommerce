// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBjOU9axXwrxrLsNXRvQV3tJfc0a1eic0E',
  authDomain: 'shoppicart-f7d48.firebaseapp.com',
  projectId: 'shoppicart-f7d48',
  storageBucket: 'shoppicart-f7d48.appspot.com',
  messagingSenderId: '704816941627',
  appId: '1:704816941627:web:3a04e6e82e0e526753ea1e',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const fireDB = getFirestore(app)
const auth = getAuth(app)

export { fireDB, auth }
