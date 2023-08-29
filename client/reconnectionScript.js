const confirmationReconnectionPage = document.getElementById('confirmationReconnectionPage');
const userConfirmsReconnectionMessage = document.getElementById('userConfirmsReconnectionMessage');
const userDeclinesReconnectionMessage = document.getElementById('userDeclinesReconnectionMessage');


const signalUserReconnectionIndicator = () => {
    confirmationReconnectionPage.style.display = 'block';
}

const userConfirmsReconnectSignalPreGameLobby = () => {
    confirmationReconnectionPage.style.display = 'none';
    socket.emit('userOptsToReconnectPreGameLobby', user['inGameTurn']);
}

const userDeclinesReconnectSignalPreGameLobby = () => {
    confirmationReconnectionPage.style.display = 'none';
    socket.emit('userOptsToLoadCleanPreGameLobby');
}

const returningUserToHomeOnCleanLoad = () => {
    inGameEls.forEach((e) => {
        e.style.display = 'none';
    })

    homePage.style.display = 'block';
}

const receivingEqualizationForGameStateIdlePlayer = () => {
    console.log('yo');
}

const grabbingGSForEqualizationIdlePlayer = () => {

    if (user['inGameTurn'] === 2) {
        socket.emit('sendingBackGameStateForEqualizationIdlePlayer', gameObj);
    }
}

const equalizingGameForIdlePlayer = (gameState) => {
    finalizingGameEnvironment(gameState.bB, gameState.bbAnte, gameState.gameSize, 'equalizingForIdlePlayer', gameState);
}

