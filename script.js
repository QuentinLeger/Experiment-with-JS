const bande = document.querySelector(".bande");
const cartes = document.querySelectorAll(".carte");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let position = 0;
let index = 2;
const largeur = cartes[0].offsetWidth;



updateClasses();
nextBtn.addEventListener("click", () => {

    index++;
    position -= largeur;
    bande.style.transform = `translateX(${position}px)`;
    updateClasses();

})

prevBtn.addEventListener("click", () => {
    index--;
    position += largeur;
    bande.style.transform = `translateX(${position}px)`;
    updateClasses();

})




function updateClasses(){
    cartes.forEach(carte => {
        carte.classList.remove("active", "side","ultraSide","disparu","right","left");
    });

    cartes[index].classList.add("active");

    if (cartes[index - 1]) cartes[index - 1].classList.add("side","left");
    if (cartes[index + 1]) cartes[index + 1].classList.add("side","left");

    if (cartes[index - 2]) cartes[index - 2].classList.add("ultraSide","left");
    if (cartes[index + 2]) cartes[index + 2].classList.add("ultraSide","right");

    if (cartes[index - 3]) cartes[index - 3].classList.add("disparu","left");
    if (cartes[index + 3]) cartes[index + 3].classList.add("disparu","right");
}


