const navBar = document.querySelector('.nav-bar');
const password = document.querySelector('#password');
const passError = document.querySelector('.error');
const form = document.querySelector('form');
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
form.addEventListener('submit', (event) => {
  if (password.value.length < 6) {
    event.preventDefault();
    passError.textContent = 'PASSWORD SHOULD BE 6 CHARACTERS AT LEAST';
    password.style.border = '2px solid red';
  } else {
    password.style.border = '1px solid #827e7e';
  }
});
