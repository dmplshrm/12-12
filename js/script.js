
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDjCOg9kp4ZqOVfmt1jr0wjQWjymfmZQ_s",
    authDomain: "myapp-4d1fb.firebaseapp.com",
    databaseURL: "https://myapp-4d1fb.firebaseio.com",
    projectId: "myapp-4d1fb",
    storageBucket: "myapp-4d1fb.appspot.com",
    messagingSenderId: "211743012586"
  };
  firebase.initializeApp(config);

    var db = firebase.firestore();
    var customersRef = db.collection("customers");
    customersRef.get().then(function(snapshot){
    console.log("Profile data:", snapshot.docs[0].data());
    document.getElementById("name").innerHTML = snapshot.docs[0].data()["name"];
    document.getElementById("website").innerHTML = snapshot.docs[0].data()["website"];
    document.getElementById("phone").innerHTML = snapshot.docs[0].data()["phone"];
    document.getElementById("email").innerHTML = snapshot.docs[0].data()["email"];
    document.getElementById("facebookId").innerHTML = snapshot.docs[0].data()["facebookId"];
    document.getElementById("adwordId").innerHTML = snapshot.docs[0].data()["adwordId"];
    document.getElementById("budget").innerHTML = snapshot.docs[0].data()["budget"];

/*  var ref = firebase.database().ref("customers/iTsJ2nv0p6OLcF7oZe7O");
  ref.once("value")
    .then(function(snapshot) {
   var name = snapshot.docs("name").val(); // {first:"Ada",last:"Lovelace"}
   var facebookId = snapshot.docs("facebookId").val(); // "Ada"
  // var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
   //var age = snapshot.child("age").val();*/
}).catch(function(error)
{
  console.log("Error getting profile details:", error);
});
