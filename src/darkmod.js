let dark = document.querySelector('#dark');
let html = document.querySelector('html');

dark.addEventListener('click', () => {
  if(html.classList.contains('dark')){
    html.classList.remove('dark');
  }else{
    html.classList.add('dark');
  }
}); 