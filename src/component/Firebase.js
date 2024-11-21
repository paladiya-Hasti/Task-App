// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC9yn6L6D6qseSuizZNiM6UUC-ItNJ1FUY",
  authDomain: "tasi-01.firebaseapp.com",
  projectId: "tasi-01",
  storageBucket: "tasi-01.firebasestorage.app",
  messagingSenderId: "366556238378",
  appId: "1:366556238378:web:d2523130afcd2de4996953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db= getFirestore(app);

const signup =async(name,email,password)=>{
  try {
    const res=await createUserWithEmailAndPassword(auth,email,password)
    const user=res.user
    await addDoc(collection(db,"user"),{
      uid:user.uid,
      name,
      authprovider:"local",
      email,
    })
  } catch (error) {
    console.log(error)
    alert(error)
  }
}
const login =async(email,password)=>{
  try {
     await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.log(error);
    alert(error)
    
    
  }
}

const logout =()=>{
  signOut(auth)
}

export {auth,db,login,signup,logout}