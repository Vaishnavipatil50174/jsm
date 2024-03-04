let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
  window.location.assign("third.html");
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    window.location.assign("first.html");
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    window.location.assign("second.html");

  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

var rule=document.querySelector(".rul");

let h1=document.querySelector(".ru");

var again=document.querySelector(".but");

var nex=document.querySelector(".nex");
rule.addEventListener("click",function(){
    var s1=" Games Rules \n\n1 Rock beats scissors, scissors beat \npaper, and paper beats rock.\n\n2 Agree ahead of time whether you’ll\n count off “rock, paper, scissors, shoot” \nor just “rock, paper, scissors.”\n\n3 Use rock, paper, scissors to settle\n minor decisions or simply play to pass\n the time\n\n4 If both players lay down the same hand,\n each player lays down another hand ";
    
    h1.innerHTML="<pre>" + s1 + "</pre>";
    
});

again.addEventListener("click",function(){
    window.location.assign("new.html");
});

nex.addEventListener("click",function(){
    window.location.assign("win.html");
});