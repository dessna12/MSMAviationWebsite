

//GET ACCESS DOM
const elementMenu = document.querySelectorAll("a.element-menu");
const burgerMenu = document.querySelector("span.material-symbols-outlined");
const checkboxMenu = document.getElementById("mobile");


//EVENT LISTENER

//Ferme menu lors d'un click sur la navigation 
for (var i=0; i < elementMenu.length; i++) {
    elementMenu[i].addEventListener('click',() => {
        checkboxMenu.checked = false;
        burgerMenu.textContent = 'menu';
    });
}

//Change l'icone de la checkbox en croix lorsque le menu est ouvert
checkboxMenu.addEventListener('change', ($event) => {
    if ($event.target.checked){
        burgerMenu.textContent = 'close';
    }else{
        burgerMenu.textContent = 'menu';
    }
});
