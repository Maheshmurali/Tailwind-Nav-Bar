function menu(e){
    if(e.name=="menu"){
        e.innerHTML="&#x2715";
        document.querySelectorAll("ul")[0].classList.replace("opacity-0","opacity-100")
        e.name="close";
        
    }else{
        e.innerHTML="&#8801;";
        document.querySelectorAll("ul")[0].classList.replace("opacity-100","opacity-0")
        e.name="menu";

    }
}
  