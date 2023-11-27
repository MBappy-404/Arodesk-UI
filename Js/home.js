

// NAV BAR COLLAPSE 
const btn = document.querySelector(".mobile-menu-btn");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("scale-y-100");
 
});



// COURSE SLIDER 
 
var swiper1 = new Swiper(".slide-content", {
     slidesPerView: 3,
     loop: true,
     centerSlide: 'true',
     fade: 'true',
     grabCursor: 'true',
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       dynamicBullets: true,
     },
     autoplay: {
          delay: 3000, // Delay between slides in milliseconds (3 seconds in this example)
          disableOnInteraction: false, // Prevent autoplay from stopping when user interacts with the carousel (optional)
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
 
     breakpoints:{
         0: {
             slidesPerView: 1,
         },
         520: {
             slidesPerView: 2,
         },
         950: {
             slidesPerView: 4,
         },
     },
   });


//    SKILL DEVELOPMENT SLIDER 
var swiper2 = new Swiper(".skill-development", {
     slidesPerView: 3,
     loop: true,
     centerSlide: 'true',
     fade: 'true',
     grabCursor: 'true',
   
     autoplay: {
          delay: 3000, 
          disableOnInteraction: false,  
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
 
     breakpoints:{
         0: {
             slidesPerView: 1,
              
         },
         520: {
             slidesPerView: 2,
             spaceBetween: 5,
         },
         768: {
             slidesPerView: 2,
           
         },

         900:{
          slidesPerView: 3,
         
         },

         1190:{
           
          slidesPerView: 4,

         }
     },
   });

// JOB PREPARATION SLIDER 

var swiper3 = new Swiper(".job-preparation", {
  slidesPerView: 3,
     loop: true,
     centerSlide: 'true',
     fade: 'true',
     autoplay:false,
  
 
     breakpoints:{
         0: {
             slidesPerView: 1,
              
         },
         520: {
             slidesPerView: 2,
             spaceBetween: 5,
         },
         768: {
             slidesPerView: 2,
           
         },

         900:{
          slidesPerView: 3,
         
         },

         1190:{
           
          slidesPerView: 4,

         }
     },
   });


//    TESTIMONIALS SLIDER 

var swiper4 = new Swiper(".testimonial-slide", {
  slidesPerView: 3,
     loop: true,
     centerSlide: 'true',
     fade: 'true',
     autoplay: {
      delay: 3000, // Delay between slides in milliseconds (3 seconds in this example)
      disableOnInteraction: false, // Prevent autoplay from stopping when user interacts with the carousel (optional)
 },
 
     breakpoints:{
         0: {
             slidesPerView: 1,
              
         },
         520: {
             slidesPerView: 2,
             spaceBetween: 5,
         },
         768: {
             slidesPerView: 2,
           
         },

         900:{
          slidesPerView: 3,
         
         },

         1190:{
           
          slidesPerView: 3,
          spaceBetween:5,

         }
     },
   });





   