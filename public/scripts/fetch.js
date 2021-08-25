fetch('/auth').then((data) => {
  const url = data.url.split('/');
  if (url[4] !== 'donate') {
    window.location = data.url;
  }
});
