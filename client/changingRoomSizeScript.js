let changingRoomSizeMidGameButton = document.getElementById('changingRoomSizeMidGameButton');

let confirmationChangeRoomSizePage = document.getElementById('confirmationChangeRoomSizePage');
let confirmRoomSizeChange = document.getElementById('confirmRoomSizeChange');
let declineRoomSizeChange = document.getElementById('declineRoomSizeChange');

let waitForRoundToEnd2ChangeRoomSizePage = document.getElementById('waitForRoundToEnd2ChangeRoomSizePage');
let okWaitForRoundToEnd2ChangeRoomSize = document.getElementById('okWaitForRoundToEnd2ChangeRoomSize');

let midGameRoomSizeChangePage = document.getElementById('midGameRoomSizeChangePage');
let midGameRoomSizeSelect = document.getElementById('midGameRoomSizeSelect');
let midGameRoomSizeChangeSubmit = document.getElementById('midGameRoomSizeChangeSubmit');
let cancelMidGameRoomSize = document.getElementById('cancelMidGameRoomSize');

const displayChangeRoomSizePage = () => {

    if (user['inGameTurn'] === 1) {
        inGameMenu.style.display = 'none';

        startNextRoundAfterChoosingWinnerPage.style.display = 'none';

        if (!gameObj.inTransitionToNextRound) {
            if (user.currentPage === 'u_a_preGameLobbyState') {
                confirmationChangeRoomSizePage.style.display = 'block';
            } else {
                waitForRoundToEnd2ChangeRoomSizePage.style.display = 'block';
            }

        } else {
            confirmationChangeRoomSizePage.style.display = 'block';
        }
    }
}

const userConfirmsThatRoundMustBeOver2ChangeRoomSize = () => {
    waitForRoundToEnd2ChangeRoomSizePage.style.display = 'none';
    inGameMenu.style.display = 'block';
}

const displayNewRoomSizeOptionPage = () => {
    confirmationChangeRoomSizePage.style.display = 'none';
    midGameRoomSizeChangePage.style.display = 'block';
    socket.emit('hostInitiatesNewRoomSizeProcess');
}

const hostSubmitsNewRoomSizeMidGame = () => {
    let n_gS_optionCapture;

    let n_roomsizeOptions = midGameRoomSizeSelect.getElementsByTagName('input');

    for (let i = 0; i < n_roomsizeOptions.length; i++) {
        if (n_roomsizeOptions[i].checked) {
            n_gS_optionCapture = i + 2;
        }
    }

    midGameRoomSizeChangePage.style.display = 'none';

    socket.emit('hostSetsNewRoomSizeMidGame', n_gS_optionCapture);

    if (capturedGameSize === 5) {
        if (n_gS_optionCapture === 4) {
            bigBlindOptionSelect.removeChild(bB5);
            optionsForWinnerOfRound.removeChild(winnerOptionP4);
        }
    }

    resettingChangeRoomSizeOptions();
}

const userXsOutOfChangeRoomSizePage = () => {
    inGameMenu.style.display = 'block';
    startNextRoundAfterChoosingWinnerPage.style.display = 'block';
    confirmationChangeRoomSizePage.style.display = 'none';
}

const userXsOutOfNewRoomSizeOptionPage = () => {
    inGameMenu.style.display = 'block';
    midGameRoomSizeChangePage.style.display = 'none';
    startNextRoundAfterChoosingWinnerPage.style.display = 'block';
}









