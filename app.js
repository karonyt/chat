// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBjHhgwJ24qN4ZM0xGVVkG4S-pNqO_rwuM",
	authDomain: "chat-94055.firebaseapp.com",
	databaseURL: "https://chat-94055-default-rtdb.firebaseio.com/",
	projectId: "chat-94055",
	storageBucket: "chat-94055.appspot.com",
        messagingSenderId: "96214020304",
        appId: "1:96214020304:web:44789b8f5c7d459725eed5",
        measurementId: "G-WQNJ1LPM1S"
};
firebase.initializeApp(firebaseConfig);

// Firebase Realtime Databaseの設定
var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://chat-94055-default-rtdb.firebaseio.com/", // Realtime DatabaseのURL
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Firebase Realtime Databaseの初期化
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// チャットメッセージを送信する関数
function sendMessage() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  // Realtime Databaseにメッセージを追加する
  database.ref("messages").push({
    name: name,
    message: message
  });

  // メッセージ入力欄をクリアする
  document.getElementById("message").value = "";
}

// Realtime Databaseからメッセージを取得するコールバック関数
function onMessageAdded(snapshot) {
  var messages = document.getElementById("messages");
  messages.innerHTML = "";

  snapshot.forEach(function(childSnapshot) {
    var message = childSnapshot.val();
    var name = message.name;
    var text = message.message;

    var messageElement = document.createElement("li");
    var nameElement = document.createElement("strong");
    nameElement.innerText = name + ": ";
    messageElement.appendChild(nameElement);
    messageElement.appendChild(document.createTextNode(text));
    messages.appendChild(messageElement);
  });
}

// Realtime Databaseの"messages"ノードに対するリスナーを登録する
database.ref("messages").on("child_added", onMessageAdded);
