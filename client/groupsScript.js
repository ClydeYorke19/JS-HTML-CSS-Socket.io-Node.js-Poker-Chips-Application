const groupsPage = document.getElementById('groupsPage');
const xOutOfGroupsPage = document.getElementById('xOutOfGroupsPage');
const createNewGroupButton = document.getElementById('createNewGroupButton');
const groupsList = document.getElementById('groupsList');

const creatingNewGroupPage = document.getElementById('creatingNewGroupPage');
const xOutOfCreatingNewGroup = document.getElementById('xOutOfCreatingNewGroup');
var newGroupNameInput = document.getElementById('newGroupNameInput');
var newGroupRoomSizeInput = document.getElementById('newGroupRoomSizeInput');
var newGroupAnteInput = document.getElementById('newGroupAnteInput');
const userSubmitsNewlyCreatedGroup = document.getElementById('userSubmitsNewlyCreatedGroup');

const viewingTheChosenGroupPage = document.getElementById('viewingTheChosenGroupPage');
const xOutOfvtcg = document.getElementById('xOutOfvtcg');
const vtcgEditGroupInfoBttn = document.getElementById('vtcgEditGroupInfoBttn');
var vtcgLabel = document.getElementById('vtcgLabel');
const vtcgRSLabel = document.getElementById('vtcgRSLabel');
var vtcgRSInput = document.getElementById('vtcgRSInput');
const vtcgAnteLabel = document.getElementById('vtcgAnteLabel');
var vtcgAnteInput = document.getElementById('vtcgAnteInput');
const vtcgSaveGroupInfoBttn = document.getElementById('vtcgSaveGroupInfoBttn');
const vtcgMembersLabel = document.getElementById('vtcgMembersLabel');
const vtcgInvFriends2GroupButton = document.getElementById('vtcgInvFriends2GroupButton');
const vtcgMembersList = document.getElementById('vtcgMembersList');
const vtcgStartGameButton = document.getElementById('vtcgStartGameButton');
const vtcgDeleteGroupButton = document.getElementById('vtcgDeleteGroupButton');

const invitingMembersToGroupPage = document.getElementById('invitingMembersToGroupPage');
var userToInviteToGroupInput = document.getElementById('userToInviteToGroupInput');
const invitingUserToGroupSubmit = document.getElementById('invitingUserToGroupSubmit');
const xOutOfInvUser2Group = document.getElementById('xOutOfInvUser2Group');
const viewFriends2Inv2Group = document.getElementById('viewFriends2Inv2Group');

const userViewsGroupPage = () => {
    groupsPage.style.display = 'block';
    userInfoPage.style.display = 'none';
}

const userXsOutOfGroupPage = () => {
    groupsPage.style.display = 'none';
    userInfoPage.style.display = 'block';
}

const userInitiatesCreatingNewGroup = () => {
    groupsPage.style.display = 'none';
    creatingNewGroupPage.style.display = 'block';
    resettingNewGroupInfoPage();
}

const userXsOutOfCreatingGroupPage = () => {
    groupsPage.style.display = 'block';
    creatingNewGroupPage.style.display = 'none';
}

const userSubmitsNewGroupInfo = () => {
    groupsPage.style.display = 'block';
    creatingNewGroupPage.style.display = 'none';

    let chosenGroupSize;
    let groupRoomSizeInputs = newGroupRoomSizeInput.getElementsByTagName('input');

    for (let i = 0; i < groupRoomSizeInputs.length; i++) {
        if (groupRoomSizeInputs[i].checked) {
            chosenGroupSize = i + 2;
        }
    }

    socket.emit('userSubmitsNewGroupInfo', user.userNameHolder, newGroupNameInput.value, chosenGroupSize, newGroupAnteInput.value);
}

const addingNewGroup2GroupPage = (groupName) => {

    let groupButton = document.createElement('button');
    groupButton.innerText = groupName;
    groupButton.id = groupName;
    groupButton.style.fontSize = '5vw';
    groupButton.style.fontFamily = 'optima';
    groupButton.style.border = '3px solid blue';
    groupButton.style.borderRadius = '5px';
    groupButton.style.minWidth = '90px';
    groupButton.style.background = 'white';
    groupButton.style.color = 'black';
    groupButton.style.boxShadow = '-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px, -5px 5px 0px 0px blue';
    groupButton.style.textShadow = '-.5px .5px blue, -1px .5px black, -1.5px 1px blue, -2px 1px black';

    groupsList.appendChild(groupButton);

    groupButton.addEventListener('click', function() {
        socket.emit('userViewsSpecificGroup', groupButton.id, user.userNameHolder);
    })
}

const handlingUserRequest2ViewSpecificGroup = (groupInformation, isCreatorOfGroup) => {

    viewingTheChosenGroupPage.style.display = 'block';
    groupsPage.style.display = 'none';

    vtcgLabel.innerHTML = groupInformation.groupName;
    vtcgRSInput.value = groupInformation.groupSize;
    vtcgAnteInput.value = groupInformation.groupAnte;

    if (isCreatorOfGroup) {
        vtcgEditGroupInfoBttn.style.display = 'block';
        vtcgDeleteGroupButton.style.display = 'block';
        vtcgStartGameButton.style.display = 'block';
    } else {
        vtcgEditGroupInfoBttn.style.display = 'none';
        vtcgDeleteGroupButton.style.display = 'none';
        vtcgStartGameButton.style.display = 'none';
    }
    
    for (let i = 0; i < groupInformation.groupMembers.length; i++) {
        if (groupInformation.groupMembers[i] != user.userNameHolder) {
            var newGlEl = document.createElement('li');
            newGlEl.innerHTML = groupInformation.groupMembers[i];
            vtcgMembersList.appendChild(newGlEl);
        }
    }

}

const userXsOutOfSpecificGroupInfoPage = () => {
    while (vtcgMembersList.firstChild) {
        vtcgMembersList.removeChild(vtcgMembersList.firstChild);
    }

    viewingTheChosenGroupPage.style.display = 'none';
    groupsPage.style.display = 'block';
}

const initiatingInvitingUserToGroup = () => {
    viewingTheChosenGroupPage.style.display = 'none';
    invitingMembersToGroupPage.style.display = 'block';
    userToInviteToGroupInput.value = '';
}

const userXsOutOfInvitingUserToGroupPage = () => {
    viewingTheChosenGroupPage.style.display = 'block';
    invitingMembersToGroupPage.style.display = 'none';
}

const userSubmitsGroupInvite = () => {
    socket.emit('userSendsGroupInvite', vtcgLabel.innerHTML, userToInviteToGroupInput.value, user.userNameHolder);
}

const receivingClearanceForGroupInvite = () => {
    viewingTheChosenGroupPage.style.display = 'block';
    invitingMembersToGroupPage.style.display = 'none';
    userToInviteToGroupInput.value = '';
}