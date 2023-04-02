var a1 = 7;
var b1 = 16;
const numbers = function() {
    if (a1 <= b1) {
      console.log(a1);
      a1++;
      return;
    } else {
      return;
    }
}
const intervalId = setInterval(numbers, 1000);
setTimeout(function(){
    clearInterval(intervalId);
}, 1000 * (1 + (b1 - a1)));