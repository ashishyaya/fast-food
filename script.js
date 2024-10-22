 let food1 = document.getElementById("food1");
let food2 = document.getElementById("food2");
let right = document.getElementById("right");

food1.addEventListener("click",()=>{
    right.style.backgroundImage="url('food1.jpg')";
});

food2.addEventListener("click",()=>{
    right.style.backgroundImage="url('food2.jpg')";
});

// function showSlidebar() {
//     const sidebar = document.querySelector(".sidebar");
//     sidebar.style.display="flex";
// }

// function hideSidebar() {
//     const sidebar = document.querySelector(".sidebar");
//     sidebar.style.display="none";
// }


const menuToggle = document.getElementById('phone-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});