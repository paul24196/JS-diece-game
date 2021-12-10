
document.addEventListener("keydown",function(){
  start();
});


function start(){

var num = Math.random();
num = Math.floor((num*6)+1);
var no = Math.random();
no = Math.floor((no*6)+1);
document.querySelector(".p1").setAttribute("src","dice"+num+".png");
document.querySelector(".p2").setAttribute("src","dice"+no+".png");
if (num>no){
  document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(num<no){
  document.querySelector("h1").innerHTML="Player2 Wins";
}
else {
  document.querySelector("h1").innerHTML="Match draw";


}

}
