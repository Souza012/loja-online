var MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight = "0px";

function menucel(){
    if(MenuItens.style.maxHeight == "0px"){
        MenuItens.style.maxHeight = "200px";
    }else{
        MenuItens.style.maxHeight = "0px";
    }
}