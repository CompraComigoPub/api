import admin from 'firebase-admin'
import config from './config'

admin.initializeApp({
  credential: admin.credential.cert(config),
})

export const authentication = admin.auth()
export const firestore = admin.firestore
