const mb_nav = (() => {
    const nav = document.querySelector(".nav-links");
    const open_btn = document.querySelector(".open");
    const close_btn = document.querySelector(".close")

    // Open and close functions
    const openNav = () => {
        open_btn.classList.add("hidden"); 
        close_btn.classList.remove("hidden"); 

        nav.classList.remove("hidden");

    }
    const closeNav = () => {
        close_btn.classList.add("hidden"); 
        open_btn.classList.remove("hidden");  
        nav.classList.add("hidden");
    }

    
    // Event Listeners
    open_btn.addEventListener('click', openNav); 
    close_btn.addEventListener('click', closeNav); 

    
})();

const book_marked = (() => {
    const bookmark = document.querySelector(".bookmark-container")
    const bookmark_text = document.querySelector(".bookmark-text");   
    const bookmark_icon = document.querySelector(".bookmark-icon");

    const marked = () => {
        bookmark_text.classList.toggle("marked1"); 
        bookmark_icon.classList.toggle("marked2"); 
        if(bookmark_text.classList == "bookmark-text marked1") bookmark_text.innerHTML = "Bookmarked" 
        else{
            bookmark_text.innerHTML = "Bookmark"
        }
    } 
    bookmark.addEventListener('click',marked);
})(); 

const modal = ( () =>{
const modal = document.getElementById("simpleModal"); 

const bamboo_btn = document.getElementById("bamboo-btn"); 
const black_btn = document.getElementById("black-btn"); 
const maho_btn = document.getElementById("maho-btn"); 

const close_btn = document.getElementsByClassName("close-btn")[0]; 


console.log(bamboo_btn);
console.log(black_btn);


const openModal = () => {
    modal.style.display = 'block';
}
const closeModal = () => {
    modal.style.display = 'none';
}
const clickOutside = (e) => {
    if(e.target == modal){
    modal.style.display = 'none'; 
    }
}


bamboo_btn.addEventListener('click', openModal); 
black_btn.addEventListener('click', openModal); 
maho_btn.addEventListener('click', openModal);  
close_btn.addEventListener('click', closeModal); 
window.addEventListener('click',clickOutside)



})();