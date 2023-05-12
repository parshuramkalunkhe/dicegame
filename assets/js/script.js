var p1 = document.getElementById("player1");
var p2 = document.getElementById("player2");
var h3 = document.querySelector("h3");

var rnum1 = Math.round(Math.random() * 6);
var rnum2 = Math.round(Math.random() * 6);
console.log(rnum1, rnum2);

if(rnum1 > rnum2){
	h3.innerHTML = "Player 1 is the winner";
}else if (rnum1 === rnum2){
	h3.innerHTML = "Draw"
}else{
	h3.innerHTML = "Player 2 is the winner";
}

var rp1 = "assets/img/dice"+rnum1+".png";
var rp2 = "assets/img/dice"+rnum2+".png";
p1.setAttribute("src", rp1);
p2.setAttribute("src", rp2);
