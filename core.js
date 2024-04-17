
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
 
let currentIndex = 0;
const images = document.querySelectorAll(".carousel img");
const totalImages = images.length;

images[1].style.display = "none";
images[2].style.display = "none";
images[3].style.display = "none";

setInterval(() => {
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].style.display = "inline-block";
}, 3000); // Troca de imagem a cada 3 segundos