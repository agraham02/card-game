// For demonstration purposes: Add a card to the table
function addCardToTable() {
    let table = document.querySelector(".table");
    let card = document.createElement("div");
    card.textContent = "♠️ 10"; // Example card
    card.classList.add("card");
    table.appendChild(card);
}

// Trigger adding a card to the table
addCardToTable();

// More complex game logic would go here, managing states, turns, and rules of Spades.
