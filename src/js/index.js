//Function to animate introduction
const nike_IntroductionAnimation = () => {
    TweenMax.to(".first", 1.5, {
        delay: 4,
        top: "-100%",
        ease: Expo.easeInOut
    });
    TweenMax.to(".second", 1.5, {
        delay: 4.4,
        top: "-100%",
        ease: Expo.easeInOut
    });
    TweenMax.to(".third", 1.5, {
        delay: 4.8,
        top: "-100%",
        ease: Expo.easeInOut
    });
};

//Function to open menu
const nike_OpenMenu = () => {
    let toggle = document.querySelector(".b-header__nav-toggle");
    let nav = document.querySelector(".b-header__nav-menu");

    if (toggle && nav) {
        toggle.addEventListener("click", (ev) => {
            ev.preventDefault();
            nav.classList.add("is--active-nav");
        });
    }
};

//Function to select sizes of product
const nike_SelectSizes = () => {
    let sizes = document.querySelectorAll(".b-size");
    let colors = document.querySelectorAll(".b-main__container-sneaker__colors span");
    let sneakers = document.querySelectorAll(".b-sneaker-image");

    //Function to change sizes of product
    function changeSizes() {
        sizes.forEach(size => size.classList.remove("active"));
        this.classList.add("active");
    };

    //Function to change colors of product
    function changeColors() {
        let primary = this.getAttribute("primary");
        let color = this.getAttribute("color");
        let sneakerColors = document.querySelector(`.b-sneaker-image[color="${color}"]`);

        //Change sneaker
        sneakers.forEach(s => s.classList.remove("active"));
        sneakerColors.classList.add("active");

        //Change backgrounds and colors
        document.documentElement.style.setProperty("--beige", primary);

        //Change dots
        colors.forEach(c => c.classList.remove("active"));
        this.classList.add("active");
    };

    sizes.forEach(size => size.addEventListener("click", changeSizes));
    colors.forEach(c => c.addEventListener("click", changeColors));
};

//Function to execute in batch all other function in load of page
document.addEventListener("DOMContentLoaded", () => {
    nike_IntroductionAnimation();
    nike_SelectSizes();
    nike_OpenMenu();
});