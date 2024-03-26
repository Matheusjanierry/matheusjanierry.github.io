async function buscar(){
    let procura = await fetch("lista.json")
    let produtos = await procura.json()

    let listaDiv = document.getElementById("lista-card")

    for(let produto of produtos){
        listaDiv.innerHTML += `
            <div class="card" data-id="${produto.id}">
                <div class="grupo-img">
                    <img src="${produto.img[0]}"
                    width="250" height="auto">
                </div>
                <div class= "textos">    
                    <h3> ${produto.nome}</h3>
                    <p> ${produto.descricao}</p>
                    </div class= "grupoValores">
                        <span class= "comDesconto"> R$ ${(produto.valorComDesconto).toFixed(2).replace(".", " ,")}</span>
                        <span class= "semDesconto"> R$ ${(produto.valorSemDesconto).toFixed(2).replace(".", " ,")}</span>
                    </div>
                </div> 
            </div>         
        `
    }
    let elememtosCards = document.querySelectorAll(".card")
    for(let card of elememtosCards){
        card.addEventListener("click", cliquei)
    }

    
}
buscar()
function cliquei(){
    let elementoID = this.getAttribute("data-id")
    window.location.href = "exe.html?mathewssouza=" + elementoID
}

cliquei()
 