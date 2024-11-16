let options = ["rock", "paper", "scissor"];
let logos = document.querySelectorAll(".logos");
let userScore = document.querySelector("#updateUserScore");
let computerScore = document.querySelector("#updateComputerScore");
let message = document.querySelector("#message");
let reset = document.querySelector("#reset");
let userval = 0;
let compval = 0;

function updateMessage(textMessage, backgroundColor, fontWeight, textColor) {
  message.innerText = textMessage;
  message.style.background = backgroundColor;
  message.style.fontWeight = fontWeight;
  message.style.color = textColor;
}

reset.addEventListener("click", () => {
  userval = 0;
  compval = 0;
  computerScore.innerText = compval;
  userScore.innerText = userval;
  updateMessage("PLAY GAME", "rgba(48, 153, 219, 0.484)", "800", "white");
});

function findWinner(userChoice, computerChoice) {
  if (userChoice === "rock") {
    if (userChoice === "rock" && computerChoice === "paper") {
      console.log("you lost computer win rock is beated by paper");
      updateMessage(
        "Ooops You Lost Try Again !!",
        "linear-gradient(#D4145A , #FBB03B)",
        "800",
        "black"
      );
      compval++;
      computerScore.innerText = compval;
    } else {
      console.log("you win computer lost rock beat scissor");
      updateMessage(
        "Congratulations You Win Play Again !!",
        "linear-gradient(#009245 , #FCEE21)",
        "800",
        "black"
      );
      userval++;
      userScore.innerText = userval;
    }
  }
  if (userChoice === "paper") {
    if (userChoice === "paper" && computerChoice === "scissor") {
      console.log("you lost computer win paper is beated by scissor");
      updateMessage(
        "Ooops You Lost Try Again !!",
        "linear-gradient(#D4145A , #FBB03B)",
        "800",
        "black"
      );
      compval++;
      computerScore.innerText = compval;
    } else {
      console.log("you win computer lost paper beat rock");
      updateMessage(
        "Congratulations You Win Play Again !!",
        "linear-gradient(#009245 , #FCEE21)",
        "800",
        "black"
      );
      userval++;
      userScore.innerText = userval;
    }
  }
  if (userChoice === "scissor") {
    if (userChoice === "scissor" && computerChoice === "rock") {
      console.log("you lost computer win scissor is beated by rock");
      updateMessage(
        "Ooops You Lost Try Again !!",
        "linear-gradient(#D4145A , #FBB03B)",
        "800",
        "black"
      );
      compval++;
      computerScore.innerText = compval;
    } else {
      console.log("you win computer lost scissor beat paper");
      updateMessage(
        "Congratulations You Win Play Again !!",
        "linear-gradient(#009245 , #FCEE21)",
        "800",
        "black"
      );
      userval++;
      userScore.innerText = userval;
    }
  }
}

function computer() {
  let randomOutput = Math.floor(Math.random() * 3);
  let computerRandomChoice = options[randomOutput];
  return computerRandomChoice;
}

function playGame(userChoice) {
  let computerChoice = computer();
  if (userChoice === computerChoice) {
    updateMessage(
      "It's Draw. Play Again !!",
      "linear-gradient(#662D8C , #ED1E79)",
      "800",
      "black"
    );
  } else {
    findWinner(userChoice, computerChoice);
  }
}

logos.forEach((logo) => {
  logo.addEventListener("click", () => {
    let userChoice = logo.getAttribute("id");
    playGame(userChoice);
  });
});

// There is 2 way to eliminate message (.innerText, background, fontWeight, color,)
//    that is written in each condition

// 1. to create win and lose function like a draw function
//    function draw(){
//    message.innerText = "It's Draw. Play Again !!";
//    message.style.background = "linear-gradient(#662D8C , #ED1E79)";
//    message.style.fontWeight = "800";
//    message.style.color = "black";

// 2. to write all style property in css and we can add
//    or remove classes by classlist.add property.