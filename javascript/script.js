/* url api */
const urlApi = "https://lanciweb.github.io/demo/api/pictures/";

/* CHIAMATA API */
axios
  .get(`${urlApi}`)
  .then((element) => {
    const array = element.data;
    processPictures(array);
  })
  .catch((errore) => {
    console.log("errore:", errore);
  });
/* funzione che lavora i dati ricevuti e stampa in pagina */
function processPictures(array) {
  const row = document.querySelector(".row");
  array.forEach((photo) => {
    const col = document.createElement("div");
    col.classList.add("col");
    col.innerHTML = `<div class="card">
              <img class="pin" src="./img/pin.svg" alt="" />
              <img src="${photo.url}" alt="${photo.title}" />
              <p>${photo.date}</p>
              <h3>${photo.title.toUpperCase()}</h3>
           </div>`;
    row.append(col);
  });
}
