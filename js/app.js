const users = document.querySelector(".users")
const BASE_URL = "https://jsonplaceholder.typicode.com/users"
const loader = document.querySelector(".lds-ring")

async function getData(url){
    const response = await fetch(url)
    response
        .json()
        .then((res) => createUser(res))
        .catch((err) => console.log(err))
        .finally(loader.style.display = "none")
}
getData(BASE_URL)

function createUser(data){
    data.forEach(user => {
        const div = document.createElement("div")
        div.className = "user"
        div.innerHTML = `
            <img src="assets/Noko - Torako _ Shikanoko Nokonoko Koshitantan ep 4.png">
            <h2>Name: ${user.name}</h2>
            <h2>Email: ${user.email}</h2>
            <h2>Adress: ${user.address.street}</h2>
        `
        users.appendChild(div)
    });
}