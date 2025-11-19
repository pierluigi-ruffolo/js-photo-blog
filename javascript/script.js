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
    const colonna = creaColonna();
    colonna.innerHTML = `<div class="card">
              <img class="pin" src="./img/pin.svg" alt="" />
              <img  src="${url}" alt="${title}" />
              <p>${date}</p>
              <h3>${title.toUpperCase()}</h3>
           </div>`;
    colonna.addEventListener("click", () => {
      elementOverlay.classList.remove("p-none");
      conteinerCardImg.classList.add("opacity");
      elementConteinerImg.innerHTML = `<img  src="${url}" alt="${title}" /> `;
    });
    row.append(colonna);
  });
}

function creaColonna() {
  const col = document.createElement("div");
  col.classList.add("col");
  return col;
}

/* al click sul bottone chiudi */
ElementBtn.addEventListener("click", () => {
  elementOverlay.classList.add("p-none");
  conteinerCardImg.classList.remove("opacity");
});
