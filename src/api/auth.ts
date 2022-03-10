import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
} from 'firebase/auth';

import { firebaseAuth } from 'src/firebase';

export const createUser = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );
    return !!userCredential;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const signIn = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );
    return !!userCredential;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const signOut = async (): Promise<boolean> => {
  try {
    await signOutFirebase(firebaseAuth);
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
