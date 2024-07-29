let coin = document.querySelector(".coin");
let heads = document.getElementById("heads");
let tails = document.getElementById("tails");
let pHeads = document.getElementById("pHeads");
let pTails = document.getElementById("pTails");
let flipSelector = () => { 
    coin.classList.add("flip");
    setTimeout(() =>{
        if (Math.floor(Math.random() *2) == 0) {
            heads.classList.add("hidden");
            tails.classList.remove("hidden");
            pHeads.classList.add("hidden");
            pTails.classList.remove("hidden");
        } else {
            heads.classList.remove("hidden");
            tails.classList.add("hidden");
            pHeads.classList.remove("hidden");
            pTails.classList.add("hidden");
        };
        coin.classList.remove("flip");
    }, 1000);
};
coin.addEventListener("click", flipSelector);
