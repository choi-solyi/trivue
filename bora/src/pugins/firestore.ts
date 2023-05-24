import firebaseConfig from "../../firebaseConfig";
import * as firebase from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  setDoc,
} from "firebase/firestore";

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProjectData = async () => {
  const docRef = doc(db, "bora", "project");
  const docSnap = await getDoc(docRef);
  if (docSnap) {
    console.log("docSnapData:", docSnap.data());
  }
};

export const getCollectionData = async (collectionName, documentName) => {
  try {
    const projectRef = collection(db, "bora", "project", collectionName);
    const q = query(projectRef);
    const querySnapshot = await getDocs(q);
    let result;

    querySnapshot.forEach((doc) => {
      if (doc.id === documentName) result = { ...doc.data() };
    });

    return result;
  } catch (e) {
    console.log("Error:", e);
  }
};

export async function setData(collection, document, setData) {
  try {
    await setDoc(doc(db, "bora", "project"), setData);
    await setDoc(doc(db, "bora", "project", collection, document), setData);
  } catch (e) {
    console.log("Error:", e);
  }
}
