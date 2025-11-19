/* url api */
const urlApi = "https://lanciweb.github.io/demo/api/pictures/";

/* elementi dom necessari */
const elementOverlay = document.querySelector(".overlay");
const conteinerCardImg = document.querySelector(".container-card-img");
const ElementBtn = document.querySelector(".chiudi");
const elementConteinerImg = document.querySelector(".container-img-overlay");
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
    const colonna = creaColonna(date, title, url);
    row.append(colonna);
    colonna.addEventListener("click", () => {
      mostraOverlay();
      elementConteinerImg.innerHTML = `<img  src="${url}" alt="${title}"/> `;
    });
  });
}

function creaColonna(date, title, url) {
  const col = document.createElement("div");
  col.classList.add("col");
  col.innerHTML = `<div class="card">
              <img class="pin" src="./img/pin.svg" alt="" />
              <img  src="${url}" alt="${title}" />
              <p>${date}</p>
              <h3>${title.toUpperCase()}</h3>
           </div>`;
  return col;
}

/* al click sul bottone chiudi */
ElementBtn.addEventListener("click", nascondiOverlay);
/* al click su overlay chiudi */
elementOverlay.addEventListener("click", nascondiOverlay);

/* funzione che mostra overlay */
function mostraOverlay() {
  elementOverlay.classList.remove("p-none");
  conteinerCardImg.classList.add("opacity");
}
/* funzione che nasconde overlay con imamgine */
function nascondiOverlay() {
  elementOverlay.classList.add("p-none");
  conteinerCardImg.classList.remove("opacity");
}
