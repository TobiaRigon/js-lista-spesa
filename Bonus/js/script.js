
const elementoInput = document.getElementById("elementoInput");
const aggiungiElementoButton = document.getElementById("aggiungiElemento");
let listaSpesa = [];

const ulSpesa = document.querySelector(".ul_spesa");




aggiungiElementoButton.addEventListener("click",
 function() {
    
    listaSpesa.push(elementoInput.value);

    ulSpesa.innerHTML += `<li class="li_spesa"> ${elementoInput.value} </li>`

    // Pulire l'input dopo l'aggiunta
    elementoInput.value = "";

});



