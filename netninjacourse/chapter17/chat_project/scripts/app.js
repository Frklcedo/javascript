//dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const chatRoom= document.querySelector('.chat-rooms');

// add new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message).then(() => {
        newChatForm.reset();
    }).catch(err => {
        console.log(err);
    });
});

// update username
newNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.setUsername(newName);
    newNameForm.reset();
    updateMsg.textContent = 'Your name was updated to ' + newName;
    setTimeout(() => {
        updateMsg.textContent = '';
    }, 4000);
})

// update the chatroom

chatRoom.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.setRoom(e.target.getAttribute('id'));
        chatroom.getChats(data => chatUI.render(data));
        e.stopPropagation();
    }
});


// check localStorage
let defaultRoom = localStorage.room ? localStorage.room : 'general';
let defaultName = localStorage.username ? localStorage.username : 'anon';

// class instances 
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom(defaultRoom, defaultName);

// gets chats and render
chatroom.getChats(data => chatUI.render(data));