import * as lista from '../lista.js';

const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const addButt = document.querySelector("#adicionar");

  setInterval(() => {
  lista.listarItens();
}, 10); 

addButt.addEventListener('click', () => {
  event.preventDefault();
  lista.adicionarItem(nome.value, preco.value);
});