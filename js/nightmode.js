
let darkMode = false;

function nightMode() {

    if (darkMode == false) {

        // Enable night mode
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "white";

        // Navbar
        document.querySelector(".navbar").style.backgroundColor = "#222";

        let links = document.querySelectorAll(".nav-link");

        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }

        // Main sections
        document.querySelector(".sidebar").style.backgroundColor = "#222";
        document.querySelector(".main").style.backgroundColor = "#222";
        document.querySelector(".images").style.backgroundColor = "#222";

        // Product cards
        let products = document.querySelectorAll(".products");

        for (let i = 0; i < products.length; i++) {
            products[i].style.backgroundColor = "#333";
            products[i].style.color = "white";
        }

        // Change button text
        document.getElementById("themeButton").innerHTML = "Light Mode";

        darkMode = true;

    } else {

        // Disable night mode
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#252525";

        // Navbar
        document.querySelector(".navbar").style.backgroundColor = "white";

        let links = document.querySelectorAll(".nav-link");

        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#2466a5";
        }

        // Main sections
        document.querySelector(".sidebar").style.backgroundColor = "#f4f4f6";
        document.querySelector(".main").style.backgroundColor = "#f4f4f6";
        document.querySelector(".images").style.backgroundColor = "#f4f4f6";

        // Product cards
        let products = document.querySelectorAll(".products");

        for (let i = 0; i < products.length; i++) {
            products[i].style.backgroundColor = "white";
            products[i].style.color = "black";
        }

        // Change button text
        document.getElementById("themeButton").innerHTML = "Night Mode 🌙";

        darkMode = false;
    }
}
