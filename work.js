function chercher(){
    motcle = document.getElementById("inpts").value
    produits = document.getElementsByClassName("Produit")
    for(i=0;i<produits.length;i++){
        if(!produits[i].textContent.toLowerCase().includes(motcle.toLowerCase())){
            produits[i].parentElement.parentElement.style.display="none"
        }else{
            produits[i].parentElement.parentElement.style.display="block"
        }
    }
}