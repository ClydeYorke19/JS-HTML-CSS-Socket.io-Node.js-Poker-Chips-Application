const friendsPage = document.getElementById('friendsPage');
const xOutOfFriendsPage = document.getElementById('xOutOfFriendsPage');
const addMoreFriendsButton = document.getElementById('addMoreFriendsButton');
const friendsList = document.getElementById('friendsList');

const addingFriendsPage = document.getElementById('addingFriendsPage');
var addingFriendsInput = document.getElementById('addingFriendsInput');
const xOutOfAddingFriendPage = document.getElementById('xOutOfAddingFriendPage');
const sendingFriendRequestButton = document.getElementById('sendingFriendRequestButton');

const userViewsFriendsPage = () => {
    userInfoPage.style.display = 'none';
    friendsPage.style.display = 'block';
}

const userXsOutOfFriendsPage = () => {
    userInfoPage.style.display = 'block';
    friendsPage.style.display = 'none';
}

const userXsOutOfAddingFriendsPage = () => {
    addingFriendsPage.style.display = 'none';
    friendsPage.style.display = 'block';
}

const userClicksAddFriendButton = () => {
    addingFriendsPage.style.display = 'block';
    friendsPage.style.display = 'none';
    resettingAddingFriendsPage();
}

const userSendsFriendRequest = () => {
    socket.emit('userSendsFriendRequest', addingFriendsInput.value, user.userNameHolder);
}

const friendRequestWasCleared = () => {
    addingFriendsPage.style.display = 'none';
    friendsPage.style.display = 'block';
    addingFriendsInput.value = '';
}

const addingToFriendPageAfterAcceptedFRiendRQ = (newFriend) => {
    let newFriendsButtton = document.createElement('button');
    newFriendsButtton.id = newFriend;
    newFriendsButtton.innerText = newFriend;
    newFriendsButtton.style.fontSize = '5vw';
    newFriendsButtton.style.fontFamily = 'optima';
    newFriendsButtton.style.background = 'white';
    newFriendsButtton.style.color = 'black';
    newFriendsButtton.style.border = '3px solid blue';
    newFriendsButtton.style.borderRadius = '5px';
    newFriendsButtton.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px blue';
    newFriendsButtton.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue';
    friendsList.appendChild(newFriendsButtton);
}





