let display = document.querySelector('.mobile-display');
let burger = document.querySelector('.burger-button');


burger.addEventListener("click", function() {
    display.classList.toggle('hide');
    burger.classList.toggle('active')
    
})

let servicesDisplay = document.querySelector('.mobile-services-display');
let servicesButton = document.querySelector('.mobile-services-button').addEventListener("click", () => {
    servicesDisplay.classList.toggle('hide');
}); 



let desktopDisplay = document.querySelector('.desktop-display');
let desktopServicesDisplay = document.querySelector('.desktop-services-display');
if(window.innerWidth > 425){
    burger.classList.add('hide');
    desktopDisplay.classList.remove('hide');
    desktopServicesDisplay.classList.add('hide');
}

let mobileServicesButton = document.querySelector('.desktop-services-button').addEventListener("click", () => {
    desktopServicesDisplay.classList.toggle('hide');
});
