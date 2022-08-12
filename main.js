let clickHere = document.getElementById('enter');
let output = document.getElementById('output');
let computer = Math.floor(Math.random() * 100);
let restart = document.getElementById('restart');
let preVal = document.getElementById('previous');

clickHere.addEventListener('click', function(){
   let input = document.getElementById('input').value;
   if(input == computer){
    output.innerHTML = `Congratlation you Guissed correct number: ${computer}`;
    restart.classList.remove('hidden');
   }else if(input < computer){
    output.innerHTML = "Your Guiess is Low";
   }else if(input > computer){
    output.innerHTML = "Your Guiess is High";
   };
   preVal.innerHTML = "Your Entered Number:" +"  "+ input;
});
restart.addEventListener('click', function(){
   location.reload();
});



