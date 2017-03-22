let headline = document.querySelector('h1');
let btn = document.querySelector('#show-headline');

btn.addEventListener('click', function() {
  headline.classList.add('show');
})
