export { getApp, initializeApp } from 'firebase/app';
export { GithubAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
export type { User as FirebaseUser } from 'firebase/auth';

let selfHostedConfig: any;
if (process.env.FIREBASE_CONFIG) {
  try {
    selfHostedConfig = JSON.parse(process.env.FIREBASE_CONFIG);
  } catch {
    // eslint-disable-next-line no-console
    console.warn('Failed to parse FIREBASE_CONFIG. Falling back to default config.');
  }
}

export const firebaseConfig = selfHostedConfig || {
  apiKey: "AIzaSyC7BFjjlzsvkYL-Yo4rdMkMvIMEN_sxJbA",
  authDomain: "discimg-e1b4c.firebaseapp.com",
  projectId: "discimg-e1b4c",
  storageBucket: "discimg-e1b4c.firebasestorage.app",
  messagingSenderId: "754032537995",
  appId: "1:754032537995:web:65bdba5e82c4afc5e1ff8e"
};
