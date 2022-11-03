// ***** JAVASCRIPT PROMPTS FOR NAME & AMOUNT *****

let guest 
function guestName() {
  guest = prompt("Hello! What is your name?", "Guest");
  if (guest == null || guest == "") {
    guest = "Guest"
    alert("Welcome, Guest!");
  } else {
    alert("Hello " + guest + ". Are you ready to win big?!");
  }

}
guestName()


let amount
function playerAmount() {
  amount = prompt("How much money are You losing today? Minimum bet is $200");
    amount = parseInt(amount);
    if (amount > 199){
      alert(guest + ", You are betting $" + amount + ". Let's play!");
    } else {
      alert("There is a minimum bet. You are betting $200.");
      amount = 200;
  }
}  
 playerAmount()



// ************* PROPERTIES ************* 

let firstCard
let secondCard
let cards = []
let sum = 0
let blackJack = false
let isAlive = false
let response = ""
let lost = 20
let win = 40

let gameMessage = document.getElementById("message")
let cardElement = document.getElementById("cards-element")
let total = document.getElementById("total-element")

// Player object
let player = {
  Name: guest,
  Chips: amount
  
}

let playerElement = document.getElementById("player-Element")
playerElement.textContent = player.Name + ": $" + player.Chips




// ************* LOGIC ************* 

// This function picks a random number to represent one of 13 playing cards in a deck and 
// returns that card's point value
function randomCard() {
   let randomNumber= Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10){
    return 10
  } else if (randomNumber === 1){
    return 11
  } else {
    return randomNumber
  }
}

// This function is used to initialize the blackjack game, it is the event handler for the Start Game button
// two random cards are selected as the starting hand

function startGame() {
  isAlive = true
  blackJack = false
  let firstCard = randomCard()
  let secondCard = randomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  playGame()
  
}

// This function houses the game's logic
// The page is updated to display the current hand, the point total, the user's name, and chip count
// It determines whether a player can continuing drawing cards or if they have lost

function playGame() {
  // Display CARDS on the page
        cardElement.textContent = "Cards: | "
        for (let i = 0; i < cards.length; i++) {
          cardElement.textContent += cards[i] + " | "
        }

  // Display TOTAL on the page
        total.textContent = "Total: " + sum
  if (sum < 21) {
    response = "Another Card?"
  } 
  else if (sum === 21)  {
    response = "WooHoo! BLACKJACK!!!"
    blackJack = true
    player.Chips += win
      playerElement.textContent= player.Name + ": $" + player.Chips
  } else if (player.Chips <= 20){
      isAlive = false
      response = "GAME OVER!" 
      alert(response)
      location.reload()
  } else {
      isAlive = false
      response = "You're a Loser! Sorry, Chump!"
      player.Chips -= lost
        playerElement.textContent=player.Name + ": $" + player.Chips
  }
  gameMessage.textContent = response
}


      


// This function is the event handler for the Hit Me button
// If the player is still alive and does not have blackjack then give them another card
function newCard() {
  // console.log("Drawing a New Card from the Deck!")
  if (isAlive === true && blackJack === false){
    let card = randomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    playGame()
  }
}




// Potential use for GAME OVER scenario
      // } else if (player.Chips === 0){
      // isAlive = false
      // response = "GAME OVER!" 
      // location.reload();
