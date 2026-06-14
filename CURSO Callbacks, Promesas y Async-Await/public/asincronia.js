// Asincronía dada por el entorno => TIMER
// let seconds = 0;
// setTimeout(() => {
   //  console.log(`Ya pasaron los ${seconds} segundos`);
// }, seconds * 1000);

// console.log("Esto se ejecutará al instante");

// Ojo con las operaciones SINCRONAS
// console.time("Loop took");
// let total = 0;
// for (let index = 0; index < 500_000_000; index++) {
   //  total += index;
// }
// console.timeEnd("Loop took");

// console.log("Finalizó el loop", total);

const makeRequest = (method, url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            callback(null, xhr.response);
        } else {
            callback(new Error(xhr.statusText), null);
        }
    }

    xhr.onerror = () => {
        callback(new Error("Network error"), null);
    }
    xhr.send();
}

// Callback HELL
const baseURL = "https://jsonplaceholder.typicode.com";
console.time("Fetch took");
makeRequest("GET", `${baseURL}/users/1`, (err, user) => {
    console.log({ user });
    makeRequest("GET", `${baseURL}/posts?userId=${user.id}`, (err, posts) => {
        console.log({ posts });
        const post = posts[5];
        makeRequest("GET", `${baseURL}/comments?postId=${post.id}`, (err, comments) => {
            console.log({ comments });
            console.timeEnd("Fetch took");
        });
    });
});