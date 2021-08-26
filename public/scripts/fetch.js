fetch('/check-user').then((respond) => respond.json()).then((name) => {
  const navBar = document.querySelector('.nav-bar');
  navBar.textContent = '';
  const logOut = document.createElement('a');
  logOut.href = '/sign-out';
  logOut.textContent = 'Log out';
  const username = document.createElement('h4');
  username.textContent = name;
  navBar.appendChild(logOut);
  navBar.appendChild(username);
});
