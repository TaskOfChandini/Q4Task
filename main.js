// Simulated user data stored in JSON format
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  // Add more users as needed
];

function signup(username, password) {
  // Check if the username is already taken
  const userExists = users.some(user => user.username === username);

  if (!userExists) {
    // Add the new user to the list
    users.push({ username, password });
    console.log('Signup successful!');
  } else {
    console.error('Username already taken. Please choose another.');
  }
}
document.getElementById('task1').style.display = 'block';
