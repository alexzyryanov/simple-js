let count = 0
let total = 0
let x = [
    {"ans": 2},
    {"ans": 0, "qw": "2 + 3?", "a1": "5", "a2": "2", "a3": "4"}]


function loads() {
    if (count === x.length){
        let div = document.querySelector(".form")
        div.remove()
        let h1 = document.createElement("h1")
        h1.innerText = `yor result ${total}`
        document.body.append(h1)
    } else {
        let div = document.querySelector(".form-vote")
        div.innerHTML = `
        <div class="form-answer"><h1>${x[count]["qw"]}</h1></div>
        <div class="answer-box"><input type="radio" name="answer" value="1">${x[count]["a1"]}</div>
        <div class="answer-box"><input type="radio" name="answer" value="2">${x[count]["a2"]}</div>
        <div class="answer-box"><input type="radio" name="answer" value="3">${x[count]["a3"]}</div>`
    }
}


let button = document.querySelector(".form-button")
button.addEventListener("click", () => {
    let elem = document.querySelectorAll(".answer-box")
    if (elem[ x[count]["ans"] ].firstChild.checked === true) {
        total += 1
        count += 1
        loads()
    } else {
        count += 1
        loads()
    }
})