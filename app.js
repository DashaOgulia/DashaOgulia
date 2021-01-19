//modal

// let modal = document.querySelector(".modal");
// let closeBtn = document.querySelector(".btn-close");

// //function window.scroll()
// function openModal (){
//     modal.classList.add("hide");
//     modal.classList.remove("show");
// }
// openBtn.addEventListener("click", closeModal);

// modal.addEventListener("click",function(e){
//     if(e.target == modal){
//         closeModal()
//     }
// })
 
// window.addEventListener('scroll',()=>{
//    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = window.scrollY;

//     if (Math.ceil(scrolled) === scrollable){
    

//         }
    
// });

// function showModalByScroll(){
//     if(window.pageYOfsetr > document.body.scrollHeight/2){
//         openModal();
//         window.removeEventListener("scroll", showModalByScroll)
//     }

// }


//     window.addEventListener("scroll", showModalByScroll);



//menu mobile

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains('active-menu')){
        mainMenu.classList.add("active-menu");
    }else{
        mainMenu.classList.remove("active-menu");
    }
})


//open form
let form = document.querySelector(".details-black");
let formCencel = document.querySelector(".cancel");

form.addEventListener("click", openForm);
formCencel.addEventListener("click", closeForm)

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

