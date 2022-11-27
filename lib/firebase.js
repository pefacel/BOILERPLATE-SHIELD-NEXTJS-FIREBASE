import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRERBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRERBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIRERBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRERBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRERBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIRERBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
