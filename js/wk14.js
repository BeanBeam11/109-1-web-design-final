let big = document.querySelector(".big");
let big_img = document.querySelector(".big .img img");
big.onclick = function(){
    big.style.display = "none";
    big_img.src = "";
}

for(let i = 1; i <= 20; i++){
    document.querySelector(".all .photo"+i).onclick = function(){
        big.style.display = "block";
        big_img.src = document.querySelector(".all .photo"+i+" img").src;
    }
}