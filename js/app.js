
//  language drop down
const languageDropdownBtn = document.getElementById('language-dropdown-btn');
const languageDropdown = document.getElementById('language-dropdown')

languageDropdownBtn.addEventListener('click',()=>{
    languageDropdown.classList.toggle('active')
})







// cart modal

const cartModal = document.getElementById("cart-modal-content");
const overlay = document.getElementById('overlay')

document.getElementById('btn-cart').addEventListener('click',function(){
    cartModal.classList.add('active');
    overlay.classList.add('active');
})

document.getElementById('cart-modal-close').addEventListener('click',function(){
    cartModal.classList.remove('active');
    cartModal.classList.add('ani')
    overlay.classList.remove('active')
})