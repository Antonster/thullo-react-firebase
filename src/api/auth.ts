import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  sendPasswordResetEmail,
} from 'firebase/auth';

import { firebaseAuth } from 'src/firebase';

export const createUser = async (email: string, password: string): Promise<boolean> => {
  const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
  return !!userCredential;
};

export const signIn = async (email: string, password: string): Promise<boolean> => {
  const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
  return !!userCredential;
};

export const signOut = async (): Promise<void> => {
  await signOutFirebase(firebaseAuth);
};

export const resetPassword = async (email: string): Promise<void> => {
  await sendPasswordResetEmail(firebaseAuth, email);
};
