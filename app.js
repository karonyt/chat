// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBjHhgwJ24qN4ZM0xGVVkG4S-pNqO_rwuM",
	authDomain: "chat-94055.firebaseapp.com",
	databaseURL: "https://chat-94055.firebaseio.com",
	projectId: "chat-94055",
	storageBucket: "chat-94055.appspot.com",
        messagingSenderId: "96214020304",
        appId: "1:96214020304:web:44789b8f5c7d459725eed5",
        measurementId: "G-WQNJ1LPM1S"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase database
const database = firebase.database().ref();

// Get a reference to the messages container
const messages = document.querySelector('#messages');

// Listen for new messages added to the database
database.child('messages').on('child_added', function(snapshot) {
	const message = snapshot.val();
	const messageElement = document.createElement('div');
	messageElement.textContent = message;
	messages.appendChild(messageElement);
});

// Handle the form submit event
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	const message = document.querySelector('#message').value;
	database.child('messages').push(message);
	document.querySelector('#message').value = '';
});
