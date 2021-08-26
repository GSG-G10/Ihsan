const navBar = document.querySelector('.nav-bar');

const createNavBar = (title) => {
  navBar.textContent = '';
  const logOut = document.createElement('a');
  logOut.href = '/sign-out';
  logOut.textContent = 'Log out';
  logOut.classList.add('btn-sign');
  const username = document.createElement('h4');
  username.textContent = title;
  username.classList.add('btn-sign');
  navBar.appendChild(logOut);
  navBar.appendChild(username);
};
