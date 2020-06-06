// document.querySelector("form ")

// fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function(res) {console.log(res)})

// document
//     .querySelector("select[name=uf]")
//     .addEventListener("change", () => {
//         console.log("mudei")
//     })


function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        
        for( const state of  states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}


populateUFs()

function getCities(event) {   
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    
    const ufValue = event.target.value

    const indexOfSelectState= event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectState].text
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value=>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)
    

const itemsToCollect = document.querySelectorAll(".items-grid")

for( item of itemsToCollect) {
    item.addEventListener("click", handleSelectItem)
}

const collectedItems = document.querySelector("input[name=items")

let selectedItems = [];

function handleSelectItem(event) {
    const itemli =event.target;
    
    // adicionar ou remover uma clase com javascript
    itemli.classList.toggle("selected");

    const itemid =  itemli.dataset.id
    
    // verificar se existem itens selecionas, se sim
    // pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(
        item => item == itemid //isso sera true ou false
        ) 

    // se já estiver selecionado,
    if( alreadySelected >= 0) {
        // tirar da selecao
        const filteredItems = selectedItems.filter( 
            item => item != itemid //false
            ) 
        
        selectedItems = filteredItems
    } else {
        // se não estiver selecionado
        // adicionar à seleção
        selectedItems.push(itemid)
    }

    //atualizar campo escondido com itens selecionados
    collectedItems.value = selectedItems
}