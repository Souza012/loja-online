var MenuItenss = document.getElementById("MenuItenss");

MenuItenss.style.maxHeight = "0px";

function menucel(){
    if(MenuItenss.style.maxHeight == "0px"){
        MenuItenss.style.maxHeight = "200px";
    }else{
        MenuItenss.style.maxHeight = "0px";
    }
}