const { promises } = require("dns");
var express = require( "express" );
const fs = require('fs');
var app = express();
var http = require( "http" ).createServer( app );
// var io = require( "socket.io" )( http, {'pingTimeout': 2000000, 'maxDisconnectionDuration': Infinity, 'skipMiddlewares': true} );
var io = require( "socket.io" )( http, {
    // pingTimeout: 10000, 
    // pingInterval: 10000,
    connectTimeout: 5000,
    cookie: {
        name: 'io',
        path: '/',
        sameSite: 'lax'
    }
});

let dirName = '/Users/charlieyorke/chipsgame/client/';

const maxDisconnectCount = 1000000;

app.use('/',express.static(dirName));
app.use(express.static('public'));
app.use(express.json());

const jFile = 'testUserData.json';

app.get('/', function(req, res){
    res.sendFile(dirName+'mainpage.html'); // change the path to your index.html
});


function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const dataToJSON = () => {
    for (var key in possibleAccounts) {
        if (possibleAccounts[key]) {
            fs.writeFile(jFile, JSON.stringify(possibleAccounts, null, "\t") + "\n", (err) => {
                if (err) throw err;
            })
        }
    }
}

const processFile = (data) => {
    console.log(data);
}

var globalState = {};
var gameSettingsObj;
var possibleAccounts = {};
var allUsers = [];
var blank_arr = [];
var JSONObjects;

io.on('connection', (socket) => {


    let userBEI = {};
    // userBEI['id'] = socket.id;
    // userBEI['inGameDisplayName'] = null;
    // userBEI['roomLabel'] = null;
    // userBEI['accountUserName'] = null;
    // userBEI['userLoggedIn'] = false;
    // userBEI['reconnectedIndicator'] = false;
    // userBEI['aT'] = makeId(31);

    // tests //

    socket.emit('grabbingAuth');

    socket.on('sendingAuth', (id) => {

        if (!blank_arr.includes(socket.handshake.auth.token)) {
            
            // userBEI['id'] = socket.id;
            userBEI['id'] = id;
            userBEI['inGameDisplayName'] = null;
            userBEI['roomLabel'] = null;
            userBEI['accountUserName'] = null;
            userBEI['userLoggedIn'] = false;
            userBEI['reconnectedIndicator'] = false;
            userBEI['idleCount'] = 1;
            userBEI['currentlyInGame'] = false;
            userBEI['inPreGameLobby'] = false;
            userBEI['aT'] = socket.handshake.auth;

            allUsers.push(userBEI);

            blank_arr.push(socket.handshake.auth.token);

            socket.emit('userConnects', userBEI.id);

        } else {

            allUsers.forEach((el) => {
                if (el['aT'].token === socket.handshake.auth.token) {
                    userBEI = el;
                }
            })

            userBEI.id = id;

            console.log('Previous User Connected: ');
            console.log(userBEI);

            if (userBEI.userLoggedIn) {
                if (possibleAccounts[userBEI.accountUserName]) {
                    possibleAccounts[userBEI.accountUserName].idHolder = id;
                }
            }

            if (userBEI.currentlyInGame) {
                socket.join(userBEI.roomLabel);
                if (globalState[userBEI.roomLabel]) {
                    io.to(userBEI.roomLabel).emit('joiningNewGameState', globalState[userBEI.roomLabel].pNickNames, globalState[userBEI.roomLabel].pChips, globalState[userBEI.roomLabel].desiredRoomSize, globalState[userBEI.roomLabel].players, 'equalizingGameStateForIdlePlayer');
                    io.to(userBEI.roomLabel).emit('grabbingGameStateForEqualizationIdlePlayer')
                }   
            }
        }

    })

    ////////// GENERAL ON METHODS //////////

    socket.on('newGame', (accountUserName) => {
        // console.log(userBEI);

        var roomName = makeId(5);

        socket.join(roomName);

        userBEI['roomLabel'] = roomName;

        gameSettingsObj = {};

        gameSettingsObj['players'] = [userBEI.id];

        gameSettingsObj['pNickNames'] = [];

        gameSettingsObj['pChips'] = [];

        gameSettingsObj['gameStarted'] = false;

        gameSettingsObj['disconnectCount'] = 0;

        gameSettingsObj['currentRoomSize'] = 0;

        gameSettingsObj['gameOnGoing'] = false;

        gameSettingsObj['updatedPChips'] = [];

        gameSettingsObj['gameCurrentlyInPlay'] = false;

        gameSettingsObj['gameInTransition2NextRound'] = false;

        gameSettingsObj['desiredRoomSize'];

        globalState[roomName.toString()] = gameSettingsObj;

        if (!userBEI.userLoggedIn) {
            socket.emit('sendingUserSID', userBEI.id);
        } else {
            possibleAccounts[accountUserName].currentRoom = userBEI.roomLabel;
        }

        // if (setRS) {
        //     gameSettingsObj['desiredRoomSize'] = Number(setRS);
        // } else {
        //     gameSettingsObj['desiredRoomSize'];
        // }

    })

    socket.on('userSetsAndSendsRoomSize', (roomSize) => {

        
        if (roomSize != null) {
            for (var key in globalState) {
                if (userBEI['roomLabel'] === key) {
                    globalState[key]['desiredRoomSize'] = roomSize;
                    socket.emit('userSetsValidRoomSize');
                }
            }
        } else {
            socket.emit('userSetNullRoomSize');
        }

        // socket.emit('resetingRoomSizeRadioButtons');
    })

    socket.on('hostSubmitsIGDisplayInfo', (pName, pChips) => {

        userBEI['inGameDisplayName'] = pName;


        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                console.log(key);
                globalState[key].holdingNames = key;
                globalState[key].pNickNames.push(pName);
                globalState[key].pChips.push(Number(pChips));
                globalState[key].currentRoomSize = globalState[key].pNickNames.length;
                io.to(userBEI.roomLabel).emit('joiningNewGameState', globalState[key].pNickNames, globalState[key].pChips, globalState[key].desiredRoomSize, globalState[key].players);
                io.to(userBEI.roomLabel).emit('sendingGameCodeForInGameMenu', key);

                userBEI['inPreGameLobby'] = true;
            }
        }
    })

    socket.on('userInitiatesJoinGame', () => {

        if (!userBEI.loggedIn) {
            socket.emit('sendingUserSID', userBEI.id);
        }
    })

    socket.on('userJoiningGameSubmitsGameCode', (gameCode) => {

        for (var key in globalState) {
            if (gameCode === key) {
                if (globalState[key].currentRoomSize < globalState[key].desiredRoomSize) {
                    userBEI.roomLabel = gameCode;
                    socket.join(gameCode);
                    socket.emit('userIsClearedToJoinGame')
                }
            }
        }
    })

    socket.on('userJoiningGameEntersIGDisplayInfo', (pName, pChips) => {

        userBEI['inGameDisplayName'] = pName;

        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingGameCodeForInGameMenu', key);
                if (!globalState[key].gameStarted) {
                    globalState[key].players.push(userBEI.id);
                    globalState[key].pNickNames.push(pName);
                    globalState[key].pChips.push(Number(pChips));
                    globalState[key].currentRoomSize = globalState[key].pNickNames.length;
                    // console.log(globalState[key]);
                    userBEI['inPreGameLobby'] = true;
                    io.to(userBEI.roomLabel).emit('joiningNewGameState', globalState[key].pNickNames, globalState[key].pChips, globalState[key].desiredRoomSize, globalState[key].players);
                } else {
                    if (globalState[key].gameCurrentlyInPlay) {
                        for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                            if (globalState[key].pNickNames[i] === '+') {
                                globalState[key].players[i] = userBEI.id;
                                globalState[key].pNickNames[i] = pName
                                globalState[key].pChips[i] = Number(pChips);
                                globalState[key].currentRoomSize = globalState[key].pNickNames.length;

                                // console.log(globalState[key]);

                                io.to(userBEI.roomLabel).emit('joiningNewGameState', globalState[key].pNickNames, globalState[key].pChips, globalState[key].desiredRoomSize, globalState[key].players, 'pJoiningMidGameIndicator');
                                io.to(userBEI.roomLabel).emit('grabbingGameStateForUserJoiningMidGame', i + 1);
                            }
                        }
                    } else if (globalState[key].gameInTransition2NextRound) {
                        globalState[key].players.push(userBEI.id);
                        globalState[key].pNickNames.push(pName);
                        globalState[key].pChips.push(Number(pChips));
                        globalState[key].currentRoomSize = globalState[key].pNickNames.length;
                        // console.log(globalState[key]);
                        io.to(userBEI.roomLabel).emit('joiningNewGameState', globalState[key].pNickNames, globalState[key].pChips, globalState[key].desiredRoomSize, globalState[key].players);
                    }
                }
            }

        }
    })

    socket.on('hostSubmitsFinalGameInfo', (bbValue, anteValue) => {

        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                globalState[key].gameStarted = true;
                globalState[key].gameCurrentlyInPlay = true;
                userBEI.currentlyInGame = true;
                io.to(userBEI.roomLabel).emit('hostHasStartedTheGame', Number(bbValue), anteValue, globalState[key].desiredRoomSize);
            }
        }

    })

    ////////// Create Account + LogIn METHODS //////////

    socket.on('userCreatesAccount', (username, password) => {
        if (username.length > 0 && password.length > 0) {
            if (!username.includes(" ")) {
                if (!possibleAccounts[username]) {
                    possibleAccounts[username] = {'username': username, 'password': password, 'loggedIn': false, "idHolder": '', 'inGame': false, 'currentRoom': '', 'additionalInfo': [], 'friendsList': [], 'friendCount': 0, 'currentAlerts': 0, 'typeAlerts': {}, 'groups': {}, 'aT': userBEI['aT']}
                    socket.emit('accountCreationWasCleared', possibleAccounts[username].aT);
                    dataToJSON();
                } 
            } else {
                socket.emit('userCreatedAccountWithInvalidCredentials');
            }
        } else {
            socket.emit('userCreatedAccountWithInvalidCredentials');
        }
    })

    socket.on('userLogsIn', (username, password) => {
        for (var key in possibleAccounts) {
            if (key === username) {
                if (password === possibleAccounts[key].password) {
                    if (!possibleAccounts[key].loggedIn) {
                        userBEI.userLoggedIn = true;
                        userBEI.accountUserName = username;
                        possibleAccounts[key].idHolder = userBEI['id'];
                        socket.emit('sendingBackUserLogInRequest', possibleAccounts[key]);
                        socket.emit('sendingUserSID', possibleAccounts[key].idHolder);
                        possibleAccounts[key].loggedIn = true;
                        dataToJSON();
                    }
                } else {
                    socket.emit('userHasEnteredInCorrectInformation');
                }
            }
        }
    })

    socket.on('userConfirmsLogOut', (userInfo) => {
        
        for (var key in possibleAccounts) {
            if (key === userInfo.userNameHolder) {
                userBEI.userLoggedIn = false;
                possibleAccounts[key].loggedIn = false;
                possibleAccounts[key].inGame = false;
                possibleAccounts[key].currentRoom = '';
                socket.emit('sendingBackUserLogOutRequest', possibleAccounts[key]);
                console.log('p object after log out: ');
                console.log(possibleAccounts[key]);
                dataToJSON();
            }
        }

    })

    socket.on('userSavesNewProfileInfoData', (defaultDisplayName, defaultChipAmount) => {
        if (defaultDisplayName) {
            possibleAccounts[userBEI.accountUserName].additionalInfo[0] = defaultDisplayName;
        }
        if (defaultChipAmount) {
            possibleAccounts[userBEI.accountUserName].additionalInfo[1] = defaultChipAmount;
        }
    })

    socket.on('userConfirmsDeleteAccount', () => {
        if (userBEI.userLoggedIn) {
            if (possibleAccounts[userBEI.accountUserName]) {
                userBEI.userLoggedIn = false;
                delete possibleAccounts[userBEI.accountUserName];
                socket.emit('sendingBackUserRequestToDeleteAccount');
                console.log(possibleAccounts);
            }
        }
    })

    socket.on('userSavesInputtedFileForChipCustomization', (file) => {
        if (possibleAccounts[userBEI.accountUserName]) {
            possibleAccounts[userBEI.accountUserName].additionalInfo[2] = file;
            console.log(possibleAccounts[userBEI.accountUserName])
        }
        
    })

    ////////// ADDING FRIENDS METHODS //////////

    socket.on('userSendsFriendRequest', (userReceiving, userSending) => {

        if (possibleAccounts[userReceiving]) {
            io.to(possibleAccounts[userReceiving].idHolder).emit('sendingFriendRequestToReceiver', userSending);
            socket.emit('friendRequestWasSentToUser')
            possibleAccounts[userReceiving].typeAlerts[userSending + 'FR'] = {'alertPending': 'friend_request'};
        } 

    })

    socket.on('userAcceptsFriendRequest', (userWhoAccepted, userWhoSent) => {

        possibleAccounts[userWhoAccepted].friendsList.push(userWhoSent);
        possibleAccounts[userWhoSent].friendsList.push(userWhoAccepted);

        console.log(possibleAccounts[userWhoSent]);

        io.to(possibleAccounts[userWhoSent].idHolder).emit('userAcceptedSentFreindRequest', userWhoAccepted);
        socket.emit('userAcceptedSentFreindRequest', userWhoSent);

        // if (possibleAccounts[userWhoAccepted].typeAlerts[userWhoSent].alertPending === 'friend_request') {
        //     delete possibleAccounts[userWhoAccepted].typeAlerts[userWhoSent];
        // }

    })

    ////////// GROUPS METHODS //////////

    socket.on('userSubmitsNewGroupInfo', (creatorOfGroup, chosenGroupName, chosenGroupSize, chosenGroupAnte) => {

        if (possibleAccounts[creatorOfGroup]) {
            possibleAccounts[creatorOfGroup].groups[chosenGroupName] = {'creator': creatorOfGroup, 'groupName': chosenGroupName, 'groupSize': chosenGroupSize, 'groupAnte': chosenGroupAnte, 'groupMembers': [creatorOfGroup]};
            socket.emit('newGroupWasCleared', chosenGroupName);
            dataToJSON();
        }
    })

    socket.on('userViewsSpecificGroup', (groupId, userInEvent) => {
        let isCreator = false;

        if (possibleAccounts[userInEvent]) {
            if (userInEvent === possibleAccounts[userInEvent].groups[groupId].creator) {
                isCreator = true;
            } else {
                isCreator = false;
            }

            socket.emit('sendingGroupInfo4User2View', possibleAccounts[userInEvent].groups[groupId], isCreator);
        }
    })

    socket.on('userSendsGroupInvite', (groupName, userBeingInvitedToGroup, userWhoSentInvite) => {
        
        if (possibleAccounts[userBeingInvitedToGroup]) {
            socket.emit('groupInviteWasCleared')
            io.to(possibleAccounts[userBeingInvitedToGroup].idHolder).emit('sendingGroupInviteToReceiver', groupName, userWhoSentInvite);
            possibleAccounts[userBeingInvitedToGroup].typeAlerts[userWhoSentInvite + 'GI'] = {'alertPending': 'group_invite', 'groupNameHolder': groupName};
        }

    })

    socket.on('userHasAcceptedGroupInvite', (groupName, userWhoSentInvite, userWhoAccepted) => {

        possibleAccounts[userWhoSentInvite].groups[groupName].groupMembers.push(userWhoAccepted);
        possibleAccounts[userWhoAccepted].groups[groupName] = possibleAccounts[userWhoSentInvite].groups[groupName];
        socket.emit('newGroupWasCleared', groupName);
        dataToJSON();

    })

    ////////// IVITING PLAYERS TO GAME METHODS //////////

    socket.on('sendingGameInvite', (userWhoWasInvited, inviteSender) => {
        
        console.log(possibleAccounts[userWhoWasInvited]);

        if (possibleAccounts[userWhoWasInvited]) {
            console.log(possibleAccounts[userWhoWasInvited]);
            possibleAccounts[userWhoWasInvited].typeAlerts[inviteSender + "game_inv"] = {'alertPending': 'game_invite'};
            socket.emit('gameInviteWasCleared');
            io.to(possibleAccounts[userWhoWasInvited].idHolder).emit('sendingGameInviteToReceiver', inviteSender, possibleAccounts[inviteSender].currentRoom);
            
        }

    })

    socket.on('userAcceptsGameInvite', (gameCode) => {
        for (var key in globalState) {
            if (gameCode === key) {
                if (globalState[key].currentRoomSize < globalState[key].desiredRoomSize) {
                    userBEI.roomLabel = gameCode;
                    socket.join(gameCode);
                    socket.emit('userIsClearedToJoinGame')
                }
            }
        }
    })

    ////////// PENDING ALERTS METHODS //////////

    socket.on('deletingPendingAlert', (pendingAlertType, userWhoTriggeredAlert) => {
        if (possibleAccounts[userBEI.accountUserName]) {
            if (possibleAccounts[userBEI.accountUserName].typeAlerts[userWhoTriggeredAlert].alertPending === pendingAlertType) {
                delete possibleAccounts[userBEI.accountUserName].typeAlerts[userWhoTriggeredAlert];
            }
            let userAlertKeysArr = Object.keys(possibleAccounts[userBEI.accountUserName].typeAlerts);
            if (userAlertKeysArr.length === 0) {
                socket.emit('noPendingAlertsATM')
            }
        }
        console.log(possibleAccounts);
    })

    ////////// IN GAME METHODS //////////

    socket.on('sendingBlindInfo', (pInfo, blindType) => {

        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                if (blindType === 'BB') {
                    io.to(userBEI.roomLabel).emit('sendingBackInfo4BB', pInfo)
                    if (globalState[userBEI.roomLabel]) {
                        for (let i = 0; i < globalState[userBEI.roomLabel].pNickNames.length; i++) {
                            if (userBEI.inGameDisplayName === globalState[userBEI.roomLabel].pNickNames[i]) {
                                globalState[userBEI.roomLabel].pChips[i] = pInfo.chips;
                            }
                        }
                    }
                } else if (blindType === 'SB') {
                    io.to(userBEI.roomLabel).emit('sendingBackInfo4SB', pInfo)
                    for (let i = 0; i < globalState[userBEI.roomLabel].pNickNames.length; i++) {
                        if (userBEI.inGameDisplayName === globalState[userBEI.roomLabel].pNickNames[i]) {
                            globalState[userBEI.roomLabel].pChips[i] = pInfo.chips;
                        }
                    }
                }
            }
        }
    })

    socket.on('sendingWinnerOfRound', (winnerValue) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackWinnerOfRound', winnerValue);
                socket.emit('sendingHostNextRoundPage');
            }
        }
    })

    socket.on('sendingPInfo4Win', (pInfo, userTurn) => {
        // console.log(pInfo);
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingWinner4Room', pInfo, userTurn);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('hostConfirmsStartNextRound', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                globalState[key].gameCurrentlyInPlay = true;
                globalState[key].gameInTransition2NextRound = false;
                io.to(userBEI.roomLabel).emit('sendingBackConfirmation4NextRound');
                console.log(globalState[key]);
            }
        }
    })

    socket.on('userInitiatesReBuyProcess', (pInfo, userTurn) => {

        if (globalState[userBEI.roomLabel]) {
            for (let i = 0; i < globalState[userBEI.roomLabel].pNickNames.length; i++) {
                if (userBEI.inGameDisplayName === globalState[userBEI.roomLabel].pNickNames[i]) {
                    console.log(pInfo);
                    console.log(userTurn);
                    globalState[userBEI.roomLabel].pChips[i] = pInfo.chips;
                    io.to(userBEI.roomLabel).emit('sendingUserRequestForReBuy', pInfo, userTurn);
                }
            }
        }
    })

    socket.on('hostInitiatesNewRoomSizeProcess', () => {
        if (globalState[userBEI.roomLabel]) {
            socket.to(userBEI.roomLabel).emit('hostIsInProcessOfChangingRoomSizeMidGame')
        }
    })

    socket.on('hostSetsNewRoomSizeMidGame', (nRS) => {
        if (globalState[userBEI.roomLabel]) {
            if (nRS != globalState[userBEI.roomLabel].desiredRoomSize) {
                if (nRS < globalState[userBEI.roomLabel].desiredRoomSize) {
                    for (let i = 0; i < globalState[userBEI.roomLabel].pNickNames.length; i++) {
                        if (globalState[userBEI.roomLabel].pNickNames[i] === '+') {
                            globalState[userBEI.roomLabel].pNickNames.splice(i, 1);
                            globalState[userBEI.roomLabel].pChips.splice(i, 1);
                            globalState[userBEI.roomLabel].players.splice(i, 1);
                        }
                    }
                }
                globalState[userBEI.roomLabel].desiredRoomSize = nRS;
                console.log(globalState[userBEI.roomLabel].desiredRoomSize);
                io.to(userBEI.roomLabel).emit('sendingBackRoomSizeChangeMidGame', globalState[userBEI.roomLabel].pNickNames, globalState[userBEI.roomLabel].pChips, nRS, globalState[userBEI.roomLabel].players);
            }
        }
    })

    socket.on('sendingCurrentRoundOverStatus', () => {
        if (globalState[userBEI.roomLabel]) {
            globalState[userBEI.roomLabel].gameCurrentlyInPlay = false;
            globalState[userBEI.roomLabel].gameInTransition2NextRound = true;
            console.log(globalState[userBEI.roomLabel]);
        }
    })

    
    ////////// DISCONNECT / LEAVE GAME ON METHODS //////////
    // socket.on('disconnecting', (reason) => {

    //     if (userBEI.userLoggedIn) {
    //         possibleAccounts[userBEI.accountUserName].loggedIn = false;
    //         possibleAccounts[userBEI.accountUserName].inGame = false;
    //         possibleAccounts[userBEI.accountUserName].currentRoom = '';
    //         dataToJSON();
    //     }

    //     if (globalState[userBEI.roomLabel]) {
    //         globalState[userBEI.roomLabel].currentRoomSize--;
    //         if (globalState[userBEI.roomLabel].currentRoomSize <= 0) {
    //             delete globalState[userBEI.roomLabel];
    //         } else {
    //             for (let i = 0; i < globalState[userBEI.roomLabel].pNickNames.length; i++) {
    //                 if (userBEI.id === globalState[userBEI.roomLabel].players[i]) {
    //                     // globalState[userBEI.roomLabel].pNickNames[i] = '+';
    //                     globalState[userBEI.roomLabel].pNickNames[i] = '+';
    //                     globalState[userBEI.roomLabel].pChips[i] = '+';
    //                     globalState[userBEI.roomLabel].players[i] = '';
    //                     io.to(userBEI.roomLabel).emit('sendingUserDisconnectToRoom', i + 1, globalState[userBEI.roomLabel]);
    //                 }
    //             }
    //         }
    //     }


    // })

    // socket.on('disconnect', () => {
    //     setTimeout(() => {
    //         userBEI.reconnectedIndicator = true;
    //         console.log('full disconnect from user: ');
    //         console.log(userBEI);
    //     }, 15000)
    // })

    socket.on('sendingInProgressGameState', (gameState) => {

        io.to(userBEI.roomLabel).emit('initializingGameStateForUserJoiningMidGame', gameState);

    })

    socket.on('userDisbandsGameWhileInCreatingGameProcess', () => {
        if (globalState[userBEI.roomLabel]) {
            delete globalState[userBEI.roomLabel];
            socket.leave(userBEI.roomLabel);
            userBEI.roomLabel = null;
        }

        console.log(globalState);

        if (userBEI.userLoggedIn) {
            if (possibleAccounts[userBEI.accountUserName]) {
                possibleAccounts[userBEI.accountUserName].inGame = false;
                possibleAccounts[userBEI.accountUserName].currentRoom = '';
            }
        }

        console.log(possibleAccounts);
    })

    socket.on('userConfirmsLeaveGameManually', () => {
        
        if (userBEI.userLoggedIn) {
            possibleAccounts[userBEI.accountUserName].inGame = false;
            possibleAccounts[userBEI.accountUserName].currentRoom = '';
        }

        if (globalState[userBEI.roomLabel]) {
            globalState[userBEI.roomLabel].currentRoomSize--;
            if (globalState[userBEI.roomLabel].currentRoomSize <= 0) {
                delete globalState[userBEI.roomLabel];
            } else {
                for (let i = 0; i < globalState[userBEI.roomLabel].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[userBEI.roomLabel].pNickNames[i]) {
                        globalState[userBEI.roomLabel].pNickNames[i] = '+';
                        globalState[userBEI.roomLabel].pChips[i] = '+';
                        globalState[userBEI.roomLabel].players[i] = '';
                        io.to(userBEI.roomLabel).emit('sendingUserDisconnectToRoom', i + 1, globalState[userBEI.roomLabel]);
                    }
                }   
            }
        }

        socket.leave(userBEI.roomLabel);
        userBEI.roomLabel = null;

        dataToJSON();
    })

    socket.on('userDisbandsGameWhileInPreGameLobby', () => {

        if (userBEI.userLoggedIn) {
            possibleAccounts[userBEI.accountUserName].inGame = false;
            possibleAccounts[userBEI.accountUserName].currentRoom = '';
        }

        if (globalState[userBEI.roomLabel]) {
            socket.to(userBEI.roomLabel).emit('sendingDisbandGameToRoom');
            socket.leave(userBEI.roomLabel);
            userBEI.roomLabel = '';
        }

    })

    socket.on('sendingDataBackAfterDisbandGame', () => {
        if (userBEI.userLoggedIn) {
            possibleAccounts[userBEI.accountUserName].inGame = false;
            possibleAccounts[userBEI.accountUserName].currentRoom = '';
        }

        if (globalState[userBEI.roomLabel]) {
            delete globalState[userBEI.roomLabel];
            socket.leave(userBEI.roomLabel);
            userBEI.roomLabel = '';
        }

    })

    socket.on('userOptsToReconnectPreGameLobby', (userIdle) => {
        socket.join(userBEI.roomLabel);

        if (globalState[userBEI.roomLabel]) {
            console.log(globalState[userBEI.roomLabel].players);
        }
    })

    socket.on('userOptsToLoadCleanPreGameLobby', () => {
        socket.emit('sendingBackUserOptToLoadClean');
    })

    socket.on('sendingBackGameStateForEqualizationIdlePlayer', (gameState) => {
        io.to(userBEI.roomLabel).emit('equalizingGameForIdlePlayer', gameState);
    })

    ////////// IN GAME PLAYER METHODS //////////

    // p1 //

    socket.on('p1Checks', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP1Check');
            }
        }
    })

    socket.on('p1CallsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP1Call', pInfo, type);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p1CallsAnte', (pInfo) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP1AnteCall', pInfo);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p1SubmitsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP1Bet', pInfo, type);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p1Folds', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP1Fold');
            }
        }
    })

    // p2 //

    socket.on('p2Checks', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP2Check');
            }
        }
    })

    socket.on('p2CallsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP2Call', pInfo, type);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p2CallsAnte', (pInfo) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP2AnteCall', pInfo);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p2SubmitsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP2Bet', pInfo, type);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p2Folds', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP2Fold')
            }
        }
    })

    // p3 //

    socket.on('p3Checks', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP3Check');
            }
        }
    })

    socket.on('p3CallsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP3Call', pInfo, type);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p3CallsAnte', (pInfo) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP3AnteCall', pInfo);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p3SubmitsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP3Bet', pInfo, type);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p3Folds', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP3Fold')
            }
        }
    })

    // p4 //

    socket.on('p4Checks', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP4Check');
            }
        }
    })

    socket.on('p4CallsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP4Call', pInfo, type);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p4CallsAnte', (pInfo) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP4AnteCall', pInfo);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p4SubmitsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP4Bet', pInfo, type);
                for (let i = 0; i < globalState[key].pNickNames.length; i++) {
                    if (userBEI.inGameDisplayName === globalState[key].pNickNames[i]) {
                        globalState[key].pChips[i] = pInfo.chips;
                    }
                }
            }
        }
    })

    socket.on('p4Folds', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP4Fold')
            }
        }
    })

    // p5 //

    socket.on('p5Checks', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP5Check');
            }
        }
    })

    socket.on('p5CallsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP5Call', pInfo, type);
            }
        }
    })

    socket.on('p5CallsAnte', (pInfo) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP5AnteCall', pInfo);
            }
        }
    })

    socket.on('p5SubmitsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP5Bet', pInfo, type);
            }
        }
    })

    socket.on('p5Folds', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP5Fold')
            }
        }
    })

    // p6 //

    socket.on('p6Checks', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP6Check');
            }
        }
    })

    socket.on('p6CallsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP6Call', pInfo, type);
            }
        }
    })

    socket.on('p6CallsAnte', (pInfo) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP6AnteCall', pInfo);
            }
        }
    })

    socket.on('p6SubmitsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP6Bet', pInfo, type);
            }
        }
    })

    socket.on('p6Folds', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP6Fold')
            }
        }
    })

    // p7 //

    socket.on('p7Checks', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP7Check');
            }
        }
    })

    socket.on('p7CallsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP7Call', pInfo, type);
            }
        }
    })

    socket.on('p7CallsAnte', (pInfo) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP7AnteCall', pInfo);
            }
        }
    })

    socket.on('p7SubmitsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP7Bet', pInfo, type);
            }
        }
    })

    socket.on('p7Folds', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP7Fold')
            }
        }
    })

    // p8 //

    socket.on('p8Checks', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP8Check');
            }
        }
    })

    socket.on('p8CallsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP8Call', pInfo, type);
            }
        }
    })

    socket.on('p8CallsAnte', (pInfo) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP8AnteCall', pInfo);
            }
        }
    })

    socket.on('p8SubmitsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP8Bet', pInfo, type);
            }
        }
    })

    socket.on('p8Folds', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP8Fold')
            }
        }
    })

    // p9 //

    socket.on('p9Checks', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP9Check');
            }
        }
    })

    socket.on('p9CallsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP9Call', pInfo, type);
            }
        }
    })

    socket.on('p9CallsAnte', (pInfo) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP9AnteCall', pInfo);
            }
        }
    })

    socket.on('p9SubmitsBet', (pInfo, type) => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP9Bet', pInfo, type);
            }
        }
    })

    socket.on('p9Folds', () => {
        for (var key in globalState) {
            if (userBEI.roomLabel === key) {
                io.to(userBEI.roomLabel).emit('sendingBackP9Fold')
            }
        }
    })


    socket.on('sendingUserEndPointsForTests', (x, y) => {
        console.log("x = " + x);
        console.log("y = " + y);
    })

    socket.on('userIsInSpecificArea', () => {
        // console.log('user folds');
    })

})






http.listen(3080);

