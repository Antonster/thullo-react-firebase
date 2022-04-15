import {
  collection,
  updateDoc,
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
          const { title, description, image } = boardSnap.data();

          return { title, description, image, id: boardSnap.id };
        }

        throw new Error('Board not loaded. Try again later.');
      }),
    );

    return boards;
  }

  return [];
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

  const boardListRef = doc(firestoreDb, `users`, userId);
  const boardListSnap = await getDoc(boardListRef);

  if (boardListSnap.exists()) {
    const { boardList } = boardListSnap.data();

    await setDoc(boardListRef, { boardList: [docRef.id, ...boardList] });
  } else {
    await setDoc(boardListRef, { boardList: [docRef.id] });
  }

  if (image) {
    uploadImage(image, docRef.id);
  }

  return docRef.id;
};
