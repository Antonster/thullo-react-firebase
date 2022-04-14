/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  collection,
  // getDocs,
  doc,
  getDoc,
  setDoc,
  addDoc,
  // query,
  // orderBy,
  Timestamp,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { firebaseAuth, firestoreDb, storage } from 'src/firebase';
import type { IAddBoardRequest, IBoards } from 'src/interfaces';

let userId: string;

onAuthStateChanged(firebaseAuth, (user) => {
  if (user) {
    const { uid } = user;

    userId = uid;
  }
});

export const uploadImage = async (image: File | null, id: string): Promise<string> => {
  if (image) {
    const storageRef = ref(storage, `images/${id}`);
    uploadBytes(storageRef, image);

    return URL.createObjectURL(image);
  }

  return '';
};

export const downloadImage = async (id: string): Promise<string> => {
  const storageRef = ref(storage, `images/${id}`);
  const url = await getDownloadURL(storageRef);

  return url;
};

export const getBoards = async (): Promise<IBoards[] | []> => {
  const boardListRef = doc(firestoreDb, `users`, userId);
  const boardListSnap = await getDoc(boardListRef);

  if (boardListSnap.exists()) {
    const { boardList } = boardListSnap.data();

    const boards = await Promise.all(
      boardList.map(async (boardId: string) => {
        const boardRef = doc(firestoreDb, `users/${userId}/boards`, boardId);
        const boardSnap = await getDoc(boardRef);

        if (boardSnap.exists()) {
          const { title, description } = boardSnap.data();
          let image: string;

          try {
            image = await downloadImage(boardSnap.id);
          } catch {
            image = '';
          }

          return { title, description, image, id: boardSnap.id };
        }

        throw new Error('Board not loaded. Try again later.');
      }),
    );

    return boards;
  }

  return [];
};

export const addBoard = async (data: IAddBoardRequest): Promise<string> => {
  const docData = { ...data, createTime: Timestamp.now(), lastUpdateTime: Timestamp.now() };
  const docRef = await addDoc(collection(firestoreDb, `users/${userId}/boards`), docData);

  const boardListRef = doc(firestoreDb, `users`, userId);
  const boardListSnap = await getDoc(boardListRef);

  if (boardListSnap.exists()) {
    const { boardList } = boardListSnap.data();

    await setDoc(boardListRef, { boardList: [docRef.id, ...boardList] });
  } else {
    await setDoc(boardListRef, { boardList: [docRef.id] });
  }

  return docRef.id;
};
