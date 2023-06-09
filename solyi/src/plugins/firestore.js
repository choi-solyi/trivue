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
  orderBy,
} from 'firebase/firestore'
import { getStorage, ref, getDownloadURL, list } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const app = firebase.initializeApp(firebaseConfig)

export async function findProjectList() {
  const db = getFirestore(app)
  const projectList = []
  // const storage = getStorage()
  try {
    //getDocs
    const projectRef = collection(db, 'solyi', 'portfolio', 'project')
    const q = query(projectRef, orderBy('updated', 'desc'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      projectList.push({ id: doc.id, data: doc.data() })
    })

    return projectList
  } catch (e) {
    console.log('Error:', e)
  }
}

export async function findWorkList() {
  const db = getFirestore(app)
  const workList = []
  // const storage = getStorage()
  try {
    //getDocs
    const workRef = collection(db, 'solyi', 'portfolio', 'work')
    const q = query(workRef, orderBy('start', 'desc'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      workList.push({ id: doc.id, data: doc.data() })
    })

    return workList
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
