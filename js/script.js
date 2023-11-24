
let listaSpesa = ["Mele", "Pere", "Pane", "Latte", "Uova", "Pasta", "Sugo", "Formaggio", "Insalata", "Pollo"];

const ulSpesa = document.querySelector(".ul_spesa");


let i = 0;

while (i < listaSpesa.length) {

    ulSpesa.innerHTML += `<li class="li_spesa"> ${listaSpesa[i]} </li>`

    
    i++

}


