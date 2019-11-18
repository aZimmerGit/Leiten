import * as firebase from 'firebase';
import firebaseConfig from './apiKeys';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);

export default firebase;
