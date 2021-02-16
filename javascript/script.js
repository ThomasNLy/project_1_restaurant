/**
 * toggles the drop down menu on mobile
*/
function toggleDropDownMenu(){
    let menu = document.getElementById("myLinks");

    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
        
    }
}



