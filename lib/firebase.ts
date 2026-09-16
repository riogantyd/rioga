// =============================================================
// FIREBASE
// Client-side only. The site is a static export (next.config.mjs
// has output: 'export'), so there is no server to talk to —
// the contact form writes straight to Firestore from the browser.
//
// The NEXT_PUBLIC_* keys below are public by design; what protects
// your data are the Firestore rules in /firestore.rules.
// Setup instructions: /FIREBASE.md
// =============================================================

import { getApp, getApps, initializeApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// False until the env vars are filled in — the form uses this to show
// a helpful message instead of throwing.
export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

export function getDb(): Firestore {
  if (!isFirebaseConfigured) {
    throw new Error('Firebase is not configured. Copy .env.local.example to .env.local and fill it in.');
  }
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return getFirestore(app);
}

// Firestore collection the contact form writes to.
export const MESSAGES_COLLECTION = 'messages';
