import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDVRDBOH1kKTIPz3lzIkBZKdauBfNmvNpU",
  authDomain: "portifolio-pedrotakahashi.firebaseapp.com",
  databaseURL: "https://portifolio-pedrotakahashi-default-rtdb.firebaseio.com",
  projectId: "portifolio-pedrotakahashi",
  storageBucket: "portifolio-pedrotakahashi.appspot.com",
  messagingSenderId: "771512214246",
  appId: "1:771512214246:web:6bd9a0ad0f554994c51127",
  measurementId: "G-7068C4941V"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


// D1kGVRhJyAQuvfl2quFO