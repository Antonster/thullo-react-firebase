import { collection, getDocs, addDoc, query, orderBy, Timestamp } from 'firebase/firestore';
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
  const boardsRef = collection(firestoreDb, `users/${userId}/boards`);
  const boardsSnap = await getDocs(query(boardsRef, orderBy('createTime', 'desc')));

  return boardsSnap.docs.map((boardDoc) => {
    const { title, description, image } = boardDoc.data();

    return { title, description, image, id: boardDoc.id };
  });
};

export const addBoard = async (data: IAddBoardData): Promise<any> => {
  const docData = { ...data, userId, createTime: Timestamp.now(), lastUpdateTime: Timestamp.now() };
  const docRef = await addDoc(collection(firestoreDb, `users/${userId}/boards`), docData);

  return docRef.id;
};
