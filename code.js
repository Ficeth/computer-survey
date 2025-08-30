var keysPressed = 0

var fullFakeText = "Your gradnma! 😊😊😊"

document.addEventListener('keydown', function(event) {
    keysPressed += 1
    if(keysPressed > 12){
        keysPressed += 1
    }
        
    console.log(keysPressed)

    fakeTextBox = document.getElementById("fake-text")
    fakeTextBox.style.opacity = 1.0
    fakeTextBox.innerHTML = fullFakeText.slice(0, keysPressed)

    event.preventDefault()
});


var shader1 = document.getElementById("shader1")
var shader2 = document.getElementById("shader2")
var scam1 = document.getElementById("scam1")
var scam2 = document.getElementById("scam2")

function buttonHover(button){
    if (button.style.opacity < 1.0){
        button.style.opacity = 0.8
    }
}

function buttonUnhover(button){
    if (button.style.opacity < 1.0){
        button.style.opacity = 0.5
    }
}

shader1.addEventListener("click", function() {
    shader1.style.opacity = 1.0
    shader2.style.opacity = 0.5
})
shader2.addEventListener("click", function() {
    shader2.style.opacity = 1.0
    shader1.style.opacity = 0.5
})
scam1.addEventListener("click", function() {
    scam1.style.opacity = 1.0
    scam2.style.opacity = 0.5
})
scam2.addEventListener("click", function() {
    scam2.style.opacity = 1.0
    scam1.style.opacity = 0.5
})