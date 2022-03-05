// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username){
        this.room =  room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message){
        // format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };

        const response = await this.chats.add(chat);
        return response;
    }
    getChats(callback){
        this.unsub = this.chats.where('room','==',this.room).orderBy('created_at').onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    // update the UI
                    callback(change.doc.data());
                }
            });
        });
    }
    setUsername(username){
        this.username = username;
        localStorage.setItem('username', username);
    }
    setRoom(room){
        this.room = room;
        if (this.unsub){
            this.unsub();
        }
    }
}