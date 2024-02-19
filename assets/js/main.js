var scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


function scrollToTop() {
    document.documentElement.scrollTop = 0; 
}
let cover=document.querySelector(".cover");
window.addEventListener("load" , ()=>{
    cover.style.opacity = 0;
    setTimeout(()=>{
        cover.style.display ="none";
    },2000)
})