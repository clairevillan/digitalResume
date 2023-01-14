const img = document.getElementById("pfp");

let toggle = true;

img.addEventListener('click', function(){

    toggle = !toggle;

    if(toggle){
        img.src = "./resources/images/pfp.jfif";
    } else {
        img.src = "./resources/images/siopao.jfif";
    }
    
})