import firebase from "../plugins/Firebase";

const db = firebase.firestore();
class Api {
  get(collectionName) {
    return db.collection(collectionName).get().then(response => {
      const values = [];
      response.forEach((doc) => values.push(doc.data()))
      return values;
    })
  }

  put() {

  }

  post() {

  }

  delete() {

  }
}

export const api = new Api()
