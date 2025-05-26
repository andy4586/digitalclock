// const clock = document.getElementById('clock')
// clock.innerHTML = new Date().toLocaleTimeString();
// setInterval(() => {
//   clock.innerHTML = new Date().toLocaleTimeString();
// }, 1000);

// document.querySelector('#clock').innerHTML = new Date().toLocaleTimeString();
// setInterval( function () {
//   document.querySelector('#clock').innerHTML = new Date().toLocaleTimeString();
// }, 1000);

const clock = document.getElementById('clock')



setInterval(() => {
let date = new Date();
clock.innerHTML = date.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});
}, 1000);

