const hostSubmitsWinnerOfRound = () => {
    socket.emit('sendingWinnerOfRound', optionsForWinnerOfRound.value);
    hostChoosesWinnerOfRoundPage.style.display = 'none';
}

const receivingWinnerOfRound = (winnerValue) => {
    resetingPlayerBordersForNextRound();
    hidingAllPlayerPlacementCards();

    let pWinnerHolder;
    let pWinnerBorderHolder;

    if (user['inGameTurn'] === 1) {
        startNextRoundAfterChoosingWinnerPage.style.display = 'block';
    }

    if (winnerValue === 'player1') {
        if (user['inGameTurn'] === 1) {
            p.chips += gameObj.pot;
            socket.emit('sendingPInfo4Win', p, 1);
        }

    } else if (winnerValue === 'player2') {
        if (user['inGameTurn'] === 2) {
            socket.emit('sendingPInfo4Win', p, 2);
        }
        
    } else if (winnerValue === 'player3') {
        if (user['inGameTurn'] === 3) {
            p.chips += gameObj.pot;
            socket.emit('sendingPInfo4Win', p, 3);
        }
        
    } else if (winnerValue === 'player4') {
        if (user['inGameTurn'] === 4) {
            p.chips += gameObj.pot;
            socket.emit('sendingPInfo4Win', p, 4);
        }
        
    } else if (winnerValue === 'player5') {
        if (user['inGameTurn'] === 5) {
            p.chips += gameObj.pot;
            socket.emit('sendingPInfo4Win', p, 5);
        }
        
    } else if (winnerValue === 'player6') {
        if (user['inGameTurn'] === 6) {
            p.chips += gameObj.pot;
            socket.emit('sendingPInfo4Win', p, 6);
        }
        
    } else if (winnerValue === 'player7') {
        if (user['inGameTurn'] === 7) {
            p.chips += gameObj.pot;
            socket.emit('sendingPInfo4Win', p, 7);
        }
        
    } else if (winnerValue === 'player8') {
        if (user['inGameTurn'] === 8) {
            p.chips += gameObj.pot;
            socket.emit('sendingPInfo4Win', p, 8);
        }
        
    } else if (winnerValue === 'player9') {
        if (user['inGameTurn'] === 9) {
            p.chips += gameObj.pot;
            socket.emit('sendingPInfo4Win', p, 9);
        }
        
    }

    if (user['inGameTurn'] === 1 && winnerValue != 'player1') {
        if (p.chips <= 0) {
            playerReBuyingPage.style.display = 'block';
        }
    }

    if (user['inGameTurn'] === 2 && winnerValue != 'player2') {
        if (p.chips <= 0) {
            playerReBuyingPage.style.display = 'block';
        }
    }

    if (user['inGameTurn'] === 3 && winnerValue != 'player3') {
        if (p.chips <= 0) {
            playerReBuyingPage.style.display = 'block';
        }
    }

    if (user['inGameTurn'] === 4 && winnerValue != 'player4') {
        if (p.chips <= 0) {
            playerReBuyingPage.style.display = 'block';
        }
    }

    if (user['inGameTurn'] === 5 && winnerValue != 'player5') {
        if (p.chips <= 0) {
            playerReBuyingPage.style.display = 'block';
        }
    }

    if (user['inGameTurn'] === 6 && winnerValue != 'player6') {
        if (p.chips <= 0) {
            playerReBuyingPage.style.display = 'block';
        }
    }

    if (user['inGameTurn'] === 7 && winnerValue != 'player7') {
        if (p.chips <= 0) {
            playerReBuyingPage.style.display = 'block';
        }
    }

    if (user['inGameTurn'] === 8 && winnerValue != 'player8') {
        if (p.chips <= 0) {
            playerReBuyingPage.style.display = 'block';
        }
    }

    if (user['inGameTurn'] === 9 && winnerValue != 'player9') {
        if (p.chips <= 0) {
            playerReBuyingPage.style.display = 'block';
        }
    }



}

const hostStartsNextRound = () => {
    startNextRoundAfterChoosingWinnerPage.style.display = 'none';
    socket.emit('hostConfirmsStartNextRound')
}

const displayingNextRound2Room = () => {

    gameObj.totalRoundsCompleted++;
    gameObj.totalPlayersFolded = 0;

    gameObj.inTransitionToNextRound = false;
    gameObj.currentRound = 0;
    gameObj.roundName = 'PreFlop';
    gameObj.lastBet = 0;
    gameObj.lastRaise = 0;
    gameObj.currentBettor = '';
    gameObj.currentRaiser = '';
    gameObj.pot = gameObj.bbAnte + gameObj.sbAnte;

    inGamePotDisplay.innerHTML = gameObj.pot;

    inGameRoundDisplay.innerHTML = 'PreFlop';

    if (gameObj.gameSize === 4) {
        gameObj.p1In = 0;
        gameObj.p2In = 0;
        gameObj.p3In = 0;
        gameObj.p4In = 0;

        if (!gameObj.p1Disconnected) {
            gameObj.p1Folded = 0;
            inGameBorderP1.innerHTML = inGameBorderP1.innerText;
            divForPlacementCardImgP1.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP1);
        } else {
            gameObj.totalPlayersFolded++;
        }
        
        if (!gameObj.p2Disconnected) {
            gameObj.p2Folded = 0;
            inGameBorderP2.innerHTML = inGameBorderP2.innerText;
            divForPlacementCardImgP2.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP2);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (!gameObj.p3Disconnected) {
            gameObj.p3Folded = 0;
            inGameBorderP3.innerHTML = inGameBorderP3.innerText;
            divForPlacementCardImgP3.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP3);
        } else {
            gameObj.totalPlayersFolded++;
        }
        
        if (!gameObj.p4Disconnected) {
            gameObj.p4Folded = 0;
            inGameBorderP4.innerHTML = inGameBorderP4.innerText;
            divForPlacementCardImgP4.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP4);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (gameObj.bB === 1) {
            if (!gameObj.p3Disconnected) {
                playerThree.isBB(4);
            } else if (!gameObj.p4Disconnected) {
                playerFour.isBB(4);
            } 
        } else if (gameObj.bB === 2) {
            if (!gameObj.p1Disconnected) {
                playerOne.isBB(4);
            } else if (!gameObj.p3Disconnected) {
                playerThree.isBB(4);
            } 
        } else if (gameObj.bB === 3) {
            if (!gameObj.p4Disconnected) {
                playerFour.isBB(4);
            } else if (!gameObj.p2Disconnected) {
                playerTwo.isBB(4);
            } 
        } else if (gameObj.bB === 4) {
            if (!gameObj.p2Disconnected) {
                playerTwo.isBB(4);
            } else if (!gameObj.p1Disconnected) {
                playerOne.isBB(4);
            } 
        }
    }

    if (gameObj.gameSize === 5) {

        gameObj.p1In = 0;
        gameObj.p2In = 0;
        gameObj.p3In = 0;
        gameObj.p4In = 0;
        gameObj.p5In = 0;

        if (!gameObj.p1Disconnected) {
            gameObj.p1Folded = 0;
            inGameBorderP1.innerHTML = inGameBorderP1.innerText;
            divForPlacementCardImgP1.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP1);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (!gameObj.p2Disconnected) {
            gameObj.p2Folded = 0;
            inGameBorderP2.innerHTML = inGameBorderP2.innerText;
            divForPlacementCardImgP2.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP2);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (!gameObj.p3Disconnected) {
            gameObj.p3Folded = 0;
            inGameBorderP3.innerHTML = inGameBorderP3.innerText;
            divForPlacementCardImgP3.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP3);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (!gameObj.p4Disconnected) {
            gameObj.p4Folded = 0;
            inGameBorderP4.innerHTML = inGameBorderP4.innerText;
            divForPlacementCardImgP4.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP4);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (!gameObj.p5Disconnected) {
            gameObj.p5Folded = 0;
            inGameBorderP5.innerHTML = inGameBorderP5.innerText;
            divForPlacementCardImgP5.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP5);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (gameObj.bB === 1) {
            if (!gameObj.p3Disconnected) {
                playerThree.isBB(5);
            } else if (gameObj.p4Disconnected) {
                playerFour.isBB(5);
            }
        } else if (gameObj.bB === 2) {
            if (!gameObj.p1Disconnected) {
                playerOne.isBB(5);
            } else if (!gameObj.p3Disconnected) {
                playerThree.isBB(5);
            }
        } else if (gameObj.bB === 3) {
            if (!gameObj.p4Disconnected) {
                playerFour.isBB(5);
            } else if (!gameObj.p5Disconnected) {
                playerFive.isBB(5);
            }
        } else if (gameObj.bB === 4) {
            if (!gameObj.p5Disconnected) {
                playerFive.isBB(5);
            } else if (!gameObj.p2Disconnected) {
                playerTwo.isBB(5);
            }
        } else if (gameObj.bB === 5) {
            if (!gameObj.p2Disconnected) {
                playerTwo.isBB(5);
            } else if (!gameObj.p1Disconnected) {
                playerOne.isBB(5);
            }
        }
    }

    if (gameObj.gameSize === 6) {

        gameObj.p1In = 0;
        gameObj.p2In = 0;
        gameObj.p3In = 0;
        gameObj.p4In = 0;
        gameObj.p5In = 0;
        gameObj.p6In = 0;

        if (!gameObj.p1Disconnected) {
            gameObj.p1Folded = 0;
            inGameBorderP1.innerHTML = inGameBorderP1.innerText;
            divForPlacementCardImgP1.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP1);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (!gameObj.p2Disconnected) {
            gameObj.p2Folded = 0;
            inGameBorderP2.innerHTML = inGameBorderP2.innerText;
            divForPlacementCardImgP2.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP2);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (!gameObj.p3Disconnected) {
            gameObj.p3Folded = 0;
            inGameBorderP3.innerHTML = inGameBorderP3.innerText;
            divForPlacementCardImgP3.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP3);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (!gameObj.p4Disconnected) {
            gameObj.p4Folded = 0;
            inGameBorderP4.innerHTML = inGameBorderP4.innerText;
            divForPlacementCardImgP4.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP4);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (!gameObj.p5Disconnected) {
            gameObj.p5Folded = 0;
            inGameBorderP5.innerHTML = inGameBorderP5.innerText;
            divForPlacementCardImgP5.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP5);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (!gameObj.p6Disconnected) {
            gameObj.p6Folded = 0;
            inGameBorderP6.innerHTML = inGameBorderP6.innerText;
            divForPlacementCardImgP6.style.display = 'block';
            optionsForWinnerOfRound.appendChild(winnerOptionP6);
        } else {
            gameObj.totalPlayersFolded++;
        }

        if (gameObj.bB === 1) {
            if (!gameObj.p6Disconnected) {
                playerSix.isBB(6);
            } else {
                playerThree.isBB(6);
            }
        } else if (gameObj.bB === 2) {
            if (!gameObj.p1Disconnected) {
                playerOne.isBB(6);
            } else {
                playerSix.isBB(6);
            }
        } else if (gameObj.bB === 3) {
            if (!gameObj.p4Disconnected) {
                playerFour.isBB(6);
            } else {
                playerFive.isBB(6);
            }
        } else if (gameObj.bB === 4) {
            if (!gameObj.p5Disconnected) {
                playerFive.isBB(6);
            } else {
                playerTwo.isBB(6);
            }
        } else if (gameObj.bB === 5) {
            if (!gameObj.p2Disconnected) {
                playerTwo.isBB(6);
            } else {
                playerOne.isBB(6);
            }
        } else if (gameObj.bB === 6) {
            if (!gameObj.p3Disconnected) {
                playerThree.isBB(6);
            } else {
                playerFour.isBB(6);
            }
        } 


    }

}

const playerSubmitsReBuy = () => {

    p.chips += Number(playerReBuyChipsInput.value);
    p.totalBuyIn += Number(playerReBuyChipsInput.value);

    socket.emit('userInitiatesReBuyProcess', p, user['inGameTurn']);

}