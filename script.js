let h1 = document.createElement('h1');
h1.innerText = 0;
document.body.before(h1);
let nubers = 0;
let color;


let ul = document.querySelector('.ull');
ul.style.display = 'flex';

ul.style.flexDirection = 'column'
ul.style.justifyContent = 'center';
ul.style.maxWidth = '150px';
ul.style.margin = '0 auto'

// let ul = document.createElement('ul');
// for(let i = 1; i <= 2; i++){
//   let li = document.createElement('li');
//   let but = document.createElement('button');
//   but.id = "#example";
//   but.innerText = 'Example#' + i;
//   li.append(but);
//   ul.append(li);
// }
// document.body.append(ul);

// let roc = document.querySelector('#example');
// roc.innerText = '+';
// roc.addEventListener('click', function(){
//   ++ nubers;
//   h1.innerText = nubers;
 
// });

// let roc1 = document.querySelector('#example2');
// roc1.innerText = '-';
// roc1.addEventListener('click', function(){
//   -- nubers ;
//   h1.innerText = nubers;
// })
let btn1 = document.querySelector('.but-1');
let btn2 = document.querySelector('.but-2');

btn1.innerText = "+";
btn2.innerText = "-";

btn1.addEventListener('click', function(){
  nubers ++;
  h1.innerText = nubers
});

btn2.innerText = "--";
btn2.addEventListener('click', function(){
  nubers --;
  h1.innerText = nubers
});

let btn3 = document.querySelector('.but-3');
btn3.innerText = "Top";
btn3.addEventListener('click', function(){
 nubers ++;
 h1.style.marginTop = nubers + "5px"
})
let but4 = document.querySelector('.but-4');
but4.innerText = "Buttom";
but4.addEventListener('click', function(){
  nubers --;
  h1.style. marginBottom = nubers + "5px";
})

let but5 = document.querySelector('.but-5');
but5.innerText = "Color";
but5.addEventListener('click', function(){
 
  h1.style.color =   "red" ;
 
})