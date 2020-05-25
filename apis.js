//HTMLタグのidをとる
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    list.appendChild(list);
}

async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await res.json();
    return users;
}

async function listUsers() {
    const users = await getUsers();
    users.forEach(addList);
};

addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
