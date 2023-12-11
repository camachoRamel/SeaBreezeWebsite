const btn = document.querySelector(".view-packages-btn");
const pictureModal = document.querySelector(".picture-modal");
const pictureContainer = document.querySelector(".picture-modal-content");
const choice = document.querySelector(".choice-modal-btn-container");

const withServiceContainer = document.querySelector(".with-service-pic-container");
const withoutServiceContainer = document.querySelector(".without-service-pic-container");



btn.addEventListener("click", () =>{
    pictureModal.classList.toggle("hide");
    
});

window.addEventListener("click", function(event) {
    if(event.target === pictureModal){
        pictureModal.classList.toggle("hide");
        choice.classList.toggle("hide");

        if(withServiceContainer.classList.contains("hide") && withoutServiceContainer.classList.contains("hide")){
            choice.classList.toggle("hide");
        }else{
            if(withServiceContainer.classList.contains("hide")){
                withoutServiceContainer.classList.toggle("hide");
                pictureContainer.classList.toggle("hide");
            }else{
                withServiceContainer.classList.toggle("hide");
                pictureContainer.classList.toggle("hide");
            }
        }


        // if(withServiceContainer.display != "none"){
        //     withServiceContainer.classList.toggle("hide");
        // }else if(withoutServiceContainer.display != "none"){
        //     withoutServiceContainer.classList.toggle("hide");
        // }
    }
});



const withServiceBtn = document.querySelector(".with-service-btn").addEventListener("click", () =>{
    choice.classList.toggle("hide");
    pictureContainer.classList.toggle("hide");
    withServiceContainer.classList.toggle("hide");
});
const withoutServiceBtn = document.querySelector(".without-service-btn").addEventListener("click", () =>{
    // choice.classList.add("hide");
    choice.classList.toggle("hide");
    pictureContainer.classList.toggle("hide");
    withoutServiceContainer.classList.toggle("hide");
});