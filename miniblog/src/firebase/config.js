import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD2BDqvssfyH1KkTdRPcoMGgkYdSQ7ceOU',
  authDomain: 'miniblog-cc8c5.firebaseapp.com',
  projectId: 'miniblog-cc8c5',
  storageBucket: 'miniblog-cc8c5.appspot.com',
  messagingSenderId: '1056866405269',
  appId: '1:1056866405269:web:5018455459599a7c33449c',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
