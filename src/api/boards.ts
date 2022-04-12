import { collection, getDocs, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth, firestoreDb } from 'src/firebase';
import type { IAddBoardData } from 'src/interfaces';

let userId: string;

onAuthStateChanged(firebaseAuth, (user) => {
  if (user) {
    const { uid } = user;

    userId = uid;
  }
});

export const getBoards = async (): Promise<any> => {
  const snapshot = await getDocs(collection(firestoreDb, `boards_${userId}`));

  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const addBoard = async (data: IAddBoardData): Promise<any> => {
  const reference = await addDoc(collection(firestoreDb, `boards_${userId}`), data);

  return reference.id;
};
