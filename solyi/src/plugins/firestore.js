import firebaseConfig from '../../firebaseConfig'
import * as firebase from 'firebase/app'
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  setDoc,
} from 'firebase/firestore'
import { getStorage, ref, getDownloadURL, list } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const app = firebase.initializeApp(firebaseConfig)

export async function findProjectList() {
  console.log('findProjectList')

  const db = getFirestore(app)
  // const storage = getStorage()
  try {
    //getDoc
    const docRef = doc(db, 'solyi', 'project')
    const docSnap = await getDoc(docRef)
    if (docSnap.exists) {
      console.log('DocData:', docSnap.data())
    }

    //getDocs
    const projectRef = collection(db, 'solyi', 'project', '1')
    const q = query(projectRef)
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      console.log('DocId:', doc.id)
      console.log('DocData:', doc.data())
    })
  } catch (e) {
    console.log('Error:', e)
  }
}
export async function insertProject() {
  const db = getFirestore(app)
  try {
    const docData = {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    }

    await setDoc(doc(db, 'solyi', 'project'), docData)
    await setDoc(
      doc(db, 'solyi', 'project', 'collection_name_1', 'document_name_1'),
      docData
    )
  } catch (e) {
    console.log('Error:', e)
  }
}
// findProjectList()
// insertProject()
