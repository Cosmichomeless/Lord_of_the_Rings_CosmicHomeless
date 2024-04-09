const API_URL = "https://the-one-api.dev/v2";

const HTMLmovie = document.querySelector("#movie");
const HTMLchapter = document.querySelector("#character");
const HTMLbook = document.querySelector("#book");


fetch(`${API_URL}/movie`, {
   headers: {
      "Authorization": "Bearer ERrpAZm5ESiAbrXCOLk2"
   }
}).then(response => response.json()).then(data => {
   const movie = data.docs.map(movie => `<li >${movie.name}</li>`);
   HTMLmovie.innerHTML += `<h1>Peliculas</h1><ul>${movie.join("")}</ul>`;
});

fetch(`${API_URL}/book`, {
   headers: {
      "Authorization": "Bearer ERrpAZm5ESiAbrXCOLk2"
   }
}).then(response => response.json()).then(data => {
   const book = data.docs.map(book => `<li >${book.name}</li>`);
   HTMLbook.innerHTML += `<h1>Libros</h1><ul>${book.join("")}</ul>`;
});


fetch(`${API_URL}/chapter`, {
   headers: {
      "Authorization": "Bearer ERrpAZm5ESiAbrXCOLk2"
   }
}).then(response => response.json()).then(data => {
   const chapter = data.docs.map(chapter => `<li >${chapter.chapterName}</li>`);
   HTMLchapter.innerHTML += `<h1>Capitulos</h1> <ul>${chapter.join("")}</ul> `;
   
});