
  var firebaseConfig = {
    apiKey: "AIzaSyD0DIasbWZ1I-W9SDsvRR-ORIZaja9m0i8",
    authDomain: "dana-f213c.firebaseapp.com",
    databaseURL: "https://dana-f213c-default-rtdb.firebaseio.com",
    projectId: "dana-f213c",
    storageBucket: "dana-f213c.appspot.com",
    messagingSenderId: "418504635424",
    appId: "1:418504635424:web:cd91a33dceb6caf608f845",
    measurementId: "G-E6BJ3BQLH5"
  };

firebase.initializeApp(firebaseConfig);


let contactInfo = firebase.database().ref("inquiry");


document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}


function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
