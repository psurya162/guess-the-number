let randomNumber = Math.floor(Math.random()*100) +1
console.log(randomNumber);
let low=document.getElementsByTagName("h1") //h1
let high=document.getElementsByTagName("h2") //h2
let body=document.getElementsByTagName("body")

let value =document.getElementsByTagName("input")
let score=document.getElementById("high")
let btn2=document.getElementById("btn2")
let btn1=document.getElementById("btn")

let chance=100
let highScore = 0;


if (localStorage.getItem("highScore")) {
    highScore = parseInt(localStorage.getItem("highScore"));
    score.innerText = `High Score: ${highScore}`;
}

value[0].addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkNum();
    }
});


function checkNum(){
    console.log(value[0].value);


  

    if(randomNumber > value[0].value){
        // console.log(checkNum);
        low[1].innerText="SORRY BROO YOUR GUESS IS LOW.... !"
        high[0].innerHTML=`You Have ${--chance} Chance Bro`
        body[0].style.backgroundColor="red"
    }
    else if(randomNumber < value[0].value){
        high[0].innerHTML=`You Have ${--chance} Chance Bro`
        low[1].innerText="SORRY BROO YOUR GUESS IS HIGHH.... !"
        
        body[0].style.backgroundColor="red"
    }
    else{
        console.log("correwct")

       
        high[0].innerText=`CORRECT GUESS BROO... 😄 `
        low[1].innerText=`CONGRATULATION BRO.. ${value[0].value} IS THE RIGHT GUESS....`
        btn1.style.display="none"
        
        
        body[0].style.backgroundColor="green"
        highScore = Math.max(highScore, chance);
        
         // Update the high score in the DOM and in storage
         score.innerText = `High Score: ${highScore}`;
         localStorage.setItem("highScore", highScore);
        
        
    }


}

btn2.addEventListener("click",function(){
    value[0].value=""
    low[1].innerText = "";
    high[0].innerHTML = ""; 
    body[0].style.backgroundColor = ""; 
    btn1.style.display="block"
    

    chance = 100; 
    
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

})

