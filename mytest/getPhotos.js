const fetch = require("node-fetch");

//https://source.unsplash.com/random
//https://api.unsplash.com/photos/random?client_id=veIQlP1Vb6slQvwsUAyTt2sHvbG9aG5rWjTBTdYMlHU
// fetch('https://source.unsplash.com/random')
// .then(res => res.text())
//     .then(body => console.log(JSON.parse(body)));
fetch("https://source.unsplash.com/random").then((body) => console.log(body));
