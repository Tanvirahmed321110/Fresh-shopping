
//  language drop down
const languageDropdownBtn = document.getElementById('language-dropdown-btn');
const languageDropdown = document.getElementById('language-dropdown')

languageDropdownBtn.addEventListener('click',()=>{
    languageDropdown.classList.toggle('active')
})