import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'
import 'firebase/storage'

export let app: FirebaseApp;

//보안 위해서 환경변수로 변환(.env파일)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENTER_ID,
  appId: process.env.REACT_APP_ID,
};

// 앱을 가져올때 앱이 initiallized됐다면 초기화된 앱을 가져오고
// 아니면 초기화
try {
  app = getApp("app")
} catch(e){
  app = initializeApp(firebaseConfig, "app")
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;