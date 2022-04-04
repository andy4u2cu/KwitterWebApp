
var firebaseConfig = {
      apiKey: "AIzaSyDw62O4NZxRUknMJ4K1k2SRro03A2WAG2c",
      authDomain: "kwitterwebapp-79d64.firebaseapp.com",
      databaseURL: "https://kwitterwebapp-79d64-default-rtdb.firebaseio.com",
      projectId: "kwitterwebapp-79d64",
      storageBucket: "kwitterwebapp-79d64.appspot.com",
      messagingSenderId: "525918148808",
      appId: "1:525918148808:web:07f905f2be0c67d81e6dfd"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
    document.getElementById("name_print").innerHTML="WELCOME "+user_name;
    function addRoom(){
          room_name=document.getElementById("roomname").value;
          firebase.database().ref("/").child(room_name).update({
             purpose:"adding room name"   
          });
          localStorage.setItem("roomname",room_name);
          window.location="kwitter_messages.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='roomname' id="+Room_names+"onclick='redirect(this.id)'>"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirect(name){
      localStorage.setItem("roomname",name);
      window.location="kwitter_messages.html";
}
function LOGOUT(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html"
}