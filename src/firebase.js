import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
       
                apiKey: "AIzaSyA2AvGpKCH04dwQalIkBjVa3ssedfyJxUc",
                authDomain: "clone-85412.firebaseapp.com",
                databaseURL: "https://clone-85412.firebaseio.com",
                projectId: "clone-85412",
                storageBucket: "clone-85412.appspot.com",
                messagingSenderId: "521504266363",
                appId: "1:521504266363:web:c265f5d4e411317060aade",
                measurementId: "G-R7YSFZ2HFQ"
              
})


const db = firebaseApp.firestore()

const auth = firebase.auth()

export {auth}
