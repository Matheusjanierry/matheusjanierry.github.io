
async function buscar(){
    let buscar = await fetch("lista.json")
    let produtos = await buscar.json()
    
    let parametrosURL = new URLSearchParams(window.location.search)
    let idProduto = parametrosURL.get("mathewssouza")

    let inProduto = null
    for(let x in produtos){
        if(produtos[x].id == idProduto ){
            inProduto = x
        }
    }

    document.title = produtos[inProduto].nome

    document.getElementById("detalhes").innerHTML+=`
        <h1>
            ${produtos[inProduto].nome}    
        </h1>
        <img src="${produtos[inProduto].img[0]}" id="img-frame"  width="300" height="auto" style="border:1px solid #000;border-radius:10px;">
        <div class= "mini-img" id="mini-img">
                
        </div>
        <p>
            ${produtos[inProduto].descricao}
        </p>
        <div class="grupoValores1">
                <span class="valorComDesconto">
                    R$${(produtos[inProduto].valorComDesconto).toFixed(2).replace(".",",")}
                </span>
                <span class="valorSemDesconto">
                    R$${(produtos[inProduto].valorSemDesconto).toFixed(2).replace(".",",")}
                </span>
        </div>
       
    `
    let divMiniaturas = document.getElementById("mini-img")
    for(let x of produtos[inProduto].img){
        divMiniaturas.innerHTML += `
            <img src="${x}" class="miniatura" width="80" height="80" style="border:1px solid #000;border-radius: 5px;">
        `
    }

    let listaMiniaturas = document.getElementsByClassName("miniatura")
    for(let card of listaMiniaturas){
        card.addEventListener("mouseover", alteraImg)
    }
    function alteraImg(){
        document.getElementById("img-frame").src = this.getAttribute("src")
    }
   
}
buscar()