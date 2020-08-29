var firebaseConfig = {
  apiKey: "AIzaSyC6Ce9J0w7KmaQovnbwQvQ797FCd7xR2Us",
  authDomain: "kalph-portfolio.firebaseapp.com",
  databaseURL: "https://kalph-portfolio.firebaseio.com",
  projectId: "kalph-portfolio",
  storageBucket: "kalph-portfolio.appspot.com",
  messagingSenderId: "906297194904",
  appId: "1:906297194904:web:843fc13f97cad4fdf013ed",
  measurementId: "G-W6EJ54CHWQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
