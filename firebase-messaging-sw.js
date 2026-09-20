importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// REPLACE THIS WITH YOUR FIREBASE CONFIG
firebase.initializeApp({
  apiKey: "AIzaSyBjUiwyMmbJ-djwl-3v1nNPpPmY5gjQOSI",
  authDomain: "govjobfind-1e0ad.firebaseapp.com",
  projectId: "govjobfind-1e0ad",
  storageBucket: "govjobfind-1e0ad.firebasestorage.app",
  messagingSenderId: "993266902686",
  appId: "1:993266902686:web:85280c433b9b37c7467d8f"
});

const messaging = firebase.messaging();

// This handles notifications when the user's browser is in the background
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
