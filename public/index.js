const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', btnClicked);

function btnClicked(event) {
  event.preventDefault();
  console.log('Hi Michael');
  heading.innerText = 'New file here homies';
}
