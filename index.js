var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var fileName1 = "images/dice" + randomNumber1 + ".png";
var fileName2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",fileName1);
document.querySelector(".img2").setAttribute("src",fileName2);





if(randomNumber1 === randomNumber2){
    var m1 = "It's A tie ! 😜";
    document.querySelector(".h").innerHTML = m1;

}

else if(randomNumber1 > randomNumber2){
    var m2 = "Player 1 Wins ! ✌";
    document.querySelector(".h").innerHTML = m2;

}

else{
    var m3 = "Player 2 Wins ! ✌";
    document.querySelector(".h").innerHTML = m3;
}
