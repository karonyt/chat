// Initialize Firebase
const firebaseConfig = {
	apiKey: "YOUR_API_KEY",
	authDomain: "YOUR_AUTH_DOMAIN",
	databaseURL: "YOUR_DATABASE_URL",
	projectId: "YOUR_PROJECT_ID",
	storageBucket: "YOUR_STORAGE_BUCKET",
	messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
	appId: "YOUR_APP_ID"
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
