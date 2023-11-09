const drpdwnContainer = document.querySelector('.dropdown-container')
const navContentElem = document.querySelector('.nav-content');

//NAV CONTENT SIDE NAV TRIGGERS UPON CLICKING THE BURGER
const navButton = document.querySelector('.navContentButton');
navButton.addEventListener('click', () => {
    if(navContentElem.classList.contains('hide')){
        navButton.classList.replace('fa-bars', 'fa-xmark');
        navContentElem.classList.replace('hide', 'show');
    }else{
        navButton.classList.replace('fa-xmark', 'fa-bars');
        navContentElem.classList.replace('show', 'hide');
    }
});



//INNER DROP DOWN. TRIGGERS UPON CLICKING SERVICES 
const drpdwnBtn = document.querySelector('.servicesButton').addEventListener('click', () => {
    if(drpdwnContainer.classList.contains('hide')){
       drpdwnContainer.classList.replace('hide', 'show');
    }else{
       drpdwnContainer.classList.replace('show', 'hide');
    }
});



