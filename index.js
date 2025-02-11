let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    //console.log(count)
    let saved = count + "-" 
    saveEl.textContent += saved
    countEl.textContent = 0
    count = 0
}