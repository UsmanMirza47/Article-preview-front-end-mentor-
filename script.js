let shareBtn = document.getElementsByClassName("bottom-right")[0];
shareBtn.addEventListener("click",(e)=>{
    document.getElementsByClassName("outer-box")[0].classList.toggle("hidden")
    document.getElementsByClassName("outer-box-2")[0].classList.toggle("hidden")
})
let shareBtn1 = document.getElementsByClassName("bottom-right")[1];
shareBtn1.addEventListener("click",(e)=>{
    document.getElementsByClassName("outer-box-2")[0].classList.toggle("hidden")
    document.getElementsByClassName("outer-box")[0].classList.toggle("hidden")
})
