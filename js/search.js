const target = document.querySelector('#dynamic');
const stringArr = ['Go to project "hanbang"']
const selectString = stringArr[0];
const selectStringArr = selectString.split('')
// TYPING EFFECT JS
setTimeout(function() {

  function dynamic(startArr) {
    if(startArr.length > 0) {
      target.textContent += startArr.shift();
      setTimeout(function() {
        dynamic(startArr);
      },100);
    }
  }

  dynamic(selectStringArr)

}, 1000);

// console.log(selectString);
// console.log(selectStringArr);

// CERSER EFFECT JS 
function blink() {
target.classList.toggle('active');
}
setInterval(blink, 500)