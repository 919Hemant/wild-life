const nextbtn = document.querySelector('.next-btn');
const prevbtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberofSlides = slides.length;
let slideNumber = 0;

//next button
nextbtn.onclick = () => {
   
  slides.forEach((slide) => {
    slide.classList.remove('active');
  
});

  slideNumber++;

  if(slideNumber > (numberofSlides-1)) {
     slideNumber = 0;
  }
 
  slides[slideNumber].classList.add('active')
}

//prev btn

prevbtn.onclick = () => {
   
  slides.forEach((slide) => {
    slide.classList.remove('active');
  
});

  slideNumber--;

  if(slideNumber < 0 ) {
     slideNumber = numberofSlides-1;
  }
 
  slides[slideNumber].classList.add('active')
}

  