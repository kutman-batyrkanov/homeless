let h1 = document.createElement('h1');
h1.innerText = 0;
document.body.before(h1);
let numbers = 0;
let color;

let ul = document.querySelector('.ul');
ul.style.display = 'flex';

ul.style.flexDirection = 'column'