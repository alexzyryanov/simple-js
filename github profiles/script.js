async function req(name) {
    let r = await fetch(`https://api.github.com/users/${name}`)
    let data = await r.json()
    console.dir(data)

    let div = document.createElement("div")
    div.className = "block-profile"
    div.innerHTML = `<div class="about">
    <div class="about-photo">
        <div class="photo">
            <img src=${data.avatar_url}>
        </div>
    </div>    
    <div class="about-info">
        <p>${data.login}</p>
    </div>
    </div>
    <div class="git-info">
        <div class="repos"><p>Repos ${data.public_repos}</p></div>
        <div class="followers"><p>Followers ${data.followers}</p></div>
        <div class="following"><p>Following ${data.following}</p></div>
    </div>`

    document.body.append(div)
}



let input = document.querySelector('input')
let button = document.querySelector("button")

button.addEventListener("click", () => {
    req(input.value)
})

