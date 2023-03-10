function fact(n) {
    if(n==0) return 1;
    return fact(n-1)*n;
}

function applique(f, array){
    return array.map(f);
}
const chat = document.getElementById("chat")
const sendButton = document.getElementById("sendButton")
const messageInput = document.getElementById("messageInput")

const msgs = [
    {"msg": "Hello World"},
    {"msg": "Hello Mars"},
    {"msg": "Hello Venus"}
]

function updateMessage(msgs){
    messageInput.value = "";
    deleteMessages(chat);
    msgs.forEach((msg) => {
        const li = document.createElement("li");
        li.className = "message"
        li.textContent = msg.msg;
        chat.appendChild(li);
    })
}

function deleteMessages(chat){
    while(chat.firstChild){
        chat.removeChild(chat.firstChild);
    }
}

messageInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        sendButton.click();
        event.preventDefault();
    }
})
sendButton.addEventListener("click", () => updateMessage(msgs))
