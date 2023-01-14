const img = document.getElementById("pfp");

let toggle = true;
let slideIndex = 1;
showSlides(slideIndex);

img.addEventListener('click', function(){

    toggle = !toggle;

    if(toggle){
        img.src = "./resources/images/pfp.jpg";
    } else {
        img.src = "./resources/images/siopao.jpg";
    }
    
})

// controlling next and previous actions
function plusSlides(n){
    showSlides(slideIndex += n);
}

