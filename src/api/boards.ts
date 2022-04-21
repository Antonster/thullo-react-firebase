import {
  collection,
  updateDoc,
  getDocs,
  doc,
  addDoc,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { firebaseAuth, firestoreDb, storage } from 'src/firebase';
import type { IAddBoardData, IBoards } from 'src/interfaces';

let userId: string;

onAuthStateChanged(firebaseAuth, (user) => {
  if (user) {
    const { uid } = user;

    userId = uid;
  }
});

export const uploadImage = async (image: File, id: string): Promise<void> => {
  const storageRef = ref(storage, `images/${id}`);
  await uploadBytes(storageRef, image);
  const url = await getDownloadURL(storageRef);
  const boardListRef = doc(firestoreDb, `users/${userId}/boards/${id}`);
  await updateDoc(boardListRef, { image: url });
};

export const downloadImage = async (id: string): Promise<string> => {
  const storageRef = ref(storage, `images/${id}`);
  const url = await getDownloadURL(storageRef);

  return url;
};

export const getBoards = async (): Promise<IBoards[]> => {
  const boardsRef = collection(firestoreDb, `users/${userId}/boards`);
  const boardsSnap = await getDocs(query(boardsRef, orderBy('lastUpdateTime', 'desc')));

  const boards = boardsSnap.docs.map((userDoc) => {
    const { title, description, image } = userDoc.data();

    return { title, description, image, id: userDoc.id };
  });

  return boards;
};

export const addBoard = async (data: IAddBoardData): Promise<string> => {
  const { title, description, image } = data;
  const docData = {
    title,
    description,
    createTime: Timestamp.now(),
    lastUpdateTime: Timestamp.now(),
  };
  const docRef = await addDoc(collection(firestoreDb, `users/${userId}/boards`), docData);

  if (image) {
    uploadImage(image, docRef.id);
  }

  return docRef.id;
};
