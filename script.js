const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener('click' ,function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "☀";
    }
    else{
        themeBtn.textContent = "☾";
    }
})

const projectsBtn = document.querySelector(".projects-btn");
const projectsSection = document.getElementById("projects");

projectsBtn.addEventListener("click" , function(){
    projectsSection.scrollIntoView({
        behavior : "smooth"
    });
});

const getInTouchBtn = document.querySelector(".touch-btn");
const contactSection = document.getElementById("contact");

getInTouchBtn.addEventListener("click" , function(){
    contactSection.scrollIntoView({
        behavior:"smooth"
    });
});


const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".project-details").forEach(function (button) {
    button.addEventListener("click", function () {
        modalTitle.textContent = button.dataset.title;
        modalDescription.textContent = button.dataset.description;

        projectModal.classList.add("show");
    });
});

modalClose.addEventListener("click", function () {
    projectModal.classList.remove("show");
});

projectModal.addEventListener("click", function (event) {
    if (event.target === projectModal) {
        projectModal.classList.remove("show");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        projectModal.classList.remove("show");
    }
});

