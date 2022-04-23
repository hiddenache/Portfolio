const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}

const navLinks = document.querySelectorAll(".nav-link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

// header shadow

function scrollHeader() {
    const header = document.getElementById("header")

    if (this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}

window.addEventListener("scroll", scrollHeader);

// THEME custom

const themeBtn = document.querySelector("#theme-button");
const themeMod = document.querySelector(".customize-theme");
const fontCustom = document.querySelectorAll(".choose-size span");
const ChooseColor = document.querySelectorAll(".choose-color span");
var root = document.querySelector(':root');
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");


const openThemeWindow = () => {
    themeMod.style.display = 'grid';
}

// functie sa detectem daca unde dam click exista clasa customize-theme

const closeTheme = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeMod.style.display = 'none';
    }
}

themeBtn.addEventListener('click', openThemeWindow);
themeMod.addEventListener("click", closeTheme);

function removeSizeActive() {
    fontCustom.forEach(size => {
        size.classList.remove("active");
    })
}

// FONTS 
fontCustom.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeActive();
        let fontCustom;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontCustom = '12px';
        }
        else if (size.classList.contains('font-size-2')) {
            fontCustom = '14px';
        }
        else if (size.classList.contains('font-size-3')) {
            fontCustom = '16px';
        }
        else if (size.classList.contains('font-size-4')) {
            fontCustom = '18px';
        }

        document.querySelector('html').style.fontSize = fontCustom;

    })
})

// BACKGROUND


const ActiveClass = () => {
    ChooseColor.forEach(colorPick => {
        colorPick.classList.remove('active');
    })
}


ChooseColor.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        ActiveClass();

        if (color.classList.contains('color-1')) {
            primaryHue = 232;
        }
        else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        color.classList.add("active");
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// BG light dim dark

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-light', lightColorLightness);
    root.style.setProperty('--dark-color-light', darkColorLightness);
    root.style.setProperty('--white-color-light', whiteColorLightness);
}

Bg1.addEventListener('click', () => {
    Bg1.classList.add("active");
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add("active");
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBg();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '2%';

    Bg3.classList.add("active");
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    changeBg();
})

// filtru portofoliu

const filterContainer = document.querySelector(".portfolio-filter-inner");
const filterBtns = filterContainer.children;
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItem = portfolioItems.length;
console.log(totalPortfolioItem);

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        console.log(filterValue);
        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else {
                portfolioItems[k].classList.add("hide");
                portfolioItems[k].classList.remove("show");
            }

            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }
    })
}

// navbar active

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link");
        }
        else document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link");
    })
}