
///////// PLAYER IN GAME ELEMENTS /////////

///////// PLAYER 1 IN GAME ELEMENTS /////////
const p1Buttons = document.getElementById('p1Buttons');
const p1BetButton = document.getElementById('p1BetButton');
const p1CheckButton = document.getElementById('p1CheckButton');
const p1CallButton = document.getElementById('p1CallButton');
const p1FoldButton = document.getElementById('p1FoldButton');
const p1BetForm = document.getElementById('p1BetForm');
var p1BetAmountInput = document.getElementById('p1BetAmount');
const p1BetSubmitButton = document.getElementById('p1BetSubmit');
const p1RaiseForm = document.getElementById('p1RaiseForm');
var p1RaiseAmountInput = document.getElementById('p1RaiseAmount');
const p1RaiseSubmitButton = document.getElementById('p1RaiseSubmit');

const xOutOfChipsCaseP1 = document.getElementById('xOutOfChipsCaseP1');
let lowestChipP1 = document.getElementById('lowestChipP1');
let secondLowestChipP1 = document.getElementById('secondLowestChipP1');
let secondHighestChipP1 = document.getElementById('secondHighestChipP1');
let highestChipP1 = document.getElementById('highestChipP1');
const chipCaseBorderP1 = document.getElementById('chipCaseBorderP1');

const p1ChipElsArr = [lowestChipP1, secondLowestChipP1, secondHighestChipP1, highestChipP1, chipCaseBorderP1, xOutOfChipsCaseP1];

const divForCardImgP1 = document.getElementById('divForCardImgP1');
const divForPlacementCardImgP1 = document.getElementById('divForPlacementCardImgP1');

///////// PLAYER 2 IN GAME ELEMENTS /////////
const p2Buttons = document.getElementById('p2Buttons');
const p2BetButton = document.getElementById('p2BetButton');
const p2CheckButton = document.getElementById('p2CheckButton');
const p2CallButton = document.getElementById('p2CallButton');
const p2FoldButton = document.getElementById('p2FoldButton');
const p2BetForm = document.getElementById('p2BetForm');
var p2BetAmountInput = document.getElementById('p2BetAmount');
const p2BetSubmitButton = document.getElementById('p2BetSubmit');
const p2RaiseForm = document.getElementById('p2RaiseForm');
var p2RaiseAmountInput = document.getElementById('p2RaiseAmount');
const p2RaiseSubmitButton = document.getElementById('p2RaiseSubmit');

const divForPlacementCardImgP2 = document.getElementById('divForPlacementCardImgP2');

///////// PLAYER 3 IN GAME ELEMENTS /////////
const p3Buttons = document.getElementById('p3Buttons');
const p3BetButton = document.getElementById('p3BetButton');
const p3CheckButton = document.getElementById('p3CheckButton');
const p3CallButton = document.getElementById('p3CallButton');
const p3FoldButton = document.getElementById('p3FoldButton');
const p3BetForm = document.getElementById('p3BetForm');
var p3BetAmountInput = document.getElementById('p3BetAmount');
const p3BetSubmitButton = document.getElementById('p3BetSubmit');
const p3RaiseForm = document.getElementById('p3RaiseForm');
var p3RaiseAmountInput = document.getElementById('p3RaiseAmount');
const p3RaiseSubmitButton = document.getElementById('p3RaiseSubmit');

const divForPlacementCardImgP3 = document.getElementById('divForPlacementCardImgP3');

///////// PLAYER 4 IN GAME ELEMENTS /////////
const p4Buttons = document.getElementById('p4Buttons');
const p4BetButton = document.getElementById('p4BetButton');
const p4CheckButton = document.getElementById('p4CheckButton');
const p4CallButton = document.getElementById('p4CallButton');
const p4FoldButton = document.getElementById('p4FoldButton');
const p4BetForm = document.getElementById('p4BetForm');
var p4BetAmountInput = document.getElementById('p4BetAmount');
const p4BetSubmitButton = document.getElementById('p4BetSubmit');
const p4RaiseForm = document.getElementById('p4RaiseForm');
var p4RaiseAmountInput = document.getElementById('p4RaiseAmount');
const p4RaiseSubmitButton = document.getElementById('p4RaiseSubmit');

const divForPlacementCardImgP4 = document.getElementById('divForPlacementCardImgP4');

///////// PLAYER 5 IN GAME ELEMENTS /////////
const p5Buttons = document.getElementById('p5Buttons');
const p5BetButton = document.getElementById('p5BetButton');
const p5CheckButton = document.getElementById('p5CheckButton');
const p5CallButton = document.getElementById('p5CallButton');
const p5FoldButton = document.getElementById('p5FoldButton');
const p5BetForm = document.getElementById('p5BetForm');
var p5BetAmountInput = document.getElementById('p5BetAmount');
const p5BetSubmitButton = document.getElementById('p5BetSubmit');
const p5RaiseForm = document.getElementById('p5RaiseForm');
var p5RaiseAmountInput = document.getElementById('p5RaiseAmount');
const p5RaiseSubmitButton = document.getElementById('p5RaiseSubmit');

const divForPlacementCardImgP5 = document.getElementById('divForPlacementCardImgP5');

///////// PLAYER IN GAME METHODS /////////

const playerOne = {
    active: false,

    isBB: (rS, indicator) => {

        gameObj.bB = 1;
        inGameBorderP1.style.color = 'green';

        gIBigBlind.innerHTML = 'Big Blind: ' + inGameBorderP1.innerHTML.split(" ")[0];

        gameObj.p1AnteCalled = 1;

        if (rS === 4) {

            gameObj.sB = 2;
            inGameBorderP2.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP2.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p3Folded === 0) {
                    playerThree.settingTurn();
                }
                
                if (gameObj.p3Folded === 1) {
                    playerFour.settingTurn();
                }

                if (user['inGameTurn'] === 1) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 2) {
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
                }

            }


        }

        if (rS === 5) {

            gameObj.sB = 2;
            inGameBorderP2.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP2.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p3Folded === 0) {
                    playerThree.settingTurn();
                } 

                if (gameObj.p3Folded === 1) {
                    playerFour.settingTurn();
                }

                if (user['inGameTurn'] === 1) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 2) {
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
                }

            }
        }

        if (rS === 6) {

            gameObj.sB = 2;
            inGameBorderP2.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP2.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p6Folded === 0) {
                    playerSix.settingTurn();
                }

                if (gameObj.p6Folded === 1) {
                    playerThree.settingTurn();
                }

                if (user['inGameTurn'] === 1) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 2) {
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

            gameObj.sB = 2;
            inGameBorderP2.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP2.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p6Folded === 0) {
                    playerSix.settingTurn();
                }

                if (gameObj.p6Folded === 1) {
                    playerSeven.settingTurn();
                }

                if (user['inGameTurn'] === 1) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 2) {
                    p.chips -= gameObj.sbAnte;
                    socket.emit('sendingBlindInfo', p, 'SB')
                    gISmallBlind.innerHTML = 'Small Blind: ' + p.name;
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

            gameObj.sB = 2;
            inGameBorderP2.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP2.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p6Folded === 0) {
                    playerSix.settingTurn();
                }

                if (gameObj.p6Folded === 1) {
                    playerSeven.settingTurn();
                }

                if (user['inGameTurn'] === 1) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 2) {
                    p.chips -= gameObj.sbAnte;
                    socket.emit('sendingBlindInfo', p, 'SB')
                    gISmallBlind.innerHTML = 'Small Blind: ' + p.name;
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

            gameObj.sB = 2;
            inGameBorderP2.style.color = 'red';

            playerSix.settingTurn();

            if (user['inGameTurn'] === 2) {
                p.chips -= gameObj.sbAnte;
                socket.emit('sendingBlindInfo', p, 'SB')
                gISmallBlind.innerHTML = 'Small Blind: ' + p.name;
            }
        }
    },

    settingTurn: () => {
        inGameBorderP1.style.border = '3px solid blue';
        inGameBorderP2.style.border = '3px solid black';
        inGameBorderP3.style.border = '3px solid black';
        inGameBorderP4.style.border = '3px solid black';
        inGameBorderP5.style.border = '3px solid black';
        inGameBorderP6.style.border = '3px solid black';
        inGameBorderP7.style.border = '3px solid black';
        inGameBorderP8.style.border = '3px solid black';
        inGameBorderP9.style.border = '3px solid black';

        gICurrentTurn.innerHTML = 'Current Turn: ' + inGameBorderP1.innerHTML.split(" ")[0];

        gameObj.currentTurn = 1;

    },

    checks: () => {
        if (gameObj.currentTurn === 1) {
            if (gameObj.currentBettor === '') {
                socket.emit('p1Checks');
                playerOne.hideCaseOfChips();
                playerOne.cancelsFold();
            }
        }
    },

    callsBetEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p1AnteCalled === 1) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.bbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.bbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p1AnteCalled === 0.5) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.sbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.sbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p1AnteCalled === 0) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet;
                    p.callAmount = gameObj.lastBet;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            }
            socket.emit('p1CallsBet', p, type)
        }
    },

    callsRaiseEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p1AnteCalled === 1) {
                if (gameObj.p1In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                } else if (gameObj.p1In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                } else if (gameObj.p1In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.bbAnte;
                }
            } else if (gameObj.p1AnteCalled === 0.5) {
                if (gameObj.p1In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                } else if (gameObj.p1In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                } else if (gameObj.p1In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.sbAnte;
                }
            } else if (gameObj.p1AnteCalled === 0) {
                if (gameObj.p1In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet;
                } else if (gameObj.p1In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount;
                } else if (gameObj.p1In === 0) {
                    p.chips -= gameObj.lastRaise;
                    p.calledRaiseAmount = gameObj.lastRaise;
                }
            } 
            socket.emit('p1CallsBet', p, type)   
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
            socket.emit('p1CallsAnte', p)   
        }
    },

    calls: () => {
        playerOne.cancelsFold();
        playerOne.hideCaseOfChips();
        if (gameObj.currentTurn === 1) {
            if (gameObj.gameSize === 4) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
                if (gameObj.bB === 2) {
                    if (gameObj.currentRound <= 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } 
                if (gameObj.bB === 3) {
                    if (gameObj.currentRound <= 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
                if (gameObj.bB === 4) {
                    if (gameObj.currentRound <= 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            if (gameObj.gameSize === 5) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } 
                if (gameObj.bB === 3) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } 
                if (gameObj.bB === 2 || gameObj.bB === 4 || gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } 
            }
            if (gameObj.gameSize === 6) {
                if (gameObj.bB === 1) {
                    if (currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 6) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            if (gameObj.gameSize === 7) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 7) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 6) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else  {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            if (gameObj.gameSize === 8) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 7 || gameObj.bB === 8) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else  {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 6) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else  {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            if (gameObj.gameSize === 9) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else  {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 7 || gameObj.bB === 8 || gameObj.bB === 9) {
                    if (gameObj.bBcurrentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 6) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerOne.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerOne.callsBetEMITTER('currentBettor');
                            } else {
                                playerOne.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerOne.callsBetEMITTER('currentBettor');
                        } else {
                            playerOne.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        }
    },

    betsEMITTER: () => {
        if (gameObj.currentTurn === 1) {
            if (gameObj.currentBettor === '') {
                p1BetAmountInput.style.display = 'block';
                p1BetSubmitButton.style.display = 'block';
                p1BetAmountInput.value = 0;
                p1ChipElsArr.forEach((e) => {
                    e.style.display = 'block';
                })
                p1Buttons.style.display = 'none';
            } else {
                p1RaiseAmountInput.style.display = 'block';
                p1RaiseSubmitButton.style.display = 'block';
                p1RaiseAmountInput.value = '';
                p1ChipElsArr.forEach((e) => {
                    e.style.display = 'block';
                })
                p1Buttons.style.display = 'none';
            }
        }
    },

    bets: (type) => {
        if (p1BetAmountInput.value > 0) {
            p.chips -= p1BetAmountInput.value;
            p.betAmount = Number(p1BetAmountInput.value);
            socket.emit('p1SubmitsBet', p, type)
            p1BetAmountInput.style.display = 'none';
            p1BetSubmitButton.style.display = 'none';
            p1ChipElsArr.forEach((e) => {
                e.style.display = 'none';
            })
            p1Buttons.style.display = 'block';
        }
    },

    hideCaseOfChips: () => {
        p1ChipElsArr.forEach((e) => {
            e.style.display = 'none';
        })
        p1Buttons.style.display = 'block';
        p1BetAmountInput.style.display = 'none';
        p1BetSubmitButton.style.display = 'none';
        p1RaiseAmountInput.style.display = 'none';
        p1RaiseSubmitButton.style.display = 'none';
    },

    raises: (type) => {
        if (p1RaiseAmountInput.value > gameObj.lastBet) {
            p.chips -= p1RaiseAmountInput.value;
            p.reRaiseAmount = Number(p1RaiseAmountInput.value);
            socket.emit('p1SubmitsBet', p, type);
            p1RaiseAmountInput.style.display = 'none';
            p1RaiseSubmitButton.style.display = 'none';
        }
    },

    submitsBet: () => {
        playerOne.bets('asBettor');
    }, 

    submitsRaise: () => {
        playerOne.raises('asRaiser');
    },

    folds: () => {
        if (gameObj.currentTurn === 1) {
            divForCardImgP1.style.display = 'block';
            divForPlacementCardImgP1.style.display = 'none';
            p1BetAmountInput.style.display = 'none';
            p1BetSubmitButton.style.display = 'none';
            p1RaiseAmountInput.style.display = 'none';
            p1RaiseSubmitButton.style.display = 'none';
            playerOne.hideCaseOfChips();
        }
    },

    throwsCardsInForFold: () => {
        socket.emit('p1Folds');
        divForCardImgP1.style.display = 'none';
        divForCardImgP1.style.left = '315px';
        divForCardImgP1.style.top = '549px';

    },

    cancelsFold: () => {
        divForCardImgP1.style.display = 'none';
        divForPlacementCardImgP1.style.display = 'block';
        divForCardImgP1.style.left = '315px';
        divForCardImgP1.style.top = '549px';
        divForPlacementCardImgP1.style.left = '255px';
        divForPlacementCardImgP1.style.top = '569px';
    },

    ////// DISPLAY EVENTS 2 ROOM METHODS //////

    displayCheck2Room: () => {
        displayActionP1.style.display = 'block';
        displayActionP1.innerText = 'Check';

        gameObj.p1ActedInCurrentRound = true;
        gameObj.p1ActionWords = displayActionP1.innerText;

        if (gameObj.gameSize === 4) {
            if (gameObj.bB === 1) {
                inGameLogic4Players.pChecking4(3, playerTwo, 'p2Folded', playerOne, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);       
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 2) {
                        inGameLogic4Players.pChecking4(2, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                    } else if (gameObj.bB === 3) {
                        inGameLogic4Players.pChecking4(0, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                    } else if (gameObj.bB === 4) {
                        inGameLogic4Players.pChecking4(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                    }
                }
            }
        }

        if (gameObj.gameSize === 5) {
            if (gameObj.bB === 1) {
                inGameLogic5Players.anyPlayerChecking(4, playerTwo, 'p2Folded', playerOne, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 2) {
                        inGameLogic5Players.anyPlayerChecking(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                    if (gameObj.bB === 3) {
                        inGameLogic5Players.anyPlayerChecking(0, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }             
                    if (gameObj.bB === 4) {
                        inGameLogic5Players.anyPlayerChecking(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }               
                    if (gameObj.bB === 5) {
                        inGameLogic5Players.anyPlayerChecking(2, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                }
            }
        }

        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 1) {
                inGameLogic6Players.pChecking(5, playerTwo, 'p2Folded', playerOne, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo)
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 2) {
                        inGameLogic6Players.pChecking(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic6Players.pChecking(1, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic6Players.pChecking(2, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic6Players.pChecking(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 6) { 
                        inGameLogic6Players.pChecking(0, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo)

                    }
                }
            }
    
        }
    
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                inGameLogic7Players.pChecking7(6, playerTwo, 'p2Folded', playerOne, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 2) {
                        inGameLogic7Players.pChecking7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic7Players.pChecking(2, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic7Players.pChecking7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic7Players.pChecking7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic7Players.pChecking7(0, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic7Players.pChecking7(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                }
            }
        }
    
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                inGameLogic8Players.pChecking8(7, playerTwo, 'p2Folded', playerOne, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 2) {
                        inGameLogic8Players.pChecking8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic8Players.pChecking8(2, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic8Players.pChecking8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic8Players.pChecking8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic8Players.pChecking8(0, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic8Players.pChecking8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic8Players.pChecking8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                    }
                }
            }
        }
    
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                inGameLogic9Players.pChecking9(8, playerTwo, 'p2Folded', playerOne, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 2) {
                        inGameLogic9Players.pChecking9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne);
                    }
    
                    if (gameObj.bB === 3) {
                        inGameLogic9Players.pChecking9(2, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                    }
    
                    if (gameObj.bB === 4) {
                        inGameLogic9Players.pChecking9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                    }
    
                    if (gameObj.bB === 5) {
                        inGameLogic9Players.pChecking9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                    }
    
                    if (gameObj.bB === 6) {
                        inGameLogic9Players.pChecking9(0, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo); 
                    }
    
                    if (gameObj.bB === 7) {
                        inGameLogic9Players.pChecking9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                    }
    
                    if (gameObj.bB === 8) {
                        inGameLogic9Players.pChecking9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                    }
    
                    if (gameObj.bB === 9) {
                        inGameLogic9Players.pChecking9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                    }
                }
            }
        }
    },

    displayCall2Room: (pInfo, tT) => {

        if (tT === 'currentBettor') {
            settingThePotOnCall(pInfo, inGameBorderP1);
            gameObj.p1In = 1;
            if (pInfo.chips > 0) {
                displayActionP1.innerText = 'Calls ' + gameObj.lastBet;
            } else {
                displayActionP1.innerText = 'All In!';
                gameObj.p1Folded = 1;
            }
        } else if (tT === 'currentRaiser') {
            settingThePotOnRaiseCall(pInfo, inGameBorderP1);
            if (pInfo.chips > 0) {
                displayActionP1.innerText = 'Calls ' + gameObj.lastRaise;
            } else {
                displayActionP1.innerText = 'All In!';
                gameObj.p1Folded = 1;
            }
        }

        displayActionP1.style.display = 'block';   
        
        gameObj.p1ActedInCurrentRound = true;
        gameObj.p1ActionWords = displayActionP1.innerText;

        if (gameObj.gameSize === 4) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.theBB4(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.theBB4(1, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.theBB4(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne);
                }
            }

            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.pNext2TheBB4(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.pNext2TheBB4(1, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.pNext2TheBB4(2, playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.theSB4(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }
                
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.theSB4(1, playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.theSB4(2, playerThree, 'p3Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.p2SpotsFromBB4(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.p2SpotsFromBB4(1, playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.p2SpotsFromBB4(2, playerThree, 'p3Folded', playerFour);
                }
            }
        }

        if (gameObj.gameSize === 5) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.theBB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.theBB5(1, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.theBB5(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.theBB5(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.pNext2TheBB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.pNext2TheBB5(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.pNext2TheBB5(2, playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.pNext2TheBB5(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }

            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.theSB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.theSB5(1, playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.theSB5(2, playerThree, 'p3Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.theSB5(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }
            }
            
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.p3SpotsFromBB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.p3SpotsFromBB5(1, playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.p3SpotsFromBB5(2, playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.p3SpotsFromBB5(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.p2SpotsFromBB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.p2SpotsFromBB5(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.p2SpotsFromBB5(2, playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.p2SpotsFromBB5(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        }    
        
        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.theBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.theBB6(2, playerSix, 'p6Folded', playerTwo, 'p2Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.theBB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne)
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.theBB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.theBB6(1, playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.pNext2TheBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.pNext2TheBB6(2, playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.pNext2TheBB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.pNext2TheBB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive)
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.pNext2TheBB6(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerSix);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerSix, 'p6Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.theSB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.theSB6(2, playerSix, 'p6Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.theSB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.theSB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.theSB6(1, playerOne);
                }
            }
        }

        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theBB7(1, playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theBB7(2, playerSix, 'p6Folded', playerTwo, 'p2Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(2, playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerSix, 'p6Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theSB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theSB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theSB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theSB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theSB7(1, playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theSB7(2, playerSix, 'p6Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerSix, 'p6Folded', playerSeven);
                }
            }
        }
    
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theBB8(1, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theBB8(2, playerSix, 'p6Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(2, playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded'. playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerSix, 'p6Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

            }

            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theSB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theSB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theSB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theSB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theSB8(1, playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theSB8(2, playerSix, 'p6Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theSB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }

            }

            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

            }

            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

            }
        }
    
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(1, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(2, playerSix, 'p6Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }

    	        if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne);
                }
            }

            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(2, playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

    	        if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }

            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive); 
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

    	        if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

    	        if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerSix, 'p6Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

    	        if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(1, playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(2, playerSix, 'p6Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }

    	        if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne);
                }
            }

            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

    	        if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine); 
                }
            }

            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

    	        if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 9) {
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerSix, 'p6Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

    	        if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        }

    },

    displayAnteCall2Room: (pInfo) => {

        settingThePotOnAnteCall(pInfo, inGameBorderP1);

        displayActionP1.style.display = 'block';
        displayActionP1.innerText = 'Calls ' + pInfo.anteCalled;

        gameObj.p1AnteCalled = 1;
        gameObj.p1ActedInCurrentRound = true;
        gameObj.p1ActionWords = displayActionP1.innerText;

        if (gameObj.gameSize === 4) {
            inGameLogic4Players.theSB4(3, playerThree, 'p3Folded', playerFour);
        }

        if (gameObj.gameSize === 5) {
            playerThree.settingTurn();
        }

        if (gameObj.gameSize === 6) {
            playerSix.settingTurn();
        }

        if (gameObj.gameSize === 7) {
            playerSix.settingTurn();
        }

        if (gameObj.gameSize === 8) {
            playerSix.settingTurn();
        }

        if (gameObj.gameSize === 9) {
            playerSix.settingTurn();
        }
    },

    displayBet2Room: (pInfo, betType) => {

        if (betType === 'asBettor') {
            settingThePotOnBet(pInfo, inGameBorderP1);
            gameObj.currentBettor = 'Player 1';
            gameObj.lastBet = pInfo.betAmount;
            gameObj.p1In = 1;
            if (pInfo.chips > 0) {
                displayActionP1.innerText = 'Bets ' + pInfo.betAmount;
            } else {
                displayActionP1.innerText = 'All In!';
                gameObj.p1Folded = 1;
            }
        } else if (betType === 'asRaiser') {
            settingThePotOnRaise(pInfo, inGameBorderP1);
            gameObj.currentRaiser = 'Player 1';
            gameObj.lastRaise = pInfo.reRaiseAmount;
            gameObj.p1In = 0.5;
            if (pInfo.chips > 0) {
                displayActionP1.innerText = 'Raises ' + pInfo.reRaiseAmount;
            } else {
                displayActionP1.innerText = 'All In!';
                gameObj.p1Folded = 1;
            }
        }

        displayActionP1.style.display = 'block';

        gameObj.p1ActedInCurrentRound = true;
        gameObj.p1ActionWords = displayActionP1.innerText;

        if (gameObj.gameSize === 4) {
            inGameLogic4Players.pBettingOrRaising4(playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
        }

        if (gameObj.gameSize === 5) {
            inGameLogic5Players.anyPlayerBettingOrRaising(playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
        }

        if (gameObj.gameSize === 6) {
            inGameLogic6Players.playerBettingOrRaising(playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
        }
    
        if (gameObj.gameSize === 7) {
            inGameLogic7Players.pBettingOrRaising7(playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
        }
    
        if (gameObj.gameSize === 8) {
            inGameLogic8Players.pBettingOrRaising8(playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
        }
    
        if (gameObj.gameSize === 9) {
            inGameLogic9Players.pBettingOrRaising9(playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
        }
    },

    displayFold2Room: (disconnectIndicator) => {

        displayingPlayerFold2Room(inGameBorderP1);
        gameObj.p1Folded = 1;
        gameObj.totalPlayersFolded++;
        gameObj.p1ActedInCurrentRound = true;

        if (disconnectIndicator) {
            displayActionP1.innerText = 'Disconnected';
            gameObj.p1Disconnected = true;
        } else {
            displayActionP1.innerText = 'Fold';
        }

        displayActionP1.style.display = 'block';
        divForPlacementCardImgP1.style.display = 'none';

        optionsForWinnerOfRound.removeChild(winnerOptionP1);

        gameObj.p1ActionWords = displayActionP1.innerText;

        if (gameObj.gameSize === 4) {
            if (gameObj.totalPlayersFolded === 3) {
                currentRoundHasEnded();
            }
 
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic4Players.theBB4(3, playerThree, 'p3Folded', playerFour);
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.theBB4(3, playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.theBB4(1, playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.theBB4(2, playerThree, 'p3Folded', playerTwo);
                }
            }
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.pNext2TheBB4(3, playerThree, 'p3Folded', playerFour);
                        }
                    }
                }
    
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.pNext2TheBB4(3, playerThree, 'p3Folded', playerFour);
                }
    
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.pNext2TheBB4(1, playerFour, 'p4Folded', playerTwo);
                }
    
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.pNext2TheBB4(2, playerThree, 'p3Folded', playerFour);
                }
            }
            if (gameObj.bB === 3) {    
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.theSB4(3, playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.theSB4(3, playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.theSB4(1, playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.theSB4(2, playerThree, 'p3Folded', playerFour);
                }
            }
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.p2SpotsFromBB4(3, playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.p2SpotsFromBB4(3, playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.p2SpotsFromBB4(1, playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.p2SpotsFromBB4(2, playerThree, 'p3Folded', playerFour);
                }
            }
        }

        if (gameObj.gameSize === 5) {
            if (gameObj.totalPlayersFolded === 4) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic5Players.theBB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.theBB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.theBB5(1, playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.theBB5(2, playerThree, 'p3Folded', playerTwo, 'p2Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.theBB5(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.pNext2BB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.pNext2BB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.pNext2BB5(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.pNext2BB5(2, playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.pNext2BB5(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.theSB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.theSB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.theSB5(1, playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.theSB5(2, playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.theSB5(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.p3SpotsFromBB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.p3SpotsFromBB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.p3SpotsFromBB5(1, playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.p3SpotsFromBB5(2, playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.p3SpotsFromBB5(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerThree.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.p2SpotsFromBB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.p2SpotsFromBB5(4, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.p2SpotsFromBB5(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.p2SpotsFromBB5(2, playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.p2SpotsFromBB5(3, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        }

        if (gameObj.gameSize === 6) {
            if (gameObj.totalPlayersFolded === 5) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic6Players.theBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.theBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.theBB6(2, playerSix, 'p6Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.theBB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerFour)
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.theBB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.theBB6(1, playerTwo, 'p2Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.pNext2TheBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.pNext2TheBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.pNext2TheBB6(2, playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.pNext2TheBB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.pNext2TheBB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive)
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.pNext2TheBB6(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.pFolding4SpotsFromBB(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '') {
                    inGameLogic6Players.pFolding4SpotsFromBB(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '') {
                    inGameLogic6Players.pFolding4SpotsFromBB(2, playerSix, 'p6Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '') {
                    inGameLogic6Players.pFolding4SpotsFromBB(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '') {
                    inGameLogic6Players.pFolding4SpotsFromBB(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '') {
                    inGameLogic6Players.pFolding4SpotsFromBB(1, playerSix);
                }
                
                if (gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.pFolding4SpotsFromBB(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.pFolding4SpotsFromBB(2, playerSix, 'p6Folded', playerThree);
                }

                if (gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.pFolding4SpotsFromBB(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.pFolding4SpotsFromBB(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.pFolding4SpotsFromBB(1, playerSix);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p3SpotsFromBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerSix, 'p6Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p2SpotsFromBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerSix, 'p6Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.theSB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.theSB6(5, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.theSB6(2, playerSix, 'p6Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.theSB6(3, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.theSB6(4, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.theSB6(1, playerSix);
                }
            }
        }
    
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic7Players.theBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theBB7(1, playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theBB7(2, playerSix, 'p6Folded', playerTwo, 'p2Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.pNext2TheBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(2, playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p4SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p3SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p2SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerSix, 'p6Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.theSB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theSB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theSB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theSB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theSB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                   inGameLogic7Players.theSB7(1, playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theSB7(2, playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p5SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerSix, 'p6Folded', playerSeven);
                }
            }
        }
    
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic8Players.theBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theBB8(1, playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theBB8(2, playerSix, 'p6Folded', playerTwo, 'p2Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.pNext2TheBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(2, playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSeven.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p5SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p4SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded'. playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === ''){
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p2SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerSix, 'p6Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }

            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.theSB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theSB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theSB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theSB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theSB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theSB8(1, playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theSB8(2, playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theSB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }

            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p6SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }

            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerSix.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p3SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        }
    
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo, 'p2Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(1, playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(2, playerSix, 'p6Folded', playerTwo, 'p2Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo, 'p2Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerNine);
                }
            }

            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSix.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(2, playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
            }

            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSix.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive); 
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSix.settingTurn();
                }
                
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerTwo.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerSix, 'p6Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSix.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(1, playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(2, playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSix.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine); 
                }
            }

            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSix.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 9) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerSix.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerSix, 'p6Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        }

    },
};

const playerTwo = {
    active: false,

    isBB: (rS, indicator) => {

        gameObj.bB = 2;
        inGameBorderP2.style.color = 'green';

        gIBigBlind.innerHTML = 'Big Blind: ' + inGameBorderP2.innerHTML.split(" ")[0];

        gameObj.p3AnteCalled = 1;

        if (rS === 4) {

            gameObj.sB = 4;
            inGameBorderP4.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP4.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p1Folded === 0) {
                    playerOne.settingTurn();
                } 

                if (gameObj.p1Folded === 1) {
                    playerThree.settingTurn();
                }

                if (user['inGameTurn'] === 2) {
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
                }

            }
        }

        if (rS === 5) {

            gameObj.sB = 5;
            inGameBorderP5.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP5.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p1Folded === 0) {
                    playerOne.settingTurn();
                }

                if (gameObj.p1Folded === 1) {
                    playerThree.settingTurn();
                }

                if (user['inGameTurn'] === 2) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 5) {
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
                }

            }
        }

        if (rS === 6) {

            gameObj.sB = 5;
            inGameBorderP5.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP5.innerHTML.split(" ")[0];


            if (!indicator) {

                if (gameObj.p1Folded === 0) {
                    playerOne.settingTurn();
                } 

                if (gameObj.p1Folded === 1) {
                    playerSix.settingTurn();
                }

                if (user['inGameTurn'] === 2) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 5) {
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

            gameObj.sB = 5;
            inGameBorderP5.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP5.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p1Folded === 0) {
                    playerOne.settingTurn();
                }

                if (gameObj.p1Folded === 1) {
                    playerSix.settingTurn();
                }

                if (user['inGameTurn'] === 2) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 5) {
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

            gameObj.sB = 5;
            inGameBorderP5.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP5.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p1Folded === 0) {
                    playerOne.settingTurn();
                }

                if (gameObj.p1Folded === 1) {
                    playerSix.settingTurn();
                }

                if (user['inGameTurn'] === 2) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 5) {
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

            gameObj.sB = 5;
            inGameBorderP5.color = 'red';

            playerOne.settingTurn();

            if (user['inGameTurn'] === 5) {
                p.chips -= gameObj.sbAnte;
                socket.emit('sendingBlindInfo', p, 'SB')
            }
        }
    },

    settingTurn: () => {

        inGameBorderP1.style.border = '3px solid black';
        inGameBorderP2.style.border = '3px solid blue';
        inGameBorderP3.style.border = '3px solid black';
        inGameBorderP4.style.border = '3px solid black';
        inGameBorderP5.style.border = '3px solid black';
        inGameBorderP6.style.border = '3px solid black';
        inGameBorderP7.style.border = '3px solid black';
        inGameBorderP8.style.border = '3px solid black';
        inGameBorderP9.style.border = '3px solid black';

        gICurrentTurn.innerHTML = 'Current Turn: ' + inGameBorderP2.innerHTML.split(" ")[0];

        gameObj.currentTurn = 2;
    },

    checks: () => {
        if (gameObj.currentTurn === 2) {
            if (gameObj.currentBettor === '') {
                socket.emit('p2Checks');
            }
        }
    }, 

    callsBetEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p2AnteCalled === 1) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.bbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.bbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p2AnteCalled === 0.5) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.sbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.sbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p2AnteCalled === 0) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet;
                    p.callAmount = gameObj.lastBet;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            }
            socket.emit('p2CallsBet', p, type)
        }
    },

    callsRaiseEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p2AnteCalled === 1) {
                if (gameObj.p2In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                } else if (gameObj.p2In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                } else if (gameObj.p2In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.bbAnte;
                }
            } else if (gameObj.p2AnteCalled === 0.5) {
                if (gameObj.p2In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                } else if (gameObj.p2In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                } else if (gameObj.p2In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.sbAnte;
                }
            } else if (gameObj.p2AnteCalled === 0) {
                if (gameObj.p2In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet;
                } else if (gameObj.p2In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount;
                } else if (gameObj.p2In === 0) {
                    p.chips -= gameObj.lastRaise;
                    p.calledRaiseAmount = gameObj.lastRaise;
                }
            } 
            socket.emit('p2CallsBet', p, type)
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
            socket.emit('p2CallsAnte', p)
        }
    },

    calls: () => {
        if (gameObj.currentTurn === 2) {
            if (gameObj.gameSize === 4) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }

                if (gameObj.bB === 2) {
                    if (gameObj.lastRaise <= 0) {
                        playerTwo.callsBetEMITTER('currentBettor');
                    } else {
                        playerTwo.callsRaiseEMITTER('currentRaiser');
                    }
                }

                if (gameObj.bB === 3) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            
                if (gameObj.bB === 4) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }

            if (gameObj.gameSize === 5) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
                if (gameObj.bB === 2) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
                if (gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }

            if (gameObj.gameSize === 6) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 6) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        
            if (gameObj.gameSize === 7) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 7) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }

            if (gameObj.gameSize === 8) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 7 || gameObj.bB === 8) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        
            if (gameObj.gameSize === 9) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else  {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 7 || gameObj.bB === 8 || gameObj.bB === 9) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerTwo.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerTwo.callsBetEMITTER('currentBettor');
                            } else {
                                playerTwo.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerTwo.callsBetEMITTER('currentBettor');
                        } else {
                            playerTwo.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        }
    },

    betsEMITTER: () => {
        if (gameObj.currentTurn === 2) {
            if (gameObj.currentBettor === '') {
                p2BetAmountInput.style.display = 'block';
                p2BetSubmitButton.style.display = 'block';
                p2BetAmountInput.value = '';
            } else {
                p2RaiseAmountInput.style.display = 'block';
                p2RaiseSubmitButton.style.display = 'block';
                p2RaiseAmountInput.value = '';
            }
        }
    },

    bets: (type) => {
        if (p2BetAmountInput.value > 0) {
            p.chips -= p2BetAmountInput.value;
            p.betAmount = Number(p2BetAmountInput.value);
            socket.emit('p2SubmitsBet', p, type)
            p2BetAmountInput.style.display = 'none';
            p2BetSubmitButton.style.display = 'none';
        }
    },

    raises: (type) => {
        if (p2RaiseAmountInput.value > gameObj.lastBet) {
            p.chips -= p2RaiseAmountInput.value;
            p.reRaiseAmount = Number(p2RaiseAmountInput.value);
            socket.emit('p2SubmitsBet', p, type);
            p2RaiseAmountInput.style.display = 'none';
            p2RaiseSubmitButton.style.display = 'none';
        }
    },

    submitsBet: () => {
        playerTwo.bets('asBettor');
    },

    submitsRaise: () => {
        playerTwo.raises('asRaiser');
    },

    folds: () => {
        socket.emit('p2Folds');
    },

    ////// DISPLAY EVENTS 2 ROOM METHODS //////

    displayCheck2Room: () => {
        displayActionP2.style.display = 'block';
        displayActionP2.innerText = 'Check';

        gameObj.p2ActedInCurrentRound = true;
        gameObj.p2ActionWords = displayActionP2.innerText;

        if (gameObj.gameSize === 4) {
            if (gameObj.bB === 2) {
                inGameLogic4Players.pChecking4(3, playerFour, 'p4Folded', playerTwo, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic4Players.pChecking4(0, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                    }
                    if (gameObj.bB === 3) {
                        inGameLogic4Players.pChecking4(1, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                    }
                    if (gameObj.bB === 4) {
                        inGameLogic4Players.pChecking4(2, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                    }
                }
            }
        }
        if (gameObj.gameSize === 5) {
            if (gameObj.bB === 2) {
                inGameLogic5Players.anyPlayerChecking(4, playerFive, 'p5Folded', playerTwo, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic5Players.anyPlayerChecking(0, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }              
                    if (gameObj.bB === 3) {
                        inGameLogic5Players.anyPlayerChecking(1, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }             
                    if (gameObj.bB === 4) {
                        inGameLogic5Players.anyPlayerChecking(2, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                    if (gameObj.bB === 5) {
                        inGameLogic5Players.anyPlayerChecking(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                }
            }
        }
        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 2) {
                inGameLogic6Players.pChecking(5, playerFive, 'p5Folded', playerTwo, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic6Players.pChecking(0, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
    
                    if (gameObj.bB === 3) {
                        inGameLogic6Players.pChecking(2, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive)
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic6Players.pChecking(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic6Players.pChecking(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic6Players.pChecking(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                }
            }
        }   
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 2) {
                inGameLogic7Players.pChecking7(6, playerFive, 'p5Folded', playerTwo, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic7Players.pChecking7(0, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
            
                    if (gameObj.bB === 3) {
                        inGameLogic7Players.pChecking7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic7Players.pChecking7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic7Players.pChecking7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic7Players.pChecking7(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic7Players.pChecking7(2, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                    }
                }
            }
        }
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 2) {
                inGameLogic8Players.pChecking8(7, playerFive, 'p5Folded', playerTwo, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic8Players.pChecking8(0, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                    }
            
                    if (gameObj.bB === 3) {
                        inGameLogic8Players.pChecking8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic8Players.pChecking8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic8Players.pChecking8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic8Players.pChecking8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic8Players.pChecking8(2, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic8Players.pChecking8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                    }
                }
            }

        }
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 2) {
                inGameLogic9Players.pChecking9(8, playerFive, 'p5Folded', playerTwo, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic9Players.pChecking9(0, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                    }
    
                    if (gameObj.bB === 3) {
                        inGameLogic9Players.pChecking9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive); 
                    }
    
                    if (gameObj.bB === 4) {
                        inGameLogic9Players.pChecking9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                    }
    
                    if (gameObj.bB === 5) {
                        inGameLogic9Players.pChecking9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                    }
    
                    if (gameObj.bB === 6) {
                        inGameLogic9Players.pChecking9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                    }
    
                    if (gameObj.bB === 7) {
                        inGameLogic9Players.pChecking9(2, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                    }
    
                    if (gameObj.bB === 8) {
                        inGameLogic9Players.pChecking9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive); 
                    }
    
                    if (gameObj.bB === 9) {
                        inGameLogic9Players.pChecking9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive); 
                    }
                }
            }
        }
    },

    displayCall2Room: (pInfo, tT) => {
        if (tT === 'currentBettor') {
            settingThePotOnCall(pInfo, inGameBorderP2);
            displayActionP2.innerText = 'Calls ' + gameObj.lastBet;
            gameObj.p2In = 1;
            if (pInfo.chips > 0) {
                displayActionP2.innerText = 'Calls ' + gameObj.lastBet;
            } else {
                displayActionP2.innerText = 'All In!';
                gameObj.p2Folded = 1;
            }
        } else if (tT === 'currentRaiser') {
            settingThePotOnRaiseCall(pInfo, inGameBorderP2);
            displayActionP2.innerText = 'Calls ' + gameObj.lastRaise;
            if (pInfo.chips > 0) {
                displayActionP2.innerText = 'Calls ' + gameObj.lastRaise;
            } else {
                displayActionP2.innerText = 'All In!';
                gameObj.p2Folded = 1;
            }
        }

        displayActionP2.style.display = 'block';

        gameObj.p2ActedInCurrentRound = true;
        gameObj.p2ActionWords = displayActionP2.innerText;


        if (gameObj.gameSize === 4) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.theSB4(1, playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.theSB4(2, playerOne, 'p1Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.theSB4(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.theBB4(1, playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.theBB4(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.theBB4(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.p2SpotsFromBB4(1, playerOne);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.p2SpotsFromBB4(2, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.p2SpotsFromBB4(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.pNext2TheBB4(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.pNext2TheBB4(2, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.pNext2TheBB4(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        }
        if (gameObj.gameSize === 5) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.theSB5(1, playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.theSB5(2, playerOne, 'p1Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.theSB5(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.theSB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.theBB5(1, playerFive, 'p5Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.theBB5(2, playerOne, 'p1Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.theBB5(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.theBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.p3SpotsFromBB5(1, playerOne);
                }
                
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.p3SpotsFromBB5(2, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.p3SpotsFromBB5(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.p3SpotsFromBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.p2SpotsFromBB5(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.p2SpotsFromBB5(2, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.p2SpotsFromBB5(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.p2SpotsFromBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.pNext2TheBB5(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.pNext2TheBB5(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.pNext2TheBB5(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.pNext2TheBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        }
        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.theSB6(1, playerTwo);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.theSB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.theSB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.theSB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.theSB6(2, playerOne, 'p1Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.theBB6(1, playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.theBB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.theBB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.theBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.theBB6(2, playerOne, 'p1Folded', playerFive, 'p5Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerOne, 'p1Folded', playerSix);
                }   
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.pNext2TheBB6(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.pNext2TheBB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.pNext2TheBB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.pNext2TheBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.pNext2TheBB6(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerOne);
                } 

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerOne, 'p1Folded', playerSix);
                }
            }
        }
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theSB7(1, playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theSB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theSB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theSB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theSB7(2, playerOne, 'p1Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theSB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theBB7(1, playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theBB7(2, playerOne, 'p1Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerOne);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        }
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theSB8(1, playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theSB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theSB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theSB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theSB8(2, playerOne, 'p1Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theSB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theSB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theBB8(1, playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theBB8(2, playerOne, 'p1Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', plaeyrEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(2, playerOne, 'p1Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }

            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerOne);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }

            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }

            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        }
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(1, playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(2, playerOne, 'p1Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }
            }

            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(1, playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(2, playerOne, 'p1Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
            }

            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(2, playerOne, 'p1Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerOne);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree); 
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 9) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerOne, 'p1Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo); 
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        }

        
    },

    displayAnteCall2Room: (pInfo) => {
        settingThePotOnAnteCall(pInfo, inGameBorderP2);

        displayActionP2.style.display = 'block';
        displayActionP2.innerText = 'Call ' + pInfo.anteCalled;

        gameObj.p2AnteCalled = 1;
        gameObj.p2ActedInCurrentRound = true;
        gameObj.p2ActionWords = displayActionP2.innerText;

        if (gameObj.gameSize === 4) {
            inGameLogic4Players.theSB4(3, playerOne, 'p1Folded', playerThree);
        }

        if (gameObj.gameSize === 5) {
            playerOne.settingTurn();
        }

        if (gameObj.gameSize === 6) {
            playerOne.settingTurn();
        }

        if (gameObj.gameSize === 7) {
            playerOne.settingTurn();
        }

        if (gameObj.gameSize === 8) {
            playerOne.settingTurn();
        }

        if (gameObj.gameSize === 9) {
            playerOne.settingTurn();
        }
        
    },

    displayBet2Room: (pInfo, betType) => {

        if (betType === 'asBettor') {
            settingThePotOnBet(pInfo, inGameBorderP2);
            gameObj.currentBettor = 'Player 2';
            gameObj.lastBet = pInfo.betAmount;
            displayActionP2.innerText = 'Bet ' + pInfo.betAmount;
            gameObj.p2In = 1;
            if (pInfo.chips > 0) {
                displayActionP2.innerText = 'Bet ' + pInfo.betAmount;
            } else {
                displayActionP2.innerText = 'All In!';
                gameObj.p2Folded = 1;

            }
        } else if (betType === 'asRaiser') {
            settingThePotOnRaise(pInfo, inGameBorderP2);
            gameObj.currentRaiser = 'Player 2';
            gameObj.lastRaise = pInfo.reRaiseAmount;
            gameObj.p2In = 0.5;
            if (pInfo.chips > 0) {
                displayActionP2.innerText = 'Raise ' + pInfo.reRaiseAmount;
            } else {
                displayActionP2.innerText = 'All In!';
                gameObj.p2Folded = 1;
            }
        }

        displayActionP2.style.display = 'block';

        gameObj.p2ActedInCurrentRound = true;
        gameObj.p2ActionWords = displayActionP2.innerText;
        
        if (gameObj.gameSize === 4) {
            inGameLogic4Players.pBettingOrRaising4(playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
        }  
        if (gameObj.gameSize === 5) {
            inGameLogic5Players.anyPlayerBettingOrRaising(playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
        }
        if (gameObj.gameSize === 6) {
            inGameLogic6Players.playerBettingOrRaising(playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
        }
        if (gameObj.gameSize === 7) {
            inGameLogic7Players.pBettingOrRaising7(playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
        }
        if (gameObj.gameSize === 8) {
            inGameLogic8Players.pBettingOrRaising8(playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
        }
        if (gameObj.gameSize === 9) {
            inGameLogic9Players.pBettingOrRaising9(playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
        }

    },

    displayFold2Room: (disconnectIndicator) => {
        displayingPlayerFold2Room(inGameBorderP2);
        gameObj.p2Folded = 1;
        gameObj.totalPlayersFolded++;

        if (disconnectIndicator) {
            displayActionP2.innerText = 'Disconnected';
            gameObj.p2Disconnected = true;
        } else {
            displayActionP2.innerText = 'Fold';
        }
        
        displayActionP2.style.display = 'block';
        divForPlacementCardImgP2.style.display = 'none';

        optionsForWinnerOfRound.removeChild(winnerOptionP2);

        gameObj.p2ActedInCurrentRound = true;
        gameObj.p2ActionWords = displayActionP2.innerText;

        if (gameObj.gameSize === 4) {
            if (gameObj.totalPlayersFolded === 3) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.theSB4(3, playerOne, 'p1Folded', playerThree);
                        }
                        // else would send message asking user if they are sure they want to fold
                    }
                } 

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.theSB4(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.theSB4(2, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.theSB4(3, playerOne, 'p1Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic4Players.theBB4(3, playerOne, 'p1Folded', playerThree);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.theBB4(1, playerFour, 'p4Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.theBB4(2, playerOne, 'p1Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.theBB4(3, playerOne, 'p1Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.p2SpotsFromBB4(3, playerOne, 'p1Folded', playerThree);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.p2SpotsFromBB4(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.p2SpotsFromBB4(2, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.p2SpotsFromBB4(3, playerOne, 'p1Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.pNext2TheBB4(3, playerOne, 'p1Folded', playerThree);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.pNext2TheBB4(1, playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.pNext2TheBB4(2, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.pNext2TheBB4(3, playerOne, 'p1Folded', playerThree);
                }
            }
        }

        if (gameObj.gameSize === 5) {
            if (gameObj.totalPlayersFolded === 4) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.pCallingAsSB(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.pCallingAsSB(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.pCallingAsSB(2, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.pCallingAsSB(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.pCallingAsSB(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic5Players.theBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.theBB5(1, playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.theBB5(2, playerOne, 'p1Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.theBB5(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.theBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.p3SpotsFromBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.p3SpotsFromBB5(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.p3SpotsFromBB5(2, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.p3SpotsFromBB5(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.p3SpotsFromBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.p2SpotsFromBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.p2SpotsFromBB5(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.p2SpotsFromBB5(2, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.p2SpotsFromBB5(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.p2SpotsFromBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.pNext2TheBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.pNext2TheBB5(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.pNext2TheBB5(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.pNext2TheBB5(3, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.pNext2TheBB5(4, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        }

        if (gameObj.gameSize === 6) {
            if (gameObj.totalPlayersFolded === 5) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.theSB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.theSB6(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.theSB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.theSB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.theSB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.theSB6(2, playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic6Players.theBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.theBB6(1, playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.theBB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.theBB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.theBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.theBB6(2, playerOne, 'p1Folded', playerFive, 'p5Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p3SpotsFromBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerOne, 'p1Folded', playerSix);
                }
            }
            
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p2SpotsFromBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.pNext2TheBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.pNext2TheBB6(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.pNext2TheBB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.pNext2TheBB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.pNext2TheBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.pNext2TheBB6(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p4SpotsFromBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerOne, 'p1Folded', playerSix);
                }
            }
        }
    
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.theSB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theSB7(1, playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theSB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theSB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theSB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theSB7(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theSB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic7Players.theBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theBB7(1, playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theBB7(2, playerOne, 'p1Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive, 'p5Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p3SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p2SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.pNext2TheBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p5SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p4SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        }
    
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.theSB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theSB8(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theSB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theSB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theSB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theSB8(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theSB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theSB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theBB8(1, playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theBB8(2, playerOne, 'p1Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive, 'p5Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p4SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p3SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', plaeyrEight);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', plaeyrEight);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.pNext2TheBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(2, playerOne, 'p1Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }

            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p6SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }

            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p5SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }

            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p2SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        }
    
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerOne.settingTurn();
                }
    
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(1, playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive, 'p5Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(2, playerOne, 'p1Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive, 'p5Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive, 'p5Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
            }

            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerOne.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerOne.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerOne.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(2, playerOne, 'p1Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerOne.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine)
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerOne.settingTurn();
                }
                
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree); 
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerOne.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 9) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerOne.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerOne, 'p1Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix); 
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

        }

        

    },
};

const playerThree = {
    active: false,

    isBB: (rS, indicator) => {

        gameObj.bB = 3;
        inGameBorderP3.style.color = 'green';

        gIBigBlind.innerHTML = 'Big Blind: ' + inGameBorderP3.innerHTML.split(" ")[0];

        gameObj.p3AnteCalled = 1;

        if (rS === 4) {

            gameObj.sB = 1;
            inGameBorderP1.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP1.innerHTML.split(" ")[0];


            if (!indicator) {

                if (gameObj.p4Folded === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.p4Folded === 1) {
                    playerTwo.settingTurn();
                }

                if (user['inGameTurn'] === 3) {
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
                }

            }
        }

        if (rS === 5) {
            gameObj.sB = 1;
            inGameBorderP1.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP1.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p4Folded === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.p4Folded === 1) {
                    playerFive.settingTurn();
                }

                if (user['inGameTurn'] === 3) {
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
                }

            }
        }

        if (rS === 6) {
            gameObj.sB = 6;
            inGameBorderP6.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP6.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p4Folded === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.p4Folded === 1) {
                    playerFive.settingTurn();
                }

                if (user['inGameTurn'] === 3) {
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
                }

            }
        }

        if (rS === 7) {
            gameObj.sB = 7;
            inGameBorderP7.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP7.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p4Folded === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.p4Folded === 1) {
                    playerFive.settingTurn();
                }

                if (user['inGameTurn'] === 3) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 7) {
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
            gameObj.sB = 7;
            inGameBorderP7.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP7.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p4Folded === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.p4Folded === 1) {
                    playerEight.settingTurn();
                }

                if (user['inGameTurn'] === 3) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 7) {
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
            gameObj.sB = 7;
            inGameBorderP7.style.color = 'red';

            playerFour.settingTurn();

            if (user['inGameTurn'] === 7) {
                p.chips -= gameObj.sbAnte;
                socket.emit('sendingBlindInfo', p, 'SB')
            }
        }
    },

    settingTurn: () => {

        inGameBorderP1.style.border = '3px solid black';
        inGameBorderP2.style.border = '3px solid black';
        inGameBorderP3.style.border = '3px solid blue';
        inGameBorderP4.style.border = '3px solid black';
        inGameBorderP5.style.border = '3px solid black';
        inGameBorderP6.style.border = '3px solid black';
        inGameBorderP7.style.border = '3px solid black';
        inGameBorderP8.style.border = '3px solid black';
        inGameBorderP9.style.border = '3px solid black';

        gICurrentTurn.innerHTML = 'Current Turn: ' + inGameBorderP3.innerHTML.split(" ")[0];


        gameObj.currentTurn = 3;

    },

    checks: () => {
        if (gameObj.currentTurn === 3) {
            if (gameObj.currentBettor === '') {
                socket.emit('p3Checks')
            }
        }
    }, 

    callsBetEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p3AnteCalled === 1) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.bbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.bbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p3AnteCalled === 0.5) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.sbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.sbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p3AnteCalled === 0) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet;
                    p.callAmount = gameObj.lastBet;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            }
            socket.emit('p3CallsBet', p, type)
        }
    },

    callsRaiseEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p3AnteCalled === 1) {
                if (gameObj.p3In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                } else if (gameObj.p3In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                } else if (gameObj.p3In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.bbAnte;
                }
            } else if (gameObj.p3AnteCalled === 0.5) {
                if (gameObj.p3In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                } else if (gameObj.p3In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                } else if (gameObj.p3In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.sbAnte;
                }
            } else if (gameObj.p3AnteCalled === 0) {
                if (gameObj.p3In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet;
                } else if (gameObj.p3In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount;
                } else if (gameObj.p3In === 0) {
                    p.chips -= gameObj.lastRaise;
                    p.calledRaiseAmount = gameObj.lastRaise;
                }
            }
            socket.emit('p3CallsBet', p, type)
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
            socket.emit('p3CallsAnte', p)
        }
    },

    calls: () => {
        if (gameObj.currentTurn === 3) {
            if (gameObj.gameSize === 4) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound <= 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else  {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            
                if (gameObj.bB === 2) {
                    if (gameObj.currentRound <= 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else {    
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                
                }
        
                if (gameObj.bB === 3) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
        
                if (gameObj.bB === 4) {
                    if (gameObj.currentRound <= 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            if (gameObj.gameSize === 5) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } 
                if (gameObj.bB === 3) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } 
                if (gameObj.bB === 4) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            if (gameObj.gameSize === 6) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 5 || gameObj.bB === 6) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else if (currentRaise >= 1) {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 4) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        
            if (gameObj.gameSize === 7) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 7) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 4) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else  {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
    
            if (gameObj.gameSize === 8) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 7 || gameObj.bB === 8) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else  {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 4) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
    
            if (gameObj.gameSize === 9) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 7 || gameObj.bB === 8 || gameObj.bB === 9) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 3) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else  {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 4) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerThree.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerThree.callsBetEMITTER('currentBettor');
                            } else {
                                playerThree.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerThree.callsBetEMITTER('currentBettor');
                        } else  {
                            playerThree.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        }
    },

    betsEMITTER: () => {
        if (gameObj.currentTurn === 3) {
            if (gameObj.lastBet <= 0) {
                p3BetAmountInput.style.display = 'block';
                p3BetSubmitButton.style.display = 'block';
                p3BetAmountInput.value = '';
            } else {
                p3RaiseAmountInput.style.display = 'block';
                p3RaiseSubmitButton.style.display = 'block';
                p3RaiseAmountInput.value = '';
            }
        }
    },

    bets: (type) => {
        if (p3BetAmountInput.value > 0) {
            p.chips -= p3BetAmountInput.value;
            p.betAmount = Number(p3BetAmountInput.value);
            socket.emit('p3SubmitsBet', p, type)
            p3BetAmountInput.style.display = 'none';
            p3BetSubmitButton.style.display = 'none';
        }
    },

    raises: (type) => {
        if (p3RaiseAmountInput.value > gameObj.lastBet) {
            p.chips -= p3RaiseAmountInput.value;
            p.reRaiseAmount = Number(p3RaiseAmountInput.value);
            socket.emit('p3SubmitsBet', p, type);
            p3RaiseAmountInput.style.display = 'none';
            p3RaiseSubmitButton.style.display = 'none';
        }
    },

    submitsBet: () => {
        playerThree.bets('asBettor');
    },

    submitsRaise: () => {
        playerThree.raises('asRaiser');
    },

    folds: () => {
        socket.emit('p3Folds');
    },

    ////// DISPLAY EVENTS 2 ROOM METHODS //////

    displayCheck2Room: () => {
        displayActionP3.style.display = 'block';
        displayActionP3.innerText = 'Check';

        gameObj.p3ActedInCurrentRound = true;
        gameObj.p3ActionWords = displayActionP3.innerText;

        if (gameObj.gameSize === 4) {
            if (gameObj.bB === 3) {
                inGameLogic4Players.pChecking4(3, playerOne, 'p1Folded', playerThree, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic4Players.pChecking4(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                    }                
                    if (gameObj.bB === 2) {
                        inGameLogic4Players.pChecking4(1, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                    }          
                    if (gameObj.bB === 4) {
                        inGameLogic4Players.pChecking4(0, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                    }
                }
            }
        }
        if (gameObj.gameSize === 5) {
            if (gameObj.bB === 3) {
                inGameLogic5Players.anyPlayerChecking(4, playerOne, 'p1Folded', playerThree, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic5Players.anyPlayerChecking(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }         
                    if (gameObj.bB === 2) {
                        inGameLogic5Players.anyPlayerChecking(2, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }          
                    if (gameObj.bB === 4) {
                        inGameLogic5Players.anyPlayerChecking(0, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                    if (gameObj.bB === 5) {
                        inGameLogic5Players.anyPlayerChecking(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                }
            }
        }
        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 3) {
                inGameLogic6Players.pChecking(5, playerSix, 'p6Folded', playerThree, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic6Players.pChecking(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic6Players.pChecking(2, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic6Players.pChecking(0, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic6Players.pChecking(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic6Players.pChecking(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                }
            }
        }
    
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 3) {
                inGameLogic7Players.pChecking7(6, playerSeven, 'p7Folded', playerThree, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic7Players.pChecking7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic7Players.pChecking7(2, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic7Players.pChecking7(0, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic7Players.pChecking7(1, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic7Players.pChecking7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic7Players.pChecking7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                }
            }
        }
    
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 3) {
                inGameLogic8Players.pChecking8(7, playerSeven, 'p7Folded', playerThree, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic8Players.pChecking8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic8Players.pChecking8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic8Players.pChecking8(0, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic8Players.pChecking8(2, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic8Players.pChecking8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic8Players.pChecking8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic8Players.pChecking8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                }
            }
        }
    
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 3) {
                inGameLogic9Players.pChecking9(8, playerSeven, 'p7Folded', playerThree, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic9Players.pChecking9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
    
                    if (gameObj.bB === 2) {
                        inGameLogic9Players.pChecking9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
    
                    if (gameObj.bB === 4) {
                        inGameLogic9Players.pChecking9(0, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
    
                    if (gameObj.bB === 5) {
                        inGameLogic9Players.pChecking9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
    
                    if (gameObj.bB === 6) {
                        inGameLogic9Players.pChecking9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
    
                    if (gameObj.bB === 7) {
                        inGameLogic9Players.pChecking9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
    
                    if (gameObj.bB === 8) {
                        inGameLogic9Players.pChecking9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
    
                    if (gameObj.bB === 9) {
                        inGameLogic9Players.pChecking9(2, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                }
            }
        }
    },

    displayCall2Room: (pInfo, tT) => {
        if (tT === 'currentBettor') {
            settingThePotOnCall(pInfo, inGameBorderP3);
            displayActionP3.innerText = 'Call ' + gameObj.lastBet;
            gameObj.p3In = 1;
            if (pInfo.chips > 0) {
                displayActionP3.innerText = 'Call ' + gameObj.lastBet;
            } else {
                displayActionP3.innerText = 'All In!';
                gameObj.p3Folded = 1;
            }
        } else if (tT === 'currentRaiser') {
            settingThePotOnRaiseCall(pInfo, inGameBorderP3);
            displayActionP3.innerText = 'Call ' + gameObj.lastRaise;
            if (pInfo.chips > 0) {
                displayActionP3.innerText = 'Call ' + gameObj.lastRaise;
            } else {
                displayActionP3.innerText = 'All In!';
                gameObj.p3Folded = 1;
            }
        }

        displayActionP3.style.display = 'block';
        gameObj.p3ActedInCurrentRound = true;
        gameObj.p3ActionWords = displayActionP3.innerText;

        if (gameObj.gameSize === 4) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.pNext2TheBB4(3, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.pNext2TheBB4(2, playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.pNext2TheBB4(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }

            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.p2SpotsFromBB4(3, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.p2SpotsFromBB4(2, playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.p2SpotsFromBB4(1, playerFour);
                }
            }

            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.theBB4(3, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.theBB4(2, playerFour, 'p4Folded', playerOne);
                    
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.theBB4(1, playerOne, 'p1Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.theSB4(3, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.theSB4(2, playerFour, 'p4Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic4Players.theSB4(1, playerThree);
                }
            }
        }

        if (gameObj.gameSize === 5) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.pNext2TheBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.pNext2TheBB5(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.pNext2TheBB5(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.pNext2TheBB5(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.p2SpotsFromBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.p2SpotsFromBB5(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.p2SpotsFromBB5(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.p2SpotsFromBB5(2, playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.theBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.theBB5(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.theBB5(1, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.theBB5(2, playerFour, 'p4Folded', playerOne, 'p1Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.theSB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.theSB5(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.theSB5(1, playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.theSB5(2, playerFour, 'p4Folded', playerThree);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.p3SpotsFromBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.p3SpotsFromBB5(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.p3SpotsFromBB5(1, playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.p3SpotsFromBB5(2, playerFour, 'p4Folded', playerFive);
                }
            }
        }

        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree)
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerFour, 'p4Folded', playerFive);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.theBB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerThree)
                } 

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.theBB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerThree)
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.theBB6(1, playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.theBB6(2, playerFour, 'p4Folded', playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.theBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.theSB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.theSB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.theSB6(1, playerThree);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.theSB6(2, playerFour, 'p4Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.theSB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerFour);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerFour, 'p4Folded', playerFive);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.pNext2TheBB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.pNext2TheBB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.pNext2TheBB6(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.pNext2TheBB6(2, playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.pNext2TheBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        }
    
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theBB7(1, playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theBB7(2, playerFour, 'p4Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theSB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theSB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theSB7(1, playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theSB7(2, playerFour, 'p4Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theSB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theSB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerFour, 'p4Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(2, playerFour, 'p4Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        }
    
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }   
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theBB8(1, playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven); 
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theBB8(2, playerFour, 'p4Folded', playerSeven, 'p7Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theSB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theSB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theSB8(1, playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theSB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theSB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theSB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theSB8(2, playerFour, 'p4Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerFour, 'p4Folded', playerEight);
                }

            }

            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

            }

            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(2, playerFour, 'p4Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

            }

            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerFour, 'p4Folded', playerEight);
                }
            }
        }
    
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
            }

            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
            }

            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(1, playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(2, playerFour, 'p4Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerSeven, 'p7Folded', playerThree);
                }
            }

            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(1, playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(2, playerFour, 'p4Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerThree);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
            }

            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(2, playerFour, 'p4Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
            }

            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive); 
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerFour, 'p4Folded', playerEight);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 9) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerFour, 'p4Folded', playerEight);
                }

                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        }

    },

    displayAnteCall2Room: (pInfo) => {
        settingThePotOnAnteCall(pInfo, inGameBorderP3);

        displayActionP3.style.display = 'block';
        displayActionP3.innerText = 'Call ' + pInfo.anteCalled;

        gameObj.p3AnteCalled = 1;
        gameObj.p3ActedInCurrentRound = true;
        gameObj.p3ActionWords = displayActionP3.innerText;

        if (gameObj.gameSize === 4) {
            inGameLogic4Players.theSB4(3, playerFour, 'p4Folded', playerTwo);
        }

        if (gameObj.gameSize === 5) {
            playerFour.settingTurn();
        }

        if (gameObj.gameSize === 6) {
            playerFour.settingTurn();
        }

        if (gameObj.gameSize === 7) {
            playerFour.settingTurn();
        }

        if (gameObj.gameSize === 8) {
            playerFour.settingTurn();
        }

        if (gameObj.gameSize === 9) {
            playerFour.settingTurn();
        }
    },

    displayBet2Room: (pInfo, betType) => {
        if (betType === 'asBettor') {
            settingThePotOnBet(pInfo, inGameBorderP3);
            gameObj.currentBettor = 'Player 3';
            gameObj.lastBet = pInfo.betAmount;
            gameObj.p3In = 1;
            if (pInfo.chips > 0) {
                displayActionP3.innerText = 'Bet ' + pInfo.betAmount;
            } else {
                gameObj.p3Folded = 1;
                displayActionP3.innerText = 'All In!';
            }
        } else if (betType === 'asRaiser') {
            settingThePotOnRaise(pInfo, inGameBorderP3);
            gameObj.currentRaiser = 'Player 3';
            gameObj.lastRaise = pInfo.reRaiseAmount;
            gameObj.p3In = 0.5;
            if (pInfo.chips > 0) {
                displayActionP3.innerText = 'Raise ' + pInfo.reRaiseAmount;
            } else {
                displayActionP3.innerText = 'All In!';
                gameObj.p3Folded = 1;
            }
        }

        displayActionP3.style.display = 'block';
        gameObj.p3ActedInCurrentRound = true;
        gameObj.p3ActionWords = displayActionP3.innerText;

        if (gameObj.gameSize === 4) {
            inGameLogic4Players.pBettingOrRaising4(playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
        }   

        if (gameObj.gameSize === 5) {
            inGameLogic5Players.anyPlayerBettingOrRaising(playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
        }

        if (gameObj.gameSize === 6) {
            inGameLogic6Players.playerBettingOrRaising(playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
        }
    
        if (gameObj.gameSize === 7) {
            inGameLogic7Players.pBettingOrRaising7(playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
        }
    
        if (gameObj.gameSize === 8) {
            inGameLogic8Players.pBettingOrRaising8(playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
        }
    
        if (gameObj.gameSize === 9) {
            inGameLogic9Players.pBettingOrRaising9(playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
        }
    },

    displayFold2Room: (disconnectIndicator) => {
        displayingPlayerFold2Room(inGameBorderP3);

        gameObj.p3Folded = 1;
        gameObj.totalPlayersFolded++;

        if (disconnectIndicator) {
            displayActionP3.innerText = 'Disconnected';
            gameObj.p3Disconnected = true;
        } else {
            displayActionP3.innerText = 'Fold';
        }

        displayActionP3.style.display = 'block';
        divForPlacementCardImgP3.style.display = 'none';

        optionsForWinnerOfRound.removeChild(winnerOptionP3);

        gameObj.p3ActedInCurrentRound = true;
        gameObj.p3ActionWords = displayActionP3.innerText;

        if (gameObj.gameSize === 4) {
            if (gameObj.totalPlayersFolded === 3) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) { 
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.pNext2TheBB4(3, playerFour, 'p4Folded', playerTwo);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.pNext2TheBB4(3, playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.pNext2TheBB4(2, playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.pNext2TheBB4(1, playerTwo, 'p2Folded', playerOne);
                }
            }

            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.p2SpotsFromBB4(3, playerFour, 'p4Folded', playerTwo);
                        }
                    }
                }
    
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.p2SpotsFromBB4(3, playerFour, 'p4Folded', playerTwo);
                }
    
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.p2SpotsFromBB4(2, playerFour, 'p4Folded', playerTwo);
                }
    
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.p2SpotsFromBB4(1, playerFour);
                }
            }

            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic4Players.theBB4(3, playerFour, 'p4Folded', playerTwo);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.theBB4(3, playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.theBB4(2, playerFour, 'p4Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.theBB4(1, playerOne, 'p1Folded', playerTwo);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.theSB4(3, playerFour, 'p4Folded', playerTwo);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.theSB4(3, playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.theSB4(2, playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic4Players.theSB4(1, playerFour);
                }
            }
        }

        if (gameObj.gameSize === 5) {
            if (gameObj.totalPlayersFolded === 4) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.pNext2TheBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.pNext2TheBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.pNext2TheBB5(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.pNext2TheBB5(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.pNext2TheBB5(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.p2SpotsFromBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.p2SpotsFromBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.p2SpotsFromBB5(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.p2SpotsFromBB5(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.p2SpotsFromBB5(2, playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic5Players.theBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.theBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.theBB5(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.theBB5(1, playerOne, 'p1Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.theBB5(2, playerFour, 'p4Folded', playerOne, 'p1Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.theSB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.theSB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.theSB5(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.theSB5(1, playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.theSB5(2, playerFour, 'p4Folded', playerFive);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.p3SpotsFromBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.p3SpotsFromBB5(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.p3SpotsFromBB5(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.p3SpotsFromBB5(1, playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.p3SpotsFromBB5(2, playerFour, 'p4Folded', playerFive);
                }
            }
        }

        if (gameObj.gameSize === 6) {
            if (gameObj.totalPlayersFolded === 5) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p2SpotsFromBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p3SpotsFromBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic6Players.theBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.theBB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.theBB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.theBB6(1, playerSix, 'p6Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.theBB6(2, playerFour, 'p4Folded', playerSix, 'p6Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.theBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.theSB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.theSB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.theSB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.theSB6(1, playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.theSB6(2, playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.theSB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p4SpotsFromBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.pNext2TheBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.pNext2TheBB6(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.pNext2TheBB6(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.pNext2TheBB6(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.pNext2TheBB6(2, playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.pNext2TheBB6(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
            }
        }
    
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p3SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p4SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic7Players.theBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theBB7(1, playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theBB7(2, playerFour, 'p4Folded', playerSeven, 'p7Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.theSB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theSB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theSB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theSB7(1, playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theSB7(2, playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theSB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theSB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p5SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }
            
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerFour, 'p4Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p2SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.pNext2TheBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(4, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(3, playerFour, 'p4Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(2, playerFour, 'p4Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(5, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(6, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        }
    
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p3SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p4SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic8Players.theBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix); 
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theBB8(1, playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerSeven, 'p7Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix); 
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theBB8(2, playerFour, 'p4Folded', playerSeven, 'p7Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.theSB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theSB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theSB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theSB8(1, playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theSB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theSB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theSB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theSB8(2, playerFour, 'p4Folded', playerEight);
                }

            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p5SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerFour, 'p4Folded', playerEight);
                }
            }

            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerOne.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p2SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight);
                }
            }

            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.pNext2TheBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(2, playerFour, 'p4Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight);
                }
            }

            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFour.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p6SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }
                
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerFour, 'p4Folded', playerEight);
                }
            }
        }
    
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerFour, 'p4Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerNine);
                }
            }

            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerFour, 'p4Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }

            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(1, playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSeven, 'p7Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(2, playerFour, 'p4Folded', playerSeven, 'p7Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerSeven, 'p7Folded', playerNine);
                }
            }

            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(1, playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(2, playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerFour, 'p4Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerNine);
                }
            }

            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(2, playerFour, 'p4Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerNine);
                }
            }

            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerFour);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive); 
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }

            if (gameObj.bB === 9) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerFour.settingTurn();
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }

                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }

                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerFour, 'p4Folded', playerEight);
                }

                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        }
        
    },
};

const playerFour = {
    active: false,

    isBB: (rS, indicator) => {

        gameObj.bB = 4;
        inGameBorderP4.style.color = 'green';

        gIBigBlind.innerHTML = 'Big Blind: ' + inGameBorderP4.innerHTML.split(" ")[0];

        gameObj.p4AnteCalled = 1;

        if (rS === 4) {

            gameObj.sB = 3;
            inGameBorderP3.style.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP3.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p2Folded === 0) {
                    playerTwo.settingTurn();
                } 

                if (gameObj.p2Folded === 1) {
                    playerOne.settingTurn();
                }


                if (user['inGameTurn'] === 4) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 3) {
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
                }

            }
        }

        if (rS === 5) {
            gameObj.sB = 3;
            inGameBorderP3.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP3.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p5Folded === 0) {
                    playerFive.settingTurn();
                }

                if (gameObj.p5Folded === 1) {
                    playerTwo.settingTurn();
                }

                if (user['inGameTurn'] === 4) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 3) {
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
                }

            }
        }

        if (rS === 6) {
            gameObj.sB = 3;
            inGameBorderP3.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP3.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p5Folded === 0) {
                    playerFive.settingTurn();
                }

                if (gameObj.p5Folded === 1) {
                    playerTwo.settingTurn();
                }

                if (user['inGameTurn'] === 4) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 3) {
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
            gameObj.sB = 3;
            inGameBorderP3.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP3.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p5Folded === 0) {
                    playerFive.settingTurn();
                }

                if (gameObj.p5Folded === 1) {
                    playerTwo.settingTurn();
                }

                if (user['inGameTurn'] === 3) {
                    p.chips -= gameObj.sbAnte;
                    socket.emit('sendingBlindInfo', p, 'SB')
                }

                if (user['inGameTurn'] === 4) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
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
            gameObj.sB = 3;
            inGameBorderP3.color = 'red';

            gISmallBlind.innerHTML = 'Small Blind: ' + inGameBorderP3.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p8Folded === 0) {
                    playerEight.settingTurn();
                }

                if (gameObj.p8Folded === 1) {
                    playerFive.settingTurn();
                }

                if (user['inGameTurn'] === 4) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 3) {
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
            gameObj.sB = 3;
            inGameBorderP3.color = 'red';

            playerEight.settingTurn();

            if (user['inGameTurn'] === 3) {
                p.chips -= gameObj.sbAnte;
                socket.emit('sendingBlindInfo', p, 'SB')
            }
        }
    },

    settingTurn: () => {

        inGameBorderP1.style.border = '3px solid black';
        inGameBorderP2.style.border = '3px solid black';
        inGameBorderP3.style.border = '3px solid black';
        inGameBorderP4.style.border = '3px solid blue';
        inGameBorderP5.style.border = '3px solid black';
        inGameBorderP6.style.border = '3px solid black';
        inGameBorderP7.style.border = '3px solid black';
        inGameBorderP8.style.border = '3px solid black';
        inGameBorderP9.style.border = '3px solid black';

        gICurrentTurn.innerHTML = 'Current Turn: ' + inGameBorderP4.innerHTML.split(" ")[0];


        gameObj.currentTurn = 4;

    },

    checks: () => {
        if (gameObj.currentTurn === 4) {
            if (gameObj.currentBettor === '') {
                socket.emit('p4Checks');
            }
        }
    }, 

    callsBetEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p4AnteCalled === 1) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.bbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.bbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p4AnteCalled === 0.5) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.sbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.sbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p4AnteCalled === 0) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet;
                    p.callAmount = gameObj.lastBet;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } 
            socket.emit('p4CallsBet', p, type)
        }
    },

    callsRaiseEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p4AnteCalled === 1) {
                if (gameObj.p4In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                } else if (gameObj.p4In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                } else if (gameObj.p4In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.bbAnte;
                }
            } else if (gameObj.p4AnteCalled === 0.5) {
                if (gameObj.p4In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                } else if (gameObj.p4In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                } else if (gameObj.p4In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.sbAnte;
                }
            } else if (gameObj.p4AnteCalled === 0) {
                if (gameObj.p4In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet;
                } else if (gameObj.p4In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount;
                } else if (gameObj.p4In === 0) {
                    p.chips -= gameObj.lastRaise;
                    p.calledRaiseAmount = gameObj.lastRaise;
                }
            } 
            socket.emit('p4CallsBet', p, type)
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
            socket.emit('p4CallsAnte', p)   
        }
    },

    calls: () => {
        if (gameObj.currentTurn === 4) {
            if (gameObj.gameSize === 4) {
                if (gameObj.bB === 1) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }

                if (gameObj.bB === 2) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('SB')
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            
                if (gameObj.bB === 3) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            
                if (gameObj.bB === 4) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }

            if (gameObj.gameSize === 5) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } 
                if (gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
                if (gameObj.bB === 4) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }

            if (gameObj.gameSize === 6) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 6) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 4) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            
            if (gameObj.gameSize === 7) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 4) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            
            if (gameObj.gameSize === 8) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 7) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 4) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 8) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            
            if (gameObj.gameSize === 9) {
                if (gameObj.bB === 1 || gameObj.bB === 2 || gameObj.bB === 3 || gameObj.bB === 5 || gameObj.bB === 6 || gameObj.bB === 7 || gameObj.bB === 9) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 4) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 8) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFour.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFour.callsBetEMITTER('currentBettor');
                            } else {
                                playerFour.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFour.callsBetEMITTER('currentBettor');
                        } else {
                            playerFour.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        }
    },

    betsEMITTER: () => {
        if (gameObj.currentTurn === 4) {
            if (gameObj.lastBet <= 0) {
                p4BetAmountInput.style.display = 'block';
                p4BetSubmitButton.style.display = 'block';
                p4BetAmountInput.value = '';
            } else {
                p4RaiseAmountInput.style.display = 'block';
                p4RaiseSubmitButton.style.display = 'block';
                p4RaiseAmountInput.value = '';
            }
        }
    },

    bets: (type) => {
        if (p4BetAmountInput.value > 0) {
            p.chips -= p4BetAmountInput.value;
            p.betAmount = Number(p4BetAmountInput.value);
            socket.emit('p4SubmitsBet', p, type)
            p4BetAmountInput.style.display = 'none';
            p4BetSubmitButton.style.display = 'none';
        }
    },

    raises: (type) => {
        if (p4RaiseAmountInput.value > gameObj.lastBet) {
            p.chips -= p4RaiseAmountInput.value;
            p.reRaiseAmount = Number(p4RaiseAmountInput.value);
            socket.emit('p4SubmitsBet', p, type);
            p4RaiseAmountInput.style.display = 'none';
            p4RaiseSubmitButton.style.display = 'none';
        }
    },

    submitsBet: () => {
        playerFour.bets('asBettor');
    },

    submitsRaise: () => {
        playerFour.raises('asRaiser');
    },

    folds: () => {
        socket.emit('p4Folds');
    },

    ////// DISPLAY EVENTS 2 ROOM METHODS //////

    displayCheck2Room: () => {

        displayActionP4.style.display = 'block';
        displayActionP4.innerText = 'Check';

        gameObj.p4ActedInCurrentRound = true;
        gameObj.p4ActionWords = displayActionP4.innerText;
        
        if (gameObj.gameSize === 4) {
            if (gameObj.bB === 4) {
                inGameLogic4Players.pChecking4(3, playerThree, 'p3Folded', playerFour, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic4Players.pChecking4(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                    } 
                    if (gameObj.bB === 2) {
                        inGameLogic4Players.pChecking4(0, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                    }
                    if (gameObj.bB === 3) {
                        inGameLogic4Players.pChecking4(2, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                    }
                }
            }
        }
        if (gameObj.gameSize === 5) {
            if (gameObj.bB === 4) {
                inGameLogic5Players.anyPlayerChecking(4, playerThree, 'p3Folded', playerFour, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic5Players.anyPlayerChecking(2, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic5Players.anyPlayerChecking(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                    }
        
                    if (gameObj.bB === 3) {
                        inGameLogic5Players.anyPlayerChecking(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                    }
        
                    if (gameObj.bB === 5) {
                        inGameLogic5Players.anyPlayerChecking(0, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                    } 
                }
            }
        }
        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 4) {
                inGameLogic6Players.pChecking(5, playerThree, 'p3Folded', playerFour, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic6Players.pChecking(2, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic6Players.pChecking(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic6Players.pChecking(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic6Players.pChecking(0, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic6Players.pChecking(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                    }
                }
            }
        }
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 4) {
                inGameLogic7Players.pChecking7(6, playerThree, 'p3Folded', playerFour, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic7Players.pChecking7(2, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic7Players.pChecking7(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic7Players.pChecking7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic7Players.pChecking7(0, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic7Players.pChecking7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic7Players.pChecking7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                }
            }
        }
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 4) {
                inGameLogic8Players.pChecking8(7, playerThree, 'p3Folded', playerFour, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
            } else {
                if (gameObj.gameSize >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic8Players.pChecking8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
            
                    if (gameObj.bB === 2) {
                        inGameLogic8Players.pChecking8(2, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
            
                    if (gameObj.bB === 3) {
                        inGameLogic8Players.pChecking8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
            
                    if (gameObj.bB === 5) {
                        inGameLogic8Players.pChecking8(1, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
            
                    if (gameObj.bB === 6) {
                        inGameLogic8Players.pChecking8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
            
                    if (gameObj.bB === 7) {
                        inGameLogic8Players.pChecking8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
            
                    if (gameObj.bB === 8) {
                        inGameLogic8Players.pChecking8(0, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                }
            }
        }
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 4) {
                inGameLogic9Players.pChecking9(8, playerThree, 'p3Folded', playerFour, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic9Players.pChecking9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic9Players.pChecking9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic9Players.pChecking9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 5) {
                        inGameLogic9Players.pChecking9(2, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic9Players.pChecking9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic9Players.pChecking9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic9Players.pChecking9(0, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                
                    if (gameObj.bB === 9) {
                        inGameLogic9Players.pChecking9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                }
            }
        }
    },

    displayCall2Room: (pInfo, tT) => {
        if (tT === 'currentBettor') {
            settingThePotOnCall(pInfo, inGameBorderP4);
            displayActionP4.innerText = 'Calls ' + gameObj.lastBet;
            gameObj.p4In = 1;
            if (pInfo.chips > 0) {
                displayActionP4.innerText = 'Calls ' + gameObj.lastBet;
            } else {
                displayActionP4.innerText = 'All In!';
                gameObj.p4Folded = 1;
            }
        } else if (tT === 'currentRaiser') {
            settingThePotOnRaiseCall(pInfo, inGameBorderP4);
            displayActionP4.innerText = 'Calls ' + gameObj.lastRaise;
            if (pInfo.chips > 0) {
                displayActionP4.innerText = 'Calls ' + gameObj.lastRaise;
            } else {
                displayActionP4.innerText = 'All In!';
                gameObj.p4Folded = 1;
            }
        }

        displayActionP4.style.display = 'block';

        gameObj.p4ActedInCurrentRound = true;
        gameObj.p4ActionWords = displayActionP4.innerText;

        if (gameObj.gameSize === 4) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.p2SpotsFromBB4(2, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.p2SpotsFromBB4(1, playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.p2SpotsFromBB4(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.theSB4(2, playerTwo, 'p2Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.theSB4(1, playerFour);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.theSB4(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.pNext2TheBB4(2, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.pNext2TheBB4(1, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.pNext2TheBB4(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }   
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic4Players.theBB4(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic4Players.theBB4(1, playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic4Players.theBB4(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }
        }

        if (gameObj.gameSize === 5) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.p2SpotsFromBB5(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.p2SpotsFromBB5(2, playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.p2SpotsFromBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.p2SpotsFromBB5(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.p3SpotsFromBB5(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.p3SpotsFromBB5(2, playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.p3SpotsFromBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.p3SpotsFromBB5(1, playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.pNext2TheBB5(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.pNext2TheBB5(2, playerFive, 'p5Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.pNext2TheBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.pNext2TheBB5(1, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.theBB5(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.theBB5(2, playerFive, 'p5Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.theBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.theBB5(1, playerThree, 'p3Folded', playerFour);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.theSB5(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.theSB5(2, playerFive, 'p5Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.theSB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }

                if (gameObj[tT] === 'Player 5') {
                    inGameLogic5Players.theSB5(1, playerFour);
                }
            }
        }

        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerFive, 'p5Folded', playerTwo);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerFive, 'p5Folded', playerTwo);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerFive);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.pNext2TheBB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour)
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.pNext2TheBB6(2, playerFive, 'p5Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.pNext2TheBB6(5, playerFive, p5Folded, playerTwo, p2Folded, playerOne, p1Folded, playerSix, p6Folded);
                } 
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.pNext2TheBB6(1, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.pNext2TheBB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.theBB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.theBB6(2, playerFive, 'p5Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.theBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.theBB6(1, playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.theBB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.theSB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.theSB6(2, playerFive, 'p5Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.theSB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.theSB6(1, playerFour);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.theSB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        }
        
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(2, playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theBB7(2, playerFive, 'p5Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theBB7(1, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theSB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theSB7(2, playerFive, 'p5Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theSB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.theSB7(1, playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theSB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theSB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        }
        
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(2, playerEight, 'p8Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theBB8(2, playerEight, 'p8Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theBB8(1, playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerEight);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerEight, 'p8Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theSB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour);
                }   
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theSB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theSB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic8Players.theSB8(2, playerEight, 'p8Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theSB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theSB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theSB8(1, playerFour);
                }
            }
        }
        
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(2, playerEight, 'p8Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(1, playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(2, playerEight, 'p8Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerEight, 'p8Folded', playerNine);
                }
        
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerEight, 'p8Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(1, playerFour);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(2, playerEight, 'p8Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 9) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(6, layerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerEight, 'p8Folded', playerNine);
                }
        
            }
        }
    },

    displayAnteCall2Room: (pInfo) => {
        settingThePotOnAnteCall(pInfo, inGameBorderP4);

        displayActionP4.style.display = 'block';
        displayActionP4.innerText = 'Call ' + pInfo.anteCalled;

        gameObj.p4AnteCalled = 1;

        gameObj.p4ActedInCurrentRound = true;
        gameObj.p4ActionWords = displayActionP4.innerText;

        if (gameObj.gameSize === 4) {
            inGameLogic4Players.theSB4(3, playerTwo, 'p2Folded', playerOne);
        }

        if (gameObj.gameSize === 5) {
            playerFive.settingTurn();
        }

        if (gameObj.gameSize === 6) {
            playerFive.settingTurn();
        }

        if (gameObj.gameSize === 7) {
            playerFive.settingTurn();
        }

        if (gameObj.gameSize === 8) {
            playerEight.settingTurn();
        }

        if (gameObj.gameSize === 9) {
            playerEight.settingTurn();
        }
    },

    displayBet2Room: (pInfo, betType) => {
        if (betType === 'asBettor') {
            settingThePotOnBet(pInfo, inGameBorderP4);
            gameObj.currentBettor = 'Player 4';
            gameObj.lastBet = pInfo.betAmount;
            displayActionP4.innerText = 'Bet ' + pInfo.betAmount;
            gameObj.p4In = 1;
            if (pInfo.chips > 0) {
                displayActionP4.innerText = 'Bet ' + pInfo.betAmount;
            } else {
                displayActionP4.innerText = 'All In!';
                gameObj.p4Folded = 1;
            }
        } else if (betType === 'asRaiser') {
            settingThePotOnRaise(pInfo, inGameBorderP4);
            gameObj.currentRaiser = 'Player 4';
            gameObj.lastRaise = pInfo.reRaiseAmount;
            displayActionP4.innerText = 'Raise ' + pInfo.reRaiseAmount;
            gameObj.p4In = 0.5;
            if (pInfo.chips > 0) {
                displayActionP4.innerText = 'Raise ' + pInfo.reRaiseAmount;
            } else {
                displayActionP4.innerText = 'All In!';
                gameObj.p4Folded = 1;
            }
        }

        displayActionP4.style.display = 'block';

        gameObj.p4ActedInCurrentRound = true;
        gameObj.p4ActionWords = displayActionP4.innerText;

        if (gameObj.gameSize === 4) {
            inGameLogic4Players.pBettingOrRaising4(playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
        }

        if (gameObj.gameSize === 5) {
            inGameLogic5Players.anyPlayerBettingOrRaising(playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
        }

        if (gameObj.gameSize === 6) {
            inGameLogic6Players.playerBettingOrRaising(playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
        }
        
        if (gameObj.gameSize === 7) {
            inGameLogic7Players.pBettingOrRaising7(playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
        }
        
        if (gameObj.gameSize === 8) {
            inGameLogic8Players.pBettingOrRaising8(playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
        }
        
        if (gameObj.gameSize === 9) {
            inGameLogic9Players.pBettingOrRaising9(playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
        }
    },

    displayFold2Room: (disconnectIndicator) => {
        displayingPlayerFold2Room(inGameBorderP4);
        gameObj.p4Folded = 1;
        gameObj.totalPlayersFolded++;

        if (disconnectIndicator) {
            displayActionP4.innerText = 'Disconnected';
            gameObj.p4Disconnected = true;
        } else {
            displayActionP4.innerText = 'Fold';
        }

        displayActionP4.style.display = 'block';
        divForPlacementCardImgP4.style.display = 'none';

        optionsForWinnerOfRound.removeChild(winnerOptionP4);

        gameObj.p4ActedInCurrentRound = true;
        gameObj.p4ActionWords = displayActionP4.innerText;
        
        if (gameObj.gameSize === 4) {
            if (gameObj.totalPlayersFolded === 3) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.p2SpotsFromBB4(3, playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.p2SpotsFromBB4(2, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.p2SpotsFromBB4(1, playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.p2SpotsFromBB4(3, playerTwo, 'p2Folded', playerOne);
                }
            }

            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.theSB4(3, playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.theSB4(2, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.theSB4(1, playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.theSB4(3, playerTwo, 'p2Folded', playerOne);
                }
            }

            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic4Players.pNext2TheBB4(3, playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.pNext2TheBB4(2, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.pNext2TheBB4(1, playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.pNext2TheBB4(3, playerTwo, 'p2Folded', playerOne);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic4Players.theBB4(3, playerTwo, 'p2Folded', playerOne);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic4Players.theBB4(2, playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic4Players.theBB4(1, playerThree, 'p3Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic4Players.theBB4(3, playerTwo, 'p2Folded', playerOne);
                }   
            }
        }
        if (gameObj.gameSize === 5) {
            if (gameObj.totalPlayersFolded === 4) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.p2SpotsFromBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.p2SpotsFromBB5(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.p2SpotsFromBB5(2, playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.p2SpotsFromBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.p2SpotsFromBB5(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.p3SpotsFromBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.p3SpotsFromBB5(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.p3SpotsFromBB5(2, playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.p3SpotsFromBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.p3SpotsFromBB5(1, playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.pNext2TheBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.pNext2TheBB5(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.pNext2TheBB5(2, playerFive, 'p5Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.pNext2TheBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.pNext2TheBB5(1, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic5Players.theBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.theBB5(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.theBB5(2, playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.theBB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.theBB5(1, playerThree, 'p3Folded', playerFive);
                }
            }

            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.theSB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.theSB5(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.theSB5(2, playerFive, 'p5Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.theSB5(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic5Players.theSB5(1, playerFive);
                }
            }
        }
        if (gameObj.gameSize === 6) {
            if (gameObj.totalPlayersFolded === 5) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p3SpotsFromBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p4SpotsFromBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.pNext2TheBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.pNext2TheBB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.pNext2TheBB6(2, playerFive, 'p5Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.pNext2TheBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.pNext2TheBB6(1, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.pNext2TheBB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic6Players.theBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.theBB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.theBB6(2, playerFive, 'p5Folded', playerThree, 'p3Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.theBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.theBB6(1, playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.theBB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.theSB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.theSB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.theSB6(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.theSB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.theSB6(1, playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.theSB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p2SpotsFromBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        }
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p4SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p5SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
                
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.pNext2TheBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(2, playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.pNext2TheBB7(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic7Players.theBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theBB7(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theBB7(1, playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.theSB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theSB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theSB7(2, playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theSB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.theSB7(1, playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theSB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theSB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p3SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerFive.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p2SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        }       
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerEight.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p4SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerEight.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p5SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerEight.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.pNext2TheBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.pNext2TheBB8(2, playerEight, 'p8Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic8Players.theBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerThree, 'p3Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theBB8(2, playerEight, 'p8Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theBB8(1, playerThree, 'p3Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerEight.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p6SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerEight);
                }
        
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerEight.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p3SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerEight.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p2SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerEight, 'p8Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerEight.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.theSB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theSB8(4, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theSB8(3, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theSB8(7, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic8Players.theSB8(2, playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theSB8(5, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theSB8(6, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theSB8(1, playerEight);
                }
            }
        }      
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerEight.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerEight, 'p8Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerEight.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerEight, 'p8Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerEight.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.pNext2BB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(2, playerEight, 'p8Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerThree, 'p3Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerThree, 'p3Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theBigBlind9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(1, playerThree, 'p3Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(2, playerEight, 'p8Folded', playerThree, 'p3Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerEight.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerEight.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerEight, 'p8Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerEight.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerEight, 'p8Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerEight.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.theSmallBlind9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(6, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(1, playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(2, playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 9) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerEight.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo); 
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 5' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 5') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(6, layerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive, 'p5Folded', playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerEight, 'p8Folded', playerNine);
                }
            }
        }
    },
};

const playerFive = {
    active: false,

    isBB: (rS, indicator) => {
        gameObj.bB = 5;
        inGameBorderP5.style.color = 'green';

        gIBigBlind.innerHTML = 'Big Blind: ' + inGameBorderP5.innerHTML.split(" ")[0];

        gameObj.p5AnteCalled = 1;

        if (rS === 5) {
            gameObj.sB = 4;
            inGameBorderP4.style.color = 'red';

            gISmallBlind.innerHTML = 'Big Blind: ' + inGameBorderP4.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p2Folded === 0) {
                    playerTwo.settingTurn();
                }

                if (gameObj.p2Folded === 1) {
                    playerOne.settingTurn();
                }

                if (user['inGameTurn'] === 5) {
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
                }

            }

        }

        if (rS === 6) {
            gameObj.sB = 4;
            inGameBorderP4.style.color = 'red';

            gISmallBlind.innerHTML = 'Big Blind: ' + inGameBorderP4.innerHTML.split(" ")[0];


            if (!indicator) {

                if (gameObj.p2Folded === 0) {
                    playerTwo.settingTurn();
                }

                if (gameObj.p2Folded === 1) {
                    playerOne.settingTurn();
                }

                if (user['inGameTurn'] === 5) {
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
                }

            }

        }

        if (rS === 7) {
            gameObj.sB = 4;
            inGameBorderP4.style.color = 'red';

            gISmallBlind.innerHTML = 'Big Blind: ' + inGameBorderP4.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p2Folded === 0) {
                    playerTwo.settingTurn();
                }

                if (gameObj.p2Folded === 1) {
                    playerOne.settingTurn();
                }

                if (user['inGameTurn'] === 5) {
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
                }

            }

        }

        if (rS === 8) {
            gameObj.sB = 8;
            inGameBorderP8.style.color = 'red';

            gISmallBlind.innerHTML = 'Big Blind: ' + inGameBorderP8.innerHTML.split(" ")[0];

            if (!indicator) {

                if (gameObj.p2Folded === 0) {
                    playerTwo.settingTurn();
                }

                if (gameObj.p2Folded === 1) {
                    playerOne.settingTurn();
                }

                if (user['inGameTurn'] === 5) {
                    p.chips -= gameObj.bbAnte;
                    socket.emit('sendingBlindInfo', p, 'BB')
                }

                if (user['inGameTurn'] === 8) {
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
            gameObj.sB = 9;
            inGameBorderP9.style.color = 'red';

            playerTwo.settingTurn();

            if (user['inGameTurn'] === 9) {
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
        inGameBorderP5.style.border = '3px solid blue';
        inGameBorderP6.style.border = '3px solid black';
        inGameBorderP7.style.border = '3px solid black';
        inGameBorderP8.style.border = '3px solid black';
        inGameBorderP9.style.border = '3px solid black';


        gameObj.currentTurn = 5;

    },

    checks: () => {
        if (gameObj.currentTurn === 5) {
            if (gameObj.currentBettor === '') {
                socket.emit('p5Checks')
            }
        }
    },

    callsBetEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p5AnteCalled === 1) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.bbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.bbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p5AnteCalled === 0.5) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet - gameObj.sbAnte;
                    p.callAmount = gameObj.lastBet - gameObj.sbAnte;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            } else if (gameObj.p5AnteCalled === 0) {
                if (gameObj.lastBet < p.chips) {
                    p.chips -= gameObj.lastBet;
                    p.callAmount = gameObj.lastBet;
                } else {
                    p.callAmount = p.chips;
                    p.chips -= p.chips;
                }
            }
            socket.emit('p5CallsBet', p, type)
        }
    },

    callsRaiseEMITTER: (type) => {
        if (gameObj.currentBettor != '') {
            if (gameObj.p5AnteCalled === 1) {
                if (gameObj.p5In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.bbAnte;
                } else if (gameObj.p5In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.bbAnte;
                } else if (gameObj.p5In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.bbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.bbAnte;
                }
            } else if (gameObj.p5AnteCalled === 0.5) {
                if (gameObj.p5In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet - gameObj.sbAnte;
                } else if (gameObj.p5In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount - gameObj.sbAnte;
                } else if (gameObj.p5In === 0) {
                    p.chips -= gameObj.lastRaise - gameObj.sbAnte;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.sbAnte;
                }
            } else if (gameObj.p5AnteCalled === 0) {
                if (gameObj.p5In === 1) {
                    p.chips -= gameObj.lastRaise - gameObj.lastBet;
                    p.calledRaiseAmount = gameObj.lastRaise - gameObj.lastBet;
                } else if (gameObj.p5In === 0.5) {
                    p.chips -= gameObj.lastRaise - p.reRaiseAmount;
                    p.calledRaiseAmount = gameObj.lastRaise - p.reRaiseAmount;
                } else if (gameObj.p5In === 0) {
                    p.chips -= gameObj.lastRaise;
                    p.calledRaiseAmount = gameObj.lastRaise;
                }
            } 
            socket.emit('p5CallsBet', p, type)  
        }
    },

    callsAnteEMITTER: (blind) => {
        if (blind === 'SB') {
            p.chips -= gameObj.sbAnte;
            p.anteCalled = gameObj.sbAnte;
        } else if (blind === 'none') {
            p.chips -= gameObj.bbAnte;
            p.anteCalled = gameObj.bbAnte;
        }
        socket.emit('p5CallsAnte', p)
    },

    calls: () => {
        if (gameObj.currentTurn === 5) {
            if (gameObj.gameSize === 5) {
                if (gameObj.bB === 1 || gameObj.bB === 3 || gameObj.bB === 4) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFive.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFive.callsBetEMITTER('currentBettor');
                            } else {
                                playerFive.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFive.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFive.callsBetEMITTER('currentBettor');
                            } else {
                                playerFive.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 5) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise === 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
            if (gameObj.gameSize === 6) {
                if (gameObj.bB === 1 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 5) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFive.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFive.callsBetEMITTER('currentBettor');
                            } else {
                                playerFive.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFive.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFive.callsBetEMITTER('currentBettor');
                            } else {
                                playerFive.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 5) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }       
            if (gameObj.gameSize === 7) {
                if (gameObj.bB === 1 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 6 || gameObj.bB === 7) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFive.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFive.callsBetEMITTER('currentBettor');
                            } else {
                                playerFive.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFive.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFive.callsBetEMITTER('currentBettor');
                            } else {
                                playerFive.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 5) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }         
            if (gameObj.gameSize === 8) {
                if (gameObj.bB === 1 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 6 || gameObj.bB === 7 || gameObj.bB === 8) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFive.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFive.callsBetEMITTER('currentBettor');
                            } else {
                                playerFive.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFive.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFive.callsBetEMITTER('currentBettor');
                            } else {
                                playerFive.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 5) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }        
            if (gameObj.gameSize === 9) {
                if (gameObj.bB === 1 || gameObj.bB === 3 || gameObj.bB === 4 || gameObj.bB === 6 || gameObj.bB === 7 || gameObj.bB === 8 || gameObj.bB === 9) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFive.callsAnteEMITTER('none');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFive.callsBetEMITTER('currentBettor');
                            } else {
                                playerFive.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 2) {
                    if (gameObj.currentRound === 0) {
                        if (gameObj.currentBettor === '') {
                            playerFive.callsAnteEMITTER('SB');
                        } else {
                            if (gameObj.lastRaise <= 0) {
                                playerFive.callsBetEMITTER('currentBettor');
                            } else {
                                playerFive.callsRaiseEMITTER('currentRaiser');
                            }
                        }
                    } else if (gameObj.currentRound >= 1) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                } else if (gameObj.bB === 5) {
                    if (gameObj.currentRound >= 0) {
                        if (gameObj.lastRaise <= 0) {
                            playerFive.callsBetEMITTER('currentBettor');
                        } else {
                            playerFive.callsRaiseEMITTER('currentRaiser');
                        }
                    }
                }
            }
        }
    },

    betsEMITTER: () => {
        if (gameObj.currentTurn === 5) {
            if (gameObj.currentBettor === '') {
                p5BetAmountInput.style.display = 'block';
                p5BetSubmitButton.style.display = 'block';
                p5BetAmountInput.value = '';
            } else {
                p5RaiseAmountInput.style.display = 'block';
                p5RaiseSubmitButton.style.display = 'block';
                p5RaiseAmountInput.value = '';
            }
        }
    },

    bets: (type) => {
        if (p5BetAmountInput.value > 0) {
            p.chips -= p5BetAmountInput.value;
            p.betAmount = Number(p5BetAmountInput.value);
            socket.emit('p5SubmitsBet', p, type)
            p5BetAmountInput.style.display = 'none';
            p5BetSubmitButton.style.display = 'none';
        }
    },

    raises: (type) => {
        if (p5RaiseAmountInput.value > gameObj.lastBet) {
            p.chips -= p5RaiseAmountInput.value;
            p.reRaiseAmount = Number(p5RaiseAmountInput.value);
            socket.emit('p5SubmitsBet', p, type);
            p5RaiseAmountInput.style.display = 'none';
            p5RaiseSubmitButton.style.display = 'none';
        }
    },

    submitsBet: () => {
        playerFive.bets('asBettor');
    },

    submitsRaise: () => {
        playerFive.raises('asRaiser');
    },

    folds: () => {
        socket.emit('p5Folds');
    },

    ////// DISPLAY EVENTS 2 ROOM METHODS //////

    displayCheck2Room: () => {
        displayActionP5.style.display = 'block';
        displayActionP5.innerText = 'Check';

        if (gameObj.gameSize === 5) {
            if (gameObj.bB === 5) {
                inGameLogic5Players.anyPlayerChecking(4, playerFour, 'p4Folded', playerFive, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic5Players.anyPlayerChecking(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                    }               
                    if (gameObj.bB === 2) {
                        inGameLogic5Players.anyPlayerChecking(0, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                    }               
                    if (gameObj.bB === 3) {
                        inGameLogic5Players.anyPlayerChecking(2, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                    }
                    if (gameObj.bB === 4) {
                        inGameLogic5Players.anyPlayerChecking(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                    }
                }
            }
        }
        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 5) {
                inGameLogic6Players.pChecking(5, playerFour, 'p4Folded', playerFive, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic6Players.pChecking(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic6Players.pChecking(0, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic6Players.pChecking(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour)
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic6Players.pChecking(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic6Players.pChecking(2, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                    }
                }
            }
        }
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 5) {
                inGameLogic7Players.pChecking7(6, playerFour, 'p4Folded', playerFive, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic7Players.pChecking7(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic7Players.pChecking7(0, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic7Players.pChecking7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic7Players.pChecking7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic7Players.pChecking7(2, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic7Players.pChecking7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                }
            }
        }    
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 5) {
                inGameLogic8Players.pChecking8(7, playerEight, 'p8Folded', playerFive, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic8Players.pChecking8(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic8Players.pChecking8(0, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic8Players.pChecking8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic8Players.pChecking8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic8Players.pChecking8(2, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic8Players.pChecking8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic8Players.pChecking8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                    }
                }
            }
        }    
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 5) {
                inGameLogic9Players.pChecking9(8, playerNine, 'p9Folded', playerFive, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
            } else {
                if (gameObj.currentRound >= 1) {
                    if (gameObj.bB === 1) {
                        inGameLogic9Players.pChecking9(1, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                    }
                
                    if (gameObj.bB === 2) {
                        inGameLogic9Players.pChecking9(0, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                    }
                
                    if (gameObj.bB === 3) {
                        inGameLogic9Players.pChecking9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                    }
                
                    if (gameObj.bB === 4) {
                        inGameLogic9Players.pChecking9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                    }
                
                    if (gameObj.bB === 6) {
                        inGameLogic9Players.pChecking9(2, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                    }
                
                    if (gameObj.bB === 7) {
                        inGameLogic9Players.pChecking9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                    }
                
                    if (gameObj.bB === 8) {
                        inGameLogic9Players.pChecking9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                    }
                
                    if (gameObj.bB === 9) {
                        inGameLogic9Players.pChecking9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                    }
                }
            }
        }
    },

    displayCall2Room: (pInfo, tT) => {
        if (tT === 'currentBettor') {
            settingThePotOnCall(pInfo, inGameBorderP5);
            gameObj.p5In = 1;
            if (pInfo.chips > 0) {
                displayActionP5.innerText = 'Calls ' + gameObj.lastBet;
            } else {
                displayActionP5.innerText = 'All In!';
                gameObj.p5Folded = 1;
            }
        } else if (tT === 'currentRaiser') {
            settingThePotOnRaiseCall(pInfo, inGameBorderP5);
            displayActionP5.innerText = 'Calls ' + gameObj.lastRaise;
            if (pInfo.chips > 0) {
                displayActionP5.innerText = 'Calls ' + gameObj.lastRaise;
            } else {
                displayActionP5.innerText = 'All In!';
                gameObj.p5Folded = 1;
            }
        }

        displayActionP5.style.display = 'block';

        if (gameObj.gameSize === 5) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.p3SpotsFromBB5(2, playerTwo, 'p2Folded', playerOne);
                }
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.p3SpotsFromBB5(1, playerTwo);
                }
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.p3SpotsFromBB5(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.p3SpotsFromBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }   
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.theSB5(2, playerTwo, 'p2Folded', playerFive);
                }
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.theSB5(1, playerFive);
                }
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.theSB5(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFive);
                }
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.theSB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFive);
                }
            }       
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.p2SpotsFromBB5(2, playerTwo, 'p2Folded', playerOne);
                }
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.p2SpotsFromBB5(1, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.p2SpotsFromBB5(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.p2SpotsFromBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            } 
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.pNext2TheBB5(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.pNext2TheBB5(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.pNext2TheBB5(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.pNext2TheBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic5Players.theBB5(2, playerTwo, 'p2Folded', playerFour, 'p4Folded', playerFive);
                }
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic5Players.theBB5(1, playerFour, 'p4Folded', playerFive);
                }
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic5Players.theBB5(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerFive);
                }
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic5Players.theBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        }

        if (gameObj.gameSize === 6) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerTwo, 'p2Folded', playerOne)
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerTwo);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree)
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.theSB6(2, playerTwo, 'p2Folded', playerFive)
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.theSB6(1, playerFive);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.theSB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive);
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.theSB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFive);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.theSB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerTwo, 'p2Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree)
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.pNext2TheBB6(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.pNext2TheBB6(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.pNext2TheBB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.pNext2TheBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.pNext2TheBB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.theBB6(2, playerTwo, 'p2Folded', playerFour, 'p4Folded', playerFive);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.theBB6(1, playerFour, 'p4Folded', playerFive);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.theBB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerFive);
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.theBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.theBB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerTwo, 'p2Folded', playerOne);
                } 
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                } 
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                } 
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                } 
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        }
        
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theSB7(2, playerTwo, 'p2Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theSB7(1, playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theSB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theSB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theSB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theSB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.theBB7(2, playerTwo, 'p2Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.theBB7(1, playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.theBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.theBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.theBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.theBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        }
        
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theSB8(2, playerTwo, 'p2Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theSB8(1, playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theSB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theSB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theSB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theSB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theSB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.theBB8(2, playerTwo, 'p2Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.theBB8(1, playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.theBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.theBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.theBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.theBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.theBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(2, playerTwo, 'p2Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        }
        
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerTwo);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(2, playerTwo, 'p2Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(1, playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerFive);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(2, playerTwo, 'p2Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(1, playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerTwo, 'p2Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        
            if (gameObj.bB === 9) {
                if (gameObj[tT] === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(2, playerTwo, 'p2Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerFive);
                }
        
                if (gameObj[tT] === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj[tT] === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
            }
        }
    },

    displayAnteCall2Room: (pInfo) => {
        settingThePotOnAnteCall(pInfo, inGameBorderP5);

        displayActionP5.style.display = 'block';
        displayActionP5.innerText = 'Calls ' + pInfo.anteCalled;

        gameObj.p5AnteCalled = 1;

        if (gameObj.gameSize === 5) {
            playerTwo.settingTurn();
        }

        if (gameObj.gameSize === 6) {
            playerTwo.settingTurn();
        }

        if (gameObj.gameSize === 7) {
            playerTwo.settingTurn();
        }

        if (gameObj.gameSize === 8) {
            playerTwo.settingTurn();
        }

        if (gameObj.gameSize === 9) {
            playerTwo.settingTurn();
        }
    },

    displayBet2Room: (pInfo, betType) => {

        if (betType === 'asBettor') {
            settingThePotOnBet(pInfo, inGameBorderP5);
            gameObj.currentBettor = 'Player 5';
            gameObj.lastBet = pInfo.betAmount;
            gameObj.p5In = 1;
            if (pInfo.chips > 0) {
                displayActionP5.innerText = 'Bets ' + pInfo.betAmount;
            } else {
                displayActionP5.innerText = 'All In!';
                gameObj.p5Folded = 1;
            }
        } else if (betType === 'asRaiser') {
            settingThePotOnRaise(pInfo, inGameBorderP5);
            gameObj.currentRaiser = 'Player 5';
            gameObj.lastRaise = pInfo.reRaiseAmount;
            displayActionP5.innerText = 'Bets ' + pInfo.reRaiseAmount;
            gameObj.p5In = 0.5;
            if (pInfo.chips > 0) {
                displayActionP5.innerText = 'Bets ' + pInfo.reRaiseAmount;
            } else {
                displayActionP5.innerText = 'All In!';
                gameObj.p5Folded = 1;
            }
        }

        displayActionP5.style.display = 'block';

        if (gameObj.gameSize === 5) {
            inGameLogic5Players.anyPlayerBettingOrRaising(playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
        }
        if (gameObj.gameSize === 6) {
            inGameLogic6Players.playerBettingOrRaising(playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour)
        } 
        if (gameObj.gameSize === 7) {
            inGameLogic7Players.pBettingOrRaising7(playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
        }     
        if (gameObj.gameSize === 8) {
            inGameLogic8Players.pBettingOrRaising8(playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
        }     
        if (gameObj.gameSize === 9) {
            inGameLogic9Players.pBettingOrRaising9(playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
        }
    },

    displayFold2Room: (disconnectIndicator) => {
        displayingPlayerFold2Room(inGameBorderP5);
        gameObj.p5Folded = 1;

        if (disconnectIndicator) {
            displayActionP5.innerText = 'Disconnected';
            gameObj.p5Disconnected = true;
        } else {
            displayActionP5.innerText = 'Fold';
        }

        displayActionP5.style.display = 'block';
        divForPlacementCardImgP5.style.display = 'none';

        if (gameObj.gameSize === 5) {
            if (gameObj.totalPlayersFolded === 4) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.p3SpotsFromBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.p3SpotsFromBB5(2, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.p3SpotsFromBB5(1, playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.p3SpotsFromBB5(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.p3SpotsFromBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }       
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.theSB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.theSB5(2, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.theSB5(1, playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.theSB5(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.theSB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.p2SpotsFromBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.p2SpotsFromBB5(2, playerTwo, 'p2Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.p2SpotsFromBB5(1, playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.p2SpotsFromBB5(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.p2SpotsFromBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic5Players.pNext2TheBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                        }
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.pNext2TheBB5(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.pNext2TheBB5(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.pNext2TheBB5(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.pNext2TheBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic5Players.theBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic5Players.theBB5(2, playerTwo, 'p2Folded', playerFour, 'p4Folded', playerOne);
                }

                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic5Players.theBB5(1, playerFour, 'p4Folded', playerTwo);
                }

                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic5Players.theBB5(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour);
                }

                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic5Players.theBB5(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree);
                }
            }
        }
        if (gameObj.gameSize === 6) {
            if (gameObj.totalPlayersFolded === 5) {
                currentRoundHasEnded();
            }

            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p4SpotsFromBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p4SpotsFromBB6(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p4SpotsFromBB6(1, playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p4SpotsFromBB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p4SpotsFromBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p4SpotsFromBB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.theSB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.theSB6(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.theSB6(1, playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.theSB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.theSB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.theSB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p2SpotsFromBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p2SpotsFromBB6(2, playerTwo, 'p2Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p2SpotsFromBB6(1, playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p2SpotsFromBB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p2SpotsFromBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p2SpotsFromBB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.pNext2TheBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.pNext2TheBB6(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.pNext2TheBB6(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.pNext2TheBB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.pNext2TheBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.pNext2TheBB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic6Players.theBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.theBB6(2, playerTwo, 'p2Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.theBB6(1, playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.theBB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.theBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.theBB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerSix);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic6Players.p3SpotsFromBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic6Players.p3SpotsFromBB6(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic6Players.p3SpotsFromBB6(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic6Players.p3SpotsFromBB6(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic6Players.p3SpotsFromBB6(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic6Players.p3SpotsFromBB6(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
            }
        }   
        if (gameObj.gameSize === 7) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p5SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p5SpotsFromBB7(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p5SpotsFromBB7(1, playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p5SpotsFromBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p5SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p5SpotsFromBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p5SpotsFromBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.theSB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theSB7(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theSB7(1, playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theSB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theSB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theSB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theSB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p2SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p2SpotsFromBB7(2, playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p2SpotsFromBB7(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p2SpotsFromBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p2SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p2SpotsFromBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p2SpotsFromBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.pNext2TheBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.pNext2TheBB7(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.pNext2TheBB7(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.pNext2TheBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.pNext2TheBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.pNext2TheBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.pNext2TheBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic7Players.theBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.theBB7(2, playerTwo, 'p2Folded', playerFour, 'p4Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.theBB7(1, playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.theBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.theBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.theBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.theBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p4SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
                
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p4SpotsFromBB7(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p4SpotsFromBB7(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p4SpotsFromBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p4SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p4SpotsFromBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p4SpotsFromBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic7Players.p3SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic7Players.p3SpotsFromBB7(2, playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic7Players.p3SpotsFromBB7(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic7Players.p3SpotsFromBB7(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic7Players.p3SpotsFromBB7(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic7Players.p3SpotsFromBB7(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic7Players.p3SpotsFromBB7(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
            }
        }    
        if (gameObj.gameSize === 8) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p6SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p6SpotsFromBB8(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p6SpotsFromBB8(1, playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p6SpotsFromBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p6SpotsFromBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p6SpotsFromBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p6SpotsFromBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p6SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.theSB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theSB8(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theSB8(1, playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theSB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theSB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theSB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theSB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theSB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p3SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p3SpotsFromBB8(2, playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p3SpotsFromBB8(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p3SpotsFromBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p3SpotsFromBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p3SpotsFromBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p3SpotsFromBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p3SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p2SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p2SpotsFromBB8(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p2SpotsFromBB8(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p2SpotsFromBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p2SpotsFromBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p2SpotsFromBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p2SpotsFromBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p2SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === '') {
                    if (disconnectIndicator) {
                        inGameLogic8Players.theBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                    }
                }

                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.theBB8(2, playerTwo, 'p2Folded', playerEight, 'p8Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.theBB8(1, playerEight, 'p8Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.theBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.theBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.theBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight, 'p8Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.theBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight, 'p8Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.theBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p5SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p5SpotsFromBB8(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p5SpotsFromBB8(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p5SpotsFromBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p5SpotsFromBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p5SpotsFromBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p5SpotsFromBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p5SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.p4SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.p4SpotsFromBB8(2, playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.p4SpotsFromBB8(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.p4SpotsFromBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.p4SpotsFromBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.p4SpotsFromBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.p4SpotsFromBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.p4SpotsFromBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '') {
                    if (gameObj.currentRound <= 0) {
                        playerTwo.settingTurn();
                    } else {
                        if (disconnectIndicator) {
                            inGameLogic8Players.pNext2TheBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                        }
                    }
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic8Players.pNext2TheBB8(2, playerTwo, 'p2Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic8Players.pNext2TheBB8(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic8Players.pNext2TheBB8(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic8Players.pNext2TheBB8(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic8Players.pNext2TheBB8(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic8Players.pNext2TheBB8(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic8Players.pNext2TheBB8(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
            }
        }    
        if (gameObj.gameSize === 9) {
            if (gameObj.bB === 1) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerTwo.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p7SpotsFromBB9(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p7SpotsFromBB9(1, playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p7SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p7SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p7SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p7SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p7SpotsFromBB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p7SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 2) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerTwo.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theSmallBlind9(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theSmallBlind9(1, playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theSmallBlind9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theSmallBlind9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theSmallBlind9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theSmallBlind9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theSmallBlind9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theSmallBlind9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 3) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerTwo.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p4SpotsFromBB9(2, playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p4SpotsFromBB9(1, playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p4SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p4SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p4SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p4SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p4SpotsFromBB9(7, playerTwo, 'p2Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p4SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 4) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerTwo.settingTurn();
                }
                
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p3SpotsFromBB9(2, playerTwo, 'p2Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p3SpotsFromBB9(1, playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p3SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p3SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p3SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p3SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p3SpotsFromBB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p3SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 5) {
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.theBigBlind9(2, playerTwo, 'p2Folded', playerNine, 'p9Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.theBigBlind9(1, playerNine, 'p9Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.theBigBlind9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerNine, 'p9Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.theBigBlind9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerNine, 'p9Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.theBigBlind9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerNine, 'p9Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.theBigBlind9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerNine, 'p9Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.theBigBlind9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerNine);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.theBigBlind9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 6) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerTwo.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p6SpotsFromBB9(2, playerTwo, 'p2Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p6SpotsFromBB9(1, playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p6SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p6SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p6SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p6SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p6SpotsFromBB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p6SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 7) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerTwo.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p5SpotsFromBB9(2, playerTwo, 'p2Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p5SpotsFromBB9(1, playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p5SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p5SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p5SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p5SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p5SpotsFromBB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p5SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 8) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerTwo.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.p2SpotsFromBB9(2, playerTwo, 'p2Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.p2SpotsFromBB9(1, playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.p2SpotsFromBB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.p2SpotsFromBB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.p2SpotsFromBB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.p2SpotsFromBB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerFour, 'p4Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.p2SpotsFromBB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.p2SpotsFromBB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        
            if (gameObj.bB === 9) {
                if (gameObj.currentBettor === '' && gameObj.currentRound === 0) {
                    playerTwo.settingTurn();
                }
        
                if (gameObj.currentBettor === 'Player 1' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 1') {
                    inGameLogic9Players.pNext2BB9(2, playerTwo, 'p2Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerOne);
                }
        
                if (gameObj.currentBettor === 'Player 2' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 2') {
                    inGameLogic9Players.pNext2BB9(1, playerEight, 'p8Folded', playerNine, 'p9Folded', playerTwo);
                }
        
                if (gameObj.currentBettor === 'Player 3' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 3') {
                    inGameLogic9Players.pNext2BB9(5, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerThree);
                }
        
                if (gameObj.currentBettor === 'Player 4' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 4') {
                    inGameLogic9Players.pNext2BB9(6, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerEight, 'p8Folded', playerNine);
                }
        
                if (gameObj.currentBettor === 'Player 6' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 6') {
                    inGameLogic9Players.pNext2BB9(3, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSix);
                }
        
                if (gameObj.currentBettor === 'Player 7' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 7') {
                    inGameLogic9Players.pNext2BB9(4, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerEight, 'p8Folded', playerNine, 'p9Folded', playerSeven);
                }
        
                if (gameObj.currentBettor === 'Player 8' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 8') {
                    inGameLogic9Players.pNext2BB9(7, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
        
                if (gameObj.currentBettor === 'Player 9' && gameObj.currentRaiser === '' || gameObj.currentRaiser === 'Player 9') {
                    inGameLogic9Players.pNext2BB9(8, playerTwo, 'p2Folded', playerOne, 'p1Folded', playerSix, 'p6Folded', playerSeven, 'p7Folded', playerThree, 'p3Folded', playerFour, 'p4Folded', playerEight);
                }
            }
        }

    },


};


