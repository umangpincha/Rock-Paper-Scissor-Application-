
function myGame(){
    //TODO:  selecting the elements
    let userScoreValue = document.getElementById("userScoreVal");
    let compScoreValue = document.getElementById("compScoreVal");
    let resultUserStat = document.getElementById("result-user-stat");
    let resultCompStat = document.getElementById("result-comp-stat");
    let winner = document.getElementById("result-final-stat");
    let rock = document.getElementById("r");
    let paper = document.getElementById("p");
    let scissor = document.getElementById("s");
    var spanTag1 =  document.createElement("span");
    var spanTag2 =  document.createElement("span");
    var spanTag3 =  document.createElement("span");
    resultUserStat.appendChild(spanTag1);
    resultCompStat.appendChild(spanTag2);
    winner.appendChild(spanTag3);
    //TODO: game logic

    //when rock is clicked by user
    rock.addEventListener('click' , ()=>{
        let options = ["Rock","Paper","Scissor"];
        let computer =  options[Math.floor(Math.random() * options.length)];
        let compWin = 0;
        let userWin = 0;    
        spanTag1.innerText = "Rock";
        spanTag2.innerText = computer;
        //user wins else user wins or tie
        if (computer === 'Paper') {
            compScoreValue.innerText= compWin + 1;
            spanTag3.innerText = "Computer Wins";
        }
        else if(computer === 'Scissor'){
            userScoreValue.innerText = userWin + 1;
            spanTag3.innerText = "You Win"; 
        }
        else{
            compScoreValue.innerText = 0;
            userScoreValue.innerText = 0 
            spanTag3.innerText = "Match Tie"
        }
    });

    //when paper is clicked by user
    paper.addEventListener('click' , ()=>{
        let options = ["Rock","Paper","Scissor"];
        let computer =  options[Math.floor(Math.random() * options.length)];
        let compWin = 0;
        let userWin = 0;    
        spanTag1.innerText = "Paper";
        spanTag2.innerText = computer;
        //user wins else user wins or tie
        if (computer === 'Scissor') {
            compScoreValue.innerText= compWin + 1;
            spanTag3.innerText = "Computer Wins";
        }
        else if(computer === 'Rock'){
            userScoreValue.innerText = userWin + 1;
            spanTag3.innerText = "You Win"; 
        }
        else{
            compScoreValue.innerText = 0;
            userScoreValue.innerText = 0 
            spanTag3.innerText = "Match Tie"
        }
    });

    //when scissor is clicked by user
    scissor.addEventListener('click' , ()=>{
        let options = ["Rock","Paper","Scissor"];
        let computer =  options[Math.floor(Math.random() * options.length)];
        let compWin = 0;
        let userWin = 0;    
        spanTag1.innerText = "Scissor";
        spanTag2.innerText = computer;
        //user wins else user wins or tie
        if (computer === 'Rock') {
            compScoreValue.innerText= compWin + 1;
            spanTag3.innerText = "Computer Wins";
        }
        else if(computer === 'Paper'){
            userScoreValue.innerText = userWin + 1;
            spanTag3.innerText = "You Win"; 
        }
        else{
            compScoreValue.innerText = 0;
            userScoreValue.innerText = 0 
            spanTag3.innerText = "Match Tie"
        }
    });

}

myGame();