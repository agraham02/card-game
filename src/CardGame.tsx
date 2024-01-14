import React, { useEffect, useState } from "react";
import "./CardGame.css";

export default function CardGame() {
    const [player1Hand, setplayer1Hand] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    ]);
    const [player2Hand, setplayer2Hand] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    ]);
    const [player3Hand, setplayer3Hand] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    ]);
    const [player4Hand, setplayer4Hand] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    ]);

    // Function to change the value of --side-decks-offset for player 2 and player 4
    function changeSideDecksOffsetForSideDecks() {
        // Select elements for player 2 and player 4
        var player2Deck = document.querySelector(
            ".card-deck-container.player-2"
        );
        var player4Deck = document.querySelector(
            ".card-deck-container.player-4"
        );

        const player2Value = 41 * (player2Hand.length) - 74;
        const player4Value = 41 * player4Hand.length - 74;
        // Update --side-decks-offset for player 2
        if (player2Deck) {
            player2Deck.style.setProperty("--side-decks-offset", `${player2Value}px`);
        }

        // Update --side-decks-offset for player 4
        if (player4Deck) {
            player4Deck.style.setProperty("--side-decks-offset", `${player4Value}px`);
        }
    }

    useEffect(() => {
        changeSideDecksOffsetForSideDecks();
    });

    useEffect(() => {
        changeSideDecksOffsetForSideDecks();
    }, [player2Hand, player4Hand]);

    return (
        <div className="game-container">
            <CardDeck player={"player-1"} hand={player1Hand} />
            <CardDeck player={"player-2"} hand={player2Hand} />
            <CardDeck player={"player-3"} hand={player3Hand} />
            <CardDeck player={"player-4"} hand={player4Hand} />
            <div class="center-area">
                <div class="draw-pile">Draw Pile</div>
                <div class="discard-pile">Discard Pile</div>
            </div>
        </div>
    );
}

function CardDeck({ player, hand }) {

    return (
        <div className={`card-deck-container ${player}`}>
            {hand.map((card, index) => (
                <Card key={index} card={card} />
            ))}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
            {/* <div className="card">A</div>
                <div className="card">B</div>
                <div className="card">C</div>
                <div className="card">A</div>
                <div className="card">B</div>
                <div className="card">C</div>
                <div className="card">A</div>
                <div className="card">B</div>
                <div className="card">C</div>
                <div className="card">A</div> */}
        </div>
    );
}

function Card({ card }) {
    return <div className="card">Card</div>;
}
