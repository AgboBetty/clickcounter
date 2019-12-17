// var button = document.getElementById("clickme");
// var displayCount = document.getElementById("displayCount");
//   count = 0;
// button.onclick = function() {
//    count += 1;
//   button.innerHTML = "Click me: " + count;
//   };
//   resetButton.onclick = function() {
//     count = 0;
//     displayCount.innerHTML = count;
//   };
var count = 0;
var countButton = document.getElementById("clickme");
var displayCount = document.getElementById("displayCount");
countButton.onclick = function() {
  count++;
  displayCount.innerHTML = count;
}
resetButton.onclick = function() {
  count = 0;
  displayCount.innerHTML = count;
}
