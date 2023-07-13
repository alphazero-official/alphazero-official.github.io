var text = "stuff like this"
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', "'"];
var output = "";
var progress = 0;
var len = 0;


function glitch() {
  len = text.length;
  if (progress >= len) {
    return;
  }  
  var randomNums = Math.floor(Math.random() * alpha.length)
  if (alpha[randomNums] == text[progress]) {
    output += text[progress];
    document.getElementById("text").textContent = `${output}`
    progress++;
  } else {
    document.getElementById("text").textContent = `${output}${alpha[randomNums]}`
  }
  requestAnimationFrame(glitch);
}
glitch()