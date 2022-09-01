//      Modal       //

var b = document.getElementsByClassName("b");
var x = document.getElementsByClassName("x");

b[0].addEventListener("click", function () {
  document.getElementsByClassName("c-modal")[0].style.display = "block";
});

x[0].addEventListener("click", function () {
  document.getElementsByClassName("c-modal")[0].style.display = "none";
});

//      PreLoader        //

function loading() {
  document.getElementById("preloader").style.display = "none";
}

//         Increment & Decrement           //

var res = document.getElementById("value");
var btn = document.querySelectorAll("button");
var t = document.getElementsByClassName('t');

t[0].style.marginLeft = "380px";
res.style.fontSize = "80px";
res.style.fontWeight = "500";
res.style.marginBottom = "32px";
res.style.color = "white";

btn[0].addEventListener("click", function () {
    res.style.color = "green";
    res.innerText = parseInt(res.innerText) + 1;
    var val = parseInt(res.innerText);

    if (val >= 20) {
        alert('Value reach the maximum level ! Please Stop');
        res.innerText = '20';
        res.style.color = 'red';
    }
});

btn[1].addEventListener("click", function () {
    res.style.color = "green";
    res.innerText = parseInt(res.innerText) - 1;
    
    var val = parseInt(res.innerText);

    if (val <= 0) {
      alert("Value reach the minimum level ! Please Stop");
      res.innerText = "0";
      res.style.color = "red";
    }
});

//       Guess number       //

var randomNumber = Math.floor(Math.random() * 5);
function guessNumber() {
  var value = formData.numberValue.value;
  if (value == randomNumber) {
    alert("congratulation");
  } else {
    alert("looser");
  }
}
var card = document.getElementsByClassName("card");
card[0].style.backgroundColor = "black";
card[2].style.backgroundColor = "#104087";
card[2].style.color = "white";

