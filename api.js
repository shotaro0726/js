async function callApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await res.json();
    console.log(users);
}

callApi();

function callAPI() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(() => {
            return res.json();
        })
        .then((users) => {
            console.log(users);
        });
}

callAPI();

function api() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
        console.log(xhr.response);
    }
} 

api();

const users
for (let index = 0; index < array.length; index++) {
    const user = users[index];
    const list = document.createElement("li");
    list.innerText = user.name;
    list.appendChild(list); 
}