import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBr0bw6tFJBnTWIvoAARsJJAvv_xDoOJt8",
    authDomain: "mighty-ducks-1d0f0.firebaseapp.com",
    databaseURL: "https://mighty-ducks-1d0f0.firebaseio.com",
    projectId: "mighty-ducks-1d0f0",
    storageBucket: "mighty-ducks-1d0f0.appspot.com",
    messagingSenderId: "1058643204572",
    appId: "1:1058643204572:web:9f9f35e4219ef2edba5719",
    measurementId: "G-CVXGJN982C"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(! snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
      console.log('error created user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
