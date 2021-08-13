// Audio 
const audio = document.getElementById('audio');


// Birthday Wish 
const textel = document.getElementById('text');
const wish = document.getElementById('wish');
//console.log(speedel.value);
const text="I wish you a fulfilling life and many more years of joy, happiness and success as you spread your knowledge. Happy Birthday to an  awesome teacher";

let idx = 1;
let speed = 90;

function autotext() {
    // console.log('hay');

    textel.style.opacity = 1;
    textel.innerText = text.slice(0,idx);
    textel.style.direction = "rtl";
    idx++;
    
    setTimeout(autotext,speed);
}

//Event Listener
wish.addEventListener('click',()=>{
    //console.log("hay");
    textel.style.opacity = 0;
    idx = 1;
    autotext();
    audio.play();
});
