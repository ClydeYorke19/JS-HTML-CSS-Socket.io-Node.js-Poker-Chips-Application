const homeButton = document.getElementById('homeButton');

const hostChoosesWinnerOfRoundPage = document.getElementById('hostChoosesWinnerOfRoundPage');
const hostSubmitsWinnerOfRoundButton = document.getElementById('hostSubmitsWinnerOfRoundButton');
var optionsForWinnerOfRound = document.getElementById('optionsForWinnerOfRound');

const startNextRoundAfterChoosingWinnerPage = document.getElementById('startNextRoundAfterChoosingWinnerPage');
const startNextRoundButton = document.getElementById('startNextRoundButton');

const inGameMenuButton = document.getElementById('inGameMenuButton');
const xOutOfInGameMenu = document.getElementById('xOutOfInGameMenu');

const inGameMenu = document.getElementById('inGameMenu');
var inGameMenuHeader = document.getElementById('inGameMenuHeader');
var p1TotalyBuytInLabel = document.getElementById('p1TotalyBuytInLabel');
var p2TotalyBuytInLabel = document.getElementById('p2TotalyBuytInLabel');
var p3TotalyBuytInLabel = document.getElementById('p3TotalyBuytInLabel');
var p4TotalyBuytInLabel = document.getElementById('p4TotalyBuytInLabel');
var p5TotalyBuytInLabel = document.getElementById('p5TotalyBuytInLabel');
var p6TotalyBuytInLabel = document.getElementById('p6TotalyBuytInLabel');
var p7TotalyBuytInLabel = document.getElementById('p7TotalyBuytInLabel');
var p8TotalyBuytInLabel = document.getElementById('p8TotalyBuytInLabel');
var p9TotalyBuytInLabel = document.getElementById('p9TotalyBuytInLabel');
var gIroomSize = document.getElementById('gIroomSize');
var gIBigBlind = document.getElementById('gIBigBlind');
var gISmallBlind = document.getElementById('gISmallBlind');
var gICurrentRound = document.getElementById('gICurrentRound');
var gICurrentTurn = document.getElementById('gICurrentTurn');
var gICurrentPot = document.getElementById('gICurrentPot');

const playerReBuyingPage = document.getElementById('playerReBuyingPage');
const playerReBuyChipsInput = document.getElementById('playerReBuyChipsInput');
const playerReBuySubmit = document.getElementById('playerReBuySubmit');
const xOutOfReBuyPage = document.getElementById('xOutOfReBuyPage');

const confirmationToLeaveGameManuallyPage = document.getElementById('confirmationToLeaveGameManuallyPage');
const userConfirmsLeaveGame = document.getElementById('userConfirmsLeaveGame');
const userDeclinesLeaveGame = document.getElementById('userDeclinesLeaveGame');

const confirmationToGoHomeWhileCreatingGamePage = document.getElementById('confirmationToGoHomeWhileCreatingGamePage');
const userConfirmsDisbandGame = document.getElementById('userConfirmsDisbandGame');
const userDeclinesDisbandGame = document.getElementById('userDeclinesDisbandGame');

const testChipCounterDiv = document.getElementById('testChipCounterDiv');

const homePageElements = [homePage];

let inGameEls = document.querySelectorAll('.inGameEl');

const possiblePreGameLobbyElements = [pokerTable, inGameBorderP1, inGameBorderP2, inGameBorderP3, inGameBorderP4, inGameBorderP5, inGameBorderP6, inGameBorderP7, inGameBorderP8, inGameBorderP9, inGameMenuButton, inGameMenu, startGameButton, inGameRoundDisplay, inGamePotDisplay];

const possibleInGameElementsPt1 = [pokerTable, inGameBorderP1, inGameBorderP2, inGameBorderP3, inGameBorderP4, inGameBorderP5, inGameBorderP6, inGameBorderP7, inGameBorderP8, inGameBorderP9];

const possibleInGameElementsPt2 = [inGameMenuButton, p1Buttons, p2Buttons, p3Buttons, p4Buttons, p5Buttons, p6Buttons, p7Buttons, p8Buttons, p9Buttons];

const confirmationToDeleteAccountPage = document.getElementById('confirmationToDeleteAccountPage');
const deleteAccountButton = document.getElementById('deleteAccountButton');
const userConfirmsDeleteAccount = document.getElementById('userConfirmsDeleteAccount');
const userDeclinesDeleteAccount = document.getElementById('userDeclinesDeleteAccount');

const hostHasDisbanedGamePage = document.getElementById('hostHasDisbanedGamePage');
const okHostHasDisbandedGameButton = document.getElementById('okHostHasDisbandedGameButton');

const confirmingUserSetUnacceptableRoomSizePage = document.getElementById('confirmingUserSetUnacceptableRoomSizePage');

const resetUserInfo = () => {
    user.loggedIn = false;
    user.howUserGot2ViewPage = null;
    user.userNameHolder = null;
    user.userCurrentlyInGame = false;
    user.sId = null;
    user.currentPage = 'u_a_homepage';
}

const resetingUserInfoPage = () => {
    viewAlertsButton.style.display = 'none';
    viewProfileInfoButton.style.display = 'none';
    viewFriendsButton.style.display = 'none';
    viewGroupsButton.style.display = 'none';
    signOutButton.style.display = 'none';

    logInButton.style.display = 'block';
    createAccountButton.style.display = 'block';

    userLoggedInIndentifier.innerText = 'You are not logged in!';
}

const changingTheRound = (r) => {

    setTimeout(() => {

        if (displayActionP1.innerText != 'All In!') {
            displayActionP1.style.display = 'none';
        }
        if (displayActionP2.innerText != 'All In!') {
            displayActionP2.style.display = 'none';
        }
        if (displayActionP3.innerText != 'All In!') {
            displayActionP3.style.display = 'none';
        }
        if (displayActionP4.innerText != 'All In!') {
            displayActionP4.style.display = 'none';
        }
        if (displayActionP5.innerText != 'All In!') {
            displayActionP5.style.display = 'none';
        }
        if (displayActionP6.innerText != 'All In!') {
            displayActionP6.style.display = 'none';
        }
        if (displayActionP7.innerText != 'All In!') {
            displayActionP7.style.display = 'none';
        }
        if (displayActionP8.innerText != 'All In!') {
            displayActionP8.style.display = 'none';
        }
        if (displayActionP9.innerText != 'All In!') {
            displayActionP9.style.display = 'none';
        }

        if (gameObj.gameSize === 4) {
            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p1AnteCalled = 0;
            gameObj.p2AnteCalled = 0;
            gameObj.p3AnteCalled = 0;
            gameObj.p4AnteCalled = 0;
            gameObj.p1ActedInCurrentRound = false;
            gameObj.p2ActedInCurrentRound = false;
            gameObj.p3ActedInCurrentRound = false;
            gameObj.p4ActedInCurrentRound = false;
        } else if (gameObj.gameSize === 5) {
            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p5In = 0;
            gameObj.p1AnteCalled = 0;
            gameObj.p2AnteCalled = 0;
            gameObj.p3AnteCalled = 0;
            gameObj.p4AnteCalled = 0;
            gameObj.p5AnteCalled = 0;
        } else if (gameObj.gameSize === 6) {
            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p5In = 0;
            gameObj.p6In = 0;
            gameObj.p1AnteCalled = 0;
            gameObj.p2AnteCalled = 0;
            gameObj.p3AnteCalled = 0;
            gameObj.p4AnteCalled = 0;
            gameObj.p5AnteCalled = 0;
            gameObj.p6AnteCalled = 0;
        } else if (gameObj.gameSize === 7) {
            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p5In = 0;
            gameObj.p6In = 0;
            gameObj.p7In = 0;
            gameObj.p1AnteCalled = 0;
            gameObj.p2AnteCalled = 0;
            gameObj.p3AnteCalled = 0;
            gameObj.p4AnteCalled = 0;
            gameObj.p5AnteCalled = 0;
            gameObj.p6AnteCalled = 0;
            gameObj.p7AnteCalled = 0;
        } else if (gameObj.gameSize === 8) {
            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p5In = 0;
            gameObj.p6In = 0;
            gameObj.p7In = 0;
            gameObj.p8In = 0;
            gameObj.p1AnteCalled = 0;
            gameObj.p2AnteCalled = 0;
            gameObj.p3AnteCalled = 0;
            gameObj.p4AnteCalled = 0;
            gameObj.p5AnteCalled = 0;
            gameObj.p6AnteCalled = 0;
            gameObj.p7AnteCalled = 0;
            gameObj.p8AnteCalled = 0;
        } else if (gameObj.gameSize === 9) {
            gameObj.p1In = 0;
            gameObj.p2In = 0;
            gameObj.p3In = 0;
            gameObj.p4In = 0;
            gameObj.p5In = 0;
            gameObj.p6In = 0;
            gameObj.p7In = 0;
            gameObj.p8In = 0;
            gameObj.p9In = 0;
            gameObj.p1AnteCalled = 0;
            gameObj.p2AnteCalled = 0;
            gameObj.p3AnteCalled = 0;
            gameObj.p4AnteCalled = 0;
            gameObj.p5AnteCalled = 0;
            gameObj.p6AnteCalled = 0;
            gameObj.p7AnteCalled = 0;
            gameObj.p8AnteCalled = 0;
            gameObj.p9AnteCalled = 0;
        } 

        gameObj.currentBettor = '';
        gameObj.currentRaiser = '';
        gameObj.lastBet = 0;
        gameObj.lastRaise = 0;

        if (r === 1) {
            gameObj.currentRound = 1;
            gameObj.roundName = 'Flop';
            gICurrentRound.innerHTML = 'Current Round: Flop';
            inGameRoundDisplay.innerHTML = 'Flop';
        } else if (r === 2) {
            gameObj.currentRound = 2;
            gameObj.roundName = 'Turn';
            gICurrentRound.innerHTML = 'Current Round: Turn';
            inGameRoundDisplay.innerHTML = 'Turn';
        } else if (r === 3) {
            gameObj.currentRound = 3;
            gameObj.roundName = 'River';
            gICurrentRound.innerHTML = 'Current Round: River';
            inGameRoundDisplay.innerHTML = 'River';
        } 
    }, 1000);
}

const currentRoundHasEnded = () => {

    socket.emit('sendingCurrentRoundOverStatus')

    setTimeout(() => {
        displayActionP1.style.display = 'none';
        displayActionP2.style.display = 'none';
        displayActionP3.style.display = 'none';
        displayActionP4.style.display = 'none';
        displayActionP5.style.display = 'none';
        displayActionP6.style.display = 'none';
        displayActionP7.style.display = 'none';
        displayActionP8.style.display = 'none';
        displayActionP9.style.display = 'none';
    }, 1000);

    gameObj.inTransitionToNextRound = true;
    
    if (gameObj.gameSize === 4) {

        if (user['inGameTurn'] === 1) {

            var p1InGameDisplayName = inGameBorderP1.innerText.split(" ");
            var p2InGameDisplayName = inGameBorderP2.innerText.split(" ");
            var p3InGameDisplayName = inGameBorderP3.innerText.split(" ");
            var p4InGameDisplayName = inGameBorderP4.innerText.split(" ");

            winnerOptionP1.innerHTML = p1InGameDisplayName[0];
            winnerOptionP2.innerHTML = p2InGameDisplayName[0];
            winnerOptionP3.innerHTML = p3InGameDisplayName[0];
            winnerOptionP4.innerHTML = p4InGameDisplayName[0];

            hostChoosesWinnerOfRoundPage.style.display = 'block';

        }

    } else if (gameObj.gameSize === 5) {

        if (user['inGameTurn'] === 1) {

            var p1InGameDisplayName = inGameBorderP1.innerText.split(" ");
            var p2InGameDisplayName = inGameBorderP2.innerText.split(" ");
            var p3InGameDisplayName = inGameBorderP3.innerText.split(" ");
            var p4InGameDisplayName = inGameBorderP4.innerText.split(" ");
            var p5InGameDisplayName = inGameBorderP5.innerText.split(" ");

            winnerOptionP1.innerHTML = p1InGameDisplayName[0];
            winnerOptionP2.innerHTML = p2InGameDisplayName[0];
            winnerOptionP3.innerHTML = p3InGameDisplayName[0];
            winnerOptionP4.innerHTML = p4InGameDisplayName[0];
            winnerOptionP5.innerHTML = p5InGameDisplayName[0];

            hostChoosesWinnerOfRoundPage.style.display = 'block';
        }

    } else if (gameObj.gameSize === 6) {

        if (user['inGameTurn'] === 1) {

            var p1InGameDisplayName = inGameBorderP1.innerText.split(" ");
            var p2InGameDisplayName = inGameBorderP2.innerText.split(" ");
            var p3InGameDisplayName = inGameBorderP3.innerText.split(" ");
            var p4InGameDisplayName = inGameBorderP4.innerText.split(" ");
            var p5InGameDisplayName = inGameBorderP5.innerText.split(" ");
            var p6InGameDisplayName = inGameBorderP6.innerText.split(" ");

            winnerOptionP1.innerHTML = p1InGameDisplayName[0];
            winnerOptionP2.innerHTML = p2InGameDisplayName[0];
            winnerOptionP3.innerHTML = p3InGameDisplayName[0];
            winnerOptionP4.innerHTML = p4InGameDisplayName[0];
            winnerOptionP5.innerHTML = p5InGameDisplayName[0];
            winnerOptionP6.innerHTML = p6InGameDisplayName[0];

            hostChoosesWinnerOfRoundPage.style.display = 'block';
        }

    } else if (gameObj.gameSize === 7) {

        if (user['inGameTurn'] === 1) {

            var p1InGameDisplayName = inGameBorderP1.innerText.split(" ");
            var p2InGameDisplayName = inGameBorderP2.innerText.split(" ");
            var p3InGameDisplayName = inGameBorderP3.innerText.split(" ");
            var p4InGameDisplayName = inGameBorderP4.innerText.split(" ");
            var p5InGameDisplayName = inGameBorderP5.innerText.split(" ");
            var p6InGameDisplayName = inGameBorderP6.innerText.split(" ");
            var p7InGameDisplayName = inGameBorderP7.innerText.split(" ");

            winnerOptionP1.innerHTML = p1InGameDisplayName[0];
            winnerOptionP2.innerHTML = p2InGameDisplayName[0];
            winnerOptionP3.innerHTML = p3InGameDisplayName[0];
            winnerOptionP4.innerHTML = p4InGameDisplayName[0];
            winnerOptionP5.innerHTML = p5InGameDisplayName[0];
            winnerOptionP6.innerHTML = p6InGameDisplayName[0];
            winnerOptionP7.innerHTML = p7InGameDisplayName[0];

            hostChoosesWinnerOfRoundPage.style.display = 'block';
        }

    } else if (gameObj.gameSize === 8) {

        if (user['inGameTurn'] === 1) {

            var p1InGameDisplayName = inGameBorderP1.innerText.split(" ");
            var p2InGameDisplayName = inGameBorderP2.innerText.split(" ");
            var p3InGameDisplayName = inGameBorderP3.innerText.split(" ");
            var p4InGameDisplayName = inGameBorderP4.innerText.split(" ");
            var p5InGameDisplayName = inGameBorderP5.innerText.split(" ");
            var p6InGameDisplayName = inGameBorderP6.innerText.split(" ");
            var p7InGameDisplayName = inGameBorderP7.innerText.split(" ");
            var p8InGameDisplayName = inGameBorderP8.innerText.split(" ");

            winnerOptionP1.innerHTML = p1InGameDisplayName[0];
            winnerOptionP2.innerHTML = p2InGameDisplayName[0];
            winnerOptionP3.innerHTML = p3InGameDisplayName[0];
            winnerOptionP4.innerHTML = p4InGameDisplayName[0];
            winnerOptionP5.innerHTML = p5InGameDisplayName[0];
            winnerOptionP6.innerHTML = p6InGameDisplayName[0];
            winnerOptionP7.innerHTML = p7InGameDisplayName[0];
            winnerOptionP8.innerHTML = p8InGameDisplayName[0];

            hostChoosesWinnerOfRoundPage.style.display = 'block';
        }

    } else if (gameObj.gameSize === 9) {

        if (user['inGameTurn'] === 1) {

            var p1InGameDisplayName = inGameBorderP1.innerText.split(" ");
            var p2InGameDisplayName = inGameBorderP2.innerText.split(" ");
            var p3InGameDisplayName = inGameBorderP3.innerText.split(" ");
            var p4InGameDisplayName = inGameBorderP4.innerText.split(" ");
            var p5InGameDisplayName = inGameBorderP5.innerText.split(" ");
            var p6InGameDisplayName = inGameBorderP6.innerText.split(" ");
            var p7InGameDisplayName = inGameBorderP7.innerText.split(" ");
            var p8InGameDisplayName = inGameBorderP8.innerText.split(" ");
            var p9InGameDisplayName = inGameBorderP9.innerText.split(" ");

            winnerOptionP1.innerHTML = p1InGameDisplayName[0];
            winnerOptionP2.innerHTML = p2InGameDisplayName[0];
            winnerOptionP3.innerHTML = p3InGameDisplayName[0];
            winnerOptionP4.innerHTML = p4InGameDisplayName[0];
            winnerOptionP5.innerHTML = p5InGameDisplayName[0];
            winnerOptionP6.innerHTML = p6InGameDisplayName[0];
            winnerOptionP7.innerHTML = p7InGameDisplayName[0];
            winnerOptionP8.innerHTML = p8InGameDisplayName[0];
            winnerOptionP9.innerHTML = p9InGameDisplayName[0];

            hostChoosesWinnerOfRoundPage.style.display = 'block';
        }

    }

}

const resettingDataProcessHost = () => {
    let radioOptions = document.getElementsByName('roomSizeRadioSelect');
    radioOptions.forEach((e) => {
        e.checked = false;
    })

    if (!user.loggedIn) {
        hostInGameNameDisplayInput.value = '';
        hostInGameChipDisplayInput.value = '';
    } else {
        if (editableRealName.value.length === 0 && editablePreSetChipAmount.value.length === 0) {
            hostInGameNameDisplayInput.value = '';
            hostInGameChipDisplayInput.value = '';
        }

    }
}  

const resettingChangeRoomSizeOptions = () => {
    let roomSizeChangeOptions = document.getElementsByName('midGameRoomSizeRadioSelect');

    roomSizeChangeOptions.forEach((e) => {
        e.checked = false;
    })
}

const hidingAllPlayerPlacementCards = () => {
    divForPlacementCardImgP1.style.display = 'none';
    divForPlacementCardImgP2.style.display = 'none';
    divForPlacementCardImgP3.style.display = 'none';
    divForPlacementCardImgP4.style.display = 'none';
}

const resettingProcessPlayerJoining = () => {
    enteredGameCode.value = '';

    if (!user.loggedIn) {
        userJoiningInGameNameDisplayInput.value = '';
        userJoiningInGameChipsDisplayInput.value = '';
    } else {
        if (editableRealName.value.length === 0 && editablePreSetChipAmount.value.length === 0) {
            userJoiningInGameNameDisplayInput.value = '';
            userJoiningInGameChipsDisplayInput.value = '';
        }

    }

}

const resettingNewGroupInfoPage = () => {
    let groupRadioOptions = document.getElementsByName('groupRoomSize');
    groupRadioOptions.forEach((e) => {
        e.checked = false;
    })

    newGroupNameInput.value = '';
    newGroupAnteInput.value = '';
}

const resettingAddingFriendsPage = () => {
    addingFriendsInput.value = '';
}

const resettingInvitingPlayerToGamePage = () => {
    userBeingInvitedToGame.value = '';
}

const resetCreateAccountPage = () => {
    theRequestedUserName.value = '';
    theRequestedPassword.value = '';
}

const resettingPreGameLobbyForm = () => {
    bigBlindOptionSelect.selectedIndex = 0;
    chooseAnteInput.value = '';
}

const resetLoginPage = () => {
    theEnteredUsername.value = '';
    theEnteredPassword.value = '';
}

const settingThePotOnCall = (pInfo, pBorder) => {

    pBorder.innerText = pInfo.name + " " + pInfo.chips;

    gameObj.pot = +gameObj.pot + +pInfo.callAmount;
    inGamePotDisplay.innerHTML = gameObj.pot;

    gICurrentPot.innerHTML = 'Current Pot: ' + gameObj.pot;

}

const settingThePotOnRaiseCall = (pInfo, pBorder) => {

    pBorder.innerText = pInfo.name + " " + pInfo.chips;

    gameObj.pot = +gameObj.pot + +pInfo.calledRaiseAmount;
    inGamePotDisplay.innerHTML = gameObj.pot;

    gICurrentPot.innerHTML = 'Current Pot: ' + gameObj.pot;

}

const settingThePotOnAnteCall = (pInfo, pBorder) => {

    pBorder.innerHTML = pInfo.name + " " + pInfo.chips;

    gameObj.pot = +gameObj.pot + +pInfo.anteCalled;
    inGamePotDisplay.innerHTML = gameObj.pot;

    gICurrentPot.innerHTML = 'Current Pot: ' + gameObj.pot;
}

const settingThePotOnBet = (pInfo, pBorder) => {

    pBorder.innerHTML = pInfo.name + " " + pInfo.chips;

    gameObj.pot = +gameObj.pot + +pInfo.betAmount;
    inGamePotDisplay.innerHTML = gameObj.pot;

    gICurrentPot.innerHTML = 'Current Pot: ' + gameObj.pot;
}

const settingThePotOnRaise = (pInfo, pBorder) => {

    pBorder.innerHTML = pInfo.name + " " + pInfo.chips;

    gameObj.pot = +gameObj.pot + +pInfo.reRaiseAmount;
    inGamePotDisplay.innerHTML = gameObj.pot;

    gICurrentPot.innerHTML = 'Current Pot: ' + gameObj.pot;
}

const displayingPlayerFold2Room = (pBorder) => {

    pBorder.innerHTML = "<span style='opacity:.5'>" + pBorder.innerText + "</span>";

}

const settingChipsForBBAndSB = (pInfo, pBorder) => {
    pBorder.innerHTML = pInfo.name + " " + pInfo.chips;
}

const displayingPInfoAfterBlindsBB = (pInfo) => {

    if (gameObj.gameSize === 4) {
        if (gameObj.bB === 1) {
            settingChipsForBBAndSB(pInfo, inGameBorderP1);
        } else if (gameObj.bB === 2) {
            settingChipsForBBAndSB(pInfo, inGameBorderP2);
        } else if (gameObj.bB === 3) {
            settingChipsForBBAndSB(pInfo, inGameBorderP3);
        } else if (gameObj.bB === 4) {
            settingChipsForBBAndSB(pInfo, inGameBorderP4);
        } 
    } else if (gameObj.gameSize === 5) {
        if (gameObj.bB === 1) {
            settingChipsForBBAndSB(pInfo, inGameBorderP1);
        } else if (gameObj.bB === 2) {
            settingChipsForBBAndSB(pInfo, inGameBorderP2);
        } else if (gameObj.bB === 3) {
            settingChipsForBBAndSB(pInfo, inGameBorderP3);
        } else if (gameObj.bB === 4) {
            settingChipsForBBAndSB(pInfo, inGameBorderP4);
        } else if (gameObj.bB === 5) {
            settingChipsForBBAndSB(pInfo, inGameBorderP5);
        } 
    }
}

const displayingPInfoAfterBlindsSB = (pInfo) => {

    if (gameObj.gameSize === 4) {
        if (gameObj.bB === 1) {
            settingChipsForBBAndSB(pInfo, inGameBorderP2);
            gameObj.p2AnteCalled = 0.5;
        } else if (gameObj.bB === 2) {
            settingChipsForBBAndSB(pInfo, inGameBorderP4);
            gameObj.p4AnteCalled = 0.5;
        } else if (gameObj.bB === 3) {
            settingChipsForBBAndSB(pInfo, inGameBorderP1);
            gameObj.p1AnteCalled = 0.5;
        } else if (gameObj.bB === 4) {
            settingChipsForBBAndSB(pInfo, inGameBorderP3);
            gameObj.p3AnteCalled = 0.5;
        } 
    } else if (gameObj.gameSize === 5) {
        if (gameObj.bB === 1) {
            settingChipsForBBAndSB(pInfo, inGameBorderP2);
            gameObj.p2AnteCalled = 0.5;
        } else if (gameObj.bB === 2) {
            settingChipsForBBAndSB(pInfo, inGameBorderP5);
            gameObj.p5AnteCalled = 0.5;
        } else if (gameObj.bB === 3) {
            settingChipsForBBAndSB(pInfo, inGameBorderP1);
            gameObj.p1AnteCalled = 0.5;
        } else if (gameObj.bB === 4) {
            settingChipsForBBAndSB(pInfo, inGameBorderP3);
            gameObj.p3AnteCalled = 0.5;
        } else if (gameObj.bB === 5) {
            settingChipsForBBAndSB(pInfo, inGameBorderP4);
            gameObj.p4AnteCalled = 0.5;
        } 
    }
}

const updatingDisplayAfterWin = (pInfo, userTurn) => {
    
    if (userTurn === 1) {
        inGameBorderP1.innerHTML = pInfo.name + " " + pInfo.chips;
    } else if (userTurn === 2) {
        inGameBorderP2.innerHTML = pInfo.name + " " + pInfo.chips;
    } else if (userTurn === 3) {
        inGameBorderP3.innerHTML = pInfo.name + " " + pInfo.chips;
    } else if (userTurn === 4) {
        inGameBorderP4.innerHTML = pInfo.name + " " + pInfo.chips;
    } else if (userTurn === 5) {
        inGameBorderP5.innerHTML = pInfo.name + " " + pInfo.chips;
    } else if (userTurn === 6) {
        inGameBorderP6.innerHTML = pInfo.name + " " + pInfo.chips;
    } else if (userTurn === 7) {
        inGameBorderP7.innerHTML = pInfo.name + " " + pInfo.chips;
    } else if (userTurn === 8) {
        inGameBorderP8.innerHTML = pInfo.name + " " + pInfo.chips;
    } else if (userTurn === 9) {
        inGameBorderP9.innerHTML = pInfo.name + " " + pInfo.chips;
    }

}

const updatingDisplayAfterReBuy = (pInfo, userTurn) => {
    playerReBuyingPage.style.display = 'none';

    if (userTurn === 1) {
        inGameBorderP1.innerHTML = pInfo.name + " " + pInfo.chips;
        pInfo.totalBuyIn += pInfo.chips;
        p1TotalyBuytInLabel.innerHTML = pInfo.name + ": " + pInfo.totalBuyIn;
    } else if (userTurn === 2) {
        inGameBorderP2.innerHTML = pInfo.name + " " + pInfo.chips;
        pInfo.totalBuyIn += pInfo.chips;
        p2TotalyBuytInLabel.innerHTML = pInfo.name + ": " + pInfo.totalBuyIn;
    } else if (userTurn === 3) {
        inGameBorderP3.innerHTML = pInfo.name + " " + pInfo.chips;
        pInfo.totalBuyIn += pInfo.chips;
        p3TotalyBuytInLabel.innerHTML = pInfo.name + ": " + pInfo.totalBuyIn;
    } else if (userTurn === 4) {
        inGameBorderP4.innerHTML = pInfo.name + " " + pInfo.chips;
        pInfo.totalBuyIn += pInfo.chips;
        p4TotalyBuytInLabel.innerHTML = pInfo.name + ": " + pInfo.totalBuyIn;
    } else if (userTurn === 5) {
        inGameBorderP5.innerHTML = pInfo.name + " " + pInfo.chips;
        pInfo.totalBuyIn += pInfo.chips;
        p5TotalyBuytInLabel.innerHTML = pInfo.name + ": " + pInfo.totalBuyIn;
    } else if (userTurn === 6) {
        inGameBorderP6.innerHTML = pInfo.name + " " + pInfo.chips;
        pInfo.totalBuyIn += pInfo.chips;
        p6TotalyBuytInLabel.innerHTML = pInfo.name + ": " + pInfo.totalBuyIn;
    } else if (userTurn === 7) {
        inGameBorderP7.innerHTML = pInfo.name + " " + pInfo.chips;
        pInfo.totalBuyIn += pInfo.chips;
        p7TotalyBuytInLabel.innerHTML = pInfo.name + ": " + pInfo.totalBuyIn;
    } else if (userTurn === 8) {
        inGameBorderP8.innerHTML = pInfo.name + " " + pInfo.chips;
        pInfo.totalBuyIn += pInfo.chips;
        p8TotalyBuytInLabel.innerHTML = pInfo.name + ": " + pInfo.totalBuyIn;
    } else if (userTurn === 9) {
        inGameBorderP9.innerHTML = pInfo.name + " " + pInfo.chips;
        pInfo.totalBuyIn += pInfo.chips;
        p9TotalyBuytInLabel.innerHTML = pInfo.name + ": " + pInfo.totalBuyIn;
    }
}

const displayNextRoundPage = () => {
    startNextRoundAfterChoosingWinnerPage.style.display = 'block';
}

const resetingPlayerBordersForNextRound = () => {
    inGameBorderP1.style.color = 'black';
    inGameBorderP2.style.color = 'black';
    inGameBorderP3.style.color = 'black';
    inGameBorderP4.style.color = 'black';

    inGameBorderP1.style.border = '3px solid black';
    inGameBorderP2.style.border = '3px solid black';
    inGameBorderP3.style.border = '3px solid black';
    inGameBorderP4.style.border = '3px solid black';
}

const displayingInGameMenu = () => {
    inGameMenu.style.display = 'block';
}

const userXsOutOfInGameMenu = () => {
    inGameMenu.style.display = 'none';
}

const displayingGameCodeForInGameMenu = (gameCode) => {
    inGameMenuHeader.innerHTML = 'Game Code: ' + gameCode;
}

const handlingUserLeavingMidGame = (userWhoLeftGame, gameState) => {
    
        if (userWhoLeftGame === 1) {
            inGameBorderP1.innerHTML = '+';
            gameObj.p1Folded = 1;
        } else if (userWhoLeftGame === 2) {
            inGameBorderP2.style.color = 'black';
            inGameBorderP2.innerHTML = '+';
            if (gameObj.currentTurn === 2) {
                playerTwo.displayFold2Room('disconnect');
            } else {
                gameObj.p2Folded = 1;
                gameObj.p2Disconnected = true;
            }
        } else if (userWhoLeftGame === 3) {
            inGameBorderP3.style.color = 'black';
            inGameBorderP3.innerHTML = '+';
            if (gameObj.currentTurn === 3) {
                playerThree.displayFold2Room('disconnect');
            } else {
                gameObj.p3Folded = 1;
                gameObj.p3Disconnected = true;
            }
        } else if (userWhoLeftGame === 4) {
            inGameBorderP4.style.color = 'black';
            inGameBorderP4.innerHTML = '+';
            if (gameObj.currentTurn === 4) {
                playerFour.displayFold2Room('disconnect');
            } else {
                gameObj.p4Folded = 1;
                gameObj.p4Disconnected = true;
            }
        } else if (userWhoLeftGame === 5) {
            inGameBorderP5.style.color = 'black';
            inGameBorderP5.innerHTML = '+';
            if (gameObj.currentTurn === 4) {
                playerFive.displayFold2Room('disconnect');
            } else {
                gameObj.p5Folded = 1;
                gameObj.p5Disconnected = true;
            }
        } else if (userWhoLeftGame === 6) {
            inGameBorderP6.style.color = 'black';
            inGameBorderP6.innerHTML = '+';
            if (gameObj.currentTurn === 6) {
                playerSix.displayFold2Room('disconnect');
            } else {
                gameObj.p6Folded = 1;
                gameObj.p6Disconnected = true;
            }
        } else if (userWhoLeftGame === 7) {
            inGameBorderP7.style.color = 'black';
            inGameBorderP7.innerHTML = '+';
            if (gameObj.currentTurn === 7) {
                playerSeven.displayFold2Room('disconnect');
            } else {
                gameObj.p7Folded = 1;
                gameObj.p7Disconnected = true;
            }
        } else if (userWhoLeftGame === 8) {
            inGameBorderP8.style.color = 'black';
            inGameBorderP8.innerHTML = '+';
            if (gameObj.currentTurn === 8) {
                playerEight.displayFold2Room('disconnect');
            } else {
                gameObj.p8Folded = 1;
                gameObj.p8Disconnected = true;
            }
        } else if (userWhoLeftGame === 9) {
            inGameBorderP9.style.color = 'black';
            inGameBorderP9.innerHTML = '+';
            if (gameObj.currentTurn === 9) {
                playerNine.displayFold2Room('disconnect');
            } else {
                gameObj.p9Folded = 1;
                gameObj.p9Disconnected = true;
            }
        }


}

const userXsOutOfReBuyPage = () => {
    playerReBuyingPage.style.display = 'none';
}

const userInitiatesReturnHomeProcess = () => {

    if (user.currentPage === 'u_a_createGamePt1' || user.currentPage === 'u_a_createGamePt2') {

        confirmationToGoHomeWhileCreatingGamePage.style.display = 'block';

    } else if (user.currentPage === 'u_a_enterGameCode') {

        homePage.style.display = 'block';
        enterGameCodePage.style.display = 'none';

        user.currentPage = 'u_a_homepage';

    } else if (user.currentPage === 'u_a_joiningGameEnteringDisplayInfo' || user.currentPage === 'u_a_inGameState' && user.userCurrentlyInGame) {

        confirmationToLeaveGameManuallyPage.style.display = 'block';

    } else if (user.currentPage === 'u_a_preGameLobbyState') {

        confirmationToGoHomeWhileCreatingGamePage.style.display = 'block';
    }


}

const userConfirmsDisbandGameMessage = () => {

    homePage.style.display = 'block';

    if (user.currentPage === 'u_a_createGamePt1') {
        setGameSizePage.style.display = 'none';
        socket.emit('userDisbandsGameWhileInCreatingGameProcess');
    } else if (user.currentPage === 'u_a_createGamePt2') {
        hostInGameDisplayInfoPage.style.display = 'none';
        socket.emit('userDisbandsGameWhileInCreatingGameProcess');
    } else if (user.currentPage === 'u_a_preGameLobbyState') {
        inGameEls.forEach((e) => {
            e.style.display = 'none';
        })
        socket.emit('userDisbandsGameWhileInPreGameLobby');
    }

    confirmationToGoHomeWhileCreatingGamePage.style.display = 'none';
    user.currentPage = 'u_a_homepage';

}

const userConfirmsLeaveGameMessage = () => {
    
    socket.emit('userConfirmsLeaveGameManually');
    confirmationToLeaveGameManuallyPage.style.display = 'none';
    homePage.style.display = 'block';

    inGameEls.forEach((e) => {
        e.style.display = 'none';
    })

    if (!user.userCurrentlyInGame) {
        userJoiningInGameDisplayInfoPage.style.display = 'none';
    }

    user.currentPage = 'u_a_homepage';

}   

const userDeclinesLeaveGameMessage = () => {
    confirmationToLeaveGameManuallyPage.style.display = 'none';
}

const userDeclinesDisbandGameMessage = () => {
    confirmationToGoHomeWhileCreatingGamePage.style.display = 'none';
}

const receivingDisbandOfGame = () => {
    user.userCurrentlyInGame = false;

    hostHasDisbanedGamePage.style.display = 'block';

    socket.emit('sendingDataBackAfterDisbandGame');

}

const userInitiatesDeleteAccountProcess = () => {
    confirmationToDeleteAccountPage.style.display = 'block';
    userInfoPage.style.display = 'none';
    profileInfoPage.style.display = 'none';
}

const userConfirmsDeleteAccountMessage = () => {
    if (!user.userCurrentlyInGame) {
        socket.emit('userConfirmsDeleteAccount')
        confirmationToDeleteAccountPage.style.display = 'none';
    }
}

const userDeclinesDeleteAccountMessage = () => {
    confirmationToDeleteAccountPage.style.display = 'none';
    userInfoPage.style.display = 'block';
}

const receivingUserRequestToDeleteAccount = () => {
    resetUserInfo();
    resetingUserInfoPage();

}

const closingHostHasDisbandedGameMessage = () => {
    hostHasDisbanedGamePage.style.display = 'none';

    homePage.style.display = 'block';

    inGameEls.forEach((e) => {
        e.style.display = 'none';
    })
}

const displayingUserSetInvalidRoomSize = () => {
    confirmingUserSetUnacceptableRoomSizePage.style.display = 'block';

    setTimeout(() => {
        confirmingUserSetUnacceptableRoomSizePage.style.display = 'none';
    }, 2000)
}

