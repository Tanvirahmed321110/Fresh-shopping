//  language drop down
const languageDropdownBtn = document.getElementById("language-dropdown-btn");
const languageDropdown = document.getElementById("language-dropdown");

languageDropdownBtn.addEventListener("click", () => {
    languageDropdown.classList.toggle("active");
});

// cart modal
const overlay = document.getElementById("overlay");
const cartModal = document.getElementById("cart-modal");
const cardModalContent = document.getElementById("card_modal_content");
const bodyTag = document.getElementsByTagName("body")[0];

document.getElementById("btn-cart").addEventListener("click", function () {
    /* overlay */
    overlay.classList.add("active");
    cardModalContent.classList.add("active");
    bodyTag.style.overflowY = "hidden";
});

document
    .getElementById("cart-modal-close")
    .addEventListener("click", function () {
        overlay.classList.remove("active");
        cardModalContent.classList.remove("active");
        bodyTag.style.overflowY = "visible";
    });
