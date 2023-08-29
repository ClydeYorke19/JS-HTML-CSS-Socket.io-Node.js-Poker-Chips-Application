
const roundSetter = () => {
    if (gameObj.currentRound === 0) {
        changingTheRound(1);
    } else if (gameObj.currentRound === 1) {
        changingTheRound(2);
    } else if (gameObj.currentRound === 2) {
        changingTheRound(3);
    } else if (gameObj.currentRound === 3) {
        // changingTheRound(2);
        currentRoundHasEnded();
    }

    console.log('gameObj after round: ');
    console.log(gameObj);
}

var inGameLogic4Players;

inGameLogic4Players = {

    theBB4: (spaces1, ...args1) => {
        if (spaces1 === 1) {
            if (gameObj[args1[1]] === 0) {
                args1[0].settingTurn('i');
                roundSetter();
            }

            if (gameObj[args1[1]] === 1) {
                args1[2].settingTurn('i');
                roundSetter();
            }

        } else if (spaces1 === 2) {
            if (gameObj[args1[1]] === 0) {
                args1[0].settingTurn();
            }

            if (gameObj[args1[1]] === 1) {
                args1[2].settingTurn('i');
                roundSetter();
            } 

            if (args1[3] && args1[4]) {
                if (gameObj[args1[1]] === 1 && gameObj[args1[3]] === 1) {
                    args1[4].settingTurn('i');
                }
            }
            
        } else if (spaces1 === 3) {
            if (gameObj[args1[1]] === 0) {
                args1[0].settingTurn();
            }
            
            if (gameObj[args1[1]] === 1) {
                args1[2].settingTurn();
            }

            if (args1[3] && args1[4]) {
                if (gameObj[args1[1]] === 1 && gameObj[args1[3]] === 1) {
                    args1[4].settingTurn('i');
                    roundSetter();
                }
            }
            
        }
        
    },

    theSB4: (spaces2, ...args2) => {
        if (spaces2 === 1) {
            args2[0].settingTurn('i');
            roundSetter();

        } else if (spaces2 === 2) {
            if (gameObj[args2[1]] === 0) {
                args2[0].settingTurn();
            }

            if (gameObj[args2[1]] === 1) {
                args2[2].settingTurn('i');
                roundSetter();
            }
            
        } else if (spaces2 === 3) {
            if (gameObj[args2[1]] === 0) {
                args2[0].settingTurn();
            }

            if (gameObj[args2[1]] === 1) {
                args2[2].settingTurn();
            }

            if (args2[3] && args2[4]) {
                if (gameObj[args2[1]] === 1 && gameObj[args2[3]] === 1) {
                    args2[4].settingTurn('i');
                    roundSetter();
                }
            } 
        }
    },

    pNext2TheBB4: (spaces3, ...args3) => {
        if (spaces3 === 1) {
            if (gameObj[args3[1]] === 0) {
                args3[0].settingTurn('i');
                roundSetter();
            }

            if (gameObj[args3[1]] === 1) {
                args3[2].settingTurn('i');
                roundSetter();
            }

            if (args3[3] && args3[4]) {
                if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1) {
                    args3[4].settingTurn('i');
                }
            }

        } else if (spaces3 === 2) {
            if (gameObj[args3[1]] === 0) {
                args3[0].settingTurn();
            }

            if (gameObj[args3[1]] === 1) {
                args3[2].settingTurn('i');
                roundSetter();
            }
            
        } else if (spaces3 === 3) {
            // if (gameObj[args3[1]] === 0) {
            //     args3[0].settingTurn();
            // }

            // if (gameObj[args3[1]] === 1) {
            //     args3[2].settingTurn();
            // }

            // if (args3[3] && args3[4]) {
            //     if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1) {
            //         args3[4].settingTurn('i');
            //         roundSetter();
            //     }
            // }

            if (args3[3] && args3[4]) {
                if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1) {
                    args3[4].settingTurn('i');
                    roundSetter();
                }
            }
            if (gameObj[args3[1]] === 1) {
                args3[2].settingTurn();
            }

            if (gameObj[args3[1]] === 0) {
                args3[0].settingTurn();
            }
            
        }
    
    },
       
    p2SpotsFromBB4: (spaces4, ...args4) => {
            
        if (spaces4 === 1) {
            args4[0].settingTurn('i');
            roundSetter();
            
        } else if (spaces4 === 2) {
            if (gameObj[args4[1]] === 0) {
                args4[0].settingTurn();
            }

            if (gameObj[args4[1]] === 1) {
                args4[2].settingTurn('i');
                roundSetter();
            }
            
        } else if (spaces4 === 3) {
            if (gameObj[args4[1]] === 0) {
                args4[0].settingTurn();
            }
            // args4[0].settingTurn();

            if (gameObj[args4[1]] === 1) {
                args4[2].settingTurn();
            }

            if (args4[3] && args4[4]) {
                if (gameObj[args4[1]] === 1 && gameObj[args4[3]] === 1) {
                    args4[4].settingTurn('i');
                    roundSetter();
                }
            }
            
        }
        
    },

    pBettingOrRaising4: (...a) => {
        
        if (gameObj[a[1]] === 0) {
            a[0].settingTurn();
        }

        if (gameObj[a[1]] === 1) {
            a[2].settingTurn();
        }

        if (gameObj[a[1]] === 1 && gameObj[a[3]] === 1) {
            a[4].settingTurn();
        }
    
        
    },

    pChecking4: (spaces5, ...args5) => {
        if (spaces5 === 0) {
            if (gameObj[args5[1]] === 0) {
                args5[0].settingTurn();
            }

            if (gameObj[args5[1]] === 1) {
                args5[2].settingTurn();
            }

            if (gameObj[args5[1]] === 1 && gameObj[args5[3]] === 1) {
                args5[4].settingTurn();
            }
            
        } else if (spaces5 === 1) {
            args5[0].settingTurn('i');
            roundSetter();

            if (gameObj[args5[1]] === 1) {
                args5[2].settingTurn('i');
            }

            if (gameObj[args5[1]] === 1 && gameObj[args5[3]] === 1) {
                args5[4].settingTurn('i');
            }
            
        } else if (spaces5 === 2) {
            if (gameObj[args5[1]] === 0) {
                args5[0].settingTurn();
            }

            if (gameObj[args5[1]] === 1) {
                args5[2].settingTurn('i');
                roundSetter();
            }

            if (gameObj[args5[1]] === 1 && gameObj[args5[3]] === 1) {
                args5[4].settingTurn('i');
            }
            
        } else if (spaces5 === 3) {
            if (gameObj.currentRound === 0) {
                args5[0].settingTurn('i');
                roundSetter();

                if (gameObj[args5[1]] === 1) {
                    args5[2].settingTurn('i');
                }

            } else if (gameObj.currentRound >= 1) {
                if (gameObj[args5[4]] === 0) {
                    args5[3].settingTurn();
                }

                if (gameObj[args5[4]] === 1) {
                    args5[5].settingTurn();
                }

                if (gameObj[args5[4]] === 1 && gameObj[args5[6]] === 1) {
                    args5[7].settingTurn('i');
                    roundSetter();
                }
            }
        }
    
    },

};

var inGameLogic5Players;

inGameLogic5Players = {
    theBB5: (s, ...a) => {
        if (s === 1) {
            if (gameObj[a[1]] === 0) {
                a[0].settingTurn();
                roundSetter();
            }
            

            if (gameObj[a[1]] === 1) {
                a[2].settingTurn();
                roundSetter();
            }

        } else if (s === 2) {
            if (gameObj[a[1]] === 0) {
                a[0].settingTurn();
            }

            if (gameObj[a[1]] === 1) {
                a[2].settingTurn();
                roundSetter();
            }

            if (gameObj[a[1]] === 1 && gameObj[a[3]] === 1) {
                a[4].settingTurn();
            }
            
        } else if (s === 3) {
            if (gameObj[a[1]] === 0) {
                a[0].settingTurn();
            }
            
            if (gameObj[a[1]] === 1) {
                a[2].settingTurn();
            }

            if (gameObj[a[1]] === 1 && gameObj[a[3]] === 1) {
                a[4].settingTurn();
                roundSetter();
            }

            if (a[5] && a[6]) {
                if (gameObj[a[1]] === 1 && gameObj[a[3]] === 1 && gameObj[a[5]] === 1) {
                    a[6].settingTurn();
                }
            }
            
        } else if (s === 4) {
            if (gameObj[a[1]] === 0) {
                a[0].settingTurn();
            }

            if (gameObj[a[1]] === 1) {
                a[2].settingTurn();
            }

            if (gameObj[a[1]] === 1 && gameObj[a[3]] === 1) {
                a[4].settingTurn();
            }

            if (a[5] && a[6]) {
                if (gameObj[a[1]] === 1 && gameObj[a[3]] === 1  && gameObj[a[5]] === 1) {
                    a[6].settingTurn();
                    roundSetter();
                }
            }
            
        }
    },

    theSB5: (s2, ...a2) => {
        if (s2 === 1) {
            a2[0].settingTurn();
            roundSetter();

        } else if (s2 === 2) {
            if (gameObj[a2[1]] === 0) {
                a2[0].settingTurn();
            }

            if (gameObj[a2[1]] === 1) {
                a2[2].settingTurn();
                roundSetter();
            }
            
        } else if (s2 === 3) {
            if (gameObj[a2[1]] === 0) {
                a2[0].settingTurn();
            }

            if (gameObj[a2[1]] === 1) {
                a2[2].settingTurn();
            }

            if (gameObj[a2[1]] === 1 && gameObj[a2[3]] === 1) {
                a2[4].settingTurn();
                roundSetter();
            }
            
        } else if (s2 === 4) {
            if (gameObj[a2[1]] === 0) {
                a2[0].settingTurn();
            }

            if (gameObj[a2[1]] === 1) {
                a2[2].settingTurn();
            }

            if (gameObj[a2[1]] === 1 && gameObj[a2[3]] === 1) {
                a2[4].settingTurn();
            }

            if (a2[5] && a2[6]) {
                if (gameObj[a2[1]] === 1 && gameObj[a2[3]] === 1 && gameObj[a2[5]] === 1) {
                    a2[6].settingTurn();
                    roundSetter();
                }
            }
            
        } 
    },

    pNext2TheBB5: (s3, ...a3) => {
        if (s3 === 1) {
            if (gameObj[a3[1]] === 0) {
                a3[0].settingTurn();
                roundSetter();
            }

            if (gameObj[a3[1]] === 1) {
                a3[2].settingTurn();
                roundSetter();
            }

            if (gameObj[a3[1]] === 1 && gameObj[a3[3]] === 1) {
                a3[4].settingTurn();
            }

        } else if (s3 === 2) {
            if (gameObj[a3[1]] === 0) {
                a3[0].settingTurn();
            }

            if (gameObj[a3[1]] === 1) {
                a3[2].settingTurn();
                roundSetter();
            }

            if (gameObj[a3[1]] === 1 && gameObj[a3[3]] === 1) {
                a3[4].settingTurn();
            }

            if (a3[5] && a3[6]) {
                if (gameObj[a3[1]] === 1 && gameObj[a3[3]] === 1 && gameObj[a3[5]] === 1) {
                    a3[6].settingTurn();
                }
            }   
            
        } else if (s3 === 3) {
            if (gameObj[a3[1]] === 0) {
                a3[0].settingTurn();
            }

            if (gameObj[a3[1]] === 1) {
                a3[2].settingTurn();
            }

            if (gameObj[a3[1]] === 1 && gameObj[a3[3]] === 1) {
                a3[4].settingTurn();
                roundSetter();
            }
            
        } else if (s3 === 4) {
            if (gameObj[a3[1]] === 0) {
                a3[0].settingTurn();
            }

            if (gameObj[a3[1]] === 1) {
                a3[2].settingTurn();
            }

            if (gameObj[a3[1]] === 1 && gameObj[a3[3]] === 1) {
                a3[4].settingTurn();
            }

            if (a3[5] && a3[6]) {
                if (gameObj[a3[1]] === 1 && gameObj[a3[3]] === 1 && gameObj[a3[5]] === 1) {
                    a3[6].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    p2SpotsFromBB5: (s4, ...a4) => {
        if (s4 === 1) {
            if (gameObj[a4[1]] === 0) {
                a4[0].settingTurn();
                roundSetter();
            }
        

            if (gameObj[a4[1]] === 1) {
                a4[2].settingTurn();
                roundSetter();
            }

            if (gameObj[a4[1]] === 1 && gameObj[a4[3]] === 1) {
                a4[4].settingTurn();
            }

            if (a4[5] && a4[6]) {
                if (gameObj[a4[1]] === 1 && gameObj[a4[3]] === 1 && gameObj[a4[5]] === 1) {
                    a4[6].settingTurn();
                }
            }

        } else if (s4 === 2) {
            if (gameObj[a4[1]] === 0) {
                a4[0].settingTurn();
            }

            if (gameObj[a4[1]] === 1) {
                a4[2].settingTurn();
                roundSetter();
            }
            
        } else if (s4 === 3) {
            if (gameObj[a4[1]] === 0) {
                a4[0].settingTurn();
            }

            if (gameObj[a4[1]] === 1) {
                a4[2].settingTurn();
            }

            if (gameObj[a4[1]] === 1 && gameObj[a4[3]] === 1) {
                a4[4].settingTurn();
                roundSetter();
            }
            
        } else if (s4 === 4) {
            if (gameObj[a4[1]] === 0) {
                a4[0].settingTurn();            
            }

            if (gameObj[a4[1]] === 1) {
                a4[2].settingTurn();
            }

            if (gameObj[a4[1]] === 1 && gameObj[a4[3]] === 1) {
                a4[4].settingTurn();
            }

            if (a4[5] && a4[6]) {
                if (gameObj[a4[1]] === 1 && gameObj[a4[3]] === 1 && gameObj[a4[5]] === 1) {
                    a4[6].settingTurn();
                    roundSetter();
                }
            } 
        } 
    }, 

    p3SpotsFromBB5: (s5, ...a5) => {
        if (s5 === 1) {
            a5[0].settingTurn();
            roundSetter();

        } else if (s5 === 2) {
            if (gameObj[a5[1]] === 0) {
                a5[0].settingTurn();
            }

            if (gameObj[a5[1]] === 1) {
                a5[2].settingTurn();
                roundSetter();
            }
            
        } else if (s5 === 3) {
            if (gameObj[a5[1]] === 0) {
                a5[0].settingTurn();
            }

            if (gameObj[a5[1]] === 1) {
                a5[2].settingTurn();
            }

            if (gameObj[a5[1]] === 1 && gameObj[a5[3]] === 1) {
                a5[4].settingTurn();
                roundSetter();
            }
            
        } else if (s5 === 4) {
            if (gameObj[a5[1]] === 0) {
                a5[0].settingTurn();
            }

            if (gameObj[a5[1]] === 1) {
                a5[2].settingTurn();
            }

            if (gameObj[a5[1]] === 1 && gameObj[a5[3]] === 1) {
                a5[4].settingTurn();
            }

            if (a5[5] && a5[6]) {
                if (gameObj[a5[1]] === 1 && gameObj[a5[3]] === 1 && gameObj[a5[5]] === 1) {
                    a5[6].settingTurn();
                    roundSetter();
                }
            } 
        }
    }, 
    // counting spaces from SB for players checking
    anyPlayerChecking: (s6, ...a6) => {
        if (s6 === 0) {
            if (gameObj[a6[1]] === 0) {
                a6[0].settingTurn();            
            }

            if (gameObj[a6[1]] === 1) {
                a6[2].settingTurn();
            }

            if (gameObj[a6[1]] === 1 && gameObj[a6[3]] === 1) {
                a6[4].settingTurn();
            }

            if (gameObj[a6[1]] === 1 && gameObj[a6[3]] === 1 && gameObj[a6[5]] === 1) {
                a6[6].settingTurn();
            }

        } else if (s6 === 1) {
            if (gameObj[a6[1]] === 0) {
                a6[0].settingTurn();
                roundSetter();
            }
            

            if (gameObj[a6[1]] === 1) {
                a6[2].settingTurn();
                roundSetter();
            }

            if (gameObj[a6[1]] === 1 && gameObj[a6[3]] === 1) {
                a6[4].settingTurn();
            }

            if (gameObj[a6[1]] === 1 && gameObj[a6[3]] === 1 && gameObj[a6[5]] === 1) {
                a6[6].settingTurn();
            }
            
        } else if (s6 === 2) {
            if (gameObj[a6[1]] === 0) {
                a6[0].settingTurn();
            }

            if (gameObj[a6[1]] === 1) {
                a6[2].settingTurn();
                roundSetter();
            }

            if (gameObj[a6[1]] === 1 && gameObj[a6[3]] === 1) {
                a6[4].settingTurn();
            }

            if (gameObj[a6[1]] === 1 && gameObj[a6[3]] === 1 && gameObj[a6[5]] === 1) {
                a6[6].settingTurn();
            }
            
        } else if (s6 === 3) {
            if (gameObj[a6[1]] === 0) {
                a6[0].settingTurn();
            }

            if (gameObj[a6[1]] === 1) {
                a6[2].settingTurn();
            }

            if (gameObj[a6[1]] === 1 && gameObj[a6[3]] === 1) {
                a6[4].settingTurn();
                roundSetter();
            }

            if (gameObj[a6[1]] === 1 && gameObj[a6[3]] === 1 && gameObj[a6[5]] === 1) {
                a6[6].settingTurn();
            }
            
        } else if (s6 === 4) {
            if (gameObj.currentRound === 0) {
                a6[0].settingTurn();
                changingTheRound(1);

                if (gameObj[a6[1]] === 1) {
                    a6[2].settingTurn();
                }
            } else if (gameObj.currentRound >= 1) {
                a6[3].settingTurn();

                if (gameObj[a6[4]] === 1) {
                    a6[5].settingTurn();
                }

                if (gameObj[a6[4]] === 1 && gameObj[a6[6]] === 1) {
                    a6[7].settingTurn();
                }

                if (gameObj[a6[4]] === 1 && gameObj[a6[6]] === 1 && gameObj[a6[8]] === 1) {
                    a6[9].settingTurn();
                    roundSetter();
                }
            }
            
        }
    },

    anyPlayerBettingOrRaising: (...a7) => {
        a7[0].settingTurn();

        if (gameObj[a7[1]] === 1) {
            a7[2].settingTurn();
        }

        if (gameObj[a7[1]] === 1 && gameObj[a7[3]] === 1) {
            a7[4].settingTurn();
        }

        if (gameObj[a7[1]] === 1 && gameObj[a7[3]] === 1 && gameObj[a7[5]] === 1) {
            a7[6].settingTurn();
        }
    }, 
}

var inGameLogic6Players;

inGameLogic6Players = {
    pNext2TheBB6: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (args[7] && args[8]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                    args[8].settingTurn();
                }
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (args[7] && args[8]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                    args[8].settingTurn();
                    roundSetter();
                }
            }
        } 
        
    },

    p2SpotsFromBB6: (spaces2, ...args2) => {
        if (spaces2 === 1) {
            if (gameObj[arg2[1]] === 0) {
                args2[0].settingTurn();
                roundSetter();
            }

            if (gameObj[arg2[1]] === 1) {
                args2[2].settingTurn();
                roundSetter();
            }

            if (gameObj[arg2[1]] === 1 && gameObj[arg2[3]] === 1) {
                args2[4].settingTurn();
            }

            if (gameObj[arg2[1]] === 1 && gameObj[arg2[3]] === 1 && gameObj[arg2[5]] === 1) {
                args2[6].settingTurn();
            }

        } else if (spaces2 === 2) {
            if (gameObj[args2[1]] === 0) {
                args2[0].settingTurn();
            }

            if (gameObj[args2[1]] === 1) {
                args2[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args2[1]] === 1 && gameObj[args2[3]] === 1) {
                args2[4].settingTurn();
            }

            if (gameObj[args2[1]] === 1 && gameObj[args2[3]] === 1 && gameObj[args2[5]] === 1) {
                args2[6].settingTurn();
            }

            if (args2[7] && args2[8]) {
                if (gameObj[args2[1]] === 1 && gameObj[args2[3]] === 1 && gameObj[args2[5]] === 1 && gameObj[args2[7]] === 1) {
                    args2[8].settingTurn();
                }
            }

        } else if (spaces2 === 3) {
            if (gameObj[args2[1]] === 0) {
                args2[0].settingTurn();
            }

            if (gameObj[args2[1]] === 1) {
                args2[2].settingTurn();
            }

            if (gameObj[args2[1]] === 1 && gameObj[args2[3]] === 1) {
                args2[4].settingTurn();
                roundSetter();
            }

        } else if (spaces2 === 4) {
            if (gameObj[args2[1]] === 0) {
                args2[0].settingTurn();
            }

            if (gameObj[args2[1]] === 1) {
                args2[2].settingTurn();
            }

            if (gameObj[args2[1]] === 1 && gameObj[args2[3]] === 1) {
                args2[4].settingTurn();
            }

            if (gameObj[args2[1]] === 1 && gameObj[args2[3]] === 1 && gameObj[args2[5]] === 1) {
                args2[6].settingTurn();
                roundSetter();
            }

        } else if (spaces2 === 5) {
            if (gameObj[args2[1]] === 0) {
                args2[0].settingTurn();
            }

            if (gameObj[args2[1]] === 1) {
                args2[2].settingTurn();
            }

            if (gameObj[args2[1]] === 1 && gameObj[args2[3]] === 1) {
                args2[4].settingTurn();
            }

            if (gameObj[args2[1]] === 1 && gameObj[args2[3]] === 1 && gameObj[args2[5]] === 1) {
                args2[6].settingTurn();
            }

            if (args2[7] && args2[8]) {
                if (gameObj[args2[1]] === 1 && gameObj[args2[3]] === 1 && gameObj[args2[5]] === 1 && gameObj[args2[7]] === 1) {
                    args2[8].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    p3SpotsFromBB6: (spaces3, ...args3) => {
        if (spaces3 === 1) {
            if (gameObj[args3[1]] === 0) {
                args3[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args3[1]] === 1) {
                args3[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1) {
                args3[4].settingTurn();
            }

            if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1 && gameObj[args3[5]] === 1) {
                args3[6].settingTurn();
            }

            if (args3[7] && args3[8]) {
                if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1 && gameObj[args3[5]] === 1 && gameObj[args3[7]] === 1) {
                    args3[8].settingTurn();
                }
            }
            
        } else if (spaces3 === 2) {
            if (gameObj[args3[1]] === 0) {
                args3[0].settingTurn();
            }

            if (gameObj[args3[1]] === 1) {
                args3[2].settingTurn();
                roundSetter();
            }

        } else if (spaces3 === 3) {
            if (gameObj[args3[1]] === 0) {
                args3[0].settingTurn();
            }

            if (gameObj[args3[1]] === 1) {
                args3[2].settingTurn();
            }

            if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1) {
                args3[4].settingTurn();
                roundSetter();
            }

        } else if (spaces3 === 4) {
            if (gameObj[args3[1]] === 0) {
                args3[0].settingTurn();
            }

            if (gameObj[args3[1]] === 1) {
                args3[2].settingTurn();
            }

            if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1) {
                args3[4].settingTurn();
            }

            if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1 && gameObj[args3[5]] === 1) {
                args3[6].settingTurn();
                roundSetter();
            }

        } else if (spaces3 === 5) {
            if (gameObj[args3[1]] === 0) {
                args3[0].settingTurn();
            }

            if (gameObj[args3[1]] === 1) {
                args3[2].settingTurn();
            }

            if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1) {
                args3[4].settingTurn();
            }

            if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1 && gameObj[args3[5]] === 1) {
                args3[6].settingTurn();
            }

            if (args3[7] && args3[8]) {
                if (gameObj[args3[1]] === 1 && gameObj[args3[3]] === 1 && gameObj[args3[5]] === 1 && gameObj[args3[7]] === 1) {
                    args3[8].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    p4SpotsFromBB6: (spaces4, ...args4) => {
        if (spaces4 === 1) {
            args4[0].settingTurn();
            roundSetter();

        } else if (spaces4 === 2) {
            if (gameObj[args4[1]] === 0) {
                args4[0].settingTurn();
            }

            if (gameObj[args4[1]] === 1) {
                args4[2].settingTurn();
                roundSetter();
            }
            
        } else if (spaces4 === 3) {
            if (gameObj[args4[1]] === 0) {
                args4[0].settingTurn();
            }

            if (gameObj[args4[1]] === 1) {
                args4[2].settingTurn();
            }

            if (gameObj[args4[1]] === 1 && gameObj[args4[3]] === 1) {
                args4[4].settingTurn();
                roundSetter();
            }
            
        } else if (spaces4 === 4) {
            if (gameObj[args4[1]] === 0) {
                args4[0].settingTurn();
            }

            if (gameObj[args4[1]] === 1) {
                args4[2].settingTurn();
            }

            if (gameObj[args4[1]] === 1 && gameObj[args4[3]] === 1) {
                args4[4].settingTurn();
            }

            if (gameObj[args4[1]] === 1 && gameObj[args4[3]] === 1 && gameObj[args4[5]] === 1) {
                args4[6].settingTurn();
                roundSetter();
            }

        } else if (spaces4 === 5) {
            if (gameObj[args4[1]] === 0) {
                args4[0].settingTurn();
            }

            if (gameObj[args4[1]] === 1) {
                args4[2].settingTurn();
            }

            if (gameObj[args4[1]] === 1 && gameObj[args4[3]] === 1) {
                args4[4].settingTurn();
            }

            if (gameObj[args4[1]] === 1 && gameObj[args4[3]] === 1 && gameObj[args4[5]] === 1) {
                args4[6].settingTurn();
            }

            if (args4[7] && args4[8]) {
                if (gameObj[args4[1]] === 1 && gameObj[args4[3]] === 1 && gameObj[args4[5]] === 1 && gameObj[args4[7]] === 1) {
                    args4[8].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    theSB6: (spaces5, ...args5) => {
        if (spaces5 === 1) {
            args5[0].settingTurn();
            roundSetter();

        } else if (spaces5 === 2) {
            if (gameObj[args5[1]] === 0) {
                args5[0].settingTurn();
            }

            if (gameObj[args5[1]] === 1) {
                args5[2].settingTurn();
                roundSetter();
            }

        } else if (spaces5 === 3) {
            if (gameObj[args5[1]] === 0) {
                args5[0].settingTurn();
            }

            if (gameObj[args5[1]] === 1) {
                args5[2].settingTurn();
            }

            if (gameObj[args5[1]] === 1 && gameObj[args5[3]] === 1) {
                args5[4].settingTurn();
                roundSetter();
            }
            
        } else if (spaces5 === 4) {
            if (gameObj[args5[1]] === 0) {
                args5[0].settingTurn();
            }

            if (gameObj[args5[1]] === 1) {
                args5[2].settingTurn();
            }

            if (gameObj[args5[1]] === 1 && gameObj[args5[3]] === 1) {
                args5[4].settingTurn();
            }

            if (gameObj[args5[1]] === 1 && gameObj[args5[3]] === 1 && gameObj[args5[5]] === 1) {
                args5[6].settingTurn();
                roundSetter();
            }
            
        } else if (spaces5 === 5) {
            if (gameObj[args5[1]] === 0) {
                args5[0].settingTurn();
            }

            if (gameObj[args5[1]] === 1) {
                args5[2].settingTurn();
            }

            if (gameObj[args5[1]] === 1 && gameObj[args5[3]] === 1) {
                args5[4].settingTurn();
            }

            if (gameObj[args5[1]] === 1 && gameObj[args5[3]] === 1 && gameObj[args5[5]] === 1) {
                args5[6].settingTurn();
            }

            if (args5[7] && args5[8]) {
                if (gameObj[args5[1]] === 1 && gameObj[args5[3]] === 1 && gameObj[args5[5]] === 1 && gameObj[args5[7]] === 1) {
                    args5[8].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    theBB6: (spaces6, ...args6) => {
        if (spaces6 === 1) {
            if (gameObj[args6[1]] === 0) {
                args6[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args6[1]] === 1) {
                args6[2].settingTurn();
                roundSetter();
            }

        } else if (spaces6 === 2) {
            if (gameObj[args6[1]] === 0) {
                args6[0].settingTurn();
            }

            if (gameObj[args6[1]] === 1) {
                args6[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args6[1]] === 1 && gameObj[args6[3]] === 1) {
                args6[4].settingTurn();
            }

        } else if (spaces6 === 3) {
            if (gameObj[args6[1]] === 0) {
                args6[0].settingTurn();
            }

            if (gameObj[args6[1]] === 1) {
                args6[2].settingTurn();
            }

            if (gameObj[args6[1]] === 1 && gameObj[args6[3]] === 1) {
                args6[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args6[1]] === 1 && gameObj[args6[3]] === 1 && gameObj[args6[5]] === 1) {
                args6[6].settingTurn();
            }
            
        } else if (spaces6 === 4) {
            if (gameObj[args6[1]] === 0) {
                args6[0].settingTurn();
            }

            if (gameObj[args6[1]] === 1) {
                args6[2].settingTurn();
            }

            if (gameObj[args6[1]] === 1 && gameObj[args6[3]] === 1) {
                args6[4].settingTurn();
            }

            if (gameObj[args6[1]] === 1 && gameObj[args6[3]] === 1 && gameObj[args6[5]] === 1) {
                args6[6].settingTurn();
                roundSetter();
            }

            if (args6[7] && args6[8]) {
                if (gameObj[args6[1]] === 1 && gameObj[args6[3]] === 1 && gameObj[args6[5]] === 1 && gameObj[args6[7]] === 1) {
                    args6[8].settingTurn();
                }
            }
            
        } else if (spaces6 === 5) {
            if (gameObj[args6[1]] === 0) {
                args6[0].settingTurn();
            }

            if (gameObj[args6[1]] === 1) {
                args6[2].settingTurn();
            }

            if (gameObj[args6[1]] === 1 && gameObj[args6[3]] === 1) {
                args6[4].settingTurn();
            }

            if (gameObj[args6[1]] === 1 && gameObj[args6[3]] === 1 && gameObj[args6[5]] === 1) {
                args6[6].settingTurn();
            }

            if (args6[7] && args6[8]) {
                if (gameObj[args6[1]] === 1 && gameObj[args6[3]] === 1 && gameObj[args6[5]] === 1 && gameObj[args6[7]] === 1) {
                    args6[8].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    // 6 player game bet/raise //
    playerBettingOrRaising: (...args7) => {
        args7[0].settingTurn();

        if (gameObj[args7[1]] === 1) {
            args7[2].settingTurn();
        }

        if (gameObj[args7[1]] === 1 && gameObj[args7[3]] === 1) {
            args7[4].settingTurn();
        }

        if (gameObj[args7[1]] === 1 && gameObj[args7[3]] === 1 && gameObj[args7[5]] === 1) {
            args7[6].settingTurn();
        }

        if (gameObj[args7[1]] === 1 && gameObj[args7[3]] === 1 && gameObj[args7[5]] === 1 && gameObj[args7[7]] === 1) {
            args7[8].settingTurn();
        }
    },

    // 6 player game check //
    pChecking: (spaces8, ...args8) => {
        // SPACES FROM SMALL BLIND FOR PLAYER CHECKING //
        if (spaces8 === 0) {
            if (gameObj[args8[1]] === 0) {
                args8[0].settingTurn();
            }

            if (gameObj[args8[1]] === 1) {
                args8[2].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1) {
                args8[4].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1 && gameObj[args8[5]] === 1) {
                args8[6].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1 && gameObj[args8[5]] === 1 && gameObj[args8[7]] === 1) {
                args8[8].settingTurn();
            }

        } else if (spaces8 === 1) {
            if (gameObj[args8[1]] === 0) {
                args8[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args8[1]] === 1) {
                args8[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1) {
                args8[4].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1 && gameObj[args8[5]] === 1) {
                args8[6].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1 && gameObj[args8[5]] === 1 && gameObj[args8[7]] === 1) {
                args8[8].settingTurn();
            }

        } else if (spaces8 === 2) {
            if (gameObj[args8[1]] === 0) {
                args8[0].settingTurn();
            }

            if (gameObj[args8[1]] === 1) {
                args8[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1) {
                args8[4].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1 && gameObj[args8[5]] === 1) {
                args8[6].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1 && gameObj[args8[5]] === 1 && gameObj[args8[7]] === 1) {
                args8[8].settingTurn();
            }

        } else if (spaces8 === 3) {
            if (gameObj[args8[1]] === 0) {
                args8[0].settingTurn();
            }

            if (gameObj[args8[1]] === 1) {
                args8[2].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1) {
                args8[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1 && gameObj[args8[5]] === 1) {
                args8[6].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1 && gameObj[args8[5]] === 1 && gameObj[args8[7]] === 1) {
                args8[8].settingTurn();
            }

        } else if (spaces8 === 4) {
            if (gameObj[args8[1]] === 0) {
                args8[0].settingTurn();
            }

            if (gameObj[args8[1]] === 1) {
                args8[2].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1) {
                args8[4].settingTurn();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1 && gameObj[args8[5]] === 1) {
                args8[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args8[1]] === 1 && gameObj[args8[3]] === 1 && gameObj[args8[5]] === 1 && gameObj[args8[7]] === 1) {
                args8[8].settingTurn();
            }

        } else if (spaces8 === 5) {
            if (gameObj.currentRound === 0) {
                args8[0].settingTurn();
                changingTheRound(1);

                if (gameObj[args8[1]] === 1) {
                    args8[2].settingTurn();
                }
            } else if (gameObj.currentRound >= 1) {
                if (gameObj[args8[4]] === 0) {
                    args8[3].settingTurn();
                }

                if (gameObj[args8[4]] === 1) {
                    args8[5].settingTurn();
                }

                if (gameObj[args8[4]] === 1 && gameObj[args8[6]] === 1) {
                    args8[7].settingTurn();
                }

                if (gameObj[args8[4]] === 1 && gameObj[args8[6]] === 1 && gameObj[args8[8]] === 1) {
                    args8[9].settingTurn();
                }

                if (gameObj[args8[4]] === 1 && gameObj[args8[6]] === 1 && gameObj[args8[8]] === 1 && gameObj[args8[10]] === 1) {
                    args8[11].settingTurn();
                    roundSetter();
                }
            }
        } 
    },
}

var inGameLogic7Players;

inGameLogic7Players = {
    theBB7: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            roundSetter();

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }
            
        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                }
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    theSB7: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            roundSetter();

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    pNext2TheBB7: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            roundSetter();

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }
            
        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                }
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    p2SpotsFromBB7: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            roundSetter();

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }
            
        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                }
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    p3SpotsFromBB7: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            roundSetter();

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            
        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                }
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    p4SpotsFromBB7: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            roundSetter();

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                }
            }
            
        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    p5SpotsFromBB7: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            roundSetter();

            
        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (args[9] && args[10]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                    args[10].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    // for player checking, we compare player position to small blind rather than to big blind // 
    pChecking7: (spaces, ...args) => {
        if (spaces === 0) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1)  {
                args[10].settingTurn();
            }
            
        } else if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }

            roundSetter();

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1)  {
                args[10].settingTurn();
            }
            
        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1)  {
                args[10].settingTurn();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1)  {
                args[10].settingTurn();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1)  {
                args[10].settingTurn();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1)  {
                args[10].settingTurn();
            }
            
        } else if (spaces === 6) {
            if (gameObj.currentRound === 0) {
                if (gameObj[args[1]] === 0) {
                    args[0].settingTurn();
                }
    
                changingTheRound(1);

                if (gameObj[args[1]] === 1) {
                    args[2].settingTurn();
                }

            } else if (gameObj.currentRound >= 1) {
                args[3].settingTurn();

                if (gameObj[args[4]] === 1) {
                    args[5].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1) {
                    args[7].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1) {
                    args[9].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1 && gameObj[args[10]] === 1) {
                    args[11].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1 && gameObj[args[10]] === 1 && gameObj[args[12]] === 1) {
                    args[13].settingTurn();
                    roundSetter();
                }

            }
        }
    },

    pBettingOrRaising7: (...args) => {
        if (gameObj[args[1]] === 0) {
            args[0].settingTurn();
        }

        if (gameObj[args[1]] === 1) {
            args[2].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
            args[4].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
            args[6].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
            args[8].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1)  {
            args[10].settingTurn();
        }
    },
}

var inGameLogic8Players;

inGameLogic8Players = {
    theBB8: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                }
            }
            
        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                    roundSetter();
                }
            }
            
        }
    },

    theSB8: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                    roundSetter();
                }
            }
            
        }
    },

    pNext2TheBB8: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }
    
            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                }
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                    roundSetter();
                }
            }
            
        }
    },

    p2SpotsFromBB8: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }
    
            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                }
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                    roundSetter();
                }
            }
            
        }
    },

    p3SpotsFromBB8: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    
            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                }
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                    roundSetter();
                }
            }
            
        }
    },

    p4SpotsFromBB8: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                }
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                    roundSetter();
                }
            }
            
        }
    },

    p5SpotsFromBB8: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                }
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                    roundSetter();
                }
            }   
        }
    },

    p6SpotsFromBB8: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (args[11] && args[12]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                    args[12].settingTurn();
                    roundSetter();
                }
            }
        }
    },

    pChecking8: (spaces, ...args) => {
        // for player checking I count spaces from the small blind and not the big blind //
        if (spaces === 0) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

        } else if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }
            
        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }
            
        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }
            
        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }
            
        } else if (spaces === 7) {
            if (gameObj.currentRound === 0) {
                if (gameObj[args[1]] === 0) {
                    args[0].settingTurn();
                }
        

                if (gameObj[args[1]] === 1) {
                    args[2].settingTurn();
                    changingTheRound(1);
                }
            } else if (gameObj.currentRound >= 1) {
                args[3].settingTurn();

                if (gameObj[args[4]] === 1) {
                    args[5].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1) {
                    args[7].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1) {
                    args[9].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1 && gameObj[args[10]] === 1) {
                    args[11].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1 && gameObj[args[10]] === 1 && gameObj[args[12]] === 1) {
                    args[13].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1 && gameObj[args[10]] === 1 && gameObj[args[12]] === 1 && gameObj[args[14]] === 1) {
                    args[15].settingTurn();
                    roundSetter();
                }
            }
            
        }
    },

    pBettingOrRaising8: (...args) => {
        if (gameObj[args[1]] === 0) {
            args[0].settingTurn();
        }


        if (gameObj[args[1]] === 1) {
            args[2].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
            args[4].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
            args[6].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
            args[8].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
            args[10].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
            args[12].settingTurn();
        }
    },
}

var inGameLogic9Players;


inGameLogic9Players = {
    theBigBlind9: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1  && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
                roundSetter();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                }
            }

        } else if (spaces === 8) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                    roundSetter();
                }
            }
        } 
    },

    theSmallBlind9: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }
    
            

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
                roundSetter();
            }

        } else if (spaces === 8) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                    roundSetter();
                }
            }

        } 
    },

    pNext2BB9: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }
    
            

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                }
            }

        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
                roundSetter();
            }

        } else if (spaces === 8) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                    roundSetter();
                }
            }

        } 
    },

    p2SpotsFromBB9: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                }
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
                roundSetter();
            }

        } else if (spaces === 8) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                    roundSetter();
                }
            }

        } 
    },

    p3SpotsFromBB9: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                }
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
                roundSetter();
            }
            
        } else if (spaces === 8) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                    roundSetter();
                }
            }
        } 
    },

    p4SpotsFromBB9: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                }
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
                roundSetter();
            }

        } else if (spaces === 8) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                    roundSetter();
                }
            }

        } 
    },

    p5SpotsFromBB9: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }


            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                }
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
                roundSetter();
            }

        } else if (spaces === 8) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                    roundSetter();
                }
            }

        } 
    },

    p6SpotsFromBB9: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                }
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
                roundSetter();
            }

        } else if (spaces === 8) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                    roundSetter();
                }
            }

        } 
    },

    p7SpotsFromBB9: (spaces, ...args) => {
        if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
                roundSetter();
            }

        } else if (spaces === 8) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (args[13] && args[14]) {
                if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                    args[14].settingTurn();
                    roundSetter();
                }
            }

        } 
    },

    pBettingOrRaising9: ( ...args) => {
        if (gameObj[args[1]] === 0) {
            args[0].settingTurn();
        }


        if (gameObj[args[1]] === 1) {
            args[2].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
            args[4].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
            args[6].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
            args[8].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
            args[10].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
            args[12].settingTurn();
        }

        if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
            args[14].settingTurn();
        }

    },

    pChecking9: (spaces, ...args) => {
        if (spaces === 0) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                args[14].settingTurn();
            }


        } else if (spaces === 1) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                args[14].settingTurn();
            }

        } else if (spaces === 2) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                args[14].settingTurn();
            }

        } else if (spaces === 3) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                args[14].settingTurn();
            }

        } else if (spaces === 4) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                args[14].settingTurn();
            }

        } else if (spaces === 5) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                args[14].settingTurn();
            }

        } else if (spaces === 6) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                args[14].settingTurn();
            }

        } else if (spaces === 7) {
            if (gameObj[args[1]] === 0) {
                args[0].settingTurn();
            }
    

            if (gameObj[args[1]] === 1) {
                args[2].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1) {
                args[4].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1) {
                args[6].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1) {
                args[8].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1) {
                args[10].settingTurn();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1) {
                args[12].settingTurn();
                roundSetter();
            }

            if (gameObj[args[1]] === 1 && gameObj[args[3]] === 1 && gameObj[args[5]] === 1 && gameObj[args[7]] === 1 && gameObj[args[9]] === 1 && gameObj[args[11]] === 1 && gameObj[args[13]] === 1) {
                args[14].settingTurn();
            }

        } else if (spaces === 8) {
            if (gameObj.currentRound === 0) {
                if (gameObj[args[1]] === 0) {
                    args[0].settingTurn();
                }

                if (gameObj[args[1]] === 1) {
                    args[2].settingTurn();
                    changingTheRound(1);
                }
            } else if (gameObj.currentRound >= 1) {
                if (gameObj[args[4]] === 0) {
                    args[3].settingTurn();
                }

                if (gameObj[args[4]] === 1) {
                    args[5].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1) {
                    args[7].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1) {
                    args[9].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1 && gameObj[args[10]] === 1) {
                    args[11].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1 && gameObj[args[10]] === 1 && gameObj[args[12]] === 1) {
                    args[13].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1 && gameObj[args[10]] === 1 && gameObj[args[12]] === 1 && gameObj[args[14]] === 1) {
                    args[15].settingTurn();
                }

                if (gameObj[args[4]] === 1 && gameObj[args[6]] === 1 && gameObj[args[8]] === 1 && gameObj[args[10]] === 1 && gameObj[args[12]] === 1 && gameObj[args[14]] === 1 && gameObj[args[16]] === 1) {
                    args[17].settingTurn();
                    roundSetter();
                }
            }

        } 
    },
}


