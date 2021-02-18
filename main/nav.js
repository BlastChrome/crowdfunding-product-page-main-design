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
    
})()