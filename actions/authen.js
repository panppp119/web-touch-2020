import axios from 'axios'

import firebase, { auth } from '../config/firebaseConfig'

export const login = (data) => {
  auth
    .signInWithEmailAndPassword(data.email, data.password)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.warn(err)
    })
}

export const checkSession = () => {
  const token = localStorage.getItem('token')

  if (token !== null) {
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        return true
      } else {
        auth.signOut()
        window.open(`${window.location.origin}/admin`, '_self')
      }
    })
  } else {
    window.open(`${window.location.origin}/admin`, '_self')
  }
}
