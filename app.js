let rast1 = Math.round(Math.random() * 5) + 1;
let rast2 = Math.round(Math.random() * 5) + 1;
switch (rast1) {
    case 1:
        document.getElementById("imageone").src = "images/dice1.png";
        break;
    case 2:
        document.getElementById("imageone").src = "images/dice2.png";
        break;
    case 3:
        document.getElementById("imageone").src = "images/dice3.png";
        break;
    case 4:
        document.getElementById("imageone").src = "images/dice4.png";
        break;
    case 5:
        document.getElementById("imageone").src = "images/dice5.png";
        break;
    case 6:
        document.getElementById("imageone").src = "images/dice6.png";
        break;
}
switch (rast2) {
    case 1:
        document.getElementById("imagetwo").src = "images/dice1.png";
        break;
    case 2:
        document.getElementById("imagetwo").src = "images/dice2.png";
        break;
    case 3:
        document.getElementById("imagetwo").src = "images/dice3.png";
        break;
    case 4:
        document.getElementById("imagetwo").src = "images/dice4.png";
        break;
    case 5:
        document.getElementById("imagetwo").src = "images/dice5.png";
        break;
    case 6:
        document.getElementById("imagetwo").src = "images/dice6.png";
        break;
}
if (rast1 === rast2) {
    document.getElementById("text").innerHTML = "Draw !";
}
else if (rast1 > rast2) {
    document.getElementById("text").innerHTML = "Player One Wins!";
}
else if (rast2 > rast1) {
    document.getElementById("text").innerHTML = "Player Two Wins!";
}