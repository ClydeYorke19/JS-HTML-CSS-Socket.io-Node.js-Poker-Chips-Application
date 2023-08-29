const viewUserInfoPageButton = document.getElementById('viewUserInfoPageButton');
const logInButton = document.getElementById('logInButton');
const createAccountButton = document.getElementById('createAccountButton');
var userLoggedInIndentifier = document.getElementById('userLoggedInIndentifier');

const viewAlertsButton = document.getElementById('viewAlertsButton');
const viewProfileInfoButton = document.getElementById('viewProfileInfoButton');
const viewFriendsButton = document.getElementById('viewFriendsButton');
const viewGroupsButton = document.getElementById('viewGroupsButton');
const signOutButton = document.getElementById('signOutButton');

const userInfoPage = document.getElementById('userInfoPage');
const xOutOfUserInfoPageButton = document.getElementById('xOutOfUserInfoPageButton');

const userLogInPage = document.getElementById('userLogInPage');
var theEnteredUsername = document.getElementById('theEnteredUsername');
var theEnteredPassword = document.getElementById('theEnteredPassword');
const createAccountButtonFromLoginPage = document.getElementById('createAccountButtonFromLoginPage');
const userSubmitsLogInInfoButton = document.getElementById('userSubmitsLogInInfoButton');
const xOutOfLogInPage = document.getElementById('xOutOfLogInPage');

const userCreateAccountPage = document.getElementById('userCreateAccountPage');
var theRequestedUserName = document.getElementById('theRequestedUserName');
var theRequestedPassword = document.getElementById('theRequestedPassword');
const userSubmitsCreatingOfAccountButton = document.getElementById('userSubmitsCreatingOfAccountButton');
const xOutOfCreatingAccountPage = document.getElementById('xOutOfCreatingAccountPage');

const logOutConfirmationPage = document.getElementById('logOutConfirmationPage');
const yesLogOutConfirmationButton = document.getElementById('yesLogOutConfirmationButton');
const noLogOutConfirmationButton = document.getElementById('noLogOutConfirmationButton');

const profileInfoPage = document.getElementById('profileInfoPage');
const xOutOfProfileInfoPage = document.getElementById('xOutOfProfileInfoPage');
let editableRealName = document.getElementById('editableRealName');
let editablePreSetChipAmount = document.getElementById('editablePreSetChipAmount');
const editRealNameButton = document.getElementById('editRealNameButton');
const editPreSetChipsButton = document.getElementById('editPreSetChipsButton');
const saveInputtedUserInfoButton = document.getElementById('saveInputtedUserInfoButton');

const recievingFailureToLoginPage = document.getElementById('recievingFailureToLoginPage');
const recievingAccountAlreadyExistsPage = document.getElementById('recievingAccountAlreadyExistsPage');
const recievingInvalidCredentialsForAccountPage = document.getElementById('recievingInvalidCredentialsForAccountPage');

const customizeChipsButton = document.getElementById('customizeChipsButton');
const saveChipCustomizationButton = document.getElementById('saveChipCustomizationButton');
const xOutOfCustomizeChipsPageButton = document.getElementById('xOutOfCustomizeChipsPageButton');
const customizeChipsCasePage = document.getElementById('customizeChipsCasePage');
let fileInput = document.getElementById('fileInput');
let chipPreviewImage = document.getElementById('chipPreviewImage');


const userClicksUserInfoButton = () => {
    userInfoPage.style.display = 'block';
}

const userXsOutOFUserInfoPage = () => {
    userInfoPage.style.display = 'none';
}

// Create Account Functionality //
const userClicksOnCreateAccountButton = () => {
    userInfoPage.style.display = 'none';
    userCreateAccountPage.style.display = 'block';
    resetCreateAccountPage();
}

const userXsOutOfCreateAccountPage = () => {
    userInfoPage.style.display = 'block';
    userCreateAccountPage.style.display = 'none';
}

const userSubmitsCreationOfAccount = () => {
    socket.emit('userCreatesAccount', theRequestedUserName.value, theRequestedPassword.value);
}

const userAccountWasCleared = (aT) => {
    userCreateAccountPage.style.display = 'none';
    userLogInPage.style.display = 'block';
    theRequestedUserName.value = '';
    theRequestedPassword.value = '';
    localStorage.setItem('a-t--t-a', aT);
}

// Log In Functionality //
const userClicksOnLogInButton = () => {
    userInfoPage.style.display = 'none';
    userLogInPage.style.display = 'block';
    resetLoginPage();
}

const userXsOutOfLogInPage = () => {
    userInfoPage.style.display = 'block';
    userLogInPage.style.display = 'none';
}

const userSubmitsLogInInfo = () => {
    socket.emit('userLogsIn', theEnteredUsername.value, theEnteredPassword.value)
}

const receivingUserLogInRequest = (userLogInInfo) => {
    userInfoPage.style.display = 'block';
    viewAlertsButton.style.display = 'block';
    viewProfileInfoButton.style.display = 'block';
    viewFriendsButton.style.display = 'block';
    viewGroupsButton.style.display = 'block';
    signOutButton.style.display = 'block';

    userLogInPage.style.display = 'none';
    logInButton.style.display = 'none';
    createAccountButton.style.display = 'none';

    userLoggedInIndentifier.innerHTML = userLogInInfo.username;

    user.loggedIn = true;
    user.userNameHolder = userLogInInfo.username;

    if (user.howUserGot2ViewPage !== 'signed_out') {
        for (let i = 0; i < userLogInInfo.friendsList.length; i++) {
            addingToFriendPageAfterAcceptedFRiendRQ(userLogInInfo.friendsList[i]);
        }

        let groupArr = Object.keys(userLogInInfo.groups);

        for (let i = 0; i < groupArr.length; i++) {
            addingNewGroup2GroupPage(groupArr[i]);
        }

        for (var key in userLogInInfo.typeAlerts) {
            if (userLogInInfo.typeAlerts[key]) {
                noPendingAlertsMessage.style.display = 'none';
                if (userLogInInfo.typeAlerts[key].alertPending === 'group_invite') {
                    handlingGroupRequest4Receiver(userLogInInfo.typeAlerts[key].groupNameHolder, key.slice(0, key.length - 2));
                } 
                
                if (userLogInInfo.typeAlerts[key].alertPending === 'friend_request') {
                    handlingFriendRequest4Receiver(key.slice(0, key.length - 2));
                }
            } else {
                noPendingAlertsMessage.style.display = 'block';
            }
        }

        if (userLogInInfo.additionalInfo.length > 0) {
            if (userLogInInfo.additionalInfo[0]) {
                editableRealName.value = userLogInInfo.additionalInfo[0];
                hostInGameNameDisplayInput.value = userLogInInfo.additionalInfo[0];
                userJoiningInGameNameDisplayInput.value = userLogInInfo.additionalInfo[0];
            }
            if (userLogInInfo.additionalInfo[1]) {
                editablePreSetChipAmount.value = userLogInInfo.additionalInfo[1];
                hostInGameChipDisplayInput.value = userLogInInfo.additionalInfo[1];
                userJoiningInGameChipsDisplayInput.value = userLogInInfo.additionalInfo[1];
            }
            if (userLogInInfo.additionalInfo[2]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    chipPreviewImage.src = e.target.result;
                }
                
                reader.readAsDataURL(userLogInInfo.additionalInfo[2]);

            }
        }
    }
}

const userInitiatesLogOut = () => {
    userInfoPage.style.display = 'none';
    logOutConfirmationPage.style.display = 'block';
}

const userConfirmsLogOut = () => {
    socket.emit('userConfirmsLogOut', user)
    user.howUserGot2ViewPage = 'signed_out';
    user.loggedIn = false;
    user.userNameHolder = null;
    userInfoPage.style.display = 'none';
    logOutConfirmationPage.style.display = 'none';

    theEnteredUsername.value = '';
    theEnteredPassword.value = '';

    if (!user.userCurrentlyInGame) {
        user.sId = null;
    }

    console.log(user);
}

const userAbortsLogOut = () => {
    userInfoPage.style.display = 'block';
    logOutConfirmationPage.style.display = 'none';
}

const recevingUserLogOutRequest = () => {
    viewAlertsButton.style.display = 'none';
    viewProfileInfoButton.style.display = 'none';
    viewFriendsButton.style.display = 'none';
    viewGroupsButton.style.display = 'none';
    signOutButton.style.display = 'none';

    logInButton.style.display = 'block';
    createAccountButton.style.display = 'block';

    userLoggedInIndentifier.innerText = 'You are not logged in!';

    user.loggedIn = false;
    user.userNameHolder = null;
}

const userClicksOnProfileInfoButton = () => {
    profileInfoPage.style.display = 'block';
}


// Profile Info Page Functionality //
const userXsOutOfProfileInfoPage = () => {
    profileInfoPage.style.display = 'none';
}

const userEditsDefaultName = () => {
    editableRealName.removeAttribute('readonly');
}

const userEditsDefaultChipAmount = () => {
    editablePreSetChipAmount.removeAttribute('readonly');
}

const userSavesInputtedProfileInfoData = () => {
    editableRealName.readOnly = true;
    editablePreSetChipAmount.readOnly = true;

    hostInGameNameDisplayInput.value = editableRealName.value;
    hostInGameChipDisplayInput.value = editablePreSetChipAmount.value;

    userJoiningInGameNameDisplayInput.value = editableRealName.value;
    userJoiningInGameChipsDisplayInput.value = editablePreSetChipAmount.value;

    socket.emit('userSavesNewProfileInfoData', editableRealName.value, editablePreSetChipAmount.value);
}

const showingUserMessageFailureToLogin = () => {

    recievingFailureToLoginPage.style.display = 'block';

    theEnteredUsername.value = '';
    theEnteredPassword.value = '';

    setTimeout(() => {
        recievingFailureToLoginPage.style.display = 'none';
    }, 3000)
}

const showingUserMessageInvalidCredentials = () => {

    recievingInvalidCredentialsForAccountPage.style.display = 'block';

    theRequestedUserName.value = '';
    theRequestedPassword.value = '';

    setTimeout(() => {
        recievingInvalidCredentialsForAccountPage.style.display = 'none';
    }, 3000)
}

const displayCustomizeChipsPage = () => {
    customizeChipsCasePage.style.display = 'block';
    userInfoPage.style.display = 'none';
}

const closeCustomizeChipsPage = () => {
    customizeChipsCasePage.style.display = 'none';
    userInfoPage.style.display = 'block';
}

const userSavesChipCustomization = () => {
    // console.log(fileInput.files[0].name);

    var reader = new FileReader();

    reader.onload = function(e) {
        chipPreviewImage.src = e.target.result;
    }
    reader.readAsDataURL(fileInput.files[0])


    socket.emit('userSavesInputtedFileForChipCustomization', fileInput.files[0].name);
    
}





