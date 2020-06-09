import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

const appConfig = {
    apiKey: "AIzaSyCa2Cvrc3p7vM61L8njLxoj0NSx0d5gGto",
    authDomain: "shockball-news.firebaseapp.com",
    databaseURL: "https://shockball-news.firebaseio.com",
    projectId: "shockball-news",
    storageBucket: "shockball-news.appspot.com",
    messagingSenderId: "6145159979",
    appId: "1:6145159979:web:77cfdb5cc95f12a5884b6e"
}

const firebaseApp = firebase.initializeApp(appConfig)

const db = (firebaseApp as any).firestore()

export {
    firebase,
    db,
}
