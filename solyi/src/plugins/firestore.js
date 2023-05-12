import firebaseConfig from '../../firebaseConfig'
import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL, list } from 'firebase/storage'

import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const app = firebase.initializeApp(firebaseConfig)
