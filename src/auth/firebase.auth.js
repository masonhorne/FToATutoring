import firebase from "firebase";

export default function initFirebase() {
  var firebaseConfig = {
    apiKey: "AIzaSyCluxbExMDhQOgH48obJICBJhKIHK7kPW4",
    authDomain: "tutoring-bd530.firebaseapp.com",
    projectId: "tutoring-bd530",
    storageBucket: "tutoring-bd530.appspot.com",
    messagingSenderId: "605155186895",
    appId: "1:605155186895:web:062c6b0418533acd94bfba",
    measurementId: "G-BD5VCVXSX9"
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  firebase.analytics();
}
