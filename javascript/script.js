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

/* funzione che lavora i dati ricevuti*/
function processPictures(array) {
  const row = document.querySelector(".row");
  array.forEach((photo) => {
    const { date, title, url } = photo;
    const colonna = creaColonna();
    colonna.innerHTML = `<div class="card">
              <img class="pin" src="./img/pin.svg" alt="" />
              <img src="${url}" alt="${title}" />
              <p>${date}</p>
              <h3>${title.toUpperCase()}</h3>
           </div>`;

    row.append(colonna);
  });
}

function creaColonna() {
  const col = document.createElement("div");
  col.classList.add("col");
  return col;
}
