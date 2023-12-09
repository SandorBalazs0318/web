document.addEventListener('DOMContentLoaded', function () {
    const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    const gameBoard = document.getElementById('tabla');
    let flippedCards = [];
    let matchedCards = [];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createCard(value) {
        const card = document.createElement('div');
        card.className = 'kartya';
        card.dataset.value = value;
        card.textContent = value;
        return card;
    }

    function initGame() {
        shuffle(cards);
        gameBoard.innerHTML = '';
        flippedCards = [];
        matchedCards = [];

        cards.forEach(function (cardValue) {
            const card = createCard(cardValue);
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });

        setTimeout(function () {
            document.querySelectorAll('.kartya').forEach(card => {
                card.classList.add('hatulja');
            });
        }, 2000);
    }

    function flipCard() {
        const card = this;

        if (flippedCards.length < 2 && !flippedCards.includes(card)) {
            flippedCards.push(card);
            card.classList.remove('hatulja');

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards; 

        if (card1.dataset.value === card2.dataset.value) {
            matchedCards.push(card1, card2);
            card1.classList.add('parositott');
            card2.classList.add('parositott');
            flippedCards = [];

            if (matchedCards.length === cards.length) {
                alert('Gratulálok!');
                setTimeout(function () {
                    location.reload();
                }, 2500);
            }
        } else {
            setTimeout(function () {
                card1.classList.add('hatulja');
                card2.classList.add('hatulja');
                flippedCards = [];
            }, 200);
        }
    }
    initGame();
});