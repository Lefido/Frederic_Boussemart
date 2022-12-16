
 AOS.init();
        
 const frontpage = document.querySelector('.front-page');
 window.addEventListener('scroll', () => {
     if(window.scrollY > 100) {
         frontpage.classList.add('scroll');
     } else {
         frontpage.classList.remove('scroll');
     }
 });