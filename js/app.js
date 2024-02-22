
//  language drop down
const languageDropdownBtn = document.getElementById('language-dropdown-btn');
const languageDropdown = document.getElementById('language-dropdown')

languageDropdownBtn.addEventListener('click',()=>{
    languageDropdown.classList.toggle('active')
})







// cart modal

const cartModal = document.getElementById("cart-modal")

document.getElementById('btn-cart').addEventListener('click',function(){
    cartModal.classList.toggle('active');
    cartModal.style.display='block'
})

document.getElementById('cart-modal-close').addEventListener('click',function(){
    cartModal.style.display='none'
})