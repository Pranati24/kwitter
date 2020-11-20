firebaseConfig = {
      apiKey: "AIzaSyDaKf8ELfpVZyEXhty2_tJ5k8Sf3lqCQQc",
      authDomain: "kwitter-281fa.firebaseapp.com",
      databaseURL: "https://kwitter-281fa.firebaseio.com",
      projectId: "kwitter-281fa",
      storageBucket: "kwitter-281fa.appspot.com",
      messagingSenderId: "137596851664",
      appId: "1:137596851664:web:72b053080dd5bb757a15d5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");
    function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0

      });
      document.getElementById("msg").value= "";


}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

