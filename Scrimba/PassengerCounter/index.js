let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let username = "Toby"
let message = "You have three new notifications"
let messageToUser = message + ", " + username + "!"


console.log(messageToUser)


//console.log(message + ", " + username + "!")

function increment(){
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

        
    
