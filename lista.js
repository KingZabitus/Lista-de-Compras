const ArrayDeItens = JSON.parse(localStorage.getItem("storageItem") ?? "[]");
const table = document.querySelector("#corpoTabela");

class Item {
  constructor(nome, preco, comprado = false) {
    this.nome = nome;
    this.preco = Number(preco);
    this.comprado = comprado;
  }
}


function adicionarItem(nome, preco, comprado = false) {
  const newItem = new Item(nome, preco, comprado);
  ArrayDeItens.push(newItem);
  localStorage.setItem("storageItem", JSON.stringify(ArrayDeItens));
}

function removerItem(i) {
  const storageArray = JSON.parse(localStorage.getItem("storageItem"));
  storageArray.splice(i, 1);
  localStorage.setItem("storageItem", JSON.stringify(storageArray));
}

function concluirItem(i) {
  const storageArray = JSON.parse(localStorage.getItem("storageItem"));
  if(storageArray[i].comprado !== true){
    storageArray[i].comprado = true;
    localStorage.setItem("storageItem", JSON.stringify(storageArray))
  }
  else{
    storageArray[i].comprado = false;
    localStorage.setItem("storageItem", JSON.stringify(storageArray))
  }
}

function listarItens() {
  const storageArray = JSON.parse(localStorage.getItem("storageItem"));
  table.innerHTML = "";
  if (storageArray !== null) {
    for (let i = 0; i < storageArray.length; i++) {

      const Novotr = document.createElement("tr");

      const Nometd = document.createElement("td");
      Nometd.textContent = storageArray[i].nome;
      Nometd.setAttribute("scope", "col");

      const Precotd = document.createElement("td");
      Precotd.textContent = storageArray[i].preco;
      Precotd.setAttribute("scope", "col");


      const compradoBox = document.createElement("input");
      compradoBox.type = "checkbox";
      compradoBox.addEventListener('click', () => {
        concluirItem(i);
      });
      if (storageArray[i].comprado === true) {
        compradoBox.checked = true;
      }
      const compradoTd = document.createElement("td");
      compradoTd.setAttribute("scope", "col");
      compradoTd.appendChild(compradoBox);

      const removeButt = document.createElement("button");
      removeButt.textContent = "Remover";
      removeButt.addEventListener('click', () => {
        removerItem(i);
      });
      const RemoveTd = document.createElement("td");
      RemoveTd.setAttribute("scope", "col");
      RemoveTd.appendChild(removeButt);
      
      Novotr.appendChild(Nometd);
      Novotr.appendChild(Precotd);
      Novotr.appendChild(compradoTd);
      Novotr.appendChild(RemoveTd);
      table.appendChild(Novotr);
    }
  }
}
export { adicionarItem, removerItem, concluirItem, listarItens, };