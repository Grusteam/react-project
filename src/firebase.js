import * as firebase from 'firebase/app';
import  'firebase/firestore';
import  'firebase/auth';
import { firebaseConfig } from './constants';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';


// const [user] = useAuthState()

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const auth = firebase.auth()

const getUsers = firestore.collection("users").get().then(({docs}) => {
  const data = docs.map((doc, i) => {
      return doc.data()
  });

  return data;
})

const addUser = payload => {
  firestore.collection("users").add(payload)
  .then((docRef) => {
      console.log("Document", docRef);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}

export {
    firebaseApp,
    firestore,
    auth,
    addUser,
    getUsers
}