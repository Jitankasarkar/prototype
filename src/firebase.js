import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAyJWATb-0nlcawEXMSrnxi4G3uF_MLOQM",
  authDomain: "karigari-41668.firebaseapp.com",
  databaseURL: "https://karigari-41668-default-rtdb.firebaseio.com",
  projectId: "karigari-41668",
  storageBucket: "karigari-41668.firebasestorage.app",
  messagingSenderId: "751065713019",
  appId: "1:751065713019:web:bfd194ab1bb3afe4e955de",
  measurementId: "G-0RN31N4XPL"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };