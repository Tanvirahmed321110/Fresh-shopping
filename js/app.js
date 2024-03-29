
//  language drop down
const languageDropdownBtn = document.getElementById('language-dropdown-btn');
const languageDropdown = document.getElementById('language-dropdown')

languageDropdownBtn.addEventListener('click',()=>{
    languageDropdown.classList.toggle('active')
})



// Select all small images
const smallImages = [...document.querySelectorAll('.small-image img')];

// Loop through each small image and attach a click event listener
smallImages.forEach((eachImage) => {
    eachImage.addEventListener('click', function() {
        // remove in active class
        smallImages.forEach((child) => {
            child.classList.remove('active');
        });

        // Set the 'src' attribute of the big image to the clicked small image's 'src'
        document.getElementById('big-image').src = eachImage.src;
        // add active class
        eachImage.classList.add('active');
    });
});



// share dropdown
document.getElementById('share-dropdown-btn').addEventListener('click',function(){
    document.getElementById('share-dropdown').classList.toggle('active');
    document.getElementById('share-dropdown-btn').classList.toggle('active')
})






// product quantity
const quantityInput = document.getElementById('quantity-input');
let quantityInputVal = parseInt(quantityInput.value);

document.getElementById('quantity-plus-btn').addEventListener('click', function() {
    if (quantityInputVal < 5) {
        quantityInputVal++;
        quantityInput.value = quantityInputVal;
    }
});

document.getElementById('quantity-minus-btn').addEventListener('click', function() {
    if (quantityInputVal > 1) {
        quantityInputVal--;
        quantityInput.value = quantityInputVal;
    }
});
