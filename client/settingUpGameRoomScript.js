var socket = io();

io.connect( "/" );

var inGameBorderP1 = document.getElementById('inGameBorderP1');
var inGameBorderP2 = document.getElementById('inGameBorderP2');
var inGameBorderP3 = document.getElementById('inGameBorderP3');
var inGameBorderP4 = document.getElementById('inGameBorderP4');
var inGameBorderP5 = document.getElementById('inGameBorderP5');
var inGameBorderP6 = document.getElementById('inGameBorderP6');
var inGameBorderP7 = document.getElementById('inGameBorderP7');
var inGameBorderP8 = document.getElementById('inGameBorderP8');
var inGameBorderP9 = document.getElementById('inGameBorderP9');

var displayActionP1 = document.getElementById('displayActionP1');
var displayActionP2 = document.getElementById('displayActionP2');
var displayActionP3 = document.getElementById('displayActionP3');
var displayActionP4 = document.getElementById('displayActionP4');
var displayActionP5 = document.getElementById('displayActionP5');
var displayActionP6 = document.getElementById('displayActionP6');
var displayActionP7 = document.getElementById('displayActionP7');
var displayActionP8 = document.getElementById('displayActionP8');
var displayActionP9 = document.getElementById('displayActionP9');

const pokerTable = document.getElementById('pokerTable');
const startGameButton = document.getElementById('startGameButton');
var inGamePotDisplay = document.getElementById('inGamePotDisplay');
var inGameRoundDisplay = document.getElementById('inGameRoundDisplay');

const preLobbyGameSettingsPopUpPage = document.getElementById('preLobbyGameSettingsPopUpPage');
const hostSetsPreGameSettingsAndStartsGameButton = document.getElementById('hostSetsPreGameSettingsAndStartsGameButton');
var bigBlindOptionSelect = document.getElementById('bigBlindOptionSelect');
var chooseAnteInput = document.getElementById('chooseAnteInput');

var bB1 = document.getElementById('bB1');
var bB2 = document.getElementById('bB2');
var bB3 = document.getElementById('bB3');
var bB4 = document.createElement('option');
bB4.value = '4';
var bB5 = document.createElement('option');
bB5.value = '5';
var bB6 = document.createElement('option');
bB6.value = '6';
var bB7 = document.createElement('option');
bB7.value = '7';
var bB8 = document.createElement('option');
bB8.value = '8';
var bB9 = document.createElement('option');
bB9.value = '9';

let winnerOptionP1 = document.getElementById('winnerOptionP1');
let winnerOptionP2 = document.getElementById('winnerOptionP2');
let winnerOptionP3 = document.getElementById('winnerOptionP3');
let winnerOptionP4 = document.createElement('option');
winnerOptionP4.value = 'player4';
let winnerOptionP5 = document.createElement('option');
winnerOptionP5.value = 'player5';
let winnerOptionP6 = document.createElement('option');
winnerOptionP6.value = 'player6';
let winnerOptionP7 = document.createElement('option');
winnerOptionP7.value = 'player7';
let winnerOptionP8 = document.createElement('option');
winnerOptionP8.value = 'player8';
let winnerOptionP9 = document.createElement('option');
winnerOptionP9.value = 'player9';



const settingUpGameEnvironment = (roomSize) => {

    pokerTable.style.display = 'block';
    inGameMenuButton.style.display = 'block';
    gIroomSize.innerHTML = 'Room Size: ' + roomSize;

    inGamePotDisplay.style.display = 'none';
    inGameRoundDisplay.style.display = 'none';

    hidingAllPlayerPlacementCards();

    if (roomSize === 3) {
        console.log('hello');
    } else if (roomSize === 4) {

        playerOne.active = true;
        playerTwo.active = true;
        playerThree.active = true;
        playerFour.active = true;

        inGameBorderP1.style.display = 'block';
        inGameBorderP2.style.display = 'block';
        inGameBorderP3.style.display = 'block';
        inGameBorderP4.style.display = 'block';
        inGameBorderP5.style.display = 'none';
        inGameBorderP6.style.display = 'none';
        inGameBorderP7.style.display = 'none';
        inGameBorderP8.style.display = 'none';
        inGameBorderP9.style.display = 'none';

        bigBlindOptionSelect.appendChild(bB4);
        optionsForWinnerOfRound.appendChild(winnerOptionP4);

        p1TotalyBuytInLabel.style.display = 'block';
        p2TotalyBuytInLabel.style.display = 'block';
        p3TotalyBuytInLabel.style.display = 'block';
        p4TotalyBuytInLabel.style.display = 'block';

    } else if (roomSize === 5) {

        inGameBorderP1.style.display = 'block';
        inGameBorderP2.style.display = 'block';
        inGameBorderP3.style.display = 'block';
        inGameBorderP4.style.display = 'block';
        inGameBorderP5.style.display = 'block';
        inGameBorderP6.style.display = 'none';
        inGameBorderP7.style.display = 'none';
        inGameBorderP8.style.display = 'none';
        inGameBorderP9.style.display = 'none';

        bigBlindOptionSelect.appendChild(bB4);
        bigBlindOptionSelect.appendChild(bB5);
        optionsForWinnerOfRound.appendChild(winnerOptionP4);
        optionsForWinnerOfRound.appendChild(winnerOptionP5);

        p1TotalyBuytInLabel.style.display = 'block';
        p2TotalyBuytInLabel.style.display = 'block';
        p3TotalyBuytInLabel.style.display = 'block';
        p4TotalyBuytInLabel.style.display = 'block';
        p5TotalyBuytInLabel.style.display = 'block';
        
    } else if (roomSize === 6) {

        inGameBorderP1.style.display = 'block';
        inGameBorderP2.style.display = 'block';
        inGameBorderP3.style.display = 'block';
        inGameBorderP4.style.display = 'block';
        inGameBorderP5.style.display = 'block';
        inGameBorderP6.style.display = 'block';
        inGameBorderP7.style.display = 'none';
        inGameBorderP8.style.display = 'none';
        inGameBorderP9.style.display = 'none';

        bigBlindOptionSelect.appendChild(bB4);
        bigBlindOptionSelect.appendChild(bB5);
        bigBlindOptionSelect.appendChild(bB6);
        optionsForWinnerOfRound.appendChild(winnerOptionP4);
        optionsForWinnerOfRound.appendChild(winnerOptionP5);
        optionsForWinnerOfRound.appendChild(winnerOptionP6);

        p1TotalyBuytInLabel.style.display = 'block';
        p2TotalyBuytInLabel.style.display = 'block';
        p3TotalyBuytInLabel.style.display = 'block';
        p4TotalyBuytInLabel.style.display = 'block';
        p5TotalyBuytInLabel.style.display = 'block';
        p6TotalyBuytInLabel.style.display = 'block';
        
    } else if (roomSize === 7) {
        
        inGameBorderP1.style.display = 'block';
        inGameBorderP2.style.display = 'block';
        inGameBorderP3.style.display = 'block';
        inGameBorderP4.style.display = 'block';
        inGameBorderP5.style.display = 'block';
        inGameBorderP6.style.display = 'block';
        inGameBorderP7.style.display = 'block';
        inGameBorderP8.style.display = 'none';
        inGameBorderP9.style.display = 'none';

        bigBlindOptionSelect.appendChild(bB4);
        bigBlindOptionSelect.appendChild(bB5);
        bigBlindOptionSelect.appendChild(bB6);
        bigBlindOptionSelect.appendChild(bB7);
        optionsForWinnerOfRound.appendChild(winnerOptionP4);
        optionsForWinnerOfRound.appendChild(winnerOptionP5);
        optionsForWinnerOfRound.appendChild(winnerOptionP6);
        optionsForWinnerOfRound.appendChild(winnerOptionP7);

        p1TotalyBuytInLabel.style.display = 'block';
        p2TotalyBuytInLabel.style.display = 'block';
        p3TotalyBuytInLabel.style.display = 'block';
        p4TotalyBuytInLabel.style.display = 'block';
        p5TotalyBuytInLabel.style.display = 'block';
        p6TotalyBuytInLabel.style.display = 'block';
        p7TotalyBuytInLabel.style.display = 'block';


    } else if (roomSize === 8) {

        inGameBorderP1.style.display = 'block';
        inGameBorderP2.style.display = 'block';
        inGameBorderP3.style.display = 'block';
        inGameBorderP4.style.display = 'block';
        inGameBorderP5.style.display = 'block';
        inGameBorderP6.style.display = 'block';
        inGameBorderP7.style.display = 'block';
        inGameBorderP8.style.display = 'block';
        inGameBorderP9.style.display = 'none';

        bigBlindOptionSelect.appendChild(bB4);
        bigBlindOptionSelect.appendChild(bB5);
        bigBlindOptionSelect.appendChild(bB6);
        bigBlindOptionSelect.appendChild(bB7);
        bigBlindOptionSelect.appendChild(bB8);
        optionsForWinnerOfRound.appendChild(winnerOptionP4);
        optionsForWinnerOfRound.appendChild(winnerOptionP5);
        optionsForWinnerOfRound.appendChild(winnerOptionP6);
        optionsForWinnerOfRound.appendChild(winnerOptionP7);
        optionsForWinnerOfRound.appendChild(winnerOptionP8);

        p1TotalyBuytInLabel.style.display = 'block';
        p2TotalyBuytInLabel.style.display = 'block';
        p3TotalyBuytInLabel.style.display = 'block';
        p4TotalyBuytInLabel.style.display = 'block';
        p5TotalyBuytInLabel.style.display = 'block';
        p6TotalyBuytInLabel.style.display = 'block';
        p7TotalyBuytInLabel.style.display = 'block';
        p8TotalyBuytInLabel.style.display = 'block';

        
    } else if (roomSize === 9) {
        
        inGameBorderP1.style.display = 'block';
        inGameBorderP2.style.display = 'block';
        inGameBorderP3.style.display = 'block';
        inGameBorderP4.style.display = 'block';
        inGameBorderP5.style.display = 'block';
        inGameBorderP6.style.display = 'block';
        inGameBorderP7.style.display = 'block';
        inGameBorderP8.style.display = 'block';
        inGameBorderP9.style.display = 'block';

        bigBlindOptionSelect.appendChild(bB4);
        bigBlindOptionSelect.appendChild(bB5);
        bigBlindOptionSelect.appendChild(bB6);
        bigBlindOptionSelect.appendChild(bB7);
        bigBlindOptionSelect.appendChild(bB8);
        bigBlindOptionSelect.appendChild(bB9);
        optionsForWinnerOfRound.appendChild(winnerOptionP4);
        optionsForWinnerOfRound.appendChild(winnerOptionP5);
        optionsForWinnerOfRound.appendChild(winnerOptionP6);
        optionsForWinnerOfRound.appendChild(winnerOptionP7);
        optionsForWinnerOfRound.appendChild(winnerOptionP8);
        optionsForWinnerOfRound.appendChild(winnerOptionP9);

        p1TotalyBuytInLabel.style.display = 'block';
        p2TotalyBuytInLabel.style.display = 'block';
        p3TotalyBuytInLabel.style.display = 'block';
        p4TotalyBuytInLabel.style.display = 'block';
        p5TotalyBuytInLabel.style.display = 'block';
        p6TotalyBuytInLabel.style.display = 'block';
        p7TotalyBuytInLabel.style.display = 'block';
        p8TotalyBuytInLabel.style.display = 'block';
        p9TotalyBuytInLabel.style.display = 'block';
    }

}

const settingGameLobbyState = (pNickNamesArr, pChipsArr, rS, playerSId, pJoiningMidGameIndicator) => {

    settingUpGameEnvironment(rS);

    startNextRoundAfterChoosingWinnerPage.style.display = 'none';

    user.currentPage = 'u_a_preGameLobbyState';

    if (rS === 4) {

        inGameBorderP1.innerText = `${pNickNamesArr[0]} ${pChipsArr[0]}`
        bB1.innerHTML = pNickNamesArr[0];
        p1TotalyBuytInLabel.innerText = `${pNickNamesArr[0]}: ${pChipsArr[0]}`;
        winnerOptionP1.innerText = pNickNamesArr[0];

        if (pNickNamesArr[1] === undefined) {
            inGameBorderP2.innerHTML = '+';
            bB2.innerHTML = 2;
            p2TotalyBuytInLabel.innerHTML = 'Player 2: ' + 0;
            winnerOptionP2.innerText = 'Player 2';
        } else {
            inGameBorderP2.innerHTML = `${pNickNamesArr[1]} ${pChipsArr[1]}`
            bB2.innerHTML = pNickNamesArr[1];
            p2TotalyBuytInLabel.innerHTML = `${pNickNamesArr[1]}: ${pChipsArr[1]}`;
            winnerOptionP2.innerText = pNickNamesArr[1];
        }

        if (pNickNamesArr[2] === undefined) {
            inGameBorderP3.innerHTML = '+';
            bB3.innerHTML = 3;
            p3TotalyBuytInLabel.innerHTML = 'Player 3: 0';
            winnerOptionP3.innerText = 'Player 3';
        } else {
            inGameBorderP3.innerHTML = `${pNickNamesArr[2]} ${pChipsArr[2]}`
            bB3.innerHTML = pNickNamesArr[2];
            p3TotalyBuytInLabel.innerHTML = `${pNickNamesArr[2]}: ${pChipsArr[2]}`;
            winnerOptionP3.innerText = pNickNamesArr[2];
        }

        if (pNickNamesArr[3] === undefined) {
            inGameBorderP4.innerHTML = '+';
            bB4.innerHTML = 4;
            p4TotalyBuytInLabel.innerHTML = 'Player 4: 0';
            winnerOptionP4.innerText = 'Player 4'
        } else {
            inGameBorderP4.innerHTML = pNickNamesArr[3] + " " + pChipsArr[3];
            bB4.innerHTML = pNickNamesArr[3];
            p4TotalyBuytInLabel.innerHTML = `${pNickNamesArr[3]}: ${pChipsArr[3]}`;
            winnerOptionP4.innerText = pNickNamesArr[3];
        }

        // could fuck me up so remember the original version below (using pnicknames and user[nicknames]) //
        for (let i = 0; i < playerSId.length; i++) {
            if (user['sId'] === playerSId[i]) {
                user['inGameTurn'] = i + 1;
                p = new inGamePlayerSetters(pNickNamesArr[i], Number(pChipsArr[i]));
            }
        }

        // p1 POV & other personal properties // 
        if (user['inGameTurn'] === 1) {
            inGameBorderP1.style.left = '36.5vw';
            inGameBorderP1.style.top = '135vw';
            inGameBorderP2.style.left = '68vw';
            inGameBorderP2.style.top = '82vw';
            inGameBorderP3.style.left = '5vw';
            inGameBorderP3.style.top = '82vw';
            inGameBorderP4.style.left = '36.5vw';
            inGameBorderP4.style.top = '24vw';

            if (!pJoiningMidGameIndicator) {
                startGameButton.style.display = 'block';
            }

            inGameBorderP4.addEventListener('click', function() {
                if (inGameBorderP4.innerHTML === '+') {
                    invitingUserToGamePage.style.display = 'block';
                    resettingInvitingPlayerToGamePage();
                }
            })

            displayActionP1.style.top = '133vw';
            displayActionP2.style.top = '101vw';
            displayActionP3.style.top = '101vw';
            displayActionP4.style.top = '44vw'; 

        }
        // p2 POV & other personal properties //
        if (user['inGameTurn'] === 2) {
            inGameBorderP1.style.left = '5vw';
            inGameBorderP1.style.top = '82vw';
            inGameBorderP2.style.left = '36.5vw';
            inGameBorderP2.style.top = '135vw';
            inGameBorderP3.style.left = '36.5vw';
            inGameBorderP3.style.top = '24vw';
            inGameBorderP4.style.left = '68vw';
            inGameBorderP4.style.top = '82vw';

            displayActionP1.style.top = '101vw';
            displayActionP2.style.top = '133vw';
            displayActionP3.style.top = '44vw';
            displayActionP4.style.top = '101vw';
        }
        // p3 POV & other personal properties // 
        if (user['inGameTurn'] === 3) {
            inGameBorderP1.style.left = '68vw';
            inGameBorderP1.style.top = '82vw';
            inGameBorderP2.style.left = '36.5vw';
            inGameBorderP2.style.top = '24vw';
            inGameBorderP3.style.left = '36.5vw';
            inGameBorderP3.style.top = '135vw';
            inGameBorderP4.style.left = '5vw';
            inGameBorderP4.style.top = '82vw';

            displayActionP1.style.top = '101vw';
            displayActionP2.style.top = '44vw';
            displayActionP3.style.top = '133vw';
            displayActionP4.style.top = '101vw';
        }
        // p4 POV & other personal properties //
        if (user['inGameTurn'] === 4) {
            inGameBorderP1.style.left = '36.5vw';
            inGameBorderP1.style.top = '24vw';
            inGameBorderP2.style.left = '5vw';
            inGameBorderP2.style.top = '82vw';
            inGameBorderP3.style.left = '68vw';
            inGameBorderP3.style.top = '82vw';
            inGameBorderP4.style.left = '36.5vw';
            inGameBorderP4.style.top = '135vw';

            displayActionP1.style.top = '44vw';
            displayActionP2.style.top = '101vw';
            displayActionP3.style.top = '101vw';
            displayActionP4.style.top = '133vw';
        }

        displayActionP1.style.left = inGameBorderP1.style.left;
        displayActionP2.style.left = inGameBorderP2.style.left;
        displayActionP3.style.left = inGameBorderP3.style.left;
        displayActionP4.style.left = inGameBorderP4.style.left;

    } 
    if (rS === 5) {

        inGameBorderP1.innerText = `${pNickNamesArr[0]} ${pChipsArr[0]}`
        bB1.innerHTML = pNickNamesArr[0];
        p1TotalyBuytInLabel.innerHTML = `${pNickNamesArr[0]} ${pChipsArr[0]}`
        winnerOptionP1.innerText = pNickNamesArr[0];

        if (pNickNamesArr[1] === undefined) {
            inGameBorderP2.innerHTML = '+';
            bB2.innerHTML = 2;
            p2TotalyBuytInLabel.innerHTML = 'Player 2: ' + 0;
            winnerOptionP2.innerText = 'Player 2';
        } else {
            inGameBorderP2.innerHTML = `${pNickNamesArr[1]} ${pChipsArr[1]}`
            bB2.innerHTML = pNickNamesArr[1];
            p2TotalyBuytInLabel.innerHTML = `${pNickNamesArr[1]} ${pChipsArr[1]}`
            winnerOptionP2.innerText = pNickNamesArr[1];
        }

        if (pNickNamesArr[2] === undefined) {
            inGameBorderP3.innerHTML = '+';
            bB3.innerHTML = 3;
            p3TotalyBuytInLabel.innerHTML = 'Player 3: 0';
            winnerOptionP3.innerText = 'Player 3';
        } else {
            inGameBorderP3.innerHTML = `${pNickNamesArr[2]} ${pChipsArr[2]}`
            bB3.innerHTML = pNickNamesArr[2];
            p3TotalyBuytInLabel.innerHTML = `${pNickNamesArr[2]} ${pChipsArr[2]}`
            winnerOptionP3.innerText = pNickNamesArr[2];
        }

        if (pNickNamesArr[3] === undefined) {
            inGameBorderP4.innerHTML = '+';
            bB4.innerHTML = 4;
            p4TotalyBuytInLabel.innerHTML = 'Player 4: 0';
            winnerOptionP4.innerText = 'Player 4';
        } else {
            inGameBorderP4.innerHTML = pNickNamesArr[3] + " " + pChipsArr[3];
            bB4.innerHTML = pNickNamesArr[3];
            p4TotalyBuytInLabel.innerHTML = pNickNamesArr[3] + " " + pChipsArr[3];
            winnerOptionP4.innerText = pNickNamesArr[3];
        }

        if (pNickNamesArr[4] === undefined) {
            inGameBorderP5.innerHTML = '+';
            bB5.innerHTML = 5;
            p5TotalyBuytInLabel.innerHTML = 'Player 5: 0';
            winnerOptionP5.innerText = 'Player 5';
        } else {
            inGameBorderP5.innerHTML = pNickNamesArr[4] + " " + pChipsArr[4];
            bB5.innerHTML = pNickNamesArr[4];
            p5TotalyBuytInLabel.innerHTML = pNickNamesArr[4] + " " + pChipsArr[4];
            winnerOptionP5.innerText = pNickNamesArr[4];
        }


        // could fuck me up so remember the original version below (using pnicknames and user[nicknames]) //
        for (let i = 0; i < playerSId.length; i++) {
            if (user['sId'] === playerSId[i]) {
                user['inGameTurn'] = i + 1;
                p = new inGamePlayerSetters(pNickNamesArr[i], Number(pChipsArr[i]));
            }
        }

        if (user['inGameTurn'] === 1) {
            inGameBorderP1.style.left = '36.5vw';
            inGameBorderP1.style.top = '135vw';
            inGameBorderP2.style.left = '68vw';
            inGameBorderP2.style.top = '95vw';
            inGameBorderP3.style.left = '5vw';
            inGameBorderP3.style.top = '95vw';
            inGameBorderP4.style.left = '7vw';
            inGameBorderP4.style.top = '50vw';
            inGameBorderP5.style.left = '66vw';
            inGameBorderP5.style.top = '50vw';

            startGameButton.style.display = 'block';

            inGameBorderP5.addEventListener('click', function() {
                if (inGameBorderP5.innerHTML === '+') {
                    invitingUserToGamePage.style.display = 'block';
                }
            })

            displayActionP1.style.top = '133vw';
            displayActionP2.style.top = '114vw';
            displayActionP3.style.top = '114vw';
            displayActionP4.style.top = '69vw';
            displayActionP5.style.top = '69vw';

        }
        // p2 POV & other personal properties //
        if (user['inGameTurn'] === 2) {
            inGameBorderP1.style.left = '5vw';
            inGameBorderP1.style.top = '95vw';
            inGameBorderP2.style.left = '36.5vw';
            inGameBorderP2.style.top = '135vw';
            inGameBorderP3.style.left = '7vw';
            inGameBorderP3.style.top = '50vw';
            inGameBorderP4.style.left = '66vw';
            inGameBorderP4.style.top = '50vw';
            inGameBorderP5.style.left = '68vw';
            inGameBorderP5.style.top = '95vw';

            displayActionP1.style.top = '114vw';
            displayActionP2.style.top = '133vw';
            displayActionP3.style.top = '69vw';
            displayActionP4.style.top = '69vw';
            displayActionP5.style.top = '114vw';
        }
        // p3 POV & other personal properties // 
        if (user['inGameTurn'] === 3) {
            inGameBorderP1.style.left = '68vw';
            inGameBorderP1.style.top = '95vw';
            inGameBorderP2.style.left = '66vw';
            inGameBorderP2.style.top = '50vw';
            inGameBorderP3.style.left = '36.5vw';
            inGameBorderP3.style.top = '135vw';
            inGameBorderP4.style.left = '5vw';
            inGameBorderP4.style.top = '95vw';
            inGameBorderP5.style.left = '7vw';
            inGameBorderP5.style.top = '50vw';

            displayActionP1.style.top = '114vw';
            displayActionP2.style.top = '69vw';
            displayActionP3.style.top = '133vw';
            displayActionP4.style.top = '114vw';
            displayActionP5.style.top = '69vw';
        }
        // p4 POV & other personal properties //
        if (user['inGameTurn'] === 4) {
            inGameBorderP1.style.left = '66vw';
            inGameBorderP1.style.top = '50vw';
            inGameBorderP2.style.left = '7vw';
            inGameBorderP2.style.top = '50vw';
            inGameBorderP3.style.left = '68vw';
            inGameBorderP3.style.top = '95vw';
            inGameBorderP4.style.left = '36.5vw';
            inGameBorderP4.style.top = '135vw';
            inGameBorderP5.style.left = '5vw';
            inGameBorderP5.style.top = '95vw';

            displayActionP1.style.top = '69vw';
            displayActionP2.style.top = '69vw';
            displayActionP3.style.top = '114vw';
            displayActionP4.style.top = '133vw';
            displayActionP5.style.top = '114vw';
        }

        if (user['inGameTurn'] === 5) {
            inGameBorderP1.style.left = '7vw';
            inGameBorderP1.style.top = '50vw';
            inGameBorderP2.style.left = '5vw';
            inGameBorderP2.style.top = '95vw';
            inGameBorderP3.style.left = '66vw';
            inGameBorderP3.style.top = '50vw';
            inGameBorderP4.style.left = '68vw';
            inGameBorderP4.style.top = '95vw';
            inGameBorderP5.style.left = '36.5vw';
            inGameBorderP5.style.top = '135vw';

            displayActionP1.style.top = '69vw';
            displayActionP2.style.top = '114vw';
            displayActionP3.style.top = '69vw';
            displayActionP4.style.top = '114vw';
            displayActionP5.style.top = '133vw';
        }

        displayActionP1.style.left = inGameBorderP1.style.left;
        displayActionP2.style.left = inGameBorderP2.style.left;
        displayActionP3.style.left = inGameBorderP3.style.left;
        displayActionP4.style.left = inGameBorderP4.style.left;
        displayActionP5.style.left = inGameBorderP5.style.left;

    }
    if (rS === 6) {
        inGameBorderP1.innerText = `${pNickNamesArr[0]} ${pChipsArr[0]}`
        bB1.innerHTML = pNickNamesArr[0];
        p1TotalyBuytInLabel.innerHTML = `${pNickNamesArr[0]} ${pChipsArr[0]}`
        winnerOptionP1.innerText = pNickNamesArr[0];

        if (pNickNamesArr[1] === undefined) {
            inGameBorderP2.innerHTML = '+';
            bB2.innerHTML = 2;
            p2TotalyBuytInLabel.innerHTML = 'Player 2: ' + 0;
            winnerOptionP2.innerText = 'Player 2';
        } else {
            inGameBorderP2.innerHTML = `${pNickNamesArr[1]} ${pChipsArr[1]}`
            bB2.innerHTML = pNickNamesArr[1];
            p2TotalyBuytInLabel.innerHTML = `${pNickNamesArr[1]} ${pChipsArr[1]}`
            winnerOptionP2.innerText = pNickNamesArr[1];
        }

        if (pNickNamesArr[2] === undefined) {
            inGameBorderP3.innerHTML = '+';
            bB3.innerHTML = 3;
            p3TotalyBuytInLabel.innerHTML = 'Player 3: 0';
            winnerOptionP3.innerText = 'Player 3';
        } else {
            inGameBorderP3.innerHTML = `${pNickNamesArr[2]} ${pChipsArr[2]}`
            bB3.innerHTML = pNickNamesArr[2];
            p3TotalyBuytInLabel.innerHTML = `${pNickNamesArr[2]} ${pChipsArr[2]}`
            winnerOptionP3.innerText = pNickNamesArr[2];
        }

        if (pNickNamesArr[3] === undefined) {
            inGameBorderP4.innerHTML = '+';
            bB4.innerHTML = 4;
            p4TotalyBuytInLabel.innerHTML = 'Player 4: 0';
            winnerOptionP4.innerText = 'Player 4';
        } else {
            inGameBorderP4.innerHTML = pNickNamesArr[3] + " " + pChipsArr[3];
            bB4.innerHTML = pNickNamesArr[3];
            p4TotalyBuytInLabel.innerHTML = `${pNickNamesArr[3]} ${pChipsArr[3]}`
            winnerOptionP4.innerText = pNickNamesArr[3];
        }

        if (pNickNamesArr[4] === undefined) {
            inGameBorderP5.innerHTML = '+';
            bB5.innerHTML = 5;
            p5TotalyBuytInLabel.innerHTML = 'Player 5: 0';
            winnerOptionP5.innerText = 'Player 5';
        } else {
            inGameBorderP5.innerHTML = pNickNamesArr[4] + " " + pChipsArr[4];
            bB5.innerHTML = pNickNamesArr[4];
            p5TotalyBuytInLabel.innerHTML = `${pNickNamesArr[4]} ${pChipsArr[4]}`
            winnerOptionP5.innerText = pNickNamesArr[4];
        }

        if (pNickNamesArr[5] === undefined) {
            inGameBorderP6.innerHTML = '+';
            bB6.innerHTML = 6;
            p6TotalyBuytInLabel.innerHTML = 'Player 6: 0';
            winnerOptionP6.innerText = 'Player 6';
        } else {
            inGameBorderP6.innerHTML = pNickNamesArr[5] + " " + pChipsArr[5];
            bB6.innerHTML = pNickNamesArr[5];
            p6TotalyBuytInLabel.innerHTML = `${pNickNamesArr[5]} ${pChipsArr[5]}`
            winnerOptionP6.innerText = pNickNamesArr[5];
        }


        // could fuck me up so remember the original version below (using pnicknames and user[nicknames]) //
        for (let i = 0; i < playerSId.length; i++) {
            if (user['sId'] === playerSId[i]) {
                user['inGameTurn'] = i + 1;
                p = new inGamePlayerSetters(pNickNamesArr[i], Number(pChipsArr[i]));
            }
        }

        if (user['inGameTurn'] === 1) {
            inGameBorderP1.style.left = '36.5vw';
            inGameBorderP1.style.top = '135vw';
            inGameBorderP2.style.left = '68vw';
            inGameBorderP2.style.top = '98vw';
            inGameBorderP3.style.left = '5vw';
            inGameBorderP3.style.top = '55vw';
            inGameBorderP4.style.left = '36.5vw';
            inGameBorderP4.style.top = '24vw';
            inGameBorderP5.style.left = '68vw';
            inGameBorderP5.style.top = '55vw';
            inGameBorderP6.style.left = '5vw';
            inGameBorderP6.style.top = '98vw';

            startGameButton.style.display = 'block';

            inGameBorderP6.addEventListener('click', function() {
                if (inGameBorderP6.innerHTML === '+') {
                    invitingUserToGamePage.style.display = 'block';
                }
            })

            displayActionP1.style.top = '133vw';
            displayActionP2.style.top = '117vw';
            displayActionP3.style.top = '74vw';
            displayActionP4.style.top = '43vw';
            displayActionP5.style.top = '74vw';
            displayActionP6.style.top = '117vw';

        }

        if (user['inGameTurn'] === 2) {
            inGameBorderP1.style.left = '5vw';
            inGameBorderP1.style.top = '98vw';
            inGameBorderP2.style.left = '36.5vw';
            inGameBorderP2.style.top = '135vw';
            inGameBorderP3.style.left = '36.5vw';
            inGameBorderP3.style.top = '24vw';
            inGameBorderP4.style.left = '68vw';
            inGameBorderP4.style.top = '55vw';
            inGameBorderP5.style.left = '68vw';
            inGameBorderP5.style.top = '98vw';
            inGameBorderP6.style.left = '5vw';
            inGameBorderP6.style.top = '55vw';

            displayActionP1.style.top = '117vw';
            displayActionP2.style.top = '133vw';
            displayActionP3.style.top = '43vw';
            displayActionP4.style.top = '74vw';
            displayActionP5.style.top = '117vw';
            displayActionP6.style.top = '74vw';

        }

        if (user['inGameTurn'] === 3) {
            inGameBorderP1.style.left = '68vw';
            inGameBorderP1.style.top = '55vw';
            inGameBorderP2.style.left = '36.5vw';
            inGameBorderP2.style.top = '24vw';
            inGameBorderP3.style.left = '36.5vw';
            inGameBorderP3.style.top = '135vw';
            inGameBorderP4.style.left = '5vw';
            inGameBorderP4.style.top = '98vw';
            inGameBorderP5.style.left = '5vw';
            inGameBorderP5.style.top = '55vw';
            inGameBorderP6.style.left = '68vw';
            inGameBorderP6.style.top = '98vw';

            displayActionP1.style.top = '74vw';
            displayActionP2.style.top = '43vw';
            displayActionP3.style.top = '133vw';
            displayActionP4.style.top = '117vw';
            displayActionP5.style.top = '74vw';
            displayActionP6.style.top = '117vw';

        }

        if (user['inGameTurn'] === 4) {
            inGameBorderP1.style.left = '36.5vw';
            inGameBorderP1.style.top = '24vw';
            inGameBorderP2.style.left = '5vw';
            inGameBorderP2.style.top = '55vw';
            inGameBorderP3.style.left = '68vw';
            inGameBorderP3.style.top = '98vw';
            inGameBorderP4.style.left = '36.5vw';
            inGameBorderP4.style.top = '135vw';
            inGameBorderP5.style.left = '5vw';
            inGameBorderP5.style.top = '98vw';
            inGameBorderP6.style.left = '68vw';
            inGameBorderP6.style.top = '55vw';

            displayActionP1.style.top = '43vw';
            displayActionP2.style.top = '74vw';
            displayActionP3.style.top = '117vw';
            displayActionP4.style.top = '133vw';
            displayActionP5.style.top = '117vw';
            displayActionP6.style.top = '74vw';

        }

        if (user['inGameTurn'] === 5) {
            inGameBorderP1.style.left = '5vw';
            inGameBorderP1.style.top = '55vw';
            inGameBorderP2.style.left = '5vw';
            inGameBorderP2.style.top = '98vw';
            inGameBorderP3.style.left = '68vw';
            inGameBorderP3.style.top = '55vw';
            inGameBorderP4.style.left = '68vw';
            inGameBorderP4.style.top = '98vw';
            inGameBorderP5.style.left = '36.5vw';
            inGameBorderP5.style.top = '135vw';
            inGameBorderP6.style.left = '36.5vw';
            inGameBorderP6.style.top = '24vw';

            displayActionP1.style.top = '74vw';
            displayActionP2.style.top = '117vw';
            displayActionP3.style.top = '74vw';
            displayActionP4.style.top = '117vw';
            displayActionP5.style.top = '133vw';
            displayActionP6.style.top = '43vw';

        }

        if (user['inGameTurn'] === 6) {
            inGameBorderP1.style.left = '68vw';
            inGameBorderP1.style.top = '98vw';
            inGameBorderP2.style.left = '68vw';
            inGameBorderP2.style.top = '55vw';
            inGameBorderP3.style.left = '5vw';
            inGameBorderP3.style.top = '98vw';
            inGameBorderP4.style.left = '5vw';
            inGameBorderP4.style.top = '55vw';
            inGameBorderP5.style.left = '36.5vw';
            inGameBorderP5.style.top = '24vw';
            inGameBorderP6.style.left = '36.5vw';
            inGameBorderP6.style.top = '135vw';

            displayActionP1.style.top = '117vw';
            displayActionP2.style.top = '74vw';
            displayActionP3.style.top = '117vw';
            displayActionP4.style.top = '74vw';
            displayActionP5.style.top = '43vw';
            displayActionP6.style.top = '133vw';

        }

        displayActionP1.style.left = inGameBorderP1.style.left;
        displayActionP2.style.left = inGameBorderP2.style.left;
        displayActionP3.style.left = inGameBorderP3.style.left;
        displayActionP4.style.left = inGameBorderP4.style.left;
        displayActionP5.style.left = inGameBorderP5.style.left;
        displayActionP6.style.left = inGameBorderP6.style.left;
    }
    if (rS === 7) {

        inGameBorderP1.innerText = `${pNickNamesArr[0]} ${pChipsArr[0]}`
        bB1.innerHTML = pNickNamesArr[0];
        p1TotalyBuytInLabel.innerText = `${pNickNamesArr[0]}: ${pChipsArr[0]}`;
        winnerOptionP1.innerText = pNickNamesArr[0];

        if (pNickNamesArr[1] === undefined) {
            inGameBorderP2.innerHTML = '+';
            bB2.innerHTML = 2;
            p2TotalyBuytInLabel.innerHTML = 'Player 2: ' + 0;
            winnerOptionP2.innerText = 'Player 2';
        } else {
            inGameBorderP2.innerHTML = `${pNickNamesArr[1]} ${pChipsArr[1]}`
            bB2.innerHTML = pNickNamesArr[1];
            p2TotalyBuytInLabel.innerHTML = `${pNickNamesArr[1]}: ${pChipsArr[1]}`;
            winnerOptionP2.innerText = pNickNamesArr[1];
        }

        if (pNickNamesArr[2] === undefined) {
            inGameBorderP3.innerHTML = '+';
            bB3.innerHTML = 3;
            p3TotalyBuytInLabel.innerHTML = 'Player 3: ' + 0;
            winnerOptionP3.innerText = 'Player 3';
        } else {
            inGameBorderP3.innerHTML = `${pNickNamesArr[2]} ${pChipsArr[2]}`
            bB3.innerHTML = pNickNamesArr[2];
            p3TotalyBuytInLabel.innerHTML = `${pNickNamesArr[2]}: ${pChipsArr[2]}`;
            winnerOptionP3.innerText = pNickNamesArr[2];
        }

        if (pNickNamesArr[3] === undefined) {
            inGameBorderP4.innerHTML = '+';
            bB4.innerHTML = 4;
            p4TotalyBuytInLabel.innerHTML = 'Player 4: 0';
            winnerOptionP4.innerText = 'Player 4';
        } else {
            inGameBorderP4.innerHTML = pNickNamesArr[3] + " " + pChipsArr[3];
            bB4.innerHTML = pNickNamesArr[3];
            p4TotalyBuytInLabel.innerHTML = `${pNickNamesArr[3]} ${pChipsArr[3]}`
            winnerOptionP4.innerText = pNickNamesArr[3];
        }

        if (pNickNamesArr[4] === undefined) {
            inGameBorderP5.innerHTML = '+';
            bB5.innerHTML = 5;
            p5TotalyBuytInLabel.innerHTML = 'Player 5: 0';
            winnerOptionP5.innerText = 'Player 5';
        } else {
            inGameBorderP5.innerHTML = pNickNamesArr[4] + " " + pChipsArr[4];
            bB5.innerHTML = pNickNamesArr[4];
            p5TotalyBuytInLabel.innerHTML = `${pNickNamesArr[4]} ${pChipsArr[4]}`
            winnerOptionP5.innerText = pNickNamesArr[4];
        }

        if (pNickNamesArr[5] === undefined) {
            inGameBorderP6.innerHTML = '+';
            bB6.innerHTML = 6;
            p6TotalyBuytInLabel.innerHTML = 'Player 6: 0';
            winnerOptionP6.innerText = 'Player 6';
        } else {
            inGameBorderP6.innerHTML = pNickNamesArr[5] + " " + pChipsArr[5];
            bB6.innerHTML = pNickNamesArr[5];
            p6TotalyBuytInLabel.innerHTML = `${pNickNamesArr[5]} ${pChipsArr[5]}`
            winnerOptionP6.innerText = pNickNamesArr[5];
        }

        if (pNickNamesArr[6] === undefined) {
            inGameBorderP7.innerHTML = '+';
            bB7.innerHTML = 7;
            p7TotalyBuytInLabel.innerHTML = 'Player 7: 0';
            winnerOptionP7.innerText = 'Player 7';
        } else {
            inGameBorderP7.innerHTML = pNickNamesArr[6] + " " + pChipsArr[6];
            bB7.innerHTML = pNickNamesArr[6];
            p7TotalyBuytInLabel.innerHTML = `${pNickNamesArr[6]} ${pChipsArr[6]}`
            winnerOptionP7.innerText = pNickNamesArr[6];
        }


        // could fuck me up so remember the original version below (using pnicknames and user[nicknames]) //
        for (let i = 0; i < playerSId.length; i++) {
            if (user['sId'] === playerSId[i]) {
                user['inGameTurn'] = i + 1;
                p = new inGamePlayerSetters(pNickNamesArr[i], Number(pChipsArr[i]));
            }
        }

        if (user['inGameTurn'] === 1) {
            inGameBorderP1.style.left = '36.5vw';
            inGameBorderP1.style.top = '135vw';
            inGameBorderP2.style.left = '68vw';
            inGameBorderP2.style.top = '105vw';
            inGameBorderP3.style.left = '13vw';
            inGameBorderP3.style.top = '33vw';
            inGameBorderP4.style.left = '60.5vw';
            inGameBorderP4.style.top = '33vw';
            inGameBorderP5.style.left = '68vw';
            inGameBorderP5.style.top = '70vw';
            inGameBorderP6.style.left = '5vw';
            inGameBorderP6.style.top = '105vw';
            inGameBorderP7.style.left = '5vw';
            inGameBorderP7.style.top = '70vw';

            startGameButton.style.display = 'block';

            inGameBorderP7.addEventListener('click', function() {
                if (inGameBorderP7.innerHTML === '+') {
                    invitingUserToGamePage.style.display = 'block';
                }
            })

            displayActionP1.style.top = '133vw';
            displayActionP2.style.top = '124vw';
            displayActionP3.style.top = '52vw';
            displayActionP4.style.top = '52vw';
            displayActionP5.style.top = '89vw';
            displayActionP6.style.top = '124vw';
            displayActionP7.style.top = '89vw';

        }

        if (user['inGameTurn'] === 2) {
            inGameBorderP1.style.left = '5vw';
            inGameBorderP1.style.top = '105vw';
            inGameBorderP2.style.left = '36.5vw';
            inGameBorderP2.style.top = '135vw';
            inGameBorderP3.style.left = '60.5vw';
            inGameBorderP3.style.top = '33vw';
            inGameBorderP4.style.left = '68vw';
            inGameBorderP4.style.top = '70vw';
            inGameBorderP5.style.left = '68vw';
            inGameBorderP5.style.top = '105vw';
            inGameBorderP6.style.left = '5vw';
            inGameBorderP6.style.top = '70vw';
            inGameBorderP7.style.left = '13vw';
            inGameBorderP7.style.top = '33vw';

            displayActionP1.style.top = '124vw';
            displayActionP2.style.top = '133vw';
            displayActionP3.style.top = '52vw';
            displayActionP4.style.top = '89vw';
            displayActionP5.style.top = '124vw';
            displayActionP6.style.top = '89vw';
            displayActionP7.style.top = '52vw';

        }

        if (user['inGameTurn'] === 3) {
            inGameBorderP1.style.left = '60.5vw';
            inGameBorderP1.style.top = '33vw';
            inGameBorderP2.style.left = '13vw';
            inGameBorderP2.style.top = '33vw';
            inGameBorderP3.style.left = '36.5vw';
            inGameBorderP3.style.top = '135vw';
            inGameBorderP4.style.left = '5vw';
            inGameBorderP4.style.top = '105vw';
            inGameBorderP5.style.left = '5vw';
            inGameBorderP5.style.top = '70vw';
            inGameBorderP6.style.left = '68vw';
            inGameBorderP6.style.top = '70vw';
            inGameBorderP7.style.left = '68vw';
            inGameBorderP7.style.top = '105vw';

            displayActionP1.style.top = '52vw';
            displayActionP2.style.top = '52vw';
            displayActionP3.style.top = '133vw';
            displayActionP4.style.top = '124vw';
            displayActionP5.style.top = '89vw';
            displayActionP6.style.top = '89vw';
            displayActionP7.style.top = '124vw';

        }

        if (user['inGameTurn'] === 4) {
            inGameBorderP1.style.left = '13vw';
            inGameBorderP1.style.top = '33vw';
            inGameBorderP2.style.left = '5vw';
            inGameBorderP2.style.top = '70vw';
            inGameBorderP3.style.left = '68vw';
            inGameBorderP3.style.top = '105vw';
            inGameBorderP4.style.left = '36.5vw';
            inGameBorderP4.style.top = '135vw';
            inGameBorderP5.style.left = '5vw';
            inGameBorderP5.style.top = '105vw';
            inGameBorderP6.style.left = '60.5vw';
            inGameBorderP6.style.top = '33vw';
            inGameBorderP7.style.left = '68vw';
            inGameBorderP7.style.top = '70vw';

            displayActionP1.style.top = '52vw';
            displayActionP2.style.top = '89vw';
            displayActionP3.style.top = '124vw';
            displayActionP4.style.top = '133vw';
            displayActionP5.style.top = '124vw';
            displayActionP6.style.top = '52vw';
            displayActionP7.style.top = '89vw';

        }

        if (user['inGameTurn'] === 5) {
            inGameBorderP1.style.left = '5vw';
            inGameBorderP1.style.top = '70vw';
            inGameBorderP2.style.left = '5vw';
            inGameBorderP2.style.top = '105vw';
            inGameBorderP3.style.left = '68vw';
            inGameBorderP3.style.top = '70vw';
            inGameBorderP4.style.left = '68vw';
            inGameBorderP4.style.top = '105vw';
            inGameBorderP5.style.left = '36.5vw';
            inGameBorderP5.style.top = '135vw';
            inGameBorderP6.style.left = '13vw';
            inGameBorderP6.style.top = '33vw';
            inGameBorderP7.style.left = '60.5vw';
            inGameBorderP7.style.top = '33vw';

            displayActionP1.style.top = '89vw';
            displayActionP2.style.top = '124vw';
            displayActionP3.style.top = '89vw';
            displayActionP4.style.top = '124vw';
            displayActionP5.style.top = '133vw';
            displayActionP6.style.top = '52vw';
            displayActionP7.style.top = '52vw';

        }

        if (user['inGameTurn'] === 6) {
            inGameBorderP1.style.left = '68vw';
            inGameBorderP1.style.top = '105vw';
            inGameBorderP2.style.left = '68vw';
            inGameBorderP2.style.top = '70vw';
            inGameBorderP3.style.left = '5vw';
            inGameBorderP3.style.top = '70vw';
            inGameBorderP4.style.left = '13vw';
            inGameBorderP4.style.top = '33vw';
            inGameBorderP5.style.left = '60.5vw';
            inGameBorderP5.style.top = '33vw';
            inGameBorderP6.style.left = '36.5vw';
            inGameBorderP6.style.top = '135vw';
            inGameBorderP7.style.left = '5vw';
            inGameBorderP7.style.top = '105vw';

            displayActionP1.style.top = '124vw';
            displayActionP2.style.top = '89vw';
            displayActionP3.style.top = '89vw';
            displayActionP4.style.top = '52vw';
            displayActionP5.style.top = '52vw';
            displayActionP6.style.top = '133vw';
            displayActionP7.style.top = '124vw';

        }

        if (user['inGameTurn'] === 7) {
            inGameBorderP1.style.left = '68vw';
            inGameBorderP1.style.top = '70vw';
            inGameBorderP2.style.left = '60.5vw';
            inGameBorderP2.style.top = '33vw';
            inGameBorderP3.style.left = '5vw';
            inGameBorderP3.style.top = '105vw';
            inGameBorderP4.style.left = '5vw';
            inGameBorderP4.style.top = '70vw';
            inGameBorderP5.style.left = '13vw';
            inGameBorderP5.style.top = '33vw';
            inGameBorderP6.style.left = '68vw';
            inGameBorderP6.style.top = '105vw';
            inGameBorderP7.style.left = '36.5vw';
            inGameBorderP7.style.top = '135vw';

            displayActionP1.style.top = '89vw';
            displayActionP2.style.top = '52vw';
            displayActionP3.style.top = '124vw';
            displayActionP4.style.top = '89vw';
            displayActionP5.style.top = '52vw';
            displayActionP6.style.top = '124vw';
            displayActionP7.style.top = '133vw';

        }

        displayActionP1.style.left = inGameBorderP1.style.left;
        displayActionP2.style.left = inGameBorderP2.style.left;
        displayActionP3.style.left = inGameBorderP3.style.left;
        displayActionP4.style.left = inGameBorderP4.style.left;
        displayActionP5.style.left = inGameBorderP5.style.left;
        displayActionP6.style.left = inGameBorderP6.style.left;
        displayActionP7.style.left = inGameBorderP7.style.left;

    }
    if (rS === 8) {

        inGameBorderP1.innerText = `${pNickNamesArr[0]} ${pChipsArr[0]}`
        bB1.innerHTML = pNickNamesArr[0];
        p1TotalyBuytInLabel.innerText = `${pNickNamesArr[0]}: ${pChipsArr[0]}`;
        winnerOptionP1.innerText = pNickNamesArr[0];

        if (pNickNamesArr[1] === undefined) {
            inGameBorderP2.innerHTML = '+';
            bB2.innerHTML = 2;
            p2TotalyBuytInLabel.innerHTML = 'Player 2: ' + 0;
            winnerOptionP2.innerText = 'Player 2';
        } else {
            inGameBorderP2.innerHTML = `${pNickNamesArr[1]} ${pChipsArr[1]}`
            bB2.innerHTML = pNickNamesArr[1];
            p2TotalyBuytInLabel.innerHTML = `${pNickNamesArr[1]}: ${pChipsArr[1]}`;
            winnerOptionP2.innerText = pNickNamesArr[1];
        }

        if (pNickNamesArr[2] === undefined) {
            inGameBorderP3.innerHTML = '+';
            bB3.innerHTML = 3;
            p3TotalyBuytInLabel.innerHTML = 'Player 3: ' + 0;
            winnerOptionP3.innerText = 'Player 3';
        } else {
            inGameBorderP3.innerHTML = `${pNickNamesArr[2]} ${pChipsArr[2]}`
            bB3.innerHTML = pNickNamesArr[2];
            p3TotalyBuytInLabel.innerHTML = `${pNickNamesArr[2]}: ${pChipsArr[2]}`;
            winnerOptionP3.innerText = pNickNamesArr[2];
        }

        if (pNickNamesArr[3] === undefined) {
            inGameBorderP4.innerHTML = '+';
            bB4.innerHTML = 4;
            p4TotalyBuytInLabel.innerHTML = 'Player 4: 0';
            winnerOptionP4.innerText = 'Player 4';
        } else {
            inGameBorderP4.innerHTML = pNickNamesArr[3] + " " + pChipsArr[3];
            bB4.innerHTML = pNickNamesArr[3];
            p4TotalyBuytInLabel.innerHTML = `${pNickNamesArr[3]} ${pChipsArr[3]}`
            winnerOptionP4.innerText = pNickNamesArr[3];
        }

        if (pNickNamesArr[4] === undefined) {
            inGameBorderP5.innerHTML = '+';
            bB5.innerHTML = 5;
            p5TotalyBuytInLabel.innerHTML = 'Player 5: 0';
            winnerOptionP5.innerText = 'Player 5';
        } else {
            inGameBorderP5.innerHTML = pNickNamesArr[4] + " " + pChipsArr[4];
            bB5.innerHTML = pNickNamesArr[4];
            p5TotalyBuytInLabel.innerHTML = `${pNickNamesArr[4]} ${pChipsArr[4]}`
            winnerOptionP5.innerText = pNickNamesArr[4];
        }

        if (pNickNamesArr[5] === undefined) {
            inGameBorderP6.innerHTML = '+';
            bB6.innerHTML = 6;
            p6TotalyBuytInLabel.innerHTML = 'Player 6: 0';
            winnerOptionP6.innerText = 'Player 6';
        } else {
            inGameBorderP6.innerHTML = pNickNamesArr[5] + " " + pChipsArr[5];
            bB6.innerHTML = pNickNamesArr[5];
            p6TotalyBuytInLabel.innerHTML = `${pNickNamesArr[5]} ${pChipsArr[5]}`
            winnerOptionP6.innerText = pNickNamesArr[5];
        }

        if (pNickNamesArr[6] === undefined) {
            inGameBorderP7.innerHTML = '+';
            bB7.innerHTML = 7;
            p7TotalyBuytInLabel.innerHTML = 'Player 7: 0';
            winnerOptionP7.innerText = 'Player 7';
        } else {
            inGameBorderP7.innerHTML = pNickNamesArr[6] + " " + pChipsArr[6];
            bB7.innerHTML = pNickNamesArr[6];
            p7TotalyBuytInLabel.innerHTML = `${pNickNamesArr[6]} ${pChipsArr[6]}`
            winnerOptionP7.innerText = pNickNamesArr[6];
        }

        if (pNickNamesArr[7] === undefined) {
            inGameBorderP8.innerHTML = '+';
            bB8.innerHTML = 8;
            p8TotalyBuytInLabel.innerHTML = 'Player 8: 0';
            winnerOptionP8.innerText = 'Player 8';
        } else {
            inGameBorderP8.innerHTML = pNickNamesArr[7] + " " + pChipsArr[7];
            bB8.innerHTML = pNickNamesArr[7];
            p8TotalyBuytInLabel.innerHTML = `${pNickNamesArr[7]} ${pChipsArr[7]}`
            winnerOptionP8.innerText = pNickNamesArr[7];
        }

        for (let i = 0; i < playerSId.length; i++) {
            if (user['sId'] === playerSId[i]) {
                user['inGameTurn'] = i + 1;
                p = new inGamePlayerSetters(pNickNamesArr[i], Number(pChipsArr[i]));
            }
        }

        if (user['inGameTurn'] === 1) {
            inGameBorderP1.style.left = '36.5vw';
            inGameBorderP1.style.top = '135vw';
            inGameBorderP2.style.left = '68vw';
            inGameBorderP2.style.top = '105vw';
            inGameBorderP3.style.left = '7vw';
            inGameBorderP3.style.top = '50vw';
            inGameBorderP4.style.left = '36.5vw';
            inGameBorderP4.style.top = '24vw';
            inGameBorderP5.style.left = '71vw';
            inGameBorderP5.style.top = '77vw';
            inGameBorderP6.style.left = '5vw';
            inGameBorderP6.style.top = '105vw';
            inGameBorderP7.style.left = '2vw';
            inGameBorderP7.style.top = '77vw';
            inGameBorderP8.style.left = '66vw';
            inGameBorderP8.style.top = '50vw';

            startGameButton.style.display = 'block';

            inGameBorderP8.addEventListener('click', function() {
                if (inGameBorderP8.innerHTML === '+') {
                    invitingUserToGamePage.style.display = 'block';
                }
            })

            displayActionP1.style.top = '133vw';
            displayActionP2.style.top = '124vw';
            displayActionP3.style.top = '69vw';
            displayActionP4.style.top = '53vw';
            displayActionP5.style.top = '96vw';
            displayActionP6.style.top = '124vw';
            displayActionP7.style.top = '96vw';
            displayActionP8.style.top = '69vw';

        }

        if (user['inGameTurn'] === 2) {
            inGameBorderP1.style.left = '5vw';
            inGameBorderP1.style.top = '105vw';
            inGameBorderP2.style.left = '36.5vw';
            inGameBorderP2.style.top = '135vw';
            inGameBorderP3.style.left = '36.5vw';
            inGameBorderP3.style.top = '24vw';
            inGameBorderP4.style.left = '66vw';
            inGameBorderP4.style.top = '50vw';
            inGameBorderP5.style.left = '68vw';
            inGameBorderP5.style.top = '105vw';
            inGameBorderP6.style.left = '2vw';
            inGameBorderP6.style.top = '77vw';
            inGameBorderP7.style.left = '7vw';
            inGameBorderP7.style.top = '50vw';
            inGameBorderP8.style.left = '71vw';
            inGameBorderP8.style.top = '77vw';

            displayActionP1.style.top = '124vw';
            displayActionP2.style.top = '133vw';
            displayActionP3.style.top = '53vw';
            displayActionP4.style.top = '69vw';
            displayActionP5.style.top = '124vw';
            displayActionP6.style.top = '96vw';
            displayActionP7.style.top = '69vw';
            displayActionP8.style.top = '96vw';

        }

        if (user['inGameTurn'] === 3) {
            inGameBorderP1.style.left = '66vw';
            inGameBorderP1.style.top = '50vw';
            inGameBorderP2.style.left = '36.5vw';
            inGameBorderP2.style.top = '24vw';
            inGameBorderP3.style.left = '36.5vw';
            inGameBorderP3.style.top = '135vw';
            inGameBorderP4.style.left = '5vw';
            inGameBorderP4.style.top = '105vw';
            inGameBorderP5.style.left = '7vw';
            inGameBorderP5.style.top = '50vw';
            inGameBorderP6.style.left = '71vw';
            inGameBorderP6.style.top = '77vw';
            inGameBorderP7.style.left = '68vw';
            inGameBorderP7.style.top = '105vw';
            inGameBorderP8.style.left = '2vw';
            inGameBorderP8.style.top = '77vw';

            displayActionP1.style.top = '69vw';
            displayActionP2.style.top = '53vw';
            displayActionP3.style.top = '133vw';
            displayActionP4.style.top = '124vw';
            displayActionP5.style.top = '69vw';
            displayActionP6.style.top = '96vw';
            displayActionP7.style.top = '124vw';
            displayActionP8.style.top = '96vw';

        }

        if (user['inGameTurn'] === 4) {
            inGameBorderP1.style.left = '36.5vw';
            inGameBorderP1.style.top = '24vw';
            inGameBorderP2.style.left = '7vw';
            inGameBorderP2.style.top = '50vw';
            inGameBorderP3.style.left = '68vw';
            inGameBorderP3.style.top = '105vw';
            inGameBorderP4.style.left = '36.5vw';
            inGameBorderP4.style.top = '135vw';
            inGameBorderP5.style.left = '2vw';
            inGameBorderP5.style.top = '77vw';
            inGameBorderP6.style.left = '66vw';
            inGameBorderP6.style.top = '50vw';
            inGameBorderP7.style.left = '71vw';
            inGameBorderP7.style.top = '77vw';
            inGameBorderP8.style.left = '5vw';
            inGameBorderP8.style.top = '105vw';

            displayActionP1.style.top = '53vw';
            displayActionP2.style.top = '69vw';
            displayActionP3.style.top = '124vw';
            displayActionP4.style.top = '133vw';
            displayActionP5.style.top = '96vw';
            displayActionP6.style.top = '69vw';
            displayActionP7.style.top = '96vw';
            displayActionP8.style.top = '124vw';

        }

        if (user['inGameTurn'] === 5) {
            inGameBorderP1.style.left = '2vw';
            inGameBorderP1.style.top = '77vw';
            inGameBorderP2.style.left = '5vw';
            inGameBorderP2.style.top = '105vw';
            inGameBorderP3.style.left = '66vw';
            inGameBorderP3.style.top = '50vw';
            inGameBorderP4.style.left = '71vw';
            inGameBorderP4.style.top = '77vw';
            inGameBorderP5.style.left = '36.5vw';
            inGameBorderP5.style.top = '135vw';
            inGameBorderP6.style.left = '7vw';
            inGameBorderP6.style.top = '50vw';
            inGameBorderP7.style.left = '36.5vw';
            inGameBorderP7.style.top = '24vw';
            inGameBorderP8.style.left = '68vw';
            inGameBorderP8.style.top = '105vw';

            displayActionP1.style.top = '96vw';
            displayActionP2.style.top = '124vw';
            displayActionP3.style.top = '69vw';
            displayActionP4.style.top = '96vw';
            displayActionP5.style.top = '133vw';
            displayActionP6.style.top = '69vw';
            displayActionP7.style.top = '53vw';
            displayActionP8.style.top = '124vw';

        }

        if (user['inGameTurn'] === 6) {
            inGameBorderP1.style.left = '68vw';
            inGameBorderP1.style.top = '105vw';
            inGameBorderP2.style.left = '71vw';
            inGameBorderP2.style.top = '77vw';
            inGameBorderP3.style.left = '2vw';
            inGameBorderP3.style.top = '77vw';
            inGameBorderP4.style.left = '7vw';
            inGameBorderP4.style.top = '50vw';
            inGameBorderP5.style.left = '66vw';
            inGameBorderP5.style.top = '50vw';
            inGameBorderP6.style.left = '36.5vw';
            inGameBorderP6.style.top = '135vw';
            inGameBorderP7.style.left = '5vw';
            inGameBorderP7.style.top = '105vw';
            inGameBorderP8.style.left = '36.5vw';
            inGameBorderP8.style.top = '24vw';

            displayActionP1.style.top = '124vw';
            displayActionP2.style.top = '96vw';
            displayActionP3.style.top = '96vw';
            displayActionP4.style.top = '69vw';
            displayActionP5.style.top = '69vw';
            displayActionP6.style.top = '133vw';
            displayActionP7.style.top = '124vw';
            displayActionP8.style.top = '53vw';

        }

        if (user['inGameTurn'] === 7) {
            inGameBorderP1.style.left = '71vw';
            inGameBorderP1.style.top = '77vw';
            inGameBorderP2.style.left = '66vw';
            inGameBorderP2.style.top = '50vw';
            inGameBorderP3.style.left = '5vw';
            inGameBorderP3.style.top = '105vw';
            inGameBorderP4.style.left = '2vw';
            inGameBorderP4.style.top = '77vw';
            inGameBorderP5.style.left = '36.5vw';
            inGameBorderP5.style.top = '24vw';
            inGameBorderP6.style.left = '68vw';
            inGameBorderP6.style.top = '105vw';
            inGameBorderP7.style.left = '36.5vw';
            inGameBorderP7.style.top = '135vw';
            inGameBorderP8.style.left = '7vw';
            inGameBorderP8.style.top = '50vw';

            displayActionP1.style.top = '96vw';
            displayActionP2.style.top = '69vw';
            displayActionP3.style.top = '124vw';
            displayActionP4.style.top = '96vw';
            displayActionP5.style.top = '53vw';
            displayActionP6.style.top = '124vw';
            displayActionP7.style.top = '133vw';
            displayActionP8.style.top = '69vw';

        }

        if (user['inGameTurn'] === 8) {
            inGameBorderP1.style.left = '7vw';
            inGameBorderP1.style.top = '50vw';
            inGameBorderP2.style.left = '2vw';
            inGameBorderP2.style.top = '77vw';
            inGameBorderP3.style.left = '71vw';
            inGameBorderP3.style.top = '77vw';
            inGameBorderP4.style.left = '68vw';
            inGameBorderP4.style.top = '105vw';
            inGameBorderP5.style.left = '5vw';
            inGameBorderP5.style.top = '105vw';
            inGameBorderP6.style.left = '36.5vw';
            inGameBorderP6.style.top = '24vw';
            inGameBorderP7.style.left = '66vw';
            inGameBorderP7.style.top = '50vw';
            inGameBorderP8.style.left = '36.5vw';
            inGameBorderP8.style.top = '135vw';

            displayActionP1.style.top = '69vw';
            displayActionP2.style.top = '96vw';
            displayActionP3.style.top = '96vw';
            displayActionP4.style.top = '124vw';
            displayActionP5.style.top = '124vw';
            displayActionP6.style.top = '53vw';
            displayActionP7.style.top = '69vw';
            displayActionP8.style.top = '133vw';

        }

        displayActionP1.style.left = inGameBorderP1.style.left;
        displayActionP2.style.left = inGameBorderP2.style.left;
        displayActionP3.style.left = inGameBorderP3.style.left;
        displayActionP4.style.left = inGameBorderP4.style.left;
        displayActionP5.style.left = inGameBorderP5.style.left;
        displayActionP6.style.left = inGameBorderP6.style.left;
        displayActionP7.style.left = inGameBorderP7.style.left;
        displayActionP8.style.left = inGameBorderP8.style.left;

    }
    if (rS === 9) {

        inGameBorderP1.innerText = `${pNickNamesArr[0]} ${pChipsArr[0]}`
        bB1.innerHTML = pNickNamesArr[0];
        p1TotalyBuytInLabel.innerText = `${pNickNamesArr[0]}: ${pChipsArr[0]}`;
        winnerOptionP1.innerText = pNickNamesArr[0];

        if (pNickNamesArr[1] === undefined) {
            inGameBorderP2.innerHTML = '+';
            bB2.innerHTML = 2;
            p2TotalyBuytInLabel.innerHTML = 'Player 2: ' + 0;
            winnerOptionP2.innerText = 'Player 2';
        } else {
            inGameBorderP2.innerHTML = `${pNickNamesArr[1]} ${pChipsArr[1]}`
            bB2.innerHTML = pNickNamesArr[1];
            p2TotalyBuytInLabel.innerHTML = `${pNickNamesArr[1]}: ${pChipsArr[1]}`;
            winnerOptionP2.innerText = pNickNamesArr[1];
        }

        if (pNickNamesArr[2] === undefined) {
            inGameBorderP3.innerHTML = '+';
            bB3.innerHTML = 3;
            p3TotalyBuytInLabel.innerHTML = 'Player 3: ' + 0;
            winnerOptionP3.innerText = 'Player 3';
        } else {
            inGameBorderP3.innerHTML = `${pNickNamesArr[2]} ${pChipsArr[2]}`
            bB3.innerHTML = pNickNamesArr[2];
            p3TotalyBuytInLabel.innerHTML = `${pNickNamesArr[2]}: ${pChipsArr[2]}`;
            winnerOptionP3.innerText = pNickNamesArr[2];
        }

        if (pNickNamesArr[3] === undefined) {
            inGameBorderP4.innerHTML = '+';
            bB4.innerHTML = 4;
            p4TotalyBuytInLabel.innerHTML = 'Player 4: 0';
            winnerOptionP4.innerText = 'Player 4';
        } else {
            inGameBorderP4.innerHTML = pNickNamesArr[3] + " " + pChipsArr[3];
            bB4.innerHTML = pNickNamesArr[3];
            p4TotalyBuytInLabel.innerHTML = `${pNickNamesArr[3]} ${pChipsArr[3]}`
            winnerOptionP4.innerText = pNickNamesArr[3];
        }

        if (pNickNamesArr[4] === undefined) {
            inGameBorderP5.innerHTML = '+';
            bB5.innerHTML = 5;
            p5TotalyBuytInLabel.innerHTML = 'Player 5: 0';
            winnerOptionP5.innerText = 'Player 5';
        } else {
            inGameBorderP5.innerHTML = pNickNamesArr[4] + " " + pChipsArr[4];
            bB5.innerHTML = pNickNamesArr[4];
            p5TotalyBuytInLabel.innerHTML = `${pNickNamesArr[4]} ${pChipsArr[4]}`
            winnerOptionP5.innerText = pNickNamesArr[4];
        }

        if (pNickNamesArr[5] === undefined) {
            inGameBorderP6.innerHTML = '+';
            bB6.innerHTML = 6;
            p6TotalyBuytInLabel.innerHTML = 'Player 6: 0';
            winnerOptionP6.innerText = 'Player 6';
        } else {
            inGameBorderP6.innerHTML = pNickNamesArr[5] + " " + pChipsArr[5];
            bB6.innerHTML = pNickNamesArr[5];
            p6TotalyBuytInLabel.innerHTML = `${pNickNamesArr[5]} ${pChipsArr[5]}`
            winnerOptionP6.innerText = pNickNamesArr[5];
        }

        if (pNickNamesArr[6] === undefined) {
            inGameBorderP7.innerHTML = '+';
            bB7.innerHTML = 7;
            p7TotalyBuytInLabel.innerHTML = 'Player 7: 0';
            winnerOptionP7.innerText = 'Player 7';
        } else {
            inGameBorderP7.innerHTML = pNickNamesArr[6] + " " + pChipsArr[6];
            bB7.innerHTML = pNickNamesArr[6];
            p7TotalyBuytInLabel.innerHTML = `${pNickNamesArr[6]} ${pChipsArr[6]}`
            winnerOptionP7.innerText = pNickNamesArr[6];
        }

        if (pNickNamesArr[7] === undefined) {
            inGameBorderP8.innerHTML = '+';
            bB8.innerHTML = 8;
            p8TotalyBuytInLabel.innerHTML = 'Player 8: 0';
            winnerOptionP8.innerText = 'Player 8';
        } else {
            inGameBorderP8.innerHTML = pNickNamesArr[7] + " " + pChipsArr[7];
            bB8.innerHTML = pNickNamesArr[7];
            p8TotalyBuytInLabel.innerHTML = `${pNickNamesArr[7]} ${pChipsArr[7]}`
            winnerOptionP8.innerText = pNickNamesArr[7];
        }

        if (pNickNamesArr[8] === undefined) {
            inGameBorderP9.innerHTML = '+';
            bB9.innerHTML = 9;
            p9TotalyBuytInLabel.innerHTML = 'Player 9: 0';
            winnerOptionP9.innerText = 'Player 9';
        } else {
            inGameBorderP9.innerHTML = pNickNamesArr[8] + " " + pChipsArr[8];
            bB9.innerHTML = pNickNamesArr[8];
            p9TotalyBuytInLabel.innerHTML = `${pNickNamesArr[8]} ${pChipsArr[8]}`
            winnerOptionP9.innerText = pNickNamesArr[8];
        }

        for (let i = 0; i < playerSId.length; i++) {
            if (user['sId'] === playerSId[i]) {
                user['inGameTurn'] = i + 1;
                p = new inGamePlayerSetters(pNickNamesArr[i], Number(pChipsArr[i]));
            }
        }

        if (user['inGameTurn'] === 1) {
            inGameBorderP1.style.left = '36.5vw';
            inGameBorderP1.style.top = '135vw';
            inGameBorderP2.style.left = '68vw';
            inGameBorderP2.style.top = '109vw';
            inGameBorderP3.style.left = '5vw';
            inGameBorderP3.style.top = '55vw';
            inGameBorderP4.style.left = '17.5vw';
            inGameBorderP4.style.top = '28vw';
            inGameBorderP5.style.left = '71vw';
            inGameBorderP5.style.top = '82vw';
            inGameBorderP6.style.left = '5.5vw';
            inGameBorderP6.style.top = '109vw';
            inGameBorderP7.style.left = '2vw';
            inGameBorderP7.style.top = '82vw';
            inGameBorderP8.style.left = '56vw';
            inGameBorderP8.style.top = '28vw';
            inGameBorderP9.style.left = '68vw';
            inGameBorderP9.style.top = '55vw';

            startGameButton.style.display = 'block';

            inGameBorderP9.addEventListener('click', function() {
                if (inGameBorderP9.innerHTML === '+') {
                    invitingUserToGamePage.style.display = 'block';
                }
            })

            displayActionP1.style.top = '133vw';
            displayActionP2.style.top = '128vw';
            displayActionP3.style.top = '74vw';
            displayActionP4.style.top = '47vw';
            displayActionP5.style.top = '101vw';
            displayActionP6.style.top = '128vw';
            displayActionP7.style.top = '101vw';
            displayActionP8.style.top = '47vw';
            displayActionP9.style.top = '74vw';

        }

        if (user['inGameTurn'] === 2) {
            inGameBorderP1.style.left = '5.5vw';
            inGameBorderP1.style.top = '109vw';
            inGameBorderP2.style.left = '36.5vw';
            inGameBorderP2.style.top = '135vw';
            inGameBorderP3.style.left = '17.5vw';
            inGameBorderP3.style.top = '28vw';
            inGameBorderP4.style.left = '56vw';
            inGameBorderP4.style.top = '28vw';
            inGameBorderP5.style.left = '68vw';
            inGameBorderP5.style.top = '109vw';
            inGameBorderP6.style.left = '2vw';
            inGameBorderP6.style.top = '82vw';
            inGameBorderP7.style.left = '5vw';
            inGameBorderP7.style.top = '55vw';
            inGameBorderP8.style.left = '68vw';
            inGameBorderP8.style.top = '55vw';
            inGameBorderP9.style.left = '71vw';
            inGameBorderP9.style.top = '82vw';

            displayActionP1.style.top = '128vw';
            displayActionP2.style.top = '133vw';
            displayActionP3.style.top = '47vw';
            displayActionP4.style.top = '47vw';
            displayActionP5.style.top = '128vw';
            displayActionP6.style.top = '101vw';
            displayActionP7.style.top = '74vw';
            displayActionP8.style.top = '74vw';
            displayActionP9.style.top = '101vw';

        }

        if (user['inGameTurn'] === 3) {
            // inGameBorderP1.style.left = '56vw';
            // inGameBorderP1.style.top = '28vw';
            inGameBorderP1.style.left = '68vw';
            inGameBorderP1.style.top = '55vw';
            inGameBorderP2.style.left = '17.5vw';
            inGameBorderP2.style.top = '28vw';
            inGameBorderP3.style.left = '36.5vw';
            inGameBorderP3.style.top = '135vw';
            inGameBorderP4.style.left = '5.5vw';
            inGameBorderP4.style.top = '109vw';
            inGameBorderP5.style.left = '17.5vw';
            inGameBorderP5.style.top = '28vw';
            inGameBorderP6.style.left = '71vw';
            inGameBorderP6.style.top = '82vw';
            inGameBorderP7.style.left = '68vw';
            inGameBorderP7.style.top = '109vw';
            inGameBorderP8.style.left = '2vw';
            inGameBorderP8.style.top = '82vw';
            inGameBorderP9.style.left = '5vw';
            inGameBorderP9.style.top = '55vw';

            displayActionP1.style.top = '74vw';
            displayActionP2.style.top = '47vw';
            displayActionP3.style.top = '133vw';
            displayActionP4.style.top = '128vw';
            displayActionP5.style.top = '47vw';
            displayActionP6.style.top = '101vw';
            displayActionP7.style.top = '128vw';
            displayActionP8.style.top = '101vw';
            displayActionP9.style.top = '74vw';

        }

        if (user['inGameTurn'] === 4) {
            inGameBorderP1.style.left = '56vw';
            inGameBorderP1.style.top = '28vw';
            inGameBorderP2.style.left = '17.5vw';
            inGameBorderP2.style.top = '28vw';
            inGameBorderP3.style.left = '68vw';
            inGameBorderP3.style.top = '109vw';
            inGameBorderP4.style.left = '36.5vw';
            inGameBorderP4.style.top = '135vw';
            inGameBorderP5.style.left = '5vw';
            inGameBorderP5.style.top = '55vw';
            inGameBorderP6.style.left = '68vw';
            inGameBorderP6.style.top = '55vw';
            inGameBorderP7.style.left = '71vw';
            inGameBorderP7.style.top = '82vw';
            inGameBorderP8.style.left = '5.5vw';
            inGameBorderP8.style.top = '109vw';
            inGameBorderP9.style.left = '2vw';
            inGameBorderP9.style.top = '82vw';

            displayActionP1.style.top = '47vw';
            displayActionP2.style.top = '47vw';
            displayActionP3.style.top = '128vw';
            displayActionP4.style.top = '133vw';
            displayActionP5.style.top = '74vw';
            displayActionP6.style.top = '74vw';
            displayActionP7.style.top = '101vw';
            displayActionP8.style.top = '128vw';
            displayActionP9.style.top = '101vw';

        }

        if (user['inGameTurn'] === 5) {
            inGameBorderP1.style.left = '2vw';
            inGameBorderP1.style.top = '82vw';
            inGameBorderP2.style.left = '5.5vw';
            inGameBorderP2.style.top = '109vw';
            inGameBorderP3.style.left = '56vw';
            inGameBorderP3.style.top = '28vw';
            inGameBorderP4.style.left = '68vw';
            inGameBorderP4.style.top = '55vw';
            inGameBorderP5.style.left = '36.5vw';
            inGameBorderP5.style.top = '135vw';
            inGameBorderP6.style.left = '5vw';
            inGameBorderP6.style.top = '55vw';
            inGameBorderP7.style.left = '17.5vw';
            inGameBorderP7.style.top = '28vw';
            inGameBorderP8.style.left = '71vw';
            inGameBorderP8.style.top = '82vw';
            inGameBorderP9.style.left = '68vw';
            inGameBorderP9.style.top = '109vw';

            displayActionP1.style.top = '101vw';
            displayActionP2.style.top = '128vw';
            displayActionP3.style.top = '47vw';
            displayActionP4.style.top = '74vw';
            displayActionP5.style.top = '133vw';
            displayActionP6.style.top = '74vw';
            displayActionP7.style.top = '47vw';
            displayActionP8.style.top = '101vw';
            displayActionP9.style.top = '128vw';

        }

        if (user['inGameTurn'] === 6) {
            inGameBorderP1.style.left = '68vw';
            inGameBorderP1.style.top = '109vw';
            inGameBorderP2.style.left = '71vw';
            inGameBorderP2.style.top = '82vw';
            inGameBorderP3.style.left = '2vw';
            inGameBorderP3.style.top = '82vw';
            inGameBorderP4.style.left = '5vw';
            inGameBorderP4.style.top = '55vw';
            inGameBorderP5.style.left = '68vw';
            inGameBorderP5.style.top = '55vw';
            inGameBorderP6.style.left = '36.5vw';
            inGameBorderP6.style.top = '135vw';
            inGameBorderP7.style.left = '5.5vw';
            inGameBorderP7.style.top = '109vw';
            inGameBorderP8.style.left = '17.5vw';
            inGameBorderP8.style.top = '28vw';
            inGameBorderP9.style.left = '56vw';
            inGameBorderP9.style.top = '28vw';

            displayActionP1.style.top = '128vw';
            displayActionP2.style.top = '101vw';
            displayActionP3.style.top = '101vw';
            displayActionP4.style.top = '74vw';
            displayActionP5.style.top = '74vw';
            displayActionP6.style.top = '133vw';
            displayActionP7.style.top = '128vw';
            displayActionP8.style.top = '47vw';
            displayActionP9.style.top = '47vw';

        }

        if (user['inGameTurn'] === 7) {
            inGameBorderP1.style.left = '71vw';
            inGameBorderP1.style.top = '82vw';
            inGameBorderP2.style.left = '68vw';
            inGameBorderP2.style.top = '55vw';
            inGameBorderP3.style.left = '5.5vw';
            inGameBorderP3.style.top = '109vw';
            inGameBorderP4.style.left = '2vw';
            inGameBorderP4.style.top = '82vw';
            inGameBorderP5.style.left = '56vw';
            inGameBorderP5.style.top = '28vw';
            inGameBorderP6.style.left = '68vw';
            inGameBorderP6.style.top = '109vw';
            inGameBorderP7.style.left = '36.5vw';
            inGameBorderP7.style.top = '135vw';
            inGameBorderP8.style.left = '5vw';
            inGameBorderP8.style.top = '55vw';
            inGameBorderP9.style.left = '17.5vw';
            inGameBorderP9.style.top = '28vw';

            displayActionP1.style.top = '101vw';
            displayActionP2.style.top = '74vw';
            displayActionP3.style.top = '128vw';
            displayActionP4.style.top = '101vw';
            displayActionP5.style.top = '47vw';
            displayActionP6.style.top = '128vw';
            displayActionP7.style.top = '133vw';
            displayActionP8.style.top = '74vw';
            displayActionP9.style.top = '47vw';

        }

        if (user['inGameTurn'] === 8) {
            inGameBorderP1.style.left = '17.5vw';
            inGameBorderP1.style.top = '28vw';
            inGameBorderP2.style.left = '5vw';
            inGameBorderP2.style.top = '55vw';
            inGameBorderP3.style.left = '71vw';
            inGameBorderP3.style.top = '82vw';
            inGameBorderP4.style.left = '68vw';
            inGameBorderP4.style.top = '109vw';
            inGameBorderP5.style.left = '2vw';
            inGameBorderP5.style.top = '82vw';
            inGameBorderP6.style.left = '56vw';
            inGameBorderP6.style.top = '28vw';
            inGameBorderP7.style.left = '68vw';
            inGameBorderP7.style.top = '55vw';
            inGameBorderP8.style.left = '36.5vw';
            inGameBorderP8.style.top = '135vw';
            inGameBorderP9.style.left = '5.5vw';
            inGameBorderP9.style.top = '109vw';

            displayActionP1.style.top = '47vw';
            displayActionP2.style.top = '74vw';
            displayActionP3.style.top = '101vw';
            displayActionP4.style.top = '128vw';
            displayActionP5.style.top = '101vw';
            displayActionP6.style.top = '47vw';
            displayActionP7.style.top = '74vw';
            displayActionP8.style.top = '133vw';
            displayActionP9.style.top = '128vw';

        }

        if (user['inGameTurn'] === 9) {
            inGameBorderP1.style.left = '5vw';
            inGameBorderP1.style.top = '55vw';
            inGameBorderP2.style.left = '2vw';
            inGameBorderP2.style.top = '82vw';
            inGameBorderP3.style.left = '68vw';
            inGameBorderP3.style.top = '55vw';
            inGameBorderP4.style.left = '71vw';
            inGameBorderP4.style.top = '82vw';
            inGameBorderP5.style.left = '5.5vw';
            inGameBorderP5.style.top = '109vw';
            inGameBorderP6.style.left = '17.5vw';
            inGameBorderP6.style.top = '28vw';
            inGameBorderP7.style.left = '56vw';
            inGameBorderP7.style.top = '28vw';
            inGameBorderP8.style.left = '68vw';
            inGameBorderP8.style.top = '109vw';
            inGameBorderP9.style.left = '36.5vw';
            inGameBorderP9.style.top = '135vw';

            displayActionP1.style.top = '74vw';
            displayActionP2.style.top = '101vw';
            displayActionP3.style.top = '74vw';
            displayActionP4.style.top = '101vw';
            displayActionP5.style.top = '128vw';
            displayActionP6.style.top = '47vw';
            displayActionP7.style.top = '47vw';
            displayActionP8.style.top = '128vw';
            displayActionP9.style.top = '133vw';
        }

        displayActionP1.style.left = inGameBorderP1.style.left;
        displayActionP2.style.left = inGameBorderP2.style.left;
        displayActionP3.style.left = inGameBorderP3.style.left;
        displayActionP4.style.left = inGameBorderP4.style.left;
        displayActionP5.style.left = inGameBorderP5.style.left;
        displayActionP6.style.left = inGameBorderP6.style.left;
        displayActionP7.style.left = inGameBorderP7.style.left;
        displayActionP8.style.left = inGameBorderP8.style.left;
        displayActionP9.style.left = inGameBorderP9.style.left;

    }

}

const hostInitiatesPreGameSettingsPage = () => {
    preLobbyGameSettingsPopUpPage.style.display = 'block';
}

const hostSubmitsUserInfoGameStarts = () => {
    preLobbyGameSettingsPopUpPage.style.display = 'none';
    startGameButton.style.display = 'none';
    socket.emit('hostSubmitsFinalGameInfo', bigBlindOptionSelect.value, chooseAnteInput.value);
}

const settingPlayerButtons = (rS) => {

    if (rS === 4) {
        if (user['inGameTurn'] === 1) {
            p1Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 2) {
            p2Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 3) {
            p3Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 4) {
            p4Buttons.style.display = 'block';
        }
    }

    if (rS === 5) {
        if (user['inGameTurn'] === 1) {
            p1Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 2) {
            p2Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 3) {
            p3Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 4) {
            p4Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 5) {
            p5Buttons.style.display = 'block';
        }
    }

    if (rS === 6) {
        if (user['inGameTurn'] === 1) {
            p1Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 2) {
            p2Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 3) {
            p3Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 4) {
            p4Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 5) {
            p5Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 6) {
            p6Buttons.style.display = 'block';
        }
    }

    if (rS === 7) {
        if (user['inGameTurn'] === 1) {
            p1Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 2) {
            p2Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 3) {
            p3Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 4) {
            p4Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 5) {
            p5Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 6) {
            p6Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 7) {
            p7Buttons.style.display = 'block';
        }
    }

    if (rS === 8) {
        if (user['inGameTurn'] === 1) {
            p1Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 2) {
            p2Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 3) {
            p3Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 4) {
            p4Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 5) {
            p5Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 6) {
            p6Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 7) {
            p7Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 8) {
            p7Buttons.style.display = 'block';
        }
    }

    if (rS === 9) {
        if (user['inGameTurn'] === 1) {
            p1Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 2) {
            p2Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 3) {
            p3Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 4) {
            p4Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 5) {
            p5Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 6) {
            p6Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 7) {
            p7Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 8) {
            p7Buttons.style.display = 'block';
        } else if (user['inGameTurn'] === 9) {
            p7Buttons.style.display = 'block';
        }
    }

}

const settingPlayerChipsAndCards = (anteValue, rS) => {

    if (rS === 4) {
        divForPlacementCardImgP1.style.display = 'block';
        divForPlacementCardImgP2.style.display = 'block';
        divForPlacementCardImgP3.style.display = 'block';
        divForPlacementCardImgP4.style.display = 'block';

        if (user['inGameTurn'] === 1) {
            divForPlacementCardImgP1.style.left = '255px';
            divForPlacementCardImgP1.style.top = '569px';

            divForPlacementCardImgP2.style.left = '257px';
            divForPlacementCardImgP2.style.top = '327px';

            divForPlacementCardImgP3.style.left = '106px';
            divForPlacementCardImgP3.style.top = '327px';

            divForPlacementCardImgP4.style.left = '231px';
            divForPlacementCardImgP4.style.top = '98px';

            divForCardImgP1.style.left = '315px';
            divForCardImgP1.style.top = '549px';
            if (anteValue === .50) {
                lowestChipP1.innerText = .25;
                secondLowestChipP1.innerText = .50;
                secondHighestChipP1.innerText = 1;
                highestChipP1.innerText = 5;
            } else if (anteValue === 1) {
                lowestChipP1.innerText = .50;
                secondLowestChipP1.innerText = 1;
                secondHighestChipP1.innerText = 5;
                highestChipP1.innerText = 10;
            }
        } else if (user['inGameTurn'] === 2) {

            divForPlacementCardImgP1.style.left = '106px';
            divForPlacementCardImgP1.style.top = '327px';

            divForPlacementCardImgP2.style.left = '255px';
            divForPlacementCardImgP2.style.top = '569px';

            divForPlacementCardImgP3.style.left = '231px';
            divForPlacementCardImgP3.style.top = '98px';

            divForPlacementCardImgP4.style.left = '257px';
            divForPlacementCardImgP4.style.top = '327px';

        } else if (user['inGameTurn'] === 3) {

            divForPlacementCardImgP1.style.left = '257px';
            divForPlacementCardImgP1.style.top = '327px';

            divForPlacementCardImgP2.style.left = '231px';
            divForPlacementCardImgP2.style.top = '98px';

            divForPlacementCardImgP3.style.left = '255px';
            divForPlacementCardImgP3.style.top = '569px';

            divForPlacementCardImgP4.style.left = '106px';
            divForPlacementCardImgP4.style.top = '327px';

        } else if (user['inGameTurn'] === 4) {

            divForPlacementCardImgP1.style.left = '231px';
            divForPlacementCardImgP1.style.top = '98px';

            divForPlacementCardImgP2.style.left = '106px';
            divForPlacementCardImgP2.style.top = '327px';

            divForPlacementCardImgP3.style.left = '257px';
            divForPlacementCardImgP3.style.top = '327px';

            divForPlacementCardImgP4.style.left = '255px';
            divForPlacementCardImgP4.style.top = '569px';
            
        } 

    } else if (rS === 5) {
        divForPlacementCardImgP1.style.display = 'block';
        divForPlacementCardImgP2.style.display = 'block';
        divForPlacementCardImgP3.style.display = 'block';
        divForPlacementCardImgP4.style.display = 'block';
        divForPlacementCardImgP5.style.display = 'block';

        if (user['inGameTurn'] === 1) {
            divForPlacementCardImgP1.style.left = '255px';
            divForPlacementCardImgP1.style.top = '569px';

            divForPlacementCardImgP2.style.left = '258px';
            divForPlacementCardImgP2.style.top = '379px';

            divForPlacementCardImgP3.style.left = '108px';
            divForPlacementCardImgP3.style.top = '379px';

            divForPlacementCardImgP4.style.left = '119px';
            divForPlacementCardImgP4.style.top = '199px';

            divForPlacementCardImgP5.style.left = '246px';
            divForPlacementCardImgP5.style.top = '199px';

            divForCardImgP1.style.left = '315px';
            divForCardImgP1.style.top = '549px';
            if (anteValue === .50) {
                lowestChipP1.innerText = .25;
                secondLowestChipP1.innerText = .50;
                secondHighestChipP1.innerText = 1;
                highestChipP1.innerText = 5;
            } else if (anteValue === 1) {
                lowestChipP1.innerText = .50;
                secondLowestChipP1.innerText = 1;
                secondHighestChipP1.innerText = 5;
                highestChipP1.innerText = 10;
            }
        } else if (user['inGameTurn'] === 2) {

            divForPlacementCardImgP1.style.left = '108px';
            divForPlacementCardImgP1.style.top = '379px';

            divForPlacementCardImgP2.style.left = '255px';
            divForPlacementCardImgP2.style.top = '569px';

            divForPlacementCardImgP3.style.left = '119px';
            divForPlacementCardImgP3.style.top = '199px';

            divForPlacementCardImgP4.style.left = '246px';
            divForPlacementCardImgP4.style.top = '199px';

            divForPlacementCardImgP5.style.left = '258px';
            divForPlacementCardImgP5.style.top = '379px';

        } else if (user['inGameTurn'] === 3) {

            divForPlacementCardImgP1.style.left = '258px';
            divForPlacementCardImgP1.style.top = '379px';

            divForPlacementCardImgP2.style.left = '246px';
            divForPlacementCardImgP2.style.top = '199px';

            divForPlacementCardImgP3.style.left = '255px';
            divForPlacementCardImgP3.style.top = '569px';

            divForPlacementCardImgP4.style.left = '108px';
            divForPlacementCardImgP4.style.top = '379px';

            divForPlacementCardImgP5.style.left = '119px';
            divForPlacementCardImgP5.style.top = '199px';

        } else if (user['inGameTurn'] === 4) {

            divForPlacementCardImgP1.style.left = '246px';
            divForPlacementCardImgP1.style.top = '199px';

            divForPlacementCardImgP2.style.left = '119px';
            divForPlacementCardImgP2.style.top = '199px';

            divForPlacementCardImgP3.style.left = '258px';
            divForPlacementCardImgP3.style.top = '379px';

            divForPlacementCardImgP4.style.left = '255px';
            divForPlacementCardImgP4.style.top = '569px';

            divForPlacementCardImgP5.style.left = '108px';
            divForPlacementCardImgP5.style.top = '379px';

        } else if (user['inGameTurn'] === 5) {

            divForPlacementCardImgP1.style.left = '119px';
            divForPlacementCardImgP1.style.top = '199px';

            divForPlacementCardImgP2.style.left = '108px';
            divForPlacementCardImgP2.style.top = '379px';

            divForPlacementCardImgP3.style.left = '246px';
            divForPlacementCardImgP3.style.top = '199px';

            divForPlacementCardImgP4.style.left = '258px';
            divForPlacementCardImgP4.style.top = '379px';

            divForPlacementCardImgP5.style.left = '255px';
            divForPlacementCardImgP5.style.top = '569px';

        } 
    } else if (rS === 6) {
        divForPlacementCardImgP1.style.display = 'block';
        divForPlacementCardImgP2.style.display = 'block';
        divForPlacementCardImgP3.style.display = 'block';
        divForPlacementCardImgP4.style.display = 'block';
        divForPlacementCardImgP5.style.display = 'block';
        divForPlacementCardImgP6.style.display = 'block';

        if (user['inGameTurn'] === 1) {

            divForPlacementCardImgP1.style.left = '255px';
            divForPlacementCardImgP1.style.top = '569px';

            divForPlacementCardImgP2.style.left = '254px';
            divForPlacementCardImgP2.style.top = '385px';

            divForPlacementCardImgP3.style.left = '111px';
            divForPlacementCardImgP3.style.top = '218px';

            divForPlacementCardImgP4.style.left = '233px';
            divForPlacementCardImgP4.style.top = '94px';

            divForPlacementCardImgP5.style.left = '254px';
            divForPlacementCardImgP5.style.top = '218px';

            divForPlacementCardImgP6.style.left = '111px';
            divForPlacementCardImgP6.style.top = '385px';

        } else if (user['inGameTurn'] === 2) {

            divForPlacementCardImgP1.style.left = '111px';
            divForPlacementCardImgP1.style.top = '385px';

            divForPlacementCardImgP2.style.left = '255px';
            divForPlacementCardImgP2.style.top = '569px';

            divForPlacementCardImgP3.style.left = '233px';
            divForPlacementCardImgP3.style.top = '94px';

            divForPlacementCardImgP4.style.left = '254px';
            divForPlacementCardImgP4.style.top = '218px';

            divForPlacementCardImgP5.style.left = '254px';
            divForPlacementCardImgP5.style.top = '385px';

            divForPlacementCardImgP6.style.left = '111px';
            divForPlacementCardImgP6.style.top = '218px';

        } else if (user['inGameTurn'] === 3) {

            divForPlacementCardImgP1.style.left = '254px';
            divForPlacementCardImgP1.style.top = '218px';

            divForPlacementCardImgP2.style.left = '233px';
            divForPlacementCardImgP2.style.top = '94px';

            divForPlacementCardImgP3.style.left = '255px';
            divForPlacementCardImgP3.style.top = '569px';

            divForPlacementCardImgP4.style.left = '111px';
            divForPlacementCardImgP4.style.top = '385px';

            divForPlacementCardImgP5.style.left = '111px';
            divForPlacementCardImgP5.style.top = '218px';

            divForPlacementCardImgP6.style.left = '254px';
            divForPlacementCardImgP6.style.top = '385px';

        } else if (user['inGameTurn'] === 4) {

            divForPlacementCardImgP1.style.left = '233px';
            divForPlacementCardImgP1.style.top = '94px';

            divForPlacementCardImgP2.style.left = '111px';
            divForPlacementCardImgP2.style.top = '218px';

            divForPlacementCardImgP3.style.left = '254px';
            divForPlacementCardImgP3.style.top = '385px';

            divForPlacementCardImgP4.style.left = '255px';
            divForPlacementCardImgP4.style.top = '569px';

            divForPlacementCardImgP5.style.left = '111px';
            divForPlacementCardImgP5.style.top = '385px';

            divForPlacementCardImgP6.style.left = '254px';
            divForPlacementCardImgP6.style.top = '218px';

        } else if (user['inGameTurn'] === 5) {

            divForPlacementCardImgP1.style.left = '111px';
            divForPlacementCardImgP1.style.top = '218px';

            divForPlacementCardImgP2.style.left = '111px';
            divForPlacementCardImgP2.style.top = '385px';

            divForPlacementCardImgP3.style.left = '254px';
            divForPlacementCardImgP3.style.top = '218px';

            divForPlacementCardImgP4.style.left = '254px';
            divForPlacementCardImgP4.style.top = '385px';

            divForPlacementCardImgP5.style.left = '255px';
            divForPlacementCardImgP5.style.top = '569px';

            divForPlacementCardImgP6.style.left = '233px';
            divForPlacementCardImgP6.style.top = '94px';

        } else if (user['inGameTurn'] === 6) {

            divForPlacementCardImgP1.style.left = '254px';
            divForPlacementCardImgP1.style.top = '385px';

            divForPlacementCardImgP2.style.left = '254px';
            divForPlacementCardImgP2.style.top = '218px';

            divForPlacementCardImgP3.style.left = '111px';
            divForPlacementCardImgP3.style.top = '385px';

            divForPlacementCardImgP4.style.left = '111px';
            divForPlacementCardImgP4.style.top = '218px';

            divForPlacementCardImgP5.style.left = '233px';
            divForPlacementCardImgP5.style.top = '94px';

            divForPlacementCardImgP6.style.left = '255px';
            divForPlacementCardImgP6.style.top = '569px';

        }
    }


}

const finalizingGameEnvironment = (bbValue, anteValue, rS, pJoiningMidGameIndicator, ongoingGameState) => {

    settingPlayerButtons(rS);
    settingPlayerChipsAndCards(Number(anteValue), rS);

    user.userCurrentlyInGame = true;
    user.currentPage = 'u_a_inGameState';

    gameObj.gameSize = rS;
    gameObj.bbAnte = Number(anteValue);
    gameObj.sbAnte = Number(anteValue) / 2;

    inGamePotDisplay.style.display = 'block';
    inGameRoundDisplay.style.display = 'block';

    if (rS === 4) {

        if (!pJoiningMidGameIndicator) {

            gameObj.totalRoundsCompleted = 0;
            gameObj.currentRoundInPlay = false;
            gameObj.totalPlayersFolded = 0;

            gameObj.currentRound = 0;
            gameObj.roundName = 'PreFlop';
            gameObj.lastBet = 0;
            gameObj.lastRaise = 0;
            gameObj.currentBettor = '';
            gameObj.currentRaiser = '';
            gameObj.pot = gameObj.bbAnte + gameObj.sbAnte;

            inGamePotDisplay.innerText = gameObj.bbAnte + gameObj.sbAnte;
            inGameRoundDisplay.innerText = 'PreFlop';

            gICurrentPot.innerHTML = 'Current Pot: ' + gameObj.pot;
            gICurrentRound.innerHTML = 'Current Round: PreFlop';

            gameObj.p1Disconnected = false;
            gameObj.p2Disconnected = false;
            gameObj.p3Disconnected = false;
            gameObj.p4Disconnected = false;

            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p1Folded = 0;
            gameObj.p2Folded = 0;
            gameObj.p3Folded = 0;
            gameObj.p4Folded = 0;
            gameObj.p1AnteCalled = 0;
            gameObj.p2AnteCalled = 0;
            gameObj.p3AnteCalled = 0;
            gameObj.p4AnteCalled = 0;
            gameObj.p1ActedInCurrentRound = false;
            gameObj.p2ActedInCurrentRound = false;
            gameObj.p3ActedInCurrentRound = false;
            gameObj.p4ActedInCurrentRound = false;
            gameObj.p1ActionWords = null;
            gameObj.p2ActionWords = null;
            gameObj.p3ActionWords = null;
            gameObj.p4ActionWords = null;
            
            if (bbValue === 1) {
                playerOne.isBB(rS);
            } else if (bbValue === 2) {
                playerTwo.isBB(rS);
            } else if (bbValue === 3) {
                playerThree.isBB(rS);
            } else if (bbValue === 4) {
                playerFour.isBB(rS);
            }

        } else {

            gameObj = ongoingGameState;

            inGameRoundDisplay.innerText = gameObj.roundName;
            inGamePotDisplay.innerText = gameObj.pot;

            gICurrentPot.innerHTML = 'Current Pot: ' + gameObj.pot;
            gICurrentRound.innerHTML = 'Current Round: ' + gameObj.roundName;

            if (bbValue === 1) {
                playerOne.isBB(rS, 'pJMG');
            } else if (bbValue === 2) {
                playerTwo.isBB(rS, 'pJMG');
            } else if (bbValue === 3) {
                playerThree.isBB(rS, 'pJMG');
            } else if (bbValue === 4) {
                playerFour.isBB(rS, 'pJMG');
            }

            if (gameObj.p1ActedInCurrentRound) {
                displayActionP1.innerText = gameObj.p1ActionWords;
                displayActionP1.style.display = 'block';
            }

            if (gameObj.p2ActedInCurrentRound) {
                displayActionP2.innerText = gameObj.p2ActionWords;
                displayActionP2.style.display = 'block';
            }

            if (gameObj.p3ActedInCurrentRound) {
                displayActionP3.innerText = gameObj.p3ActionWords;
                displayActionP3.style.display = 'block';
            }

            if (gameObj.p4ActedInCurrentRound) {
                displayActionP4.innerText = gameObj.p4ActionWords;
                displayActionP4.style.display = 'block';
            }

        }
    }
    if (rS === 5) {

        if (!pJoiningMidGameIndicator) {

            gameObj.totalRoundsCompleted = 0;
            gameObj.currentRoundInPlay = false;
            gameObj.totalPlayersFolded = 0;

            gameObj.currentRound = 0;
            gameObj.roundName = 'PreFlop';
            gameObj.lastBet = 0;
            gameObj.lastRaise = 0;
            gameObj.currentBettor = '';
            gameObj.currentRaiser = '';
            gameObj.pot = gameObj.bbAnte + gameObj.sbAnte;

            inGamePotDisplay.innerText = gameObj.bbAnte + gameObj.sbAnte;
            inGameRoundDisplay.innerText = 'PreFlop';

            gameObj.p1Disconnected = false;
            gameObj.p2Disconnected = false;
            gameObj.p3Disconnected = false;
            gameObj.p4Disconnected = false;
            gameObj.p5Disconnected = false;

            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p5In = 0;
            gameObj.p1Folded = 0;
            gameObj.p2Folded = 0;
            gameObj.p3Folded = 0;
            gameObj.p4Folded = 0;
            gameObj.p5Folded = 0;
            gameObj.p1AnteCalled = 0;
            gameObj.p2AnteCalled = 0;
            gameObj.p3AnteCalled = 0;
            gameObj.p4AnteCalled = 0;
            gameObj.p5AnteCalled = 0;
            
            if (bbValue === 1) {
                playerOne.isBB(rS);
            } else if (bbValue === 2) {
                playerTwo.isBB(rS);
            } else if (bbValue === 3) {
                playerThree.isBB(rS);
            } else if (bbValue === 4) {
                playerFour.isBB(rS);
            } else if (bbValue === 5) {
                playerFive.isBB(rS);
            }
        } else {

            gameObj = ongoingGameState;

            inGameRoundDisplay.innerText = gameObj.roundName;
            inGamePotDisplay.innerText = gameObj.pot;

            gICurrentPot.innerHTML = 'Current Pot: ' + gameObj.pot;
            gICurrentRound.innerHTML = 'Current Round: ' + gameObj.roundName;

            console.log('game obj: ');
            console.log(gameObj);

            if (bbValue === 1) {
                playerOne.isBB(rS, 'pJMG');
            } else if (bbValue === 2) {
                playerTwo.isBB(rS, 'pJMG');
            } else if (bbValue === 3) {
                playerThree.isBB(rS, 'pJMG');
            } else if (bbValue === 4) {
                playerFour.isBB(rS, 'pJMG');
            } else if (bbValue === 5) {
                playerFive.isBB(rS, 'pJMG');
            }

        }
    } 
    if (rS === 6) {

        if (!pJoiningMidGameIndicator) {
            gameObj.currentRound = 0;
            gameObj.roundName = 'PreFlop';
            gameObj.lastBet = 0;
            gameObj.lastRaise = 0;
            gameObj.currentBettor = '';
            gameObj.currentRaiser = '';
            gameObj.pot = gameObj.bbAnte + gameObj.sbAnte;

            inGamePotDisplay.innerText = gameObj.bbAnte + gameObj.sbAnte;
            inGameRoundDisplay.innerText = 'PreFlop';

            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p5In = 0;
            gameObj.p6In = 0;
            gameObj.p1Folded = 0;
            gameObj.p2Folded = 0;
            gameObj.p3Folded = 0;
            gameObj.p4Folded = 0;
            gameObj.p5Folded = 0;
            gameObj.p6Folded = 0;
            
            if (bbValue === 1) {
                playerOne.isBB(rS);
            } else if (bbValue === 2) {
                playerTwo.isBB(rS);
            } else if (bbValue === 3) {
                playerThree.isBB(rS);
            } else if (bbValue === 4) {
                playerFour.isBB(rS);
            } else if (bbValue === 5) {
                playerFive.isBB(rS);
            } else if (bbValue === 6) {
                playerSix.isBB(rS);
            }
        }
    }
    if (rS === 7) {

        if (!pJoiningMidGameIndicator) {
            gameObj.currentRound = 0;
            gameObj.roundName = 'PreFlop';
            gameObj.lastBet = 0;
            gameObj.lastRaise = 0;
            gameObj.currentBettor = '';
            gameObj.currentRaiser = '';
            gameObj.pot = gameObj.bbAnte + gameObj.sbAnte;

            inGamePotDisplay.innerText = gameObj.bbAnte + gameObj.sbAnte;
            inGameRoundDisplay.innerText = 'PreFlop';

            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p5In = 0;
            gameObj.p6In = 0;
            gameObj.p7In = 0;
            gameObj.p1Folded = 0;
            gameObj.p2Folded = 0;
            gameObj.p3Folded = 0;
            gameObj.p4Folded = 0;
            gameObj.p5Folded = 0;
            gameObj.p6Folded = 0;
            gameObj.p7Folded = 0;
            
            if (bbValue === 1) {
                playerOne.isBB(rS);
            } else if (bbValue === 2) {
                playerTwo.isBB(rS);
            } else if (bbValue === 3) {
                playerThree.isBB(rS);
            } else if (bbValue === 4) {
                playerFour.isBB(rS);
            } else if (bbValue === 5) {
                playerFive.isBB(rS);
            } else if (bbValue === 6) {
                playerSix.isBB(rS);
            } else if (bbValue === 7) {
                playerSeven.isBB(rS);
            }
        }
    }
    if (rS === 8) {

        if (!pJoiningMidGameIndicator) {
            gameObj.currentRound = 0;
            gameObj.roundName = 'PreFlop';
            gameObj.lastBet = 0;
            gameObj.lastRaise = 0;
            gameObj.currentBettor = '';
            gameObj.currentRaiser = '';
            gameObj.pot = gameObj.bbAnte + gameObj.sbAnte;

            inGamePotDisplay.innerText = gameObj.bbAnte + gameObj.sbAnte;
            inGameRoundDisplay.innerText = 'PreFlop';

            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p5In = 0;
            gameObj.p6In = 0;
            gameObj.p7In = 0;
            gameObj.p8In = 0;
            gameObj.p1Folded = 0;
            gameObj.p2Folded = 0;
            gameObj.p3Folded = 0;
            gameObj.p4Folded = 0;
            gameObj.p5Folded = 0;
            gameObj.p6Folded = 0;
            gameObj.p7Folded = 0;
            gameObj.p8Folded = 0;
            
            if (bbValue === 1) {
                playerOne.isBB(rS);
            } else if (bbValue === 2) {
                playerTwo.isBB(rS);
            } else if (bbValue === 3) {
                playerThree.isBB(rS);
            } else if (bbValue === 4) {
                playerFour.isBB(rS);
            } else if (bbValue === 5) {
                playerFive.isBB(rS);
            } else if (bbValue === 6) {
                playerSix.isBB(rS);
            } else if (bbValue === 7) {
                playerSeven.isBB(rS);
            } else if (bbValue === 8) {
                playerEight.isBB(rS);
            }
        }
    } 
    if (rS === 9) {

        if (!pJoiningMidGameIndicator) {
            gameObj.currentRound = 0;
            gameObj.roundName = 'PreFlop';
            gameObj.lastBet = 0;
            gameObj.lastRaise = 0;
            gameObj.currentBettor = '';
            gameObj.currentRaiser = '';
            gameObj.pot = gameObj.bbAnte + gameObj.sbAnte;

            inGamePotDisplay.innerText = gameObj.bbAnte + gameObj.sbAnte;
            inGameRoundDisplay.innerText = 'PreFlop';

            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p5In = 0;
            gameObj.p6In = 0;
            gameObj.p7In = 0;
            gameObj.p8In = 0;
            gameObj.p9In = 0;
            gameObj.p1Folded = 0;
            gameObj.p2Folded = 0;
            gameObj.p3Folded = 0;
            gameObj.p4Folded = 0;
            gameObj.p5Folded = 0;
            gameObj.p6Folded = 0;
            gameObj.p7Folded = 0;
            gameObj.p8Folded = 0;
            gameObj.p9Folded = 0;
            
            if (bbValue === 1) {
                playerOne.isBB(rS);
            } else if (bbValue === 2) {
                playerTwo.isBB(rS);
            } else if (bbValue === 3) {
                playerThree.isBB(rS);
            } else if (bbValue === 4) {
                playerFour.isBB(rS);
            } else if (bbValue === 5) {
                playerFive.isBB(rS);
            } else if (bbValue === 6) {
                playerSix.isBB(rS);
            } else if (bbValue === 7) {
                playerSeven.isBB(rS);
            } else if (bbValue === 8) {
                playerEight.isBB(rS);
            } else if (bbValue === 9) {
                playerNine.isBB(rS);
            }
        }
    }

    resettingPreGameLobbyForm();
}

const receivingRequestForGameState = (indexOfEmptySpot) => {

    if (indexOfEmptySpot === 2) {

        gameObj.p2Disconnected = false;

        if (user['inGameTurn'] === 1) {
            socket.emit('sendingInProgressGameState', gameObj);
        }

    } else if (indexOfEmptySpot === 3) {

        gameObj.p3Disconnected = false;

        if (user['inGameTurn'] === 1) {
            socket.emit('sendingInProgressGameState', gameObj);
        }

    } else if (indexOfEmptySpot === 4) {

        gameObj.p4Disconnected = false;

        if (user['inGameTurn'] === 1) {
            socket.emit('sendingInProgressGameState', gameObj);
        }

    }

}

const equalizingGameStateForPlayerJoiningMidGame = (gameState) => {

    finalizingGameEnvironment(gameState.bB, gameState.bbAnte, gameState.gameSize, 'pJoiningMidGameIndicator', gameState);
}