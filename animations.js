gsap.registerPlugin(ScrollTrigger);

//GET ACCESS DOM
const elementMenu = document.querySelectorAll("button.element-menu");
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


//Fais apparaitre les elements au fur et à mesure on scroll
window.addEventListener("scroll", appear);



//FUNCTIONS to reveal elements on scroll
function appear() {
    var appears = document.querySelectorAll(".appear, .reveal, .rotate, .slide-right");
  
    for(let i = 0; i < appears.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = appears[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        appears[i].classList.add("active");
      }else{
        appears[i].classList.remove("active")
      }
    }
  }


//FUNCTIONS pour rediriger sur les pages en version grand ecran
//et scroll si version mobile 
function scrollToHome(){
    if (window.matchMedia('(max-width: 650px)').matches) {
        document.getElementById("home").scrollIntoView();
    } else {
        window.location.replace("index.html");
    }
}


function scrollToWhoWeAre() {
    if (window.matchMedia('(max-width: 650px)').matches) {
        document.getElementById("whoWeAre-div").scrollIntoView();
    } else {
        window.location.replace("whoWeAre.html");
    }
}

function scrollToCapabilities() {
    if (window.matchMedia('(max-width: 650px)').matches) {
        document.getElementById("capabilities-div").scrollIntoView();
    } else {
        window.location.replace("ourCapabilities.html");
    }
}

function scrollToContact() {
    if (window.matchMedia('(max-width: 650px)').matches) {
        document.getElementById("contact-div").scrollIntoView();
    } else {
        window.location.replace("contact.html");
    }
}

//Ouverture du pop up de Disclaimer sur la version mobile. 
function popUpDisclaimer() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


