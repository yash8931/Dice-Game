// Player1
var rand_num1=Math.floor(Math.random()*6)+1;  // 1-6

var rand_dice_image="dice"+rand_num1+".png";  //dice1.png- dice6.png

var rand_image_source="images/"+rand_dice_image //image dice 1 to 6

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",rand_image_source);

//Player 2
var rand_num2=Math.floor(Math.random()*6)+1;

var rand_image_source2="images/dice"+rand_num2+".png"; //image dice 1 to 6

var image2=document.querySelectorAll("img")[1].setAttribute("src",rand_image_source2);


if (rand_num1>rand_num2)
{
    document.querySelector("h1").innerHTML="🚩Player Wins";
}
else if(rand_num2>rand_num1)
{
    document.querySelector("h1").innerHTML="Computer Wins"
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

