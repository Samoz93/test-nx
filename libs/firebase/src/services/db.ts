import { getApp, initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { FIREBASE_CONFIG } from '../constants';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

const app = initializeApp(FIREBASE_CONFIG.dev);

const fireStore = getFirestore(app);

const liveDb = getDatabase(app);

connectFirestoreEmulator(fireStore, 'localhost', 5002);
connectFunctionsEmulator(getFunctions(getApp()), 'localhost', 5001);

export { liveDb, fireStore };
