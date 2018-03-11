const words = ["apple", "baby", "back", "ball", "bear", "bed", "bell", "bird", "birthday", "boat", "box", "boy", "bread", "brother", "cake", "car", "cat", "chair", "chicken", "children", "Christmas", "coat", "corn", "cow", "day", "dog", "doll", "door", "duck", "egg", "eye", "farm", "farmer", "father", "feet", "fire", "fish", "floor", "flower", "game", "garden", "girl", "good-bye", "grass", "ground", "hand", "head", "hill", "home", "horse", "house", "kitty", "leg", "letter", "man", "men", "milk", "money", "morning", "mother", "name", "nest", "night", "paper", "party", "picture", "pig", "rabbit", "rain", "ring", "robin", "Santa Claus", "school", "seed", "sheep", "shoe", "sister", "snow", "song", "squirrel", "stick", "street", "sun", "table", "thing", "time", "top", "toy", "tree", "watch", "water", "way", "wind", "window", "wood"]
function randomNum(){
    return Math.floor(Math.random()* 96)
}
var knifePos;

var life;

var randomWord;

var winNumm;

var wordArray;

inputParent = document.getElementById('words')

var length;

var head3;



function inputCretor(){
    inputParent.innerHTML = `<h1>GUESS THE GODDAMN WORD</h1>
        <h3>REMAINING LIVES = 7 </h3>`
    document.getElementById('image2').style.top = '-75%'
    randomWord = words[randomNum()]

    life = 7

    knifePos = 80

    winNumm = randomWord.length;

    wordArray = Array.from(randomWord)

    length = randomWord.length

    head3 = document.querySelector('h3')
    for( var i = 0; i<length; i++ ){
        var x = document.createElement('INPUT');
        x.setAttribute('type','text')
        x.disabled = true;
        inputParent.appendChild(x)
    }
}

function winCheck(){
    if (life == 0){
        inputParent.innerHTML = '<h1>You lost</h1>'
        var x = document.createElement('BUTTON')
        x.innerHTML = 'Play again'
        inputParent.appendChild(x)
        var button = document.querySelector('#words button')
        button.addEventListener('click', inputCretor)
    }
    else if(winNumm == 0){
        inputParent.innerHTML = '<h1>You won</h1>'
        var x = document.createElement('BUTTON')
        x.innerHTML = 'Play again'
        inputParent.appendChild(x)
        var button = document.querySelector('#words button')
        button.addEventListener('click',inputCretor)
        
    }
}


document.addEventListener('keypress', function(e) {
    var inputs = document.querySelectorAll('#words input')
    var code = e.keyCode || e.which;
    var char = String.fromCharCode(code).toLowerCase();
    var update = wordArray.indexOf(char)
    if (update != -1){
        inputs[update].value = char
        delete wordArray[update]
        winNumm--
        winCheck()
    }
    else{
        life--
        head3.textContent = `REMAINING LIVES = ${life}`
        knifePos = knifePos-5;
        document.getElementById('image2').style.top = `-${knifePos-5}%`
        winCheck()
    }
} )

inputCretor()
