import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  sendPasswordResetEmail as sendResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from 'firebase/auth';

import { firebaseAuth } from 'src/firebase';

export const createUser = async (email: string, password: string): Promise<string> => {
  const {
    user: { uid },
  } = await createUserWithEmailAndPassword(firebaseAuth, email, password);

  return uid;
};

export const signIn = async (email: string, password: string): Promise<string> => {
  const {
    user: { uid },
  } = await signInWithEmailAndPassword(firebaseAuth, email, password);

  return uid;
};

export const signOut = async (): Promise<void> => {
  await signOutFirebase(firebaseAuth);
};

export const sendPasswordResetEmail = async (email: string): Promise<void> => {
  await sendResetEmail(firebaseAuth, email);
};

export const verifyCode = async (actionCode: string): Promise<void> => {
  await verifyPasswordResetCode(firebaseAuth, actionCode);
};

export const resetPassword = async (actionCode: string, newPassword: string): Promise<void> => {
  await confirmPasswordReset(firebaseAuth, actionCode, newPassword);
};
