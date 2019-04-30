import firebase from 'firebase';
import Rebase from 're-base';

const config = {
   apiKey: "AIzaSyDubFeN8IP9Mte26ylfIcCNOLGaxeeNWMc",
   authDomain: "webfruit-38af7.firebaseapp.com",
   databaseURL: "https://webfruit-38af7.firebaseio.com",
   projectId: "webfruit-38af7",
   storageBucket: "webfruit-38af7.appspot.com",
   messagingSenderId: "996615275975"
 };

 const app = firebase.initializeApp(config);
 const base = Rebase.createClass(app.database());

 export default base;