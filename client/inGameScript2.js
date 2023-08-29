///////// PLAYER 6 IN GAME ELEMENTS /////////
const p6Buttons = document.getElementById('p6Buttons');
const p6BetButton = document.getElementById('p6BetButton');
const p6CheckButton = document.getElementById('p6CheckButton');
const p6CallButton = document.getElementById('p6CallButton');
const p6FoldButton = document.getElementById('p6FoldButton');
const p6BetForm = document.getElementById('p6BetForm');
var p6BetAmountInput = document.getElementById('p6BetAmount');
const p6BetSubmitButton = document.getElementById('p6BetSubmit');
const p6RaiseForm = document.getElementById('p6RaiseForm');
var p6RaiseAmountInput = document.getElementById('p6RaiseAmount');
const p6RaiseSubmitButton = document.getElementById('p6RaiseSubmit');

const divForPlacementCardImgP6 = document.getElementById('divForPlacementCardImgP6');

///////// PLAYER 7 IN GAME ELEMENTS /////////
const p7Buttons = document.getElementById('p7Buttons');
const p7BetButton = document.getElementById('p7BetButton');
const p7CheckButton = document.getElementById('p7CheckButton');
const p7CallButton = document.getElementById('p7CallButton');
const p7FoldButton = document.getElementById('p7FoldButton');
const p7BetForm = document.getElementById('p7BetForm');
var p7BetAmountInput = document.getElementById('p7BetAmount');
const p7BetSubmitButton = document.getElementById('p7BetSubmit');
const p7RaiseForm = document.getElementById('p7RaiseForm');
var p7RaiseAmountInput = document.getElementById('p7RaiseAmount');
const p7RaiseSubmitButton = document.getElementById('p7RaiseSubmit');

///////// PLAYER 8 IN GAME ELEMENTS /////////
const p8Buttons = document.getElementById('p8Buttons');
const p8BetButton = document.getElementById('p8BetButton');
const p8CheckButton = document.getElementById('p8CheckButton');
const p8CallButton = document.getElementById('p8CallButton');
const p8FoldButton = document.getElementById('p8FoldButton');
const p8BetForm = document.getElementById('p8BetForm');
var p8BetAmountInput = document.getElementById('p8BetAmount');
const p8BetSubmitButton = document.getElementById('p8BetSubmit');
const p8RaiseForm = document.getElementById('p8RaiseForm');
var p8RaiseAmountInput = document.getElementById('p8RaiseAmount');
const p8RaiseSubmitButton = document.getElementById('p8RaiseSubmit');

///////// PLAYER 9 IN GAME ELEMENTS /////////
const p9Buttons = document.getElementById('p9Buttons');
const p9BetButton = document.getElementById('p9BetButton');
const p9CheckButton = document.getElementById('p9CheckButton');
const p9CallButton = document.getElementById('p9CallButton');
const p9FoldButton = document.getElementById('p9FoldButton');
const p9BetForm = document.getElementById('p9BetForm');
var p9BetAmountInput = document.getElementById('p9BetAmount');
const p9BetSubmitButton = document.getElementById('p9BetSubmit');
const p9RaiseForm = document.getElementById('p9RaiseForm');
var p9RaiseAmountInput = document.getElementById('p9RaiseAmount');
const p9RaiseSubmitButton = document.getElementById('p9RaiseSubmit');

const playerSix = {
    active: false,

    isBB: (rS, indicator) => {

        gameObj.bB = 6;
        inGameBorderP6.style.color = 'green'

        gIBigBlind.innerHTML = 'Big Blind: ' + inGameBorderP1.innerHTML.split(" ")[0];

        gameObj.p6AnteCalled = 1;


        if (rS === 6) {
            gameObj.sB = 1;
            inGameBorderP1.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP1.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p3Folded === 0) {
                    playerThree.settingTurn();
                }

                if (gameObj.p3Folded === 1) {
                    playerFour.settingTurn();
                }

                if (user['inGameTurn'] === 6) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 1) {
                    p.chips -= gameObj.sbAnte;
                    socket.emit('sendingBlindInfo', p, 'SB')
                }

            } else {

                if (gameObj.currentTurn === 1) {
                    playerOne.settingTurn();
                } else if (gameObj.currentTurn === 2) {
                    playerTwo.settingTurn();
                } else if (gameObj.currentTurn === 3) {
                    playerThree.settingTurn();
                } else if (gameObj.currentTurn === 4) {
                    playerFour.settingTurn();
                } else if (gameObj.currentTurn === 5) {
                    playerFive.settingTurn();
                } else if (gameObj.currentTurn === 6) {
                    playerSix.settingTurn();
                }

            }

        }
        if (rS === 7) {
            gameObj.sB = 1;
            inGameBorderP1.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP1.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p7Folded === 0) {
                    playerSeven.settingTurn();
                }

                if (gameObj.p7Folded === 1) {
                    playerThree.settingTurn();
                }

                if (user['inGameTurn'] === 6) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 1) {
                    p.chips -= gameObj.sbAnte;
                    socket.emit('sendingBlindInfo', p, 'SB')
                }
 
            } else {

                if (gameObj.currentTurn === 1) {
                    playerOne.settingTurn();
                } else if (gameObj.currentTurn === 2) {
                    playerTwo.settingTurn();
                } else if (gameObj.currentTurn === 3) {
                    playerThree.settingTurn();
                } else if (gameObj.currentTurn === 4) {
                    playerFour.settingTurn();
                } else if (gameObj.currentTurn === 5) {
                    playerFive.settingTurn();
                } else if (gameObj.currentTurn === 6) {
                    playerSix.settingTurn();
                } else if (gameObj.currentTurn === 7) {
                    playerSeven.settingTurn();
                }

            }

        
        }
        if (rS === 8) {
            gameObj.sB = 1;
            inGameBorderP1.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP1.innerHTML.split(" ")[0];


            if (!indicator) {

                if (gameObj.p7Folded === 0) {
                    playerSeven.settingTurn();
                }

                if (gameObj.p7Folded === 1) {
                    playerThree.settingTurn();
                }

                if (user['inGameTurn'] === 6) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 1) {
                    p.chips -= gameObj.sbAnte;
                    socket.emit('sendingBlindInfo', p, 'SB')
                }

            } else {

                if (gameObj.currentTurn === 1) {
                    playerOne.settingTurn();
                } else if (gameObj.currentTurn === 2) {
                    playerTwo.settingTurn();
                } else if (gameObj.currentTurn === 3) {
                    playerThree.settingTurn();
                } else if (gameObj.currentTurn === 4) {
                    playerFour.settingTurn();
                } else if (gameObj.currentTurn === 5) {
                    playerFive.settingTurn();
                } else if (gameObj.currentTurn === 6) {
                    playerSix.settingTurn();
                } else if (gameObj.currentTurn === 7) {
                    playerSeven.settingTurn();
                } else if (gameObj.currentTurn === 8) {
                    playerEight.settingTurn();
                }

            }

        }
        if (rS === 9) {
            gameObj.sB = 1;
            inGameBorderP1.style.color = 'red';

            playerSeven.settingTurn();

            if (user['inGameTurn'] === 1) {
                p.chips -= gameObj.sbAnte;
                socket.emit('sendingBlindInfo', p, 'SB')
            }
        }
    },

    settingTurn: () => {

        inGameBorderP1.style.border = '3px solid black';
        inGameBorderP2.style.border = '3px solid black';
        inGameBorderP3.style.border = '3px solid black';
        inGameBorderP4.style.border = '3px solid black';
        inGameBorderP5.style.border = '3px solid black';
        inGameBorderP6.style.border = '3px solid blue';
        inGameBorderP7.style.border = '3px solid black';
        inGameBorderP8.style.border = '3px solid black';
        inGameBorderP9.style.border = '3px solid black';

        gameObj.currentTurn = 6;

    },

    checks: () => {
        if (gameObj.currentTurn === 6) {
            if (gameObj.currentBettor === '') {
                socket.emit('p6Checks');
            }
        }
    },

    callsBetEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p6AnteCalled === 1) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.bbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.bbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p6AnteCalled === 0.5) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.sbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.sbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p6AnteCalled === 0) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet;
                    p.callAmount = gameObj.lastBet;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            }
            socket.emit('p6CallsBet', p, type)
        }
    },

    callsRaiseEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p6AnteCalled === 1) {
                if (gameObj.p6In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                } else if (gameObj.p6In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                } else if (gameObj.p6In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.bbAnte;
                }
            } else if (gameObj.p6AnteCalled === 0.5) {
                if (gameObj.p6In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                } else if (gameObj.p6In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                } else if (gameObj.p6In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.sbAnte;
                }
            } else if (gameObj.p6AnteCalled === 0) {
                if (gameObj.p6In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet;
                } else if (gameObj.p6In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount;
                } else if (gameObj.p6In === 0) {
                    p.chips -= gameObj.lastRaise;
                    p.calledRaiseAmount = gameObj.lastRaise;
                }
            } 
            socket.emit('p6CallsBet', p, type) 
        }
    },

    callsAnteEMITTER: (blind) => {
        if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
            if (blind === 'SB') {
                p.chips -= gameObj.sbAnte;
                p.anteCalled = gameObj.sbAnte;
            } else if (blind === 'none') {
                p.chips -= gameObj.bbAnte;
                p.anteCalled = gameObj.bbAnte;
            }
            socket.emit('p6CallsAnte', p)   
        }
    },

    calls: () => {
        if (gameObj.currentTurn === 6) {
            if (gameObj.gameSize === 6) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 4 || gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSix.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSix.callsBetEMITTER('currentBettor'); 
                            } else {
                                playerSix.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSix.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSix.callsBetEMITTER('currentBettor'); 
                            } else {
                                playerSix.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 6) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            
            if (gameObj.gameSize === 7) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSix.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSix.callsBetEMITTER('currentBettor'); 
                            } else {
                                playerSix.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 6) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 7) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSix.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSix.callsBetEMITTER('currentBettor'); 
                            } else {
                                playerSix.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            
            if (gameObj.gameSize === 8) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 8) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSix.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSix.callsBetEMITTER('currentBettor'); 
                            } else {
                                playerSix.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 6) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 7) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSix.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSix.callsBetEMITTER('currentBettor'); 
                            } else {
                                playerSix.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            
            if (gameObj.gameSize === 9) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 8 || gameObj.bB === 9) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSix.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSix.callsBetEMITTER('currentBettor'); 
                            } else {
                                playerSix.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 6) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 7) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSix.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSix.callsBetEMITTER('currentBettor'); 
                            } else {
                                playerSix.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSix.callsBetEMITTER('currentBettor'); 
                        } else {
                            playerSix.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        }
    },

    betsEMITTER: () => {
        if (gameObj.currentTurn === 6) {
            if (gameObj.currentBettor === '') {
                p6BetAmountInput.style.display = 'block';
                p6BetSubmitButton.style.display = 'block';
                p6BetAmountInput.value = '';
            } else {
                p6RaiseAmountInput.style.display = 'block';
                p6RaiseSubmitButton.style.display = 'block';
                p6RaiseAmountInput.value = '';
            }
        }
    },

    bets: (type) => {
        if (p6BetAmountInput.value > 0) {
            p.chips -= p6BetAmountInput.value;
            p.betAmount = Number(p6BetAmountInput.value);
            socket.emit('p6SubmitsBet', p, type)
            p6BetAmountInput.style.display = 'none';
            p6BetSubmitButton.style.display = 'none';
        }
    },

    raises: (type) => {
        if (p6RaiseAmountInput.value > gameObj.lastBet) {
            p.chips -= p6RaiseAmountInput.value;
            p.reRaiseAmount = Number(p6RaiseAmountInput.value);
            socket.emit('p6SubmitsBet', p, type);
            p6RaiseAmountInput.style.display = 'none';
            p6RaiseSubmitButton.style.display = 'none';
        }
    },

    submitsBet: () => {
        playerSix.bets('asBettor');
    },

    submitsRaise: () => {
        playerSix.raises('asRaiser');
    },

    folds: () => {
        socket.emit('p6Folds');
    },

    ////// DISPLAY EVENTS 2 ROOM METHODS //////

    displayCheck2Room: () => {
        displayActionP6.innerText = 'Check';
        displayActionP6.style.display = 'block';

        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 6) {
                inGameLogic6Players.pChecking(5, playerOne, 'p1Folded', playerSix, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic6Players.pChecking(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic6Players.pChecking(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic6Players.pChecking(0, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne)
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic6Players.pChecking(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic6Players.pChecking(2, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                }
            }
        }     
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 6) {
                inGameLogic7Players.pChecking7(6, playerOne, 'p1Folded', playerSix, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic7Players.pChecking7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic7Players.pChecking7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic7Players.pChecking7(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic7Players.pChecking7(2, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic7Players.pChecking7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic7Players.pChecking7(0, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                }
            }
        }     
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 6) {
                inGameLogic8Players.pChecking8(7, playerOne, 'p1Folded', playerSix, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic8Players.pChecking8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic8Players.pChecking8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic8Players.pChecking8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic8Players.pChecking8(2, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic8Players.pChecking8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic8Players.pChecking8(0, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic8Players.pChecking8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                }
            }
        }
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 6) {
                inGameLogic9Players.pChecking9(8, playerOne, 'p1Folded', playerSix, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic9Players.pChecking9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic9Players.pChecking9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic9Players.pChecking9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic9Players.pChecking9(2, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic9Players.pChecking9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic9Players.pChecking9(0, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic9Players.pChecking9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                
                    if (gameObj.bB === 9) {
                        inGameLogic9Players.pChecking9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                }
            }
        }
    },

    displayCall2Room: (pInfo, tT) => {
        if (tT === 'currentBettor') {
            settingThePotOnCall(pInfo, inGameBorderP6);
            gameObj.p6In = 1;
            if (pInfo.chips > 0) {
                displayActionP6.innerText = 'Calls ' + gameObj.lastBet;
            } else {
                displayActionP6.innerText = 'All In!';
                gameObj.p6Folded = 1;
            }
        } else if (tT === 'currentRaiser') {
            settingThePotOnRaiseCall(pInfo, inGameBorderP6);
            if (pInfo.chips > 0) {
                displayActionP6.innerText = 'Calls ' + gameObj.lastRaise;
            } else {
                displayActionP6.innerText = 'All In!';
                gameObj.p6Folded = 1;
            }
        }

        displayActionP6.style.display = 'block';

        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.pNext2TheBB6(5, playerThree, 'p3Folded', playerFour, "p4Folded", playerFive, "p5Folded", playerTwo, "p2Folded", playerOne);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.pNext2TheBB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.pNext2TheBB6(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.pNext2TheBB6(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                } 
                
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.pNext2TheBB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            } 
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }  
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.theSB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix)
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.theSB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.theSB6(1, playerSix);
                }   
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.theSB6(2, playerThree, 'p3Folded', playerSix);
                } 
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.theSB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerThree);
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.theBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.theBB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playeSix);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.theBB6(1, playerOne, 'p1Folded', playerSix);
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.theBB6(2, playerThree, 'p3Folded', playerOne, 'p1Folded', playerSix);
                } 
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.theBB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        }
        
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(2, playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerSeven, 'p7Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theBB7(2, playerSeven, 'p7Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theBB7(1, playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theSB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }
        
                if (gameObj[tT]=== 'Player 2') {
                    inGameLogic7Players.theSB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theSB7(2, playerSeven, 'p7Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theSB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theSB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theSB7(1, playerSix);
                }
            }
        }
        
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(2, playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerSeven, 'p7Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theBB8(2, playerSeven, 'p7Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theBB8(1, playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theSB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theSB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theSB8(2, playerSeven, 'p7Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theSB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theSB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theSB8(1, playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theSB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        }
        
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(2, playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour)
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerSeven)
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerSeven, 'p7Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(2, playerSeven, 'p7Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(1, playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(2, playerSeven, 'p7Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(1, playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 9) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerSeven, 'p7Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        }
    },

    displayAnteCall2Room: (pInfo) => {
        settingThePotOnAnteCall(pInfo, inGameBorderP6);

        displayActionP1.style.display = 'block';
        displayActionP1.innerText = 'Calls ' + pInfo.anteCalled;

        gameObj.p6AnteCalled = 1;

        if (gameObj.gameSize === 6) {
            playerThree.settingTurn();
        }

        if (gameObj.gameSize === 7) {
            playerSeven.settingTurn();
        }

        if (gameObj.gameSize === 8) {
            playerSeven.settingTurn();
        }

        if (gameObj.gameSize === 9) {
            playerSeven.settingTurn();
        }
    },

    displayBet2Room: (pInfo, betType) => {
        if (betType === 'asBettor') {
            settingThePotOnBet(pInfo, inGameBorderP6);
            gameObj.currentBettor = 'Player 6';
            gameObj.lastBet = pInfo.betAmount;
            gameObj.p6In = 1;
            if (pInfo.chips > 0) {
                displayActionP6.innerText = 'Bets ' + pInfo.betAmount;
            } else {
                displayActionP6.innerText = 'All In!';
                gameObj.p6Folded = 1;
            }
        } else if (betType === 'asRaiser') {
            settingThePotOnRaise(pInfo, inGameBorderP6);
            gameObj.currentRaiser = 'Player 6';
            gameObj.lastRaise = pInfo.reRaiseAmount;
            gameObj.p6In = 0.5;
            if (pInfo.chips > 0) {
                displayActionP6.innerText = 'Raises ' + pInfo.betAmount;
            } else {
                displayActionP6.innerText = 'All In!';
                gameObj.p6Folded = 1;
            }
        }

        displayActionP6.style.display = 'block';


        if (gameObj.gameSize === 6) {
            inGameLogic6Players.playerBettingOrRaising(playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
        }
        
        if (gameObj.gameSize === 7) {
            inGameLogic7Players.pBettingOrRaising7(playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
        }
        
        if (gameObj.gameSize === 8) {
            inGameLogic8Players.pBettingOrRaising8(playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
        }
        
        if (gameObj.gameSize === 9) {
            inGameLogic9Players.pBettingOrRaising9(playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
        }
    },

    displayFold2Room: (disconnectIndicator) => {
        displayingPlayerFold2Room(inGameBorderP6);
        gameObj.p6Folded = 1;
        gameObj.totalPlayersFolded++;

        if (disconnectIndicator) {
            displayActionP6.innerText = 'Disconnected';
            gameObj.p6Disconnected = true;
        } else {
            displayActionP6.innerText = 'Fold';
        }

        displayActionP6.style.display = 'block';
        divForPlacementCardImgP6.style.display = 'none';

        optionsForWinnerOfRound.removeChild(winnerOptionP6);

        if (gameObj.gameSize === 6) {
            if (gameObj.totalPlayersFolded === 5) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.pNext2TheBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.pNext2TheBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.pNext2TheBB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.pNext2TheBB6(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.pNext2TheBB6(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.pNext2TheBB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p2SpotsFromBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.theSB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.theSB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.theSB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.theSB6(1, playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.theSB6(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.theSB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p4SpotsFromBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', plaeyrFive);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p3SpotsFromBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic6Players.theBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.theBB6(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.theBB6(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.theBB6(1, playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.theBB6(2, playerThree, 'p3Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.theBB6(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerFive);
                }
            }
        }
        
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.pNext2TheBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(2, playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p2SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p5SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p4SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
            
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p3SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerSeven, 'p7Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic7Players.theBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theBB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theBB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theBB7(2, playerSeven, 'p7Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theBB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theBB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theBB7(1, playerOne, 'p1Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.theSB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theSB7(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theSB7(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theSB7(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theSB7(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theSB7(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theSB7(1, playerSeven);
                }
            }
        }
        
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.pNext2TheBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(2, playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p2SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p6SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p5SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p3SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerSeven, 'p7Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic8Players.theBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theBB8(2, playerSeven, 'p7Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theBB8(1, playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.theSB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theSB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theSB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theSB8(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theSB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theSB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theSB8(1, playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theSB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p4SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        }
        
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSeven.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(2, playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSeven.settingTurn();
                }
                
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSeven.settingTurn();
                }
                
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour)
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerSeven)
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSeven.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSeven.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerSeven, 'p7Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(2, playerSeven, 'p7Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne, 'p1Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(1, playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSeven.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(2, playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(1, playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSeven.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 9) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSeven.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerSeven, 'p7Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        }
    },
}

const playerSeven = {
    active: false,

    isBB: (rS, indicator) => {
        gameObj.bB = 7;
        inGameBorderP7.style.color = 'green'

        gIBigBlind.innerHTML = 'Big Blind: ' + inGameBorderP7.innerHTML.split(" ")[0];

        if (rS === 7) {
            gameObj.sB = 6;
            inGameBorderP6.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP6.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p3Folded === 0) {
                    playerThree.settingTurn();
                }

                if (gameObj.p3Folded === 1) {
                    playerFour.settingTurn();
                }
                
                if (user['inGameTurn'] === 7) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 6) {
                    p.chips -= gameObj.sbAnte;
                    socket.emit('sendingBlindInfo', p, 'SB')
                }

            } else {

                if (gameObj.currentTurn === 1) {
                    playerOne.settingTurn();
                } else if (gameObj.currentTurn === 2) {
                    playerTwo.settingTurn();
                } else if (gameObj.currentTurn === 3) {
                    playerThree.settingTurn();
                } else if (gameObj.currentTurn === 4) {
                    playerFour.settingTurn();
                } else if (gameObj.currentTurn === 5) {
                    playerFive.settingTurn();
                } else if (gameObj.currentTurn === 6) {
                    playerSix.settingTurn();
                } else if (gameObj.currentTurn === 7) {
                    playerSeven.settingTurn();
                }

            }
        }
        if (rS === 8) {
            gameObj.sB = 6;
            inGameBorderP6.style.color = 'red';

            if (!indicator) {

                if (gameObj.p3Folded === 0) {
                    playerThree.settingTurn();
                }

                if (gameObj.p3Folded === 1) {
                    playerFour.settingTurn();
                }

                if (user['inGameTurn'] === 7) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 6) {
                    p.chips -= gameObj.sbAnte;
                    socket.emit('sendingBlindInfo', p, 'SB')
                }

            } else {

                if (gameObj.currentTurn === 1) {
                    playerOne.settingTurn();
                } else if (gameObj.currentTurn === 2) {
                    playerTwo.settingTurn();
                } else if (gameObj.currentTurn === 3) {
                    playerThree.settingTurn();
                } else if (gameObj.currentTurn === 4) {
                    playerFour.settingTurn();
                } else if (gameObj.currentTurn === 5) {
                    playerFive.settingTurn();
                } else if (gameObj.currentTurn === 6) {
                    playerSix.settingTurn();
                } else if (gameObj.currentTurn === 7) {
                    playerSeven.settingTurn();
                } else if (gameObj.currentTurn === 8) {
                    playerEight.settingTurn();
                }

            }

            playerThree.settingTurn();

        
        }
        if (rS === 9) {
            gameObj.sB = 6;
            inGameBorderP6.style.color = 'red';

            playerSix.settingTurn();

            if (user['inGameTurn'] === 6) {
                p.chips -= gameObj.sbAnte;
                socket.emit('sendingBlindInfo', p, 'SB')
            }
        }
    },

    settingTurn: () => {
        inGameBorderP1.style.border = '3px solid black';
        inGameBorderP2.style.border = '3px solid black';
        inGameBorderP3.style.border = '3px solid black';
        inGameBorderP4.style.border = '3px solid black';
        inGameBorderP5.style.border = '3px solid black';
        inGameBorderP6.style.border = '3px solid black';
        inGameBorderP7.style.border = '3px solid blue';
        inGameBorderP8.style.border = '3px solid black';
        inGameBorderP9.style.border = '3px solid black';

        gameObj.currentTurn = 7;
    },

    checks: () => {
        if (gameObj.currentTurn === 7) {
            if (gameObj.currentBettor === '') {
                socket.emit('p7Checks');
            }
        }
    },

    callsBetEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p7AnteCalled === 1) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.bbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.bbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p7AnteCalled === 0.5) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.sbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.sbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p7AnteCalled === 0) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet;
                    p.callAmount = gameObj.lastBet;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            }
            socket.emit('p7CallsBet', p, type)
        }
    },

    callsRaiseEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p7AnteCalled === 1) {
                if (gameObj.p7In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                } else if (gameObj.p7In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                } else if (gameObj.p7In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.bbAnte;
                }
            } else if (gameObj.p7AnteCalled === 0.5) {
                if (gameObj.p7In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                } else if (gameObj.p7In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                } else if (gameObj.p7In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.sbAnte;
                }
            } else if (gameObj.p7AnteCalled === 0) {
                if (gameObj.p7In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet;
                } else if (gameObj.p7In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount;
                } else if (gameObj.p7In === 0) {
                    p.chips -= gameObj.lastRaise;
                    p.calledRaiseAmount = gameObj.lastRaise;
                }
            } 
            socket.emit('p7CallsBet', p, type);  
        }
    },

    callsAnteEMITTER: (blind) => {
        if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
            if (blind === 'SB') {
                p.chips -= gameObj.sbAnte;
                p.anteCalled = gameObj.sbAnte;
            } else if (blind === 'none') {
                p.chips -= gameObj.bbAnte;
                p.anteCalled = gameObj.bbAnte;
            }
            socket.emit('p7CallsAnte', p)  
        }
    },

    calls: () => {
        if (gameObj.currentTurn === 7) {
            if (gameObj.gameSize === 7) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 6) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSeven.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSeven.callsBetEMITTER('currentBettor');
                            } else {
                                playerSeven.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSeven.callsBetEMITTER('currentBettor');
                        } else {
                            playerSeven.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSeven.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSeven.callsBetEMITTER('currentBettor');
                            } else {
                                playerSeven.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSeven.callsBetEMITTER('currentBettor');
                        } else {
                            playerSeven.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 7) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerSeven.callsBetEMITTER('currentBettor');
                        } else {
                            playerSeven.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            
            if (gameObj.gameSize === 8) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 8) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSeven.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSeven.callsBetEMITTER('currentBettor');
                            } else {
                                playerSeven.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSeven.callsBetEMITTER('currentBettor');
                        } else {
                            playerSeven.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSeven.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSeven.callsBetEMITTER('currentBettor');
                            } else {
                                playerSeven.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSeven.callsBetEMITTER('currentBettor');
                        } else {
                            playerSeven.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 7) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerSeven.callsBetEMITTER('currentBettor');
                        } else {
                            playerSeven.callsRaiseEMITTER('currentRaiser');
                        }
                    } 
                }
            }
            
            if (gameObj.gameSize === 9) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 8 || gameObj.bB === 9) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSeven.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSeven.callsBetEMITTER('currentBettor');
                            } else {
                                playerSeven.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSeven.callsBetEMITTER('currentBettor');
                        } else {
                            playerSeven.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerSeven.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerSeven.callsBetEMITTER('currentBettor');
                            } else {
                                playerSeven.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerSeven.callsBetEMITTER('currentBettor');
                        } else {
                            playerSeven.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 7) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerSeven.callsBetEMITTER('currentBettor');
                        } else {
                            playerSeven.callsRaiseEMITTER('currentRaiser');
                        }
                    } 
                }
            }
        }
    },

    betsEMITTER: () => {
        if (gameObj.currentTurn === 7) {
            if (gameObj.currentBettor === '') {
                p7BetAmountInput.style.display = 'block';
                p7BetSubmitButton.style.display = 'block';
                p7BetAmountInput.value = '';
            } else {
                p7RaiseAmountInput.style.display = 'block';
                p7RaiseSubmitButton.style.display = 'block';
                p7RaiseAmountInput.value = '';
            }
        }
    },

    bets: (type) => {
        if (p7BetAmountInput.value > 0) {
            p.chips -= p7BetAmountInput.value;
            p.betAmount = Number(p7BetAmountInput.value);
            socket.emit('p7SubmitsBet', p, type)
            p7BetAmountInput.style.display = 'none';
            p7BetSubmitButton.style.display = 'none';
        }
    },

    raises: (type) => {
        if (p7RaiseAmountInput.value > gameObj.lastBet) {
            p.chips -= p7RaiseAmountInput.value;
            p.reRaiseAmount = Number(p7RaiseAmountInput.value);
            socket.emit('p7SubmitsBet', p, type);
            p7RaiseAmountInput.style.display = 'none';
            p7RaiseSubmitButton.style.display = 'none';
        }
    },

    submitsBet: () => {
        playerSeven.bets('asBettor');
    },

    submitsRaise: () => {
        playerSeven.raises('asRaiser');
    },

    folds: () => {
        socket.emit('p7Folds');
    },

    ////// DISPLAY EVENTS 2 ROOM METHODS //////

    displayCheck2Room: () => {
        displayActionP7.innerText = 'Check';
        displayActionP7.style.display = 'block';

        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 7) {
                inGameLogic7Players.pChecking7(6, playerSix, 'p6Folded', playerSeven, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic7Players.pChecking7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic7Players.pChecking7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic7Players.pChecking7(0, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic7Players.pChecking7(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic7Players.pChecking7(2, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic7Players.pChecking7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                }
            }
        }
        
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 7) {
                inGameLogic8Players.pChecking8(7, playerSix, 'p6Folded', playerSeven, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic8Players.pChecking8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic8Players.pChecking8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic8Players.pChecking8(0, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic8Players.pChecking8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic8Players.pChecking8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic8Players.pChecking8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic8Players.pChecking8(2, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                }
            }
        }
        
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 7) {
                inGameLogic9Players.pChecking9(8, playerSix, 'p6Folded', playerSeven, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic9Players.pChecking9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic9Players.pChecking9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic9Players.pChecking9(0, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic9Players.pChecking9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic9Players.pChecking9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic9Players.pChecking9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic9Players.pChecking9(2, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 9) {
                        inGameLogic9Players.pChecking9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                }
            }
        }
    },

    displayCall2Room: (pInfo, tT) => {
        if (tT === 'currentBettor') {
            settingThePotOnCall(pInfo, inGameBorderP7);
            gameObj.p7In = 1;
            if (pInfo.chips > 0) {
                displayActionP7.innerText = 'Calls ' + gameObj.lastBet;
            } else {
                displayActionP7.innerText = 'All In!';
                gameObj.p7Folded = 1;
            }

        } else if (tT === 'currentRaiser') {
            settingThePotOnRaiseCall(pInfo, inGameBorderP7);
            if (pInfo.chips > 0) {
                displayActionP7.innerText = 'Calls ' + gameObj.lastRaise;
            } else {
                displayActionP7.innerText = 'All In!';
                gameObj.p7Folded = 1;
            }
        }

        displayActionP7.style.display = 'block';

        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theSB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theSB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theSB7(1, playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theSB7(2, playerThree, 'p3Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theSB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theSB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(2, playerThree, 'p3Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theBB7(1, playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theBB7(2, playerThree, 'p3Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        }
        
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theSB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theSB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theSB8(1, playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theSB8(2, playerThree, 'p3Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theSB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theSB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theSB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerSeven);
                }
        
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerThree, 'p3Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(2, playerThree, 'p3Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theBB8(1, playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theBB8(2, playerThree, 'p3Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        }
        
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(1, playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(2, playerThree, 'p3Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerThree, 'p3Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven); 
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(2, playerThree, 'p3Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(1, playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(2, playerThree, 'p3Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 9) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        }
    },

    displayAnteCall2Room: (pInfo) => {
        settingThePotOnAnteCall(pInfo, inGameBorderP7);

        gameObj.p7AnteCalled = 1;

        displayActionP7.innerText = 'Calls ' + pInfo.anteCalled;
        displayActionP7.style.display = 'block';

        if (gameObj.gameSize === 7) {
            playerThree.settingTurn();
        }

        if (gameObj.gameSize === 8) {
            playerThree.settingTurn();
        }

        if (gameObj.gameSize === 9) {
            playerThree.settingTurn();
        }
    },

    displayBet2Room: (pInfo, betType) => {
        if (betType === 'asBettor') {
            settingThePotOnBet(pInfo, inGameBorderP7);
            gameObj.currentBettor = 'Player 7';
            gameObj.lastBet = pInfo.betAmount;
            gameObj.p7In = 1;
            if (pInfo.chips > 0) {
                displayActionP7.innerText = 'Bets ' + pInfo.betAmount;
            } else {
                displayActionP7.innerText = 'All In!';
                gameObj.p7Folded = 1;
            }
        } else if (betType === 'asRaiser') {
            settingThePotOnRaise(pInfo, inGameBorderP7);
            gameObj.currentRaiser = 'Player 7';
            gameObj.lastRaise = pInfo.reRaiseAmount;
            gameObj.p7In = 0.5;
            if (pInfo.chips > 0) {
                displayActionP7.innerText = 'Raises ' + pInfo.betAmount;
            } else {
                displayActionP7.innerText = 'All In!';
                gameObj.p7Folded = 1;
            }
        }

        displayActionP7.style.display = 'block';


        if (gameObj.gameSize === 7) {
            inGameLogic7Players.pBettingOrRaising7(playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
        }
        
        if (gameObj.gameSize === 8) {
            inGameLogic8Players.pBettingOrRaising8(playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
        }
        
        if (gameObj.gameSize === 9) {
            inGameLogic9Players.pBettingOrRaising9(playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
        }
    },

    displayFold2Room: (disconnectIndicator) => {
        displayingPlayerFold2Room(inGameBorderP7);
        gameObj.p7Folded = 1;
        gameObj.totalPlayersFolded++;

        if (disconnectIndicator) {
            displayActionP7.innerText = 'Disconnected';
            gameObj.p7Disconnected = true;
        } else {
            displayActionP7.innerText = 'Fold';
        }

        displayActionP7.style.display = 'block';
        // divForPlacementCardImgP7.style.display = 'none';

        optionsForWinnerOfRound.removeChild(winnerOptionP7);

        if (gameObj.gameSize === 7) {
            if (gameObj.totalPlayersFolded === 6) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p2SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p3SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne)
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.theSB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theSB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theSB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theSB7(1, playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theSB7(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theSB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theSB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p5SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p4SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.pNext2TheBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(2, playerThree, 'p3Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic7Players.theBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theBB7(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theBB7(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theBB7(1, playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theBB7(2, playerThree, 'p3Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theBB7(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix, 'p6Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theBB7(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        }
        
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p2SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p3SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.theSB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
                
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theSB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theSB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theSB8(1, playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theSB8(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theSB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theSB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theSB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p6SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p4SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerThree, 'p3Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.pNext2TheBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(2, playerThree, 'p3Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic8Players.theBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theBB8(1, playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theBB8(2, playerThree, 'p3Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix, 'p6Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix, 'p6Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p5SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        }
        
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerThree.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerThree.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerThree.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(1, playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerThree.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerThree.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerThree, 'p3Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix); 
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerThree.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(2, playerThree, 'p3Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(1, playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(2, playerThree, 'p3Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSix, 'p6Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix, 'p6Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix, 'p6Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerThree.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 9) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerThree.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
        }
    },


}

const playerEight = {
    active: false,

    isBB: (rS, indicator) => {
        gameObj.bB = 8;
        inGameBorderP8.style.color = 'green'

        gIBigBlind.innerHTML = 'Big Blind: ' + inGameBorderP8.innerHTML.split(" ")[0];

        if (rS === 8) {
            gameObj.sB = 4;
            inGameBorderP4.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP4.innerHTML.split(" ")[0];


            if (!indicator) {

                if (gameObj.p5Folded === 0) {
                    playerFive.settingTurn();
                }

                if (gameObj.p5Folded === 1) {
                    playerTwo.settingTurn();
                }

                if (user['inGameTurn'] === 8) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 4) {
                    p.chips -= gameObj.sbAnte;
                    socket.emit('sendingBlindInfo', p, 'SB')
                }

            } else {

                if (gameObj.currentTurn === 1) {
                    playerOne.settingTurn();
                } else if (gameObj.currentTurn === 2) {
                    playerTwo.settingTurn();
                } else if (gameObj.currentTurn === 3) {
                    playerThree.settingTurn();
                } else if (gameObj.currentTurn === 4) {
                    playerFour.settingTurn();
                } else if (gameObj.currentTurn === 5) {
                    playerFive.settingTurn();
                } else if (gameObj.currentTurn === 6) {
                    playerSix.settingTurn();
                } else if (gameObj.currentTurn === 7) {
                    playerSeven.settingTurn();
                } else if (gameObj.currentTurn === 8) {
                    playerEight.settingTurn();
                }

            }

        }

        if (rS === 9) {
            gameObj.sB = 4;
            inGameBorderP4.style.color = 'red';

            playerNine.settingTurn();

            if (user['inGameTurn'] === 4) {
                p.chips -= gameObj.sbAnte;
                socket.emit('sendingBlindInfo', p, 'SB')
            }
        }
    },

    settingTurn: () => {
        inGameBorderP1.style.border = '3px solid black';
        inGameBorderP2.style.border = '3px solid black';
        inGameBorderP3.style.border = '3px solid black';
        inGameBorderP4.style.border = '3px solid black';
        inGameBorderP5.style.border = '3px solid black';
        inGameBorderP6.style.border = '3px solid black';
        inGameBorderP7.style.border = '3px solid black';
        inGameBorderP8.style.border = '3px solid blue';
        inGameBorderP9.style.border = '3px solid black';

        gameObj.currentTurn = 8;

    },

    checks: () => {
        if (gameObj.currentTurn === 8) {
            if (gameObj.currentBettor === '') {
                socket.emit('p8Checks');
            }
        }
    },

    callsBetEMITTER: (type) => {
        if (gameObj.lastBet < p.chips) {
            p.chips -= gameObj.lastBet;
            p.callAmount = gameObj.lastBet;
        } else {
            p.callAmount = p.chips;
            p.chips -= p.chips;
        }
        socket.emit('p8CallsBet', p, type)
    },

    callsRaiseEMITTER: (type) => {
        if (gameObj.p8In === 1) {
            p.chips -= gameObj.lastBet;
            p.calledRaiseAmount = gameObj.lastBet;
        } else if (gameObj.p8In === 0) {
            p.chips -= gameObj.lastRaise;
            p.calledRaiseAmount = gameObj.lastRaise;
        }
        socket.emit('p8CallsBet', p, type)
    },

    callsAnteEMITTER: (blind) => {
        if (blind === 'SB') {
            p.chips -= gameObj.sbAnte;
            p.anteCalled = gameObj.sbAnte;
        } else if (blind === 'none') {
            p.chips -= gameObj.bbAnte;
            p.anteCalled = gameObj.bbAnte;
        }
        socket.emit('p8CallsAnte', p)
    },

    calls: () => {
        if (gameObj.currentTurn === 8) {
            if (gameObj.gameSize === 8) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 6 || gameObj.bB === 7) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerEight.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerEight.callsBetEMITTER('currentBettor');
                            } else {
                                playerEight.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerEight.callsBetEMITTER('currentBettor');
                        } else {
                            playerEight.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerEight.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerEight.callsBetEMITTER('currentBettor');
                            } else {
                                playerEight.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerEight.callsBetEMITTER('currentBettor');
                        } else {
                            playerEight.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 8) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerEight.callsBetEMITTER('currentBettor');
                        } else {
                            playerEight.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            
            if (gameObj.gameSize === 9) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 7) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerEight.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerEight.callsBetEMITTER('currentBettor');
                            } else {
                                playerEight.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerEight.callsBetEMITTER('currentBettor');
                        } else {
                            playerEight.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 8) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerEight.callsBetEMITTER('currentBettor');
                        } else {
                            playerEight.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 9) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerEight.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerEight.callsBetEMITTER('currentBettor');
                            } else {
                                playerEight.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerEight.callsBetEMITTER('currentBettor');
                        } else {
                            playerEight.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        }
    },

    betsEMITTER: () => {
        if (gameObj.currentTurn === 8) {
            if (gameObj.currentBettor === '') {
                p8BetAmountInput.style.display = 'block';
                p8BetSubmitButton.style.display = 'block';
                p8BetAmountInput.value = '';
            } else {
                p8RaiseAmountInput.style.display = 'block';
                p8RaiseSubmitButton.style.display = 'block';
                p8RaiseAmountInput.value = '';
            }
        }

    },

    bets: (type) => {
        if (p8BetAmountInput.value > 0) {
            p.chips -= p8BetAmountInput.value;
            p.betAmount = Number(p8BetAmountInput.value);
            socket.emit('p8SubmitsBet', p, type)
            p8BetAmountInput.style.display = 'none';
            p8BetSubmitButton.style.display = 'none';
        }

    },

    raises: (type) => {
        if (p8RaiseAmountInput.value > gameObj.lastBet) {
            p.chips -= p8RaiseAmountInput.value;
            p.reRaiseAmount = Number(p8RaiseAmountInput.value);
            socket.emit('p8SubmitsBet', p, type);
            p8RaiseAmountInput.style.display = 'none';
            p8RaiseSubmitButton.style.display = 'none';
        }
    },

    submitsBet: () => {
        playerEight.bets('asBettor');
    },

    submitsRaise: () => {
        playerEight.raises('asRaiser');
    },

    folds: () => {
        socket.emit('p8Folds');
    },

    ////// DISPLAY EVENTS 2 ROOM METHODS //////

    displayCheck2Room: () => {
        displayActionP8.innerText = 'Check'
        displayActionP8.style.display = 'block';

        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 8) {
                inGameLogic8Players.pChecking8(7, playerFour, 'p4Folded', playerEight, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic8Players.pChecking8(2, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
            
                    if (gameObj.bB === 2) {
                        inGameLogic8Players.pChecking8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
            
                    if (gameObj.bB === 3) {
                        inGameLogic8Players.pChecking8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
            
                    if (gameObj.bB === 4) {
                        inGameLogic8Players.pChecking8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
            
                    if (gameObj.bB === 5) {
                        inGameLogic8Players.pChecking8(0, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
            
                    if (gameObj.bB === 6) {
                        inGameLogic8Players.pChecking8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
            
                    if (gameObj.bB === 7) {
                        inGameLogic8Players.pChecking8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                }
            }
        }
        
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 8) {
                inGameLogic9Players.pChecking9(8, playerFour, 'p4Folded', playerEight, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic9Players.pChecking9(2, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic9Players.pChecking9(2, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic9Players.pChecking9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic9Players.pChecking9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic9Players.pChecking9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic9Players.pChecking9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic9Players.pChecking9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 9) {
                        inGameLogic9Players.pChecking9(0, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                }
            }
        }
    },

    displayCall2Room: (pInfo, tT) => {
        if (tT === 'currentBettor') {
            settingThePotOnCall(pInfo, inGameBorderP8);
            gameObj.p8In = 1;
            if (pInfo.chips > 0) {
                displayActionP8.innerText = 'Calls ' + gameObj.lastBet;
            } else {
                displayActionP8.innerText = 'All In!';
                gameObj.p8Folded = 1;
            }
        } else if (tT === 'currentRaiser') {
            settingThePotOnRaiseCall(pInfo, inGameBorderP8);
            if (pInfo.chips > 0) {
                displayActionP8.innerText = 'Calls ' + gameObj.lastRaise;
            } else {
                displayActionP8.innerText = 'All In!';
                gameObj.p8Folded = 1;
            }
        }

        displayActionP8.style.display = 'block';

        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(2, playerFive, 'p5Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theSB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theSB8(2, playerFive, 'p5Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theSB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theSB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theSB8(1, playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theSB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theSB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theBB8(2, playerFive, 'p5Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theBB8(1, playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        }
        
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerNine, 'p9Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(2, playerNine, 'p9Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerNine);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerNine, 'p9Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerNine, 'p9Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(2, playerNine, 'p9Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(1, playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 9) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(2, playerNine, 'p9Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(1, playerEight);
                }
            }
        }
    },

    displayAnteCall2Room: (pInfo) => {
        settingThePotOnAnteCall(pInfo, inGameBorderP8);

        displayActionP8.innerText = 'Calls ' + pInfo.anteCalled;
        displayActionP8.style.display = 'block';

        gameObj.p8AnteCalled = 1;

        if (gameObj.gameSize === 8) {
            playerFive.settingTurn();
        }

        if (gameObj.gameSize === 9) {
            playerNine.settingTurn();
        }
    },

    displayBet2Room: (pInfo, betType) => {
        if (betType === 'asBettor') {
            settingThePotOnBet(pInfo, inGameBorderP8);
            gameObj.currentBettor = 'Player 8';
            gameObj.lastBet = pInfo.betAmount;
            gameObj.p8In = 1;
            if (pInfo.chips > 0) {
                displayActionP8.innerText = 'Bets ' + pInfo.betAmount;
            } else {
                displayActionP8.innerText = 'All In!';
                gameObj.p8Folded = 1;
            }
        } else if (betType === 'asRaiser') {
            settingThePotOnRaise(pInfo, inGameBorderP8);
            gameObj.currentRaiser = 'Player 8';
            gameObj.lastRaise = pInfo.reRaiseAmount;
            gameObj.p8In = 0.5;
            if (pInfo.chips > 0) {
                displayActionP8.innerText = 'Raises ' + pInfo.reRaiseAmount;
            } else {
                displayActionP8.innerText = 'All In!';
                gameObj.p8Folded = 1;
            }
        }

        displayActionP8.style.display = 'block';

        if (gameObj.gameSize === 8) {
            inGameLogic8Players.pBettingOrRaising8(playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
        }
        
        if (gameObj.gameSize === 9) {
            inGameLogic9Players.pBettingOrRaising9(playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
        }
    },

    displayFold2Room: (disconnectIndicator) => {
        displayingPlayerFold2Room(inGameBorderP8);
        gameObj.p8Folded = 1;
        gameObj.totalPlayersFolded++;

        if (disconnectIndicator) {
            displayActionP8.innerText = 'Disconnected';
            gameObj.p8Disconnected = true;
        } else {
            displayActionP8.innerText = 'Fold';
        }

        displayActionP8.style.display = 'block';
        // divForPlacementCardImgP8.style.display = 'none';

        optionsForWinnerOfRound.removeChild(winnerOptionP8);

        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p5SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p6SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p2SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.pNext2TheBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(2, playerFive, 'p5Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.theSB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theSB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theSB8(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theSB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theSB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theSB8(1, playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theSB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theSB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p4SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p3SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic8Players.theBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theBB8(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theBB8(2, playerFive, 'p5Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theBB8(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theBB8(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theBB8(1, playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theBB8(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theBB8(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerSeven);
                }
            }
        }
        
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerNine.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerNine.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerNine.settingTurn();
                } 
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerNine, 'p9Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerNine.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(2, playerNine, 'p9Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerNine.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerNine);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerNine.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerNine, 'p9Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerNine.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerNine, 'p9Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(2, playerNine, 'p9Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(1, playerFour, 'p4Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 9) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerNine.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(4, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(3, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(7, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(8, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(2, playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(5, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(6, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(1, playerNine);
                }
            }
        }
    },


}

const playerNine = {
    active: false,

    isBB: (rS, indicator) => {
        gameObj.bB = 9;
        inGameBorderP9.style.color = 'green'

        if (user['inGameTurn'] === 9) {
            p.chips -= gameObj.bbAnte;
            socket.emit('sendingBlindInfo', p, 'BB')
        }

        if (rS === 9) {
            gameObj.sB = 8;
            inGameBorderP8.style.color = 'red';

            playerFive.settingTurn();

            if (user['inGameTurn'] === 8) {
                p.chips -= gameObj.sbAnte;
                socket.emit('sendingBlindInfo', p, 'SB')
            }
        }
    },

    settingTurn: () => {
        inGameBorderP1.style.border = '3px solid black';
        inGameBorderP2.style.border = '3px solid black';
        inGameBorderP3.style.border = '3px solid black';
        inGameBorderP4.style.border = '3px solid black';
        inGameBorderP5.style.border = '3px solid black';
        inGameBorderP6.style.border = '3px solid black';
        inGameBorderP7.style.border = '3px solid black';
        inGameBorderP8.style.border = '3px solid black';
        inGameBorderP9.style.border = '3px solid blue';

        gameObj.currentTurn = 9;
    },

    checks: () => {
        if (gameObj.currentTurn === 9) {
            if (gameObj.currentBettor === '') {
                socket.emit('p9Checks');
            }
        }
    },

    callsBetEMITTER: (type) => {
        if (gameObj.lastBet < p.chips) {
            p.chips -= gameObj.lastBet;
            p.callAmount = gameObj.lastBet;
        } else {
            p.callAmount = p.chips;
            p.chips -= p.chips;
        }
        socket.emit('p9CallsBet', p, type)

    },

    callsRaiseEMITTER: (type) => {
        if (gameObj.p9In === 1) {
            p.chips -= gameObj.lastBet;
            p.calledRaiseAmount = gameObj.lastBet;
        } else if (gameObj.p9In === 0) {
            p.chips -= gameObj.lastRaise;
            p.calledRaiseAmount = gameObj.lastRaise;
        }
        socket.emit('p9CallsBet', p, type)
    },

    callsAnteEMITTER: (blind) => {
        if (blind === 'SB') {
            p.chips -= gameObj.sbAnte;
            p.anteCalled = gameObj.sbAnte;
        } else if (blind === 'none') {
            p.chips -= gameObj.bbAnte;
            p.anteCalled = gameObj.bbAnte;
        }
        socket.emit('p9CallsAnte', p)
    },

    calls: () => {
        if (gameObj.currentTurn === 9) {
            if (gameObj.gameSize === 9) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 6 || gameObj.bB === 7 || gameObj.bB === 8) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerNine.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerNine.callsBetEMITTER('currentBettor');
                            } else {
                                playerNine.callsRaiseEMITTER('currentRaiser');
                            }
                        } 
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerNine.callsBetEMITTER('currentBettor');
                        } else {
                            playerNine.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerNine.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerNine.callsBetEMITTER('currentBettor');
                            } else {
                                playerNine.callsRaiseEMITTER('currentRaiser');
                            }
                        } 
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerNine.callsBetEMITTER('currentBettor');
                        } else {
                            playerNine.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 9) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerNine.callsBetEMITTER('currentBettor');
                        } else {
                            playerNine.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        }
    },

    betsEMITTER: () => {
        if (gameObj.currentTurn === 9) {
            if (gameObj.currentBettor === '') {
                p9BetAmountInput.style.display = 'block';
                p9BetSubmitButton.style.display = 'block';
                p9BetAmountInput.value = '';
            } else {
                p9RaiseAmountInput.style.display = 'block';
                p9RaiseSubmitButton.style.display = 'block';
                p9RaiseAmountInput.value = '';
            }
        }

    },

    bets: (type) => {
        if (p9BetAmountInput.value > 0) {
            p.chips -= p9BetAmountInput.value;
            p.betAmount = Number(p9BetAmountInput.value);
            socket.emit('p9SubmitsBet', p, type)
            p9BetAmountInput.style.display = 'none';
            p9BetSubmitButton.style.display = 'none';
        }

    },

    raises: (type) => {
        if (p9RaiseAmountInput.value > gameObj.lastBet) {
            p.chips -= p9RaiseAmountInput.value;
            p.reRaiseAmount = Number(p9RaiseAmountInput.value);
            socket.emit('p9SubmitsBet', p, type);
            p9RaiseAmountInput.style.display = 'none';
            p9RaiseSubmitButton.style.display = 'none';
        }
    },

    submitsBet: () => {
        playerNine.bets('asBettor');
    },

    submitsRaise: () => {
        playerNine.raises('asRaiser');
    },

    folds: () => {
        socket.emit('p9Folds');
    },

    ////// DISPLAY EVENTS 2 ROOM METHODS //////

    displayCheck2Room: () => {
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 9) {
                inGameLogic9Players.pChecking9(8, playerEight, 'p8Folded', playerNine, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic9Players.pChecking9(2, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic9Players.pChecking9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic9Players.pChecking9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic9Players.pChecking9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic9Players.pChecking9(0, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic9Players.pChecking9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic9Players.pChecking9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic9Players.pChecking9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                }
            }
        }
    },

    displayCall2Room: (pInfo, tT) => {
        if (tT === 'currentBettor') {
            settingThePotOnCall(pInfo, inGameBorderP9);
            // displayActionP1.innerText = 'Calls ' + gameObj.lastBet;
        } else if (tT === 'currentRaiser') {
            settingThePotOnRaiseCall(pInfo, inGameBorderP9);
            // displayActionP1.innerText = 'Calls ' + gameObj.lastRaise;
        }

        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerFive, 'p5Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(2, playerFive, 'p5Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(1, playerNine);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine);
                }
        
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(2, playerFive, 'p5Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 9) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(2, playerFive, 'p5Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(1, playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        }
    },

    displayAnteCall2Room: (pInfo) => {
        settingThePotOnAnteCall(pInfo, inGameBorderP9);

        if (gameObj.gameSize === 9) {
            playerFive.settingTurn();
        }
    },

    displayBet2Room: (pInfo, betType) => {
        if (betType === 'asBettor') {
            settingThePotOnBet(pInfo, inGameBorderP9);
            gameObj.currentBettor = 'Player 9';
            gameObj.lastBet = pInfo.betAmount;
        } else if (betType === 'asRaiser') {
            settingThePotOnRaise(pInfo, inGameBorderP9);
            gameObj.currentRaiser = 'Player 9';
            gameObj.lastRaise = pInfo.reRaiseAmount;
        }

        if (gameObj.gameSize === 9) {
            inGameLogic9Players.pBettingOrRaising9(playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
        }
    },

    displayFold2Room: () => {
        displayingPlayerFold2Room(inGameBorderP9);
        gameObj.p6Folded = 9;

        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFive.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFive.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFive.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFive.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerFive, 'p5Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFive.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(1, playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFive.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFive.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFive.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(2, playerFive, 'p5Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 9) {
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerEight, 'p8Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(2, playerFive, 'p5Folded', playerEight, 'p8Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(7, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(1, playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight, 'p8Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight, 'p8Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(8, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        }
    },


}