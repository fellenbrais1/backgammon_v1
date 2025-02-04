//////////////////////////////////////////////////////////////////////////////////////////////////////
// START OF CODE

"use strict";

console.log(`Backgammon page script V4`);

//////////////////////////////////////////////////////////////////////////////////////////////////////
// DOM ELEMENT SELECTION

// Main overlay elements
const introDisplay = document.querySelector(".intro_display");

// Game start elements
const gamestartBox = document.querySelector(".gamestart_block");
const greyOverlay = document.querySelector(".grey_overlay");
const helperBox = document.querySelector(".helper_div");
const gameStartResetButton = document.querySelector(".gamestart_reset_button");
const buttonGamestartFun = document.querySelector(".gamestart_button_fun");
const step2Elements = document.querySelectorAll(".step2");
const playerNameElement = document.querySelector(".gamestart_player_name");
const playerNameForm = document.getElementById("gamestart_name_input");
const step3Elements = document.querySelectorAll(".step3");
const buttonGamestartOpponent = document.querySelector(
  ".gamestart_opponent_name"
);
const gameStartButtonChallenge = document.querySelector(
  ".gamestart_button_challenge"
);

// Game board elements
const gameBoard = document.querySelector(".game_board");

// Forfeit section elements
const forfeitSection = document.querySelector(".forfeit_section");
const forfeitXButton = document.querySelector(".forfeit_x_button");
const buttonForfeitYes = document.querySelector(".forfeit_button_yes");
const buttonForfeitNo = document.querySelector(".forfeit_button_no");

// Challenge section elements
const challengeSection = document.querySelector(".challenge_section");
const challengeXButton = document.querySelector(".challenge_x_button");
const challengeInformation = document.querySelector(".challenge_text");
const buttonChallengeCancel = document.querySelector(
  ".challenge_button_cancel"
);

// Player 1 section elements
const player1NameSection = document.querySelector(".name_section.player1");
const player1Portait = document.querySelector(".player_portrait1");
const player1Name = document.querySelector(".name_player1");
const player1Rating = document.querySelector(".player_rating1");

// Player 2 section elements
const player2NameSection = document.querySelector(".name_section.player2");
const player2Portait = document.querySelector(".player_portrait2");
const player2Name = document.querySelector(".name_player2");
const player2Rating = document.querySelector(".player_rating2");

// Chat section elements
const chatSection = document.querySelector(".chat_section");
const chatDisplay = document.querySelector(".chat_display");
const chatInput = document.getElementById("chat_input");

// Players section elements
const playersSection = document.querySelector(".players_section");
const playersXButton = document.querySelector(".players_x_button");
const onlinePlayerToggleGraphic = document.querySelector(
  ".toggle_online_graphic"
);
const onlinePlayersToggleButton = document.querySelector(
  ".toggle_online_graphic p"
);
const freePlayersToggleGraphic = document.querySelector(".toggle_free_graphic");
const freePlayersToggleButton = document.querySelector(
  ".toggle_free_graphic p"
);
const playersFriends = document.querySelector(".players_friends");
const playersPlayedBefore = document.querySelector(".players_played_before");
const playersCurrentlyActive = document.querySelector(
  ".players_currently_active"
);

// Settings section elements
const settingsSection = document.querySelector(".settings_section");
const settingsXButton = document.querySelector(".settings_x_button");

// Rules section elements
const rulesSection = document.querySelector(".rules_section");
const rulesXButton = document.querySelector(".rules_x_button");

// Other games section elements
const otherGamesSection = document.querySelector(".other_games_section");
const otherGamesXButton = document.querySelector(".other_games_x_button");
const otherGamesDisplay = document.querySelector(".other_games_display");

// Floating button elements
const floatingButtonsMain = document.querySelector(".floating_buttons_main");
const floatingButtonsToggle = document.querySelector(
  ".floating_buttons_toggle"
);
const floatingButtonsArrow = document.querySelector(
  ".floating_buttons_toggler_arrow"
);
const forfeitButton = document.querySelector(".button_forfeit");
const settingsButton = document.querySelector(".button_settings");
const playersButton = document.querySelector(".button_players");
const rulesButton = document.querySelector(".button_rules");
const otherGamesButton = document.querySelector(".button_other_games");
const clsButton = document.querySelector(".button_cls");

// Dice section elements
const diceSection = document.querySelector(".dice_section");
const diceFace1 = document.querySelector(".dice_img1");
const diceFace2 = document.querySelector(".dice_img2");
const diceRollResult = document.querySelector(".dice_result_display");

// Cookie bar section elements
const cookieBar = document.querySelector(".cookie_permission");
const cookieAgreeButton = document.querySelector(".cookie_accept_button");
const cookieDisagreeButton = document.querySelector(".cookie_reject_button");

// Ad section elements
const currentAdLink = document.querySelector(".ad_link");
const currentAdPicture = document.querySelector(".ad_picture");
const adSection = document.querySelector(".adbox");
const adNotification = document.querySelector(".ad_notification");

// Debug elements
const gameToggler = document.querySelector(".toggle_game_button");
const cookieClearer = document.querySelector(".clear_cookie_button");
const askJack = document.querySelector(".ask_jack_button");

//////////////////////////////////////////////////////////////////////////////////////////////////////
// SOUNDS

// Page sounds
const buttonClickSound = document.getElementById("button_click_sound");
const openingJingle = document.getElementById("opening_jingle");

// Dice sounds
const diceRollSound = document.getElementById("dice_roll_sound");

// Spoken numbers
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");
const number10 = document.getElementById("number10");
const number11 = document.getElementById("number11");
const number12 = document.getElementById("number12");

//////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES

// FORFEIT SECTION VARIABLES
// Game reset lists
const hideSlideInsList = [
  forfeitSection,
  settingsSection,
  playersSection,
  rulesSection,
  otherGamesSection,
];

const hideElementsList = [
  diceSection,
  chatSection,
  floatingButtonsMain,
  adSection,
  settingsSection,
  otherGamesSection,
  rulesSection,
  playersSection,
  player1NameSection,
  player2NameSection,
  adNotification,
  forfeitSection,
  helperBox,
  buttonGamestartFun,
  buttonGamestartOpponent,
  buttonForfeitYes,
  buttonForfeitNo,
  forfeitXButton,
  gameBoard,
  introDisplay,
  gameStartButtonChallenge,
  playerNameForm,
  step2Elements,
  step3Elements,
];

// HTML content of helper box
const helperContent1 = `<p>Click one</p>
          <svg
            fill="#FFFFFF"
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
            />
          </svg>`;

const helperContent2 = `<p>Type your display name,<br>then press enter</p>
          <svg
            fill="#FFFFFF"
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
            />
          </svg>`;

const helperContent3 = `<svg
  fill="#FFFFFF"
  width="60px"
  height="60px"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M12.707 17.293l-1.414 1.414L4.586 12l6.707-6.707 1.414 1.414L8.414 11h9.586v2H8.414z" /> </svg><p>Click on the name of<br>an opponent, then on<br>the challenge button</p>
          <svg
            fill="#FFFFFF"
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
            />
          </svg>`;

// PLAYER SECTION VARIABLES
let currentUserObject = "";

// Player lists
const experimentalFriends = [
  "Bob",
  "Timmy",
  "Elizabeth",
  "Arcturus",
  "Sarah",
  "Grant",
  "Zeratul",
  "Ayako",
  "Michael",
  "William",
  "Dolores",
  "Jimmy",
  "Artanis",
  "Zagarra",
  "Tommy",
  "Biblobba",
  "Squiglogs",
  "Roboute",
  "Jason",
  "Jessica",
  "Takeshi",
  "Jack",
];

const playersOnline = [
  "Sarah",
  "Grant",
  "Zeratul",
  "Ayako",
  "Michael",
  "William",
  "Tommy",
  "Biblobba",
  "Squiglogs",
  "Roboute",
  "Jason",
  "Takeshi",
  "Jack",
];

const userFriends = [
  "Bob",
  "Timmy",
  "Elizabeth",
  "Arcturus",
  "Michael",
  "William",
  "Tommy",
  "Biblobba",
  "Takeshi",
  "Jack",
];

const userPlayedBefore = [
  "Bob",
  "Timmy",
  "Elizabeth",
  "Arcturus",
  "Michael",
  "William",
  "Tommy",
  "Biblobba",
  "Squiglogs",
  "Roboute",
  "Jason",
  "Jessica",
  "Takeshi",
  "Jack",
];

const playersInGame = ["Michael", "Ayako", "Zeratul", "Squiglogs"];

// Guest user object
let guestUserObject = {
  username: "Guest",
  password: "Guest",
  displayName: "Guest",
  playerPortrait: "img/portrait_male.png",
  portraitColour: "#FFFFFF",
  playerRating: 0,
  member: false,
  languages: ["english"],
  friends: [],
};

// Player objects
const playersObjectArr = [
  {
    username: "Guest",
    password: "Guest",
    displayName: "Guest",
    playerPortrait: "img/portrait_male.png",
    portraitColour: "#FFFFFF",
    playerRating: 0,
    member: false,
    languages: ["english"],
    friends: [],
  },
  {
    username: "fellenbrais",
    password: "sorenson1",
    displayName: "Michael",
    playerPortrait: "img/portrait_male.png",
    portraitColour: "#A020F0",
    playerRating: 63,
    member: true,
    languages: ["english"],
    friends: userFriends,
  },
  {
    username: "ayachan",
    password: "cutie1",
    displayName: "Ayako",
    playerPortrait: "img/portrait_female.png",
    portraitColour: "#FFD700",
    playerRating: 205,
    member: false,
    languages: ["english", "japanese"],
    friends: userFriends,
  },
  {
    username: "lastenvoy",
    password: "falconer1",
    displayName: "Takeshi",
    playerPortrait: "img/portrait_male.png",
    portraitColour: "#FF0000",
    playerRating: 142,
    member: true,
    languages: ["japanese"],
    friends: userFriends,
  },
  {
    username: "frhackett",
    password: "drink1",
    displayName: "Jack",
    playerPortrait: "img/portrait_male.png",
    portraitColour: "#FF6788",
    playerRating: 666,
    member: true,
    languages: ["english", "japanese"],
    friends: userFriends,
  },
];

// Player section toggles
let toggleOnlineOnlyFlag = false;
let toggleFreeOnlyFlag = false;
let otherGamesPopulatedFlag = false;

// CHAT SECTION VARIABLES
// Variable used to alternate message format in the chatbox
let userMessageStyleToggle = false;
let opponentMessageStyleToggle = false;

// OTHER GAMES SECTION VARIABLES
const otherGamesBackgammonButtonHTML = `<div class="game_button_backgammon" title="Backgammon">
    <img src="img/MOMABackgammon.png" alt="Backgammon game picture" />
    <p>Backgammon</p>
  </div>`;

const otherGamesMurderMansionButtonHTML = `<div class="game_button_murder_mansion" title="Murder Mansion">
  <img src="img/murderMansion.jpg" alt="Murder Mansion game picture" />
  <p>Murder Mansion</p>
</div>`;

const otherGamesHTML = [
  otherGamesBackgammonButtonHTML,
  otherGamesMurderMansionButtonHTML,
];

const currentGameFlag = "Backgammon";

// FLOATING BUTTONS SECTION VARIABLES
const togglerUpArrow = `<svg width="40px" height="40px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="#FFFFFF" /></svg>`;

const togglerDownArrow = `<svg width="40px" height="40px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#FFFFFF" /></svg>`;

// COOKIES SECTION VARIABLES
let userIP;
let userUsername;
let userPassword;
let userDisplayName;

let cookiesAcceptedFlag = false;

// User IP address to be stored on this variable during calculation
let userIPAddress;

// TODO Mothball this when cookie logic is fully implemented, replace with something better
// Empty user object to be written to during cookie creation
let userObject = {
  displayName: "",
  ip: "",
};

// DICE SECTION VARIABLES
// The number of faces on the dice for the dice rollers
const faces = 6;

// AD SECTION VARIABLES
// Consts to define details of image adverts - details could be populated from Google Ad Sense later?
const ad1 = {
  source: "img/cash4gold.jpg",
  altText: "Cash 4 Gold Advertisement",
  href: "https://www.cash4goldonline.co.uk/",
  title: "Cash 4 Gold Online",
};

const ad2 = {
  source: "img/kier.avif",
  altText: "Kier Starmer Advertismeent",
  href: "https://en.wikipedia.org/wiki/Keir_Starmer",
  title: "Kier Starmer Action Figures",
};

const ad3 = {
  source: "img/chocowhopper.webp",
  altText: "Burger King Advertisment",
  href: "https://youtube.com/watch?v=2JaCzLZTYAE",
  title: "The NEW Chocolate Whopper",
};

const ad4 = {
  source: "img/vizswan.jpg",
  altText: "Viz Swan Advertisment",
  href: "https://www.amazon.co.uk/Brainbox-Candy-Official-Advert-Birthday/dp/B0BMGXMB61",
  title: "Retrain as a Swan Today",
};

const ad5 = {
  source: "img/hokusaiNuke.jpeg",
  altText: "Japanese Nuclear Waste Advertisment",
  href: "https://www.globaltimes.cn/page/202104/1221726.shtml",
  title: "Japanese Nuclear Waste Near You!",
};

const ad6 = {
  source: "img/gizmo.jpg",
  altText: "Baby Gizmo Advertismement",
  href: "https://fastshow.fandom.com/wiki/Chanel_9_Neus",
  title: "Baby Gizmo Action Pumpo",
};

// Array to hold all of the image ads for cycling through
const adList = [ad1, ad2, ad3, ad4, ad5, ad6];

// Counter showing index of the currently displayed ad
let currentAdNumber = 0;

// GAME LOGIC VARIABLES
let firstTurn = true;

//////////////////////////////////////////////////////////////////////////////////////////////////////
// EVENT LISTENERS

// WINDOW LISTENERS
window.addEventListener("DOMContentLoaded", () => {
  cookieCheck("userDetails");
});

window.addEventListener("load", () => {
  showMain();
  setInterval(imgAdCycler, 10000);
});

// GAMESTART LISTENERS
gameStartResetButton.addEventListener("click", () => {
  playClickSound();
  resetSite();
  showMain();
});

buttonGamestartFun.addEventListener("click", () => {
  playClickSound();
  buttonGamestartFun.classList.add("focus_button");
  buttonGamestartFun.classList.add("activated_button");
  step1Process();
});

playerNameForm.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    playClickSound();
    let userObjectHere;
    if (playerNameForm.value !== "") {
      userObjectHere = guestUserObject;
      const userDisplayName = playerNameForm.value;
      userObjectHere.displayName = userDisplayName;
      console.log(userObjectHere);
      addPlayerDetails(1, userObjectHere);
      step2Process();
      return;
    } else {
      window.alert(
        `Please enter a display name to use temporarily or sign up or log in`
      );
      return;
    }
  }
});

gameStartButtonChallenge.addEventListener("click", () => {
  playClickSound();
  if (buttonGamestartOpponent.textContent !== "") {
    buttonGamestartOpponent.classList.remove("focus_element");
    gameStartButtonChallenge.classList.remove("focus_element");
    gameStartButtonChallenge.classList.add("activated_button");
    challengeInformation.textContent = "Waiting for a response...";
    challengeSection.style.backgroundColor = "var(--youtube_red)";
    challengeXButton.classList.remove("hidden");
    buttonChallengeCancel.classList.remove("hidden");
    challengeSection.classList.add("show");
    challengeSection.classList.remove("no_pointer_events");
    setTimeout(() => {
      challengeInformation.textContent = "Challenge accepted, starting game...";
      challengeSection.style.backgroundColor = "green";
      challengeXButton.classList.add("hidden");
      buttonChallengeCancel.classList.add("hidden");
      setTimeout(() => {
        challengeSection.classList.add("no_pointer_events");
        challengeSection.classList.remove("show");
      }, 2000);
      step3Process();
    }, 4000);
  } else {
    window.alert(
      `Please select an opponent by clicking on their name on the left panel, then press the challenge button`
    );
  }
});

// CHALLENGE SECTION LISTENERS
challengeXButton.addEventListener("click", () => {
  playClickSound();
  challengeInformation.textContent = "Cancelling challenge...";
  setTimeout(() => {
    challengeSection.classList.add("no_pointer_events");
    gameStartButtonChallenge.classList.remove("activated_button");
    challengeSection.classList.remove("show");
  }, 2000);
});

buttonChallengeCancel.addEventListener("click", () => {
  playClickSound();
  challengeInformation.textContent = "Cancelling challenge...";
  setTimeout(() => {
    challengeSection.classList.add("no_pointer_events");
    gameStartButtonChallenge.classList.remove("activated_button");
    challengeSection.classList.remove("show");
  }, 2000);
});

// FORFEIT SECTION LISTENERS
forfeitButton.addEventListener("click", () => {
  playClickSound();
  forfeitSection.classList.remove("no_pointer_events");
  forfeitSection.classList.add("show");
});

forfeitXButton.addEventListener("click", () => {
  playClickSound();
  forfeitSection.classList.remove("show");
  forfeitSection.classList.add("no_pointer_events");
});

buttonForfeitYes.addEventListener("click", () => {
  playClickSound();
  forfeitMessage();
  hideElements(hideSlideInsList);
  buttonForfeitYes.classList.add("no_pointer_events");
  buttonForfeitNo.classList.add("no_pointer_events");
  forfeitXButton.classList.add("no_pointer_events");
  floatingButtonsMain.classList.add("no_pointer_events");
  setTimeout(() => {
    setTimeout(() => {
      resetSite();
      setTimeout(() => {
        showMain();
        resetDice();
      }, 1000);
    }, 5000);
  });
});

buttonForfeitNo.addEventListener("click", () => {
  playClickSound();
  forfeitSection.classList.remove("show");
  forfeitSection.classList.add("no_pointer_events");
});

// PLAYERS SECTION LISTENERS
playersButton.addEventListener("click", () => {
  playClickSound();
  toggleClass(playersSection, "show");
  toggleClass(playersSection, "scroll_on");
  toggleClass(playersXButton, "hidden");
  toggleClass(playersXButton, "no_pointer_events");
  playersSection.classList.remove("focus_element_thick");
  playersSection.style.top = "calc(15% + 64px)";
  setTimeout(() => {
    playersFriends.innerHTML = "";
    playersPlayedBefore.innerHTML = "";
    playersCurrentlyActive.innerHTML = "";
    populatePlayers(experimentalFriends, playersFriends);
    populatePlayers(experimentalFriends, playersPlayedBefore);
    populatePlayers(experimentalFriends, playersCurrentlyActive);
  }, 60);
});

playersXButton.addEventListener("click", () => {
  playClickSound();
  toggleClass(playersSection, "scroll_on");
  setTimeout(() => {
    playersSection.classList.remove("show");
    toggleClass(playersXButton, "hidden");
    playersXButton.classList.add("no_pointer_events");
  }, 60);
});

onlinePlayersToggleButton.addEventListener("click", () => {
  playClickSound();
  toggleOnlinePlayersOnly();
  toggleClass(onlinePlayerToggleGraphic, "toggled_right");
  toggleClass(onlinePlayersToggleButton, "toggled_right_button");
});

freePlayersToggleButton.addEventListener("click", () => {
  playClickSound();
  toggleFreePlayersOnly();
  toggleClass(freePlayersToggleGraphic, "toggled_right");
  toggleClass(freePlayersToggleButton, "toggled_right_button");
});

// CHAT SECTION LISTENERS
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addChatMessage();
  }
});

// SETTINGS SECTION LISTENERS
settingsButton.addEventListener("click", () => {
  playClickSound();
  toggleClass(settingsSection, "show");
  setTimeout(() => {
    toggleClass(settingsSection, "no_pointer_events");
    toggleClass(settingsSection, "scroll_on");
  }, 60);
});

settingsXButton.addEventListener("click", () => {
  playClickSound();
  toggleClass(settingsSection, "show");
  setTimeout(() => {
    toggleClass(settingsSection, "no_pointer_events");
    toggleClass(settingsSection, "scroll_on");
  }, 60);
});

// RULES SECTION LISTENERS
rulesButton.addEventListener("click", () => {
  playClickSound();
  toggleClass(rulesSection, "show");
  toggleClass(rulesSection, "scroll_on");
  setTimeout(() => {
    toggleClass(rulesSection, "no_pointer_events");
  }, 60);
});

rulesXButton.addEventListener("click", () => {
  playClickSound();
  toggleClass(rulesSection, "no_pointer_events");
  setTimeout(() => {
    toggleClass(rulesSection, "show");
    toggleClass(rulesSection, "scroll_on");
  }, 60);
});

// OTHER GAMES SECTION LISTENERS
otherGamesButton.addEventListener("click", () => {
  playClickSound();
  toggleClass(otherGamesSection, "show");
  setTimeout(() => {
    toggleClass(otherGamesSection, "scroll_on");
    toggleClass(otherGamesSection, "no_pointer_events");
    populateOtherGames(otherGamesHTML);
    addCurrentGameClass(currentGameFlag);
    otherGamesPopulatedFlag = true;
  }, 60);
});

otherGamesXButton.addEventListener("click", () => {
  playClickSound();
  toggleClass(otherGamesSection, "show");
  setTimeout(() => {
    toggleClass(otherGamesSection, "no_pointer_events");
    toggleClass(otherGamesSection, "scroll_on");
  }, 60);
});

// CLS SECTION LISTENERS
clsButton.addEventListener("click", playClickSound);

// FLOATING BUTTONS SECTION LISTENERS
floatingButtonsToggle.addEventListener("click", () => {
  playClickSound();
  if (floatingButtonsMain.classList.contains("show")) {
    floatingButtonsArrow.innerHTML = togglerUpArrow;
    floatingButtonsToggle.title = `Show Menu Buttons`;
  } else {
    floatingButtonsArrow.innerHTML = togglerDownArrow;
    floatingButtonsToggle.title = `Hide Menu Buttons`;
  }
  setTimeout(() => {
    toggleClass(floatingButtonsMain, "show");
    toggleClass(floatingButtonsMain, "scroll_on");
  }, 10);
});

// DICE SECTION LISTENERS
diceRollResult.addEventListener("click", () => {
  if (firstTurn) {
    rollOneDie();
  } else {
    rollTwoDice();
  }
});

// COOKIES SECTION LISTENERS
cookieAgreeButton.addEventListener("click", setCookieUserDetails);
cookieDisagreeButton.addEventListener("click", rejectCookies);

askJack.addEventListener("click", () => {
  pretendOpponentMessage();
  addChatNotification();
});

// DEBUG BUTTONS LISTENERS
gameToggler.addEventListener("click", resetGame);

// Test function call to delete the cookie and reload the page
// Called by an eventHandler on the 'Clear Cookie - TEST' button
cookieClearer.addEventListener("click", () => {
  const cookieName = "userDetails";
  clearCookie(cookieName);
  location.reload();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS

// Shows the pages main elements on load or a site reset event
// Called by window load event, eventHandlers on gameStartResetButton and buttonForfeitYes
function showMain() {
  setTimeout(() => {
    gameBoard.classList.add("show");
    greyOverlay.classList.add("show");
  }, 1000);
  setTimeout(() => {
    gamestartBox.classList.add("show");
    gamestartBox.classList.add("focus_element_thick");
    buttonGamestartFun.classList.add("focus_element");
    buttonGamestartFun.classList.remove("no_pointer_events");
    helperBox.classList.add("show");
  }, 3000);
  setTimeout(() => {
    playersFriends.innerHTML = "";
    playersPlayedBefore.innerHTML = "";
    playersCurrentlyActive.innerHTML = "";
    populatePlayers(experimentalFriends, playersFriends);
    populatePlayers(experimentalFriends, playersPlayedBefore);
    populatePlayers(experimentalFriends, playersCurrentlyActive);
  }, 2000);
  setTimeout(() => {
    playersSection.classList.add("focus_element_thick");
  }, 4000);
}

// Toggles the addition and removal of a specified property from a specified element
// Called by rollOneDie(), rollTwoDice(), addCurrentGameClass() and eventHandlers on playersButton, playersXButton, onlinePlayersToggleButton, freePlayersToggleButton, settingsButton, settingsXButton, rulesButton, rulesXButton, otherGamesButton, otherGamesXButton, floatingButtonsToggle
function toggleClass(pageElement, property) {
  pageElement.classList.contains(property)
    ? pageElement.classList.remove(property)
    : pageElement.classList.add(property);
}

// TODO - NEEDS TO BE IMPLEMENTED CORRECTLY WITH NEW GAMESTART LOGIC
// Gets the name of the other player for use in the chatbox display messages
// Called by displayFunBoard(), displayProBoard()
function getOpponentName() {
  const opponentName = buttonGamestartOpponent.textContent;
  return opponentName;
}

// Experimental function to reset the gamestart_block element and the image displayed in the gamebox, will later be assimilated into the page as a game reset type button
// Called by an eventHandler on the 'Toggle Game - TEST' button
function resetGame() {
  gamestartBox.style.display = "grid";
  greyOverlay.classList.add("show");
  gameBoard.src = "img/backgammon.jpg";
}

// DICE SECTION FUNCTIONS
// Creates a random dice roll based on the specified number of die faces for the program (default: 6)
// Called by rollOneDie(), rollTwoDice(), cycleDieFaces()
function diceRoller() {
  return Math.round(Math.random() * (faces - 1)) + 1;
}

// Simulates a one dice roll
// Called by an eventHandler on diceRollResult
function rollOneDie() {
  let diceResult = 0;
  diceFace2.style.opacity = 0;
  diceRollSound.play();
  const target1 = diceFace1;
  rollingAnimation(target1);
  setTimeout(() => {
    const roll1 = diceRoller();
    cycleDieFaces(roll1, "set", target1);
    diceRollResult.textContent = roll1;
    Number((diceResult = roll1));
  }, 1010);
  setTimeout(() => {
    toggleClass(diceRollResult, "dice_result_display_final");
    playDiceSound(diceResult);
  }, 1110);
  setTimeout(() => {
    turnOneEnd();
    shrinkDiceResult();
  }, 2500);
}

// Simulates a two dice roll
// Called by an eventHandler on diceRollResult
function rollTwoDice() {
  let diceResult = 0;
  diceRollSound.play();
  const target1 = diceFace1;
  const target2 = diceFace2;
  rollingAnimation(target1);
  rollingAnimation(target2);
  setTimeout(() => {
    const roll1 = diceRoller();
    const roll2 = diceRoller();
    cycleDieFaces(roll1, "set", target1);
    cycleDieFaces(roll2, "set", target2);
    const totalRoll = roll1 + roll2;
    diceRollResult.textContent = totalRoll;
    Number((diceResult = totalRoll));
  }, 1010);
  setTimeout(() => {
    toggleClass(diceRollResult, "dice_result_display_final");
    playDiceSound(diceResult);
  }, 1110);
  setTimeout(() => {
    shrinkDiceResult();
  }, 2500);
}

// Creates an animation of the dice faces cycling through their possibles, every 100 milliseconds for 2 seconds.
// Called by rollOneDice(), rollTwoDice()
function rollingAnimation(target) {
  let rollInterval = setInterval(() => {
    cycleDieFaces(null, "random", target);
  }, 100);
  setTimeout(() => {
    clearInterval(rollInterval);
  }, 1000);
}

// Plays the corresponding dice sound based on the dice roll result
// Called by rollOneDie(), rollTwoDice()
function playDiceSound(result) {
  let sound;
  switch (result) {
    case 1:
      sound = number1;
      break;
    case 2:
      sound = number2;
      break;
    case 3:
      sound = number3;
      break;
    case 4:
      sound = number4;
      break;
    case 5:
      sound = number5;
      break;
    case 6:
      sound = number6;
      break;
    case 7:
      sound = number7;
      break;
    case 8:
      sound = number8;
      break;
    case 9:
      sound = number9;
      break;
    case 10:
      sound = number10;
      break;
    case 11:
      sound = number11;
      break;
    case 12:
      sound = number12;
      break;
  }
  sound.play();
}

// Changes the face of the targetted dice depending on the result of a roll.
// If the flag argument is 'set' the function will only set the dice image based on the result argument, not use a calculated new random dice roll number.
// Called by rollOneDice(), rollTwoDice(), rollingAnimation()
function cycleDieFaces(result = null, flag = "random", target) {
  if (flag !== "set") {
    result = diceRoller();
  }
  if (result !== null) {
    switch (result) {
      case 1:
        target.src = "img/dice-one.png";
        break;
      case 2:
        target.src = "img/dice-two.png";
        break;
      case 3:
        target.src = "img/dice-three.png";
        break;
      case 4:
        target.src = "img/dice-four.png";
        break;
      case 5:
        target.src = "img/dice-five.png";
        break;
      case 6:
        target.src = "img/dice-six.png";
        break;
    }
  }
}

// CHAT BOX FUNCTIONS

// Captures a users chat message from the input box and adds it to the chat display
// Called by an eventHandler on chatInput
function addChatMessage() {
  const message = chatInput.value;
  chatInput.value = "";
  const messageHTML = createChatMessage(message);
  postChatMessage(messageHTML);
  displayLatestMessage();
}

// Assembles and returns  an HTML literal string to add to the chat display element
// Called by addChatMessage()
function createChatMessage(message) {
  const timeStamp = getTimeStamp();
  const messageClass = userMessageStyleToggle ? "chat_entry_a" : "chat_entry_b";
  const displayName = getUserDisplayName();
  const messageHTML = `<p class='${messageClass}'><strong class='player_name'>${displayName}:</strong> ${message} - ${timeStamp}</p>`;
  userMessageStyleToggle = userMessageStyleToggle ? false : true;
  return messageHTML;
}

// Generates a time stamp in minutes and seconds when a message is added to the chat display
// Called by createChatMessage()
function getTimeStamp() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Adds a chat message HTML literal string to the chat display elements innerHTML
// Called by addChatMessage()
function postChatMessage(messageHTML, position = "beforeend") {
  chatDisplay.insertAdjacentHTML(position, messageHTML);
}

// Scrolls the chat box display down to the lcoation of the latest message - could be annoying when trying to look back through chats later? - UX?
// Called by addChatMessage()
function displayLatestMessage() {
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

// Captures the users display name or 'Guest' if one is not set and returns it
// Called by startGameMessages(), createChatMessage()
function getUserDisplayName() {
  const displayName =
    userDisplayName === undefined || userDisplayName === null
      ? "Guest"
      : userDisplayName;
  return displayName;
}

// Generates and posts a chatbox message from a pretend opponent
// Called by an eventHandler on the 'Ask Jack - TEST' button
function pretendOpponentMessage() {
  const messageHTML = createOpponentMessage(
    "Jack",
    "That would be an ecumenical matter..."
  );
  postChatMessage(messageHTML);
  displayLatestMessage();
}

// Displays a message in the chatbox on a forfeit game event
// Called by an eventHandler on buttonForfeitYes
function forfeitMessage() {
  let chatHTML, chatHTML2;
  const displayName = getUserDisplayName();
  const opponentName = getOpponentName();
  chatHTML = `<p class='chat_entry_c'><strong>${displayName}</strong> has decided to forfeit the game.</p>`;
  chatHTML2 = `<p class='chat_entry_d'><strong>${opponentName}</strong> wins the game!</p>`;
  addGameNotification(chatHTML);
  addGameNotification(chatHTML2);
}

// TODO -
// Creates a message form an opponent to them be posted in the chatbox, message styling is unique to the opponent to differentiate between player 1 and player 2
// Called by pretendOpponentMessage()
function createOpponentMessage(opponentName, message) {
  const timeStamp = getTimeStamp();
  const messageClass = opponentMessageStyleToggle
    ? "chat_entry_e"
    : "chat_entry_f";
  const messageHTML = `<p class='${messageClass}'><strong class='opponent_name'>${opponentName}:</strong> ${message} - ${timeStamp}</p>`;
  opponentMessageStyleToggle = opponentMessageStyleToggle ? false : true;
  return messageHTML;
}

// Plays the set click sound for the webpage
// Called by eventHandlers on gameStartResetButton, buttonGameStartFun, playerNameForm, gameStartButtonChallenge, challengeXButton, buttonChallengeCancel, forfeitButton, forfeitXButton, buttonForfeitYes, buttonForfeitNo, playerButton, playersXButton, onlinePlayersToggleButton, freePlayersToggleButton, settingsButton, settingsXButton, rulesButton, rulesXButton, otherGamesButton, otherGamesXButton, clsButton, floatingButtonsToggle
function playClickSound() {
  buttonClickSound.play();
}

// Displays information messages in the chatbox when starting a new game
// Called by displayFunBoard(), displayProBoard()
function startGameMessages(mode, userDisplayName, opponentName) {
  let chatHTML, chatHTML2;
  if (mode === "fun") {
    chatHTML = `<p class='chat_entry_c'>Starting a fun mode game.</p>`;
  } else if (mode === "pro") {
    chatHTML = `<p class='chat_entry_c'>Starting a professional mode game.</p>`;
  }
  const displayName = getUserDisplayName();
  chatHTML2 = `<p class='chat_entry_d'><strong>${displayName}</strong> is playing against <strong>${opponentName}!</strong></p>`;
  addGameNotification(chatHTML);
  addGameNotification(chatHTML2);
}

// Allows a game start notification to be added to the chatbox
// Called by startGameMessages()
function addGameNotification(HTML) {
  chatDisplay.insertAdjacentHTML("beforeend", HTML);
}

function populatePlayers(playerList, section) {
  const newPlayerList = playerList.toSorted().reverse();
  let HTML;
  newPlayerList.forEach((player) => {
    const specificClass = "player_is_" + player;
    if (section === playersFriends) {
      if (userFriends.includes(player)) {
        checkPlayerOnline(player, playersOnline)
          ? (() => {
              checkPlayerInGame(player, playersInGame)
                ? (HTML = `<div class='player_online_display not_free'><p class='is_player_active player_ingame'></p><p class='player_text ${specificClass}'>${player}</p></div>`)
                : (HTML = `<div class='player_online_display'><p class='is_player_active'></p><p class='player_text ${specificClass}'>${player}</p></div>`);
            })()
          : (HTML = `<div class='player_online_display no_pointer_events'><p class='is_player_active player_offline'></p><p class='player_text ${specificClass}'>${player}</p></div>`);
        section.insertAdjacentHTML("afterbegin", HTML);
      }
    } else if (section === playersPlayedBefore) {
      if (userPlayedBefore.includes(player)) {
        checkPlayerOnline(player, playersOnline)
          ? (() => {
              checkPlayerInGame(player, playersInGame)
                ? (HTML = `<div class='player_online_display not_free'><p class='is_player_active player_ingame'></p><p class='player_text ${specificClass}'>${player}</p></div>`)
                : (HTML = `<div class='player_online_display'><p class='is_player_active'></p><p class='player_text ${specificClass}'>${player}</p></div>`);
            })()
          : (HTML = `<div class='player_online_display no_pointer_events'><p class='is_player_active player_offline'></p><p class='player_text ${specificClass}'>${player}</p></div>`);
        section.insertAdjacentHTML("afterbegin", HTML);
      }
    } else if (section === playersCurrentlyActive) {
      if (checkPlayerOnline(player, playersOnline)) {
        (() => {
          checkPlayerInGame(player, playersInGame)
            ? (HTML = `<div class='player_online_display not_free'><p class='is_player_active player_ingame'></p><p class='player_text ${specificClass}'>${player}</p></div>`)
            : (HTML = `<div class='player_online_display'><p class='is_player_active'></p><p class='player_text ${specificClass}'>${player}</p></div>`);
        })();
        section.insertAdjacentHTML("afterbegin", HTML);
      }
    }
  });
  addPlayerEventListeners(playerList);
  sortPlayerDisplay(section);
}

function checkPlayerOnline(player, playersOnline) {
  if (playersOnline.includes(player)) {
    return true;
  } else {
    return false;
  }
}

function checkPlayerInGame(player, playersInGame) {
  if (playersInGame.includes(player)) {
    return true;
  } else {
    return false;
  }
}

function sortPlayerDisplay(element) {
  const container = element;
  const playersArray = Array.from(container.children);

  playersArray.sort((a, b) => {
    const firstChildA = a.firstElementChild;
    const firstChildB = b.firstElementChild;
    const classA = firstChildA
      ? firstChildA.classList.contains("player_ingame")
        ? 1
        : firstChildA.classList.contains("player_offline")
        ? 2
        : 0
      : 0;
    const classB = firstChildB
      ? firstChildB.classList.contains("player_ingame")
        ? 1
        : firstChildB.classList.contains("player_offline")
        ? 2
        : 0
      : 0;

    return classA - classB;
  });

  playersArray.forEach((child) => element.appendChild(child));
}

function addPlayerEventListeners(playerList) {
  playerList.forEach((player) => {
    const element = ".player_is_" + player;
    const DOMElement = document.querySelectorAll(element);
    DOMElement.forEach((current) => {
      current.addEventListener("click", () => {
        displayPlayer2Name(current.textContent);
      });
    });
  });
}

// TODO
// MAKE THIS FUNCTION CHANGE THE PLAYER SELECTION DIALOGUE BOX WHEN READY
// function displayPlayerName(playerName) {
//   playerNameForm.value = playerName;
// }

function displayPlayer2Name(playerName) {
  buttonGamestartOpponent.textContent = playerName;
}

function toggleOnlinePlayersOnly() {
  const container = playersFriends;
  const playersArray = Array.from(container.children);
  const container2 = playersPlayedBefore;
  const playersArray2 = Array.from(container2.children);
  const playersArrays = [playersArray, playersArray2];
  if (!toggleOnlineOnlyFlag) {
    removeOfflinePlayers(playersArrays);
    toggleOnlineOnlyFlag = true;
  } else {
    addOfflinePlayers(playersArrays);
    toggleOnlineOnlyFlag = false;
  }
}

function removeOfflinePlayers(playersArrays) {
  playersArrays.forEach((array) => {
    array.forEach((current) => {
      if (current.classList.contains("no_pointer_events")) {
        current.classList.add("removed");
      }
    });
  });
}

function addOfflinePlayers(playersArrays) {
  playersArrays.forEach((array) => {
    array.forEach((current) => {
      if (
        current.classList.contains("removed") &&
        current.classList.contains("no_pointer_events")
      ) {
        current.classList.remove("removed");
      }
    });
  });
}

function toggleFreePlayersOnly() {
  const container = playersFriends;
  const playersArray = Array.from(container.children);
  const container2 = playersPlayedBefore;
  const playersArray2 = Array.from(container2.children);
  const container3 = playersCurrentlyActive;
  const playersArray3 = Array.from(container3.children);
  const playersArrays = [playersArray, playersArray2, playersArray3];
  if (!toggleFreeOnlyFlag) {
    removeInGamePlayers(playersArrays);
    toggleFreeOnlyFlag = true;
  } else {
    addInGamePlayers(playersArrays);
    toggleFreeOnlyFlag = false;
  }
}

function removeInGamePlayers(playersArrays) {
  playersArrays.forEach((array) => {
    array.forEach((current) => {
      if (current.classList.contains("not_free")) {
        current.classList.add("removed");
      }
    });
  });
}

function addInGamePlayers(playersArrays) {
  playersArrays.forEach((array) => {
    array.forEach((current) => {
      if (
        current.classList.contains("removed") &&
        current.classList.contains("not_free")
      ) {
        current.classList.remove("removed");
      }
    });
  });
}

function populateOtherGames(otherGamesHTML) {
  if (otherGamesPopulatedFlag === false) {
    let fullHTML = "";
    otherGamesHTML.forEach((current) => {
      fullHTML += current;
    });
    otherGamesDisplay.insertAdjacentHTML("beforeend", fullHTML);
    otherGamesBackgammonButton = document.querySelector(
      ".game_button_backgammon"
    );
    otherGamesMurderMansionButton = document.querySelector(
      ".game_button_murder_mansion"
    );
  }
}

let otherGamesBackgammonButton;
let otherGamesMurderMansionButton;

function addCurrentGameClass(currentGameFlag) {
  if (otherGamesPopulatedFlag === false) {
    switch (currentGameFlag) {
      case "Backgammon":
        toggleClass(otherGamesBackgammonButton, "game_button_current");
        break;
      case "Murder Mansion":
        toggleClass(otherGamesMurderMansionButton, "game_button_current");
        break;
    }
  }
}

function setNewCookieData(userObject) {
  const newData = {
    userIP: userIP,
    userUsername: userObject.username,
    userPassword: userObject.password,
    userDisplayName: userObject.displayName,
  };
  return newData;
}

function addPlayerDetails(player, userObject) {
  console.log(userObject);
  if (player === 1) {
    player1Name.textContent = userObject.displayName;
    player1Portait.src = userObject.playerPortrait;
    player1Portait.style.backgroundColor = userObject.portraitColour;
    player1Rating.textContent = userObject.playerRating;
  } else {
    player2Name.textContent = userObject.displayName;
    player2Portait.src = userObject.playerPortrait;
    player2Portait.style.backgroundColor = userObject.portraitColour;
    player2Rating.textContent = userObject.playerRating;
  }
}

// COOKIE FUNCTIONS

// Checks if a particular cookie already exists and either parses its values if existing, or shows the cookies permission bar if it does not yet exist
// Called by an eventHandler linked to the loading of the window
function cookieCheck(cookieName) {
  const cookie = document.cookie
    .split(";")
    .find((row) => row.startsWith(`${cookieName}=`));
  console.log(cookie);
  if (cookie) {
    cookiesAcceptedFlag = true;
    console.log(`COOKIE - RUNNING`);
    [userIP, userUsername, userPassword, userDisplayName] =
      readCookie(cookieName);
    console.log(`User has previously enabled cookies!`);
    if (userUsername !== "Guest" && userPassword !== "") {
      userLogin(userUsername, userPassword);
    }
  } else {
    setTimeout(() => {
      showCookieBar();
      const displayName = getUserDisplayName();
      const chatHTML = `<p class='chat_entry_c disposable_message'>Welcome <strong>${displayName}!</strong></p>`;
      postChatMessage(chatHTML, "afterbegin");
    }, 3000);
  }
}

function initializeCookie() {
  setUpUserData();
  setTimeout(() => {}, 1000);
}

// Fetches the user's IP address and assigns it to the userObject object for use in the rest of the program
// Called by initializeCookie()
function setUpUserData() {
  fetchData();
  setUserIP();

  // Gets the user's IP address using the async/await syntax
  // Called by setUpUserData()
  async function fetchData() {
    userIPAddress = await getUserIP();
    return userIPAddress;
  }
}

// Fetches the user's IP address from an API and returns it
// Called by fetchData() inside setUpUserData()
async function getUserIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    userIPAddress = data.ip;
    return userIPAddress;
  } catch (error) {
    console.error("Error fetching IP:", error);
    return "Unknown";
  }
}

// TODO - NEEDS TESTING WITH DIFFERENT TIMINGS AND A MORE COMPLEX ENVIRONMENT, SLOWER OVER REAL INTERNET?
// Assigns the value of the user's IP address in steps long enough for the async function to properly return a result
// Called by setUpUserData()
function setUserIP() {
  setTimeout(() => {
    console.log(`userIPAddress: `, userIPAddress);
  }, 300);
  setTimeout(() => {
    userObject.ip = userIPAddress;
    console.log(`userObject:`, userObject);
  }, 350);
  setTimeout(() => {
    console.log(`Set up complete!`);
    return;
  }, 400);
}

// Allows the 'userDetails' cookie to be created and then read all at once by introducing a time delay, this happens the first time the cookie is created so its values are instantly available to the program
// Called by an eventHandler on the 'Accept Cookies' button
function setCookieUserDetails() {
  initializeCookie();
  setTimeout(() => {
    acceptCookies();
  }, 1100);
}

// Facilitates the creation of the 'userDetails' cookie and assigns its data to variables
// Called by setCookieUserDetails()
function acceptCookies() {
  const cookieValues = createCookieDefaultValues();
  createCookie("userDetails", cookieValues, 1);
  [userIP, userUsername, userPassword, userDisplayName] =
    readCookie("userDetails");
  ipTest();
  cookiesAcceptedFlag = true;
  hideCookieBar();
}

// Assigns values from the userObject to the cookie 'userDetails'
// Called by acceptCookies()
function createCookieDefaultValues() {
  const cookieValues = {
    userIP: userObject.ip,
    userUsername: "Guest",
    userPassword: "Guest",
    userDisplayName: userObject.displayName,
  };

  const cookieString = JSON.stringify(cookieValues);
  return cookieString;
}

function updateCookie(data) {
  const cookieValues = {
    userIP: data.userIP,
    userUsername: data.userUsername,
    userPassword: data.userPassword,
    userDisplayName: data.userDisplayName,
  };
  const cookieString = JSON.stringify(cookieValues);
  createCookie("userDetails", cookieString, 1);
  [userIP, userUsername, userPassword, userDisplayName] =
    readCookie("userDetails");
  ipTest();
}

// Creates a cookie from a supplied name, data, and lifespan in days - should be fully configurable for other usecases
// Called by acceptCookies()
function createCookie(name, values, lifespan) {
  let expires = "";
  if (lifespan) {
    let date = new Date();
    date.setTime(date.getTime() + lifespan * 1000 * 60 * 60 * 24);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + values + expires + "; path=/";
}

// Finds if a cookie exists based on the supplied name then retrieves
function readCookie(cookieName) {
  let userIP,
    userUsername,
    userPassword,
    userDisplayName = "";
  const retrievedValues = retrieveCookieValues(cookieName);
  if (retrievedValues) {
    userIP = retrievedValues.userIP;
    userUsername = retrievedValues.userUsername;
    userPassword = retrievedValues.userPassword;
    userDisplayName = retrievedValues.userDisplayName;
    console.log(`FROM COOKIE: User IP: ${userIP}`);
    console.log(`FROM COOKIE: User Username: ${userUsername}`);
    console.log(`FROM COOKIE: User Password: ${userPassword}`);
    console.log(`FROM COOKIE: User Display Name: ${userDisplayName}`);
  } else {
    console.log(`FROM COOKIE: Cookie not found or invalid.`);
  }
  return [userIP, userUsername, userPassword, userDisplayName];
}

function deleteGuestMessage() {
  const firstMessage = document.querySelector(".disposable_message");

  if (firstMessage) {
    firstMessage.remove();
  }
}

// Parses the values from inside a particular cookie based on the supplied name
// Called by readCookie()
function retrieveCookieValues(cookieName) {
  const cookie = document.cookie
    .split(";")
    .find((row) => row.startsWith(`${cookieName}=`));

  if (cookie) {
    const cookieValueString = cookie.split("=")[1];
    try {
      const parsedValues = JSON.parse(cookieValueString);
      return parsedValues;
    } catch (error) {
      console.error(`Error parsing cookie values: ${error}`);
      return null;
    }
  } else {
    return null;
  }
}

// Causes the cookies permission bar to be displayed on the webpage
// Called by cookieCheck()
function showCookieBar() {
  cookieBar.classList.add("show_cookie_permission_bar");
}

// Causes the cookies permission bar to be removed from the webpage
// Called by acceptCookies(), rejectCookies()
function hideCookieBar() {
  cookieBar.classList.remove("show_cookie_permission_bar");
}

// Deletes the cookie by setting its expiry date to UTC time 0
// Called by an eventHandler on the 'Clear Cookie - TEST' button
function clearCookie(cookieName) {
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  console.log(`Cookie: ${cookieName} deleted!`);
}

// Hides the cookie permission bar in the case of a useer clicking the 'Reject Cookies' button
// Called by an eventHandler on the 'Reject Cookies' button
function rejectCookies() {
  console.log("Cookies disabled!");
  hideCookieBar();
}

function nameChangeCheck(oldName, newName) {
  if (newName !== oldName) {
    const message = `Name changed to <strong>${newName}</strong></>`;
    const changeNameHTML = createChatMessage(message);
    postChatMessage(changeNameHTML);
    return;
  } else {
    return;
  }
}

// Tests to see if the userObject properties are available after assignment during set up - PASS
// Called automatically
function ipTest() {
  setTimeout(() => {
    console.log(`userObject.displayName: `, userObject.displayName);
    console.log(`userObject.ip: `, userObject.ip);
  }, 5000);
}

function turnOneEnd() {
  diceFace2.style.opacity = 1;
  firstTurn = false;
}

function shrinkDiceResult() {
  diceRollResult.classList.remove("dice_result_display_final");
}

///////////////////////////////
// CYCLING THROUGH PICTURE ADS

// Experimental function to cycle through the available ads using random numbers, changes properties of image ad elements on the page
// Called automatically on a 10 second interval
function imgAdCycler() {
  setTimeout(() => {
    const oldAdNumber = currentAdNumber;
    while (oldAdNumber === currentAdNumber) {
      currentAdNumber = Math.round(Math.random() * (adList.length - 1));
    }
    currentAdPicture.src = adList[currentAdNumber].source;
    currentAdPicture.title = adList[currentAdNumber].title;
    currentAdPicture.alt = adList[currentAdNumber].altText;
    currentAdLink.href = adList[currentAdNumber].href;
  }, 0);
}

function step1Process() {
  if (buttonGamestartFun.classList.contains("focus_button")) {
    step2Elements.forEach((element) => {
      element.classList.add("show");
    });
    changeHelper(2);
    playerNameElement.classList.add("focus_element");
    playerNameElement.classList.remove("no_pointer_events");
    playerNameForm.classList.remove("no_pointer_events");
    buttonGamestartFun.classList.remove("focus_element");
  }
}

function step2Process() {
  if (playerNameForm.value !== "") {
    step3Elements.forEach((element) => {
      element.classList.add("show");
    });
    changeHelper(3);
    playersSection.classList.add("show");
    playersSection.classList.add("scroll_on");
    playerNameElement.classList.remove("focus_element");
    buttonGamestartOpponent.classList.add("focus_element");
    gameStartButtonChallenge.classList.add("focus_element");
    gameStartButtonChallenge.classList.remove("no_pointer_events");
  } else {
    playerNameForm.value = "";
    prompt(`Please enter a displayname or log in.`);
  }
}

// TODO
const gameBeginsElements = [chatSection];

// Finishes the game start process and shows page elements to faciliate the game
// Called by an eventListener on the 'gameStartButtonChallenge' button
function step3Process() {
  if (buttonGamestartOpponent.textContent != "") {
    chatSection.classList.add("show");
    playersSection.classList.remove("show");
    playersSection.classList.remove("scroll_on");
    playersXButton.classList.add("hidden");
    playersXButton.classList.add("no_pointer_events");
    player1NameSection.classList.add("show");
    player1NameSection.classList.add("scroll_on");
    player2NameSection.classList.add("show");
    player2NameSection.classList.add("scroll_on");
    gamestartBox.classList.remove("show");
    introDisplay.classList.add("hidden");
    diceSection.classList.add("show");
    diceSection.classList.add("scroll_on");
    diceSection.classList.add("focus_element_thick");
    diceSection.classList.remove("no_pointer_events");
    adSection.classList.add("show");
    adSection.classList.add("scroll_on");
    adSection.classList.remove("no_pointer_events");
    forfeitButton.classList.remove("grey_button");
    settingsButton.classList.remove("grey_button");
    playersButton.classList.remove("grey_button");
    const jackObject = playersObjectArr.find(
      (current) => current.displayName === "Jack"
    );
    addPlayerDetails(2, jackObject);
    const opponentName = getOpponentName();
    startGameMessages("fun", userDisplayName, opponentName);
    openingJingle.play();
    helperBox.classList.remove("show");
    helperBox.classList.add("removed");
    setTimeout(() => {
      chatSection.classList.add("scroll_on");
      adNotification.classList.add("show");
      greyOverlay.classList.remove("show");
    }, 1000);
  }
}

// Changes the content and position of the helper box during different stages of the game start process
// Called by step1Process(), step2Process, resetSite()
function changeHelper(step) {
  if (step === 1) {
    helperBox.innerHTML = helperContent1;
    helperBox.classList.remove("pointer_step2");
    helperBox.classList.remove("pointer_step3");
  } else if (step === 2) {
    helperBox.innerHTML = helperContent2;
    helperBox.classList.remove("pointer_step3");
    helperBox.classList.add("pointer_step2");
  } else if (step === 3) {
    helperBox.innerHTML = helperContent3;
    helperBox.classList.remove("pointer_step2");
    helperBox.classList.add("pointer_step3");
  }
}

const resetSiteAddNoPointerEvents = [
  diceSection,
  settingsSection,
  rulesSection,
  otherGamesSection,
  adSection,
  forfeitSection,
];

const greyOutButtons = [forfeitButton, settingsButton, playersButton];

// Enables the process of resetting the elements on the site when a game ends or is forfeited
// Called by gameStartResetButton(), buttonForfeitYes()
function resetSite() {
  hideElements(hideElementsList);
  resetSiteAddNoPointerEvents.forEach((current) => {
    current.classList.add("no_pointer_events");
  });
  chatDisplay.innerHTML = `<p class="chat_entry_d">Start chatting!</p>`;
  changeHelper(1);
  buttonGamestartOpponent.textContent = "";
  greyOutButtons.forEach((current) => {
    current.classList.add("grey_button");
  });
  playersSection.style.top = "15%";
  playersSection.style.left = "1%";
  return;
}

// Iterates through the elementList provided and removes classes from elements in order to hide them
// Called by buttonForfeitYes(), resetSite()
function hideElements(elementList) {
  elementList.forEach((current) => {
    // Handles the presence of NodeList instances in the elementList
    if (current instanceof NodeList) {
      current.forEach((current2) => {
        removeMassClasses(current2);
      });
    } else {
      removeMassClasses(current);
    }
  });
  return;
}

// Removes classes from page elements in the event of a site reset event
// Called by hideElements()
function removeMassClasses(element) {
  element.classList.remove("show");
  element.classList.remove("scroll_on");
  element.classList.remove("no_pointer_events");
  element.classList.remove("show");
  element.classList.remove("removed");
  element.classList.remove("focus_button");
  element.classList.remove("focus_element");
  element.classList.remove("activated_button");
  return;
}

// Resets the face images of the dice to 6, hides second dice and reset value of dice result counter to 6
// Called by buttonForfeitYes()
function resetDice() {
  diceFace1.src = "img/dice-six.png";
  diceFace2.src = "img/dice-six.png";
  diceFace2.style.opacity = 0;
  diceRollResult.textContent = 6;
  firstTurn = true;
}
