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

const modal = (() =>{

const modal = document.getElementById("simpleModal");
const finalModal = document.getElementById("finalModal");  
const exit_btn = document.getElementById("exit-btn");

const bamboo_btn = document.getElementById("bamboo-btn"); 
const black_btn = document.getElementById("black-btn"); 
const maho_btn = document.getElementById("maho-btn");  
const proj_btn = document.getElementById("proj-btn");
const close_btn = document.getElementsByClassName("close-btn")[0];   





const openModal = () => {
    modal.style.display = 'block';
}
const openFinalModal = () => {
    finalModal.style.display = 'block';
}
const closeFinalModal = () =>{
    finalModal.style.display = 'none';
}  

const closeModal = () => {
    modal.style.display = 'none';
} 

const clickOutside = (e) => {
    if(e.target == modal){
        modal.style.display = 'none';  
    } else if(e.target == finalModal){
        finalModal.style.display = 'none';
    }
} 
const modalFocus = (e) => {
    if(e.target && e.target.classList == "modal-checkbox marked1"){
        const card = e.target.parentNode.parentNode; 
        card.style.border = "1px solid #e0dfdf"; 
        if(card.childNodes[7].classList == "pledge-wrapper"){
            const pledge = card.childNodes[7]; 
            pledge.style.display = "none"; 
        }
        e.target.classList.remove("marked1");
        
    }
   else if(e.target && e.target.classList == "modal-checkbox"){
        const card = e.target.parentNode.parentNode; 
        if(card.childNodes[7].classList == "pledge-wrapper"){
            const pledge = card.childNodes[7]; 
            pledge.style.display = "block"; 
        } 
        // const pledge = card.childNodes[7];
        // pledge.style.display = "block";
        card.style.border = "1px solid #39b5ab"; 
        e.target.classList.add("marked1"); 

    } 
}  



const modalContinue = e => {
    if(e.target && e.target.classList == "btn pledge-btn"){
        closeModal();
        openFinalModal();
    }
}

modal.addEventListener('click', modalFocus);
modal.addEventListener('click', modalContinue);
bamboo_btn.addEventListener('click', openModal); 
black_btn.addEventListener('click', openModal); 
maho_btn.addEventListener('click', openModal); 
proj_btn.addEventListener('click',openModal); 
close_btn.addEventListener('click', closeModal);  
exit_btn.addEventListener('click',closeFinalModal);
window.addEventListener('click',clickOutside)

})();