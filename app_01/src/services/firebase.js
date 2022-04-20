import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBiEc0RTildBNOG1NWyaeYBZhM4UIjSpkc",
    authDomain: "fir-chat-7f97a.firebaseapp.com",
    projectId: "fir-chat-7f97a",
    storageBucket: "fir-chat-7f97a.appspot.com",
    messagingSenderId: "873340108417",
    appId: "1:873340108417:web:47306376aab3d2e5f2d780"
};

const app = firebase.initializeApp((firebaseConfig));//создаем firebase
export const db = app.database().ref();//для взаимодейтсвия с БД
export const auth = app.auth();//работа с авторизацией и  регистрацией