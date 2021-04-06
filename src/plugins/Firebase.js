import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

export class Fire {
  constructor() {
    this.user = null;
    this.storage = null;
    this.instance = null;
    this.firestore = null;
  }

  init(config) {
    try {
      firebase.initializeApp(config);
      this.instance = firebase;
      this.storage = firebase.storage();
      this.firestore = firebase.firestore();
    } catch (e) {
      console.dir(e);
    }
  }

  checkAuth() {
    return new Promise((resolve, reject) => {
      this.instance.auth().onAuthStateChanged((user, error) => {
        if (user) {
          resolve(user);
          this.user = user;
        } else reject()
      });
    })
  }

  async off() {
    this.app = null;
    this.user = null;
    this.storage = null;
    this.instance = null;
    this.firestore = null;
  }

  signOut() {
    return this.instance.auth().signOut().then(() => this.off())
  }
}


const app = new Fire();
app.init({
  apiKey: "AIzaSyBRJcMJ7tJeflyuBxtTV9jId0YHvUzPAj8",
  authDomain: "mydashboard-7538d.firebaseapp.com",
  databaseURL: "https://mydashboard-7538d.firebaseio.com",
  projectId: "mydashboard-7538d",
  storageBucket: "mydashboard-7538d.appspot.com",
  messagingSenderId: "747291623169",
  appId: "1:747291623169:web:2a7efa0ee1fe2bb47ea500"
})

export default app;
