const alertsPage = document.getElementById('alertsPage');
const xOutOfAlertsPageBttn = document.getElementById('xOutOfAlertsPageBttn');
const alertsPageList = document.getElementById('alertsPageList');
const noPendingAlertsMessage = document.getElementById('noPendingAlertsMessage');

const userViewsAlertsPage = () => {
    alertsPage.style.display = 'block';
    userInfoPage.style.display = 'none';
}

const userXsOutOfAlertsPage = () => {
    alertsPage.style.display = 'none';
    userInfoPage.style.display = 'block';
}

const handlingFriendRequest4Receiver = (userWhoSentRequest) => {

    noPendingAlertsMessage.style.display = 'none';

    let newAlertDiv = document.createElement('div');
    newAlertDiv.id = userWhoSentRequest + 'Other';
    newAlertDiv.style.width = '290px';
    newAlertDiv.style.height = '60px';
    newAlertDiv.style.border = '3px solid blue';
    newAlertDiv.style.borderRadius = '5px'
    newAlertDiv.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px blue';
    newAlertDiv.style.textAlign = 'center';
    let newAlertLabel = document.createElement('label');
    newAlertLabel.innerText = `${userWhoSentRequest} has sent a friend request`;
    newAlertLabel.style.fontSize = '5vw';
    newAlertLabel.style.fontFamily = 'optima';
    newAlertLabel.style.color = 'black';
    newAlertLabel.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue';
    // newAlertLabel.style.position = 'absolute';
    // newAlertLabel.style.left = '1vw';
    newAlertDiv.appendChild(newAlertLabel);
    var newAlertBreak = document.createElement('br');
    newAlertDiv.appendChild(newAlertBreak);
    var newAlertAcceptButton = document.createElement('button');
    newAlertAcceptButton.id = userWhoSentRequest;
    newAlertAcceptButton.innerText = 'accept';
    newAlertAcceptButton.style.position = 'absolute';
    newAlertAcceptButton.style.left = '50px';
    newAlertAcceptButton.style.border = '3px solid blue';
    newAlertAcceptButton.style.borderRadius = '5px';
    newAlertAcceptButton.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px blue';
    newAlertAcceptButton.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue';
    newAlertAcceptButton.style.fontSize = '4vw';
    newAlertAcceptButton.style.fontFamily = 'optima';
    newAlertAcceptButton.style.background = 'white';
    newAlertAcceptButton.style.paddingRight = '10px';
    newAlertAcceptButton.style.color = 'black';
    newAlertAcceptButton.style.fontVariant = 'small-caps';
    newAlertDiv.appendChild(newAlertAcceptButton);
    var newAlertDeclineButton = document.createElement('button');
    newAlertDeclineButton.innerText = 'decline';
    newAlertDeclineButton.style.position = 'absolute';
    newAlertDeclineButton.style.left = '150px';
    newAlertDeclineButton.style.border = '3px solid blue';
    newAlertDeclineButton.style.borderRadius = '5px';
    newAlertDeclineButton.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px blue';
    newAlertDeclineButton.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue';
    newAlertDeclineButton.style.fontSize = '4vw';
    newAlertDeclineButton.style.fontFamily = 'optima';
    newAlertDeclineButton.style.background = 'white';
    newAlertDeclineButton.style.fontVariant = 'small-caps';
    newAlertDeclineButton.style.color = 'black';
    newAlertDiv.appendChild(newAlertDeclineButton);

    alertsPageList.appendChild(newAlertDiv);

    newAlertAcceptButton.addEventListener('click', function() {
        socket.emit('userAcceptsFriendRequest', user.userNameHolder, userWhoSentRequest);
        socket.emit('deletingPendingAlert', 'friend_request', userWhoSentRequest + 'FR');
        alertsPageList.removeChild(newAlertDiv);
    })

    newAlertDeclineButton.addEventListener('click', function() {
        alertsPageList.removeChild(newAlertDiv);
        socket.emit('deletingPendingAlert', 'friend_request', userWhoSentRequest + 'FR');
    })

}

const handlingGroupRequest4Receiver = (groupName, userWhoSentRequest) => {

    noPendingAlertsMessage.style.display = 'none';

    let newAlertDiv = document.createElement('div');
    newAlertDiv.id = userWhoSentRequest + 'Other';
    newAlertDiv.style.width = '290px';
    newAlertDiv.style.height = '60px';
    newAlertDiv.style.border = '3px solid blue';
    newAlertDiv.style.borderRadius = '5px'
    newAlertDiv.style.textAlign = 'center';
    newAlertDiv.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px blue';
    let newAlertLabel = document.createElement('label');
    newAlertLabel.innerText = `${userWhoSentRequest} has invited you to a group`;
    newAlertLabel.style.fontSize = '5vw';
    newAlertLabel.style.fontFamily = 'optima';
    newAlertLabel.style.color = 'black';
    newAlertLabel.style.fontVariant = 'small-caps';
    // newAlertLabel.style.position = 'absolute';
    // newAlertLabel.style.left = '1vw';
    newAlertLabel.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue';
    newAlertDiv.appendChild(newAlertLabel);
    var newAlertBreak = document.createElement('br');
    newAlertDiv.appendChild(newAlertBreak);
    var newAlertAcceptButton = document.createElement('button');
    newAlertAcceptButton.id = userWhoSentRequest;
    newAlertAcceptButton.innerText = 'accept';
    newAlertAcceptButton.style.position = 'absolute';
    newAlertAcceptButton.style.left = '50px';
    newAlertAcceptButton.style.border = '3px solid blue';
    newAlertAcceptButton.style.borderRadius = '5px';
    newAlertAcceptButton.style.fontSize = '4vw';
    newAlertAcceptButton.style.fontFamily = 'optima';
    newAlertAcceptButton.style.background = 'white';
    newAlertAcceptButton.style.paddingRight = '10px';
    newAlertAcceptButton.style.color = 'black';
    newAlertAcceptButton.style.fontVariant = 'small-caps';
    newAlertAcceptButton.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px blue';
    newAlertAcceptButton.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue';
    newAlertDiv.appendChild(newAlertAcceptButton);
    var newAlertDeclineButton = document.createElement('button');
    newAlertDeclineButton.innerText = 'decline';
    newAlertDeclineButton.style.position = 'absolute';
    newAlertDeclineButton.style.left = '150px';
    newAlertDeclineButton.style.border = '3px solid blue';
    newAlertDeclineButton.style.borderRadius = '5px';
    newAlertDeclineButton.style.fontSize = '4vw';
    newAlertDeclineButton.style.fontFamily = 'optima';
    newAlertDeclineButton.style.background = 'white';
    newAlertDeclineButton.style.fontVariant = 'small-caps';
    newAlertDeclineButton.style.color = 'black';
    newAlertDeclineButton.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px blue';
    newAlertDeclineButton.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue';
    newAlertDiv.appendChild(newAlertDeclineButton);

    alertsPageList.appendChild(newAlertDiv);

    newAlertAcceptButton.addEventListener('click', function() {
        socket.emit('userHasAcceptedGroupInvite', groupName, userWhoSentRequest, user.userNameHolder);
        socket.emit('deletingPendingAlert', 'group_invite', userWhoSentRequest + 'GI');
        alertsPageList.removeChild(newAlertDiv);
    })

    newAlertDeclineButton.addEventListener('click', function() {
        socket.emit('deletingPendingAlert', 'group_invite', userWhoSentRequest + 'GI');
        alertsPageList.removeChild(newAlertDiv);
    })

}

const handlingGameInviteForReceiver = (userWhoSentInvite, gameCode) => {
    noPendingAlertsMessage.style.display = 'none';

    let newAlertDiv = document.createElement('div');
    newAlertDiv.id = userWhoSentInvite + 'Inv';
    newAlertDiv.style.width = '290px';
    newAlertDiv.style.height = '60px';
    newAlertDiv.style.border = '3px solid blue';
    newAlertDiv.style.borderRadius = '5px'
    newAlertDiv.style.textAlign = 'center';
    newAlertDiv.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px blue';
    let newAlertLabel = document.createElement('label');
    newAlertLabel.innerText = `${userWhoSentInvite} has invited you to a game`;
    newAlertLabel.style.fontSize = '5vw';
    newAlertLabel.style.fontFamily = 'optima';
    newAlertLabel.style.color = 'black';
    newAlertLabel.style.fontVariant = 'small-caps';
    // newAlertLabel.style.position = 'absolute';
    // newAlertLabel.style.left = '1vw';
    newAlertLabel.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue';
    newAlertDiv.appendChild(newAlertLabel);
    var newAlertBreak = document.createElement('br');
    newAlertDiv.appendChild(newAlertBreak);
    var newAlertAcceptButton = document.createElement('button');
    newAlertAcceptButton.innerText = 'accept';
    newAlertAcceptButton.style.position = 'absolute';
    newAlertAcceptButton.style.left = '50px';
    newAlertAcceptButton.style.border = '3px solid blue';
    newAlertAcceptButton.style.borderRadius = '4px';
    newAlertAcceptButton.style.fontSize = '4vw';
    newAlertAcceptButton.style.fontFamily = 'optima';
    newAlertAcceptButton.style.background = 'white';
    newAlertAcceptButton.style.paddingRight = '10px';
    newAlertAcceptButton.style.color = 'black';
    newAlertAcceptButton.style.fontVariant = 'small-caps';
    newAlertAcceptButton.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px blue';
    newAlertAcceptButton.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue';
    newAlertDiv.appendChild(newAlertAcceptButton);
    var newAlertDeclineButton = document.createElement('button');
    newAlertDeclineButton.innerText = 'decline';
    newAlertDeclineButton.style.position = 'absolute';
    newAlertDeclineButton.style.left = '150px';
    newAlertDeclineButton.style.border = '3px solid blue';
    newAlertDeclineButton.style.borderRadius = '5px';
    newAlertDeclineButton.style.fontSize = '4vw';
    newAlertDeclineButton.style.fontFamily = 'optima';
    newAlertDeclineButton.style.background = 'white';
    newAlertDeclineButton.style.fontVariant = 'small-caps';
    newAlertDeclineButton.style.color = 'black';
    newAlertDeclineButton.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px blue';
    newAlertDeclineButton.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue';
    newAlertDiv.appendChild(newAlertDeclineButton);

    alertsPageList.appendChild(newAlertDiv);

    newAlertAcceptButton.addEventListener('click', function() {
        socket.emit('userAcceptsGameInvite', gameCode);
        socket.emit('deletingPendingAlert', 'game_invite', userWhoSentInvite + 'game_inv')
        alertsPage.style.display = 'none';
        alertsPageList.removeChild(newAlertDiv);
    })

    newAlertDeclineButton.addEventListener('click', function() {
        socket.emit('deletingPendingAlert', 'game_invite', userWhoSentInvite + 'game_inv')
        alertsPageList.removeChild(newAlertDiv);
    })


}   

const displayingNoAlertsToUser = () => {
    noPendingAlertsMessage.style.display = 'block';
}