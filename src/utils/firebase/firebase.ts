
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from "firebase/firestore";

import { Category } from "../../store/categories/categorie.types";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaju7sWKARguUtkgnQXDfJeGYNQC2gcVY",
  authDomain: "eco-website-c2215.firebaseapp.com",
  projectId: "eco-website-c2215",
  storageBucket: "eco-website-c2215.appspot.com",
  messagingSenderId: "494100759363",
  appId: "1:494100759363:web:177367aca7f9ee540025f6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();


type ObjectToAdd = {
  title: string
}

export const addCollectionUndDocument = async<T extends ObjectToAdd> (collectionKey: string, objectToAdd: T[]) : Promise<void> => {
  try {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log("Collection added successfully");
  } catch (error: any) {
    console.error("Error adding collection to Firestore:", error.message);
  }
};

export const getCategoriesAndDocuments = async () : Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
};

export type AdditionalInformation = {
  displayName?: string
}

export type UserData = {
  createdAt: Date,
  displayName: string,
  email: string,

}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation : AdditionalInformation = {}
) : Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  try {
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      // Check if required data exists before setting the document
      if (displayName && email) {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
        console.log("User document created successfully.");
      } else {
        console.error(
          "User data is incomplete; displayName and email are required."
        );
      }
    }
    
    return userSnapshot as QueryDocumentSnapshot<UserData>; 
    
  } catch (error: any) {
    console.error("Error creating or accessing user document:", error.message);
  }

};

export const createAuthUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
  ...rest
}: {
  email: string;
  password: string;
  displayName: string;
  [key: string]: any;
}) => {
  if (!email || !password) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User created successfully:", user);

    // Now, you can call createUserDocumentFromAuth if needed
    const userDocRef = await createUserDocumentFromAuth(
      { ...user, displayName },
      { ...rest }
    );
    return userDocRef;
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

export const signInAuthUserWithEmailAndPassword = async ({
  email,
  password,
  ...rest
}: {
  email: string,
  password: string,
  // [key: string]: any;

}) => {
  if (!email || !password) return;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Now, you can call createUserDocumentFromAuth if needed
    await createUserDocumentFromAuth(userCredential.user, { ...rest });

    return userCredential; // Return the UserCredential object
  } catch (error: any) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);


// Get the currently signed-in user
// This function returns a promise that resolves with the currently signed-in user (or null)
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}