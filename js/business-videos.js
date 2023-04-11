// window.addEventListener('load', () => {
//     const randomNum = Math.floor(Math.random() * 2) + 1;
//     if (randomNum === 1) {
//         document.getElementById('first-customer').style.display = 'flex';
//     } else {
//         document.getElementById('second-customer').style.display = 'flex';
//     }
// });

let queuePos = localStorage.getItem('queuePos');

if (!queuePos) {
  queuePos = 1;
  localStorage.setItem('queuePos', queuePos);
}

if (queuePos == 1) {
  document.getElementById('first-customer').style.display = 'flex';
  document.getElementById('second-customer').style.display = 'none';
} else {
  document.getElementById('first-customer').style.display = 'none';
  document.getElementById('second-customer').style.display = 'flex';
}

queuePos++;
if (queuePos > 2) {
  queuePos = 1;
}
localStorage.setItem('queuePos', queuePos);