const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    })
}
navSlide();


// --------------------script for Product details------------------------------

    const productImg = document.getElementById("productImg");
    const smallImg = document.getElementsByClassName("smallimg");

     smallImg[0].onclick = function()
     {
         productImg.src = smallImg[0].src;
     }
     smallImg[1].onclick = function()
     {
         productImg.src = smallImg[1].src;
     }
     smallImg[2].onclick = function()
     {
         productImg.src = smallImg[2].src;
     }
     smallImg[3].onclick = function()
     {
         productImg.src = smallImg[3].src;
     }