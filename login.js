




// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from reloading the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);
});
