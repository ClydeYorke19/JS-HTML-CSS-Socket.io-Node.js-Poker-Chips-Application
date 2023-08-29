const invitingUserToGamePage = document.getElementById('invitingUserToGamePage');
var userBeingInvitedToGame = document.getElementById('userBeingInvitedToGame');
const userSubmitsInviteButton = document.getElementById('userSubmitsInviteButton');
const xOutOfInvitingUserToGamePage = document.getElementById('xOutOfInvitingUserToGamePage');

const userXsOutOfInvitePlayerToGamePage = () => {
    invitingUserToGamePage.style.display = 'none';
}

const userSubmitsGameInvite = () => {
    socket.emit('sendingGameInvite', userBeingInvitedToGame.value, user.userNameHolder);
}

const receivingClearanceForGameInvite = () => {
    invitingUserToGamePage.style.display = 'none';
    userBeingInvitedToGame.value = '';
}