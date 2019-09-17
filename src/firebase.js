import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyBpk_iu--_RdYDOggKKAp81YMTyxmLNipU',
  appId: '1:135251622259:web:c66695548d2d87cb',
  authDomain: 'react-ecommerce-fe71e.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-fe71e.firebaseio.com',
  messagingSenderId: '135251622259',
  projectId: 'react-ecommerce-fe71e',
  storageBucket: ''
})

export const auth = firebase.auth()
export const store = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export async function createUserProfileDocument (userAuth) {
  if (!userAuth) {
    return
  }

  const userRef = store.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth

    try {
      await userRef.set({
        createdAt: new Date(),
        displayName,
        email
      })
    } catch (err) {
      console.info('Err:', err.message)
    }
  }

  return userRef
}

export function signInGoogle () {
  return auth.signInWithPopup(provider)
}

export function signOutGoogle () {
  return auth.signOut()
}
