function random1()
{
  let value = Math.random() * 3;
    if (value >= 0 && value < 1) {
      
        return 'ROCK';
    }
    else if (value >= 1 && value < 2) {
       
        return 'PAPER';
    }
    else {
      
        return 'SCISSOR';
    }
}
function game(computerchoice, userchoice)
{
    if (userchoice === 'ROCK')
    {
        if (computerchoice === 'ROCK') {
            console.log('it is a tie');
            score.tie++;
          
            return "it is a tie.";
         }
         else if (computerchoice === 'PAPER'){
            console.log('computer has  won');
            score.loss++;
         
            return "computer has  won.";
         }
         else {
            console.log('You won');
            score.win++;
           
           return "You won.";
        }
    }
    
    else if (userchoice === 'PAPER')
    {
        if (computerchoice === 'PAPER')
        { console.log('It is a tie');
            score.tie++;
         
            return "It is a tie.";
         }
        else if (computerchoice === 'SCISSOR')
        { console.log('Computer has  won.');
            score.loss++;
         
            return "Computer has  won.";
         }
         else {
            console.log('You won.');
         
            score.win++;
            return "You won.";
        
        }
    }
    else {
        if(computerchoice === 'SCISSOR') {
            console.log('It is a tie.');
            score.tie++;
          
            return "It is a tie.";
          
             }
        else if (computerchoice === 'ROCK')
        {  console.log('Computer has  won.');
         
           score.loss++;
            return "Computer has  won.";
             }
             else {
            console.log('You won');
     
            score.win++;
            return "You won.";
           
             }
    }

}


let score={
    win:0,
    loss:0,
    tie: 0,
   scoreboard: function(){
        return `WIN: ${score.win},LOST: ${score.loss},TIE:${score.tie}`;
    }
};
function showoutput(userchoice, computerchoice, result1) {
    console.log(score);
    document.getElementById('choicedetails').innerText = `YOU HAVE CHOOSEN:${userchoice}\n\n COMPUTER CHOICE:${computerchoice}\n\n RESULT:${result1}\n\n ${score.scoreboard()} `;
}