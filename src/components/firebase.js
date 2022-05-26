import {initializeApp}from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA3kOpcK10CeRHCIec9My3MYsQZ7zawmeI",
  authDomain: "auth-project-1e8bf.firebaseapp.com",
  projectId: "auth-project-1e8bf",
  storageBucket: "auth-project-1e8bf.appspot.com",
  messagingSenderId: "91797246462",
  appId: "1:91797246462:web:799827401ebdf64f0c30af",
  measurementId: "G-8L4HCMCY9R",
};
const app =initializeApp(firebaseConfig);
const auth= getAuth(app);

const provider= new GoogleAuthProvider()

export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        alert("Welcome to nutri-bud")
    }).catch((error)=>{
        console.log(error)
    })
}