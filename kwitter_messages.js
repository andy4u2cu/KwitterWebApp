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
  username=localStorage.getItem("username");
  roomname=localStorage.getItem("roomname");
  function send(){
      message=document.getElementById("message").value;
      firebase.database().ref(roomname).push({
          name:username,
          msg:message,
          like:0
      });
            document.getElementById("message").value="";
}
function getData() {
     firebase.database().ref("/"+room_name).on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
           snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key;
                 childData = childSnapshot.val();
                  if(childKey != "purpose") {
                       firebase_message_id = childKey;
                        message_data = childData;
                        name=message_data["name"];
                        msg=message_data["msg"];
                        like=message_data["like"];
                        name_tag="<h4>"+name+"<img src='tick.png'></h4>";
                        message_tag="<h4 class='message_h4'>"+msg+"</h4>";
                        like_tag="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='update_like(this.id)'>";
                        span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
                        row=name_tag+message_tag+like_tag+span_tag;
                        document.getElementById("output").innerHTML+=row;
                    } });
                 });
                 }
function update_like(message_id){
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    likes=Number(likes)+1;
    firebase.database().ref(roomname).child(message_id).update({
        like:likes
    });
}
function LOGOUT(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html"
}