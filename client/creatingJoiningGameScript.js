// var socket = io();

// io.connect( "/" );

const homePage = document.getElementById('homePageDisplay');

const createGameButton = document.getElementById('createGameButton');

const joinGameButton = document.getElementById('joinGameButton');

const setGameSizePage = document.getElementById('setGameSizePage');

const gameSizeSubmitButton = document.getElementById('roomSizeSubmitButton');

const hostInGameDisplayInfoPage = document.getElementById('hostInGameDisplayInfoPage');

const userCreatingGameSubmitsIGInfoButton = document.getElementById('hostSubmitsInGameInfoButton');

const gameSizeRadioSelect = document.getElementById('roomSizeRadioSelect');

const enterGameCodePage = document.getElementById('enterGameCodePage');

const userSubmitsGameCodeButton = document.getElementById('userSubmitsGameCodeButton');

const userJoiningInGameDisplayInfoPage = document.getElementById('userJoiningInGameDisplayInfoPage');

const userJoiningSubmitsInGameInfoButton = document.getElementById('userJoiningSubmitsInGameInfoButton');

var hostInGameNameDisplayInput = document.getElementById('inGameNameDisplayInput');

var hostInGameChipDisplayInput = document.getElementById('inGameChipsDisplayInput');

var enteredGameCode = document.getElementById('enteredGameCode');

var userJoiningInGameNameDisplayInput = document.getElementById('userJoiningInGameNameDisplayInput');

var userJoiningInGameChipsDisplayInput = document.getElementById('userJoiningInGameChipsDisplayInput');

const recievingInvalidCredentialsForInGameDisplaysPage = document.getElementById('recievingInvalidCredentialsForInGameDisplaysPage');

let capturedGameSize;


const settingUsersSocketId = (sId) => {
    user['sId'] = sId;
    console.log(user);
    socket.emit('testTest', localStorage.getItem('a-t--t-a'));
}

/// USER IS CREATING A GAME ///
const userClicksCreateGameButton = () => {
    homePage.style.display = 'none';
    setGameSizePage.style.display = 'block';
    user.currentPage = 'u_a_createGamePt1';
    resettingDataProcessHost();
    socket.emit('newGame', user.userNameHolder);
}   

const userSetsGameSize = () => {

    let gS_OptionCapture;

    var roomSizeOptions = gameSizeRadioSelect.getElementsByTagName('input');
    
    for (let i = 0; i < roomSizeOptions.length; i++) {
        if (roomSizeOptions[i].checked) {
            gS_OptionCapture = i + 2;
        }
    }

    capturedGameSize = gS_OptionCapture;

    socket.emit('userSetsAndSendsRoomSize', gS_OptionCapture);
}

const sendingUser2NextPageAfterConfirmingValidRoomSize = () => {
    setGameSizePage.style.display = 'none';
    hostInGameDisplayInfoPage.style.display = 'block';

    user.currentPage = 'u_a_createGamePt2';
}

const userCreatingGameSubmitsInGameDisplayInfo = () => {
    if (hostInGameNameDisplayInput.value.length > 0 && hostInGameChipDisplayInput.value != '' && Number(hostInGameChipDisplayInput.value) > 0) {
        
        user['nickname'] = hostInGameNameDisplayInput.value;
        user['buyInChips'] = Number(hostInGameChipDisplayInput.value);
        socket.emit('hostSubmitsIGDisplayInfo', hostInGameNameDisplayInput.value, hostInGameChipDisplayInput.value);
        hostInGameDisplayInfoPage.style.display = 'none';
        user.currentPage = 'u_a_preGameLobby';
    } else {
        recievingInvalidCredentialsForInGameDisplaysPage.style.display = 'block';

        hostInGameNameDisplayInput.value = '';
        hostInGameChipDisplayInput.value = '';

        setTimeout(() => {
            recievingInvalidCredentialsForInGameDisplaysPage.style.display = 'none';
        }, 2000)
    }
}

/// USER IS JOINONG A GAME ///

const userClicksJoinGameButton = () => {
    homePage.style.display = 'none';
    enterGameCodePage.style.display = 'block';
    user.currentPage = 'u_a_enterGameCode';
    resettingProcessPlayerJoining();
    socket.emit('userInitiatesJoinGame')
}

const userEntersGameCode = () => {
    socket.emit('userJoiningGameSubmitsGameCode', enteredGameCode.value);
}

const displayingUserJoiningIGDisplayInfoPageAfterClearance = () => {
    homePage.style.display = 'none';
    enterGameCodePage.style.display = 'none';
    userJoiningInGameDisplayInfoPage.style.display = 'block';
    user.currentPage = 'u_a_joiningGameEnteringDisplayInfo';
}

const userJoiningSubmitsIGDisplayInfo = () => {

    if (userJoiningInGameNameDisplayInput.value.length > 0 && userJoiningInGameChipsDisplayInput.value != '' && Number(userJoiningInGameChipsDisplayInput.value) > 0) {
        user['nickname'] = userJoiningInGameNameDisplayInput.value;
        user['buyInChips'] = Number(userJoiningInGameChipsDisplayInput.value);
        socket.emit('userJoiningGameEntersIGDisplayInfo', userJoiningInGameNameDisplayInput.value, userJoiningInGameChipsDisplayInput.value);
        userJoiningInGameDisplayInfoPage.style.display = 'none';
        user.currentPage = 'u_a_preGameLobby';
    } else {
        recievingInvalidCredentialsForInGameDisplaysPage.style.display = 'block';

        userJoiningInGameChipsDisplayInput.value = '';
        userJoiningInGameChipsDisplayInput.value = '';

        setTimeout(() => {
            recievingInvalidCredentialsForInGameDisplaysPage.style.display = 'none';
        }, 2000)
    }
}












