const button = document.getElementById('submit');

fetch('/auth').then((data) => {
  const url = data.url.split('/');
  if (url[4] !== 'donate') {
    window.location = data.url;
  }
});

// button.addEventListener('click', (e) => {
//   e.preventDefault();

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   fetch('/sign-in', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8',
//     },
//     body: JSON.stringify({
//       email,
//       password,
//       confirmPassword,
//       role,
//       mobile,
//     }),
//   })
//     .then((response) => response.json())
//     .then((res) => console.log('response', res))
//     .catch((err) => console.log(err));
// });
