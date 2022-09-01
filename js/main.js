//      Modal       //

var b = document.getElementsByClassName('b');
var x = document.getElementsByClassName('x');

b[0].addEventListener('click', function () {
    document.getElementsByClassName('c-modal')[0].style.display = 'block';
});

x[0].addEventListener('click', function () {
    document.getElementsByClassName('c-modal')[0].style.display = 'none';
});


//      PreLoader        //

function loading() {
    document.getElementById("preloader").style.display='none';
}


//        g number       //

var randomNumber = Math.floor(Math.random() * 5);
function guessNumber() {
    var value = formData.numberValue.value;
    if (value == randomNumber) {
        alert('congratulation');
    } else {
        alert('looser');
    }
}
var card = document.getElementsByClassName("card");
card[0].style.backgroundColor = "black";
card[1].style.backgroundColor = "#104087";
card[1].style.color = "white";