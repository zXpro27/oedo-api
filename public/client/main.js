const container = document.querySelector('.container');
const player = document.getElementById('myAudio');

// button toggle and wave
const btnPlay = document.querySelector('.play'),
      btnPause = document.querySelector('.pause'),
      wave1 = document.querySelector('.line1'),
      wave2 = document.querySelector('.line2'),
      wave3 = document.querySelector('.line3'),
      wave4 = document.querySelector('.line4'),
      wave5 = document.querySelector('.line5');
 
 container.addEventListener('click', (e)=> {
   
   if (e.target.className === 'play') {
     e.target.classList.toggle("active");
     btnPause.classList.toggle("active");
     wave1.classList.toggle("active");
     wave2.classList.toggle("active");
     wave3.classList.toggle("active");
     wave4.classList.toggle("active");
     wave5.classList.toggle("active");
     
     if (e.target.classList.contains("active")) {
       player.play();
     } 
    
     
   }
   
   if (e.target.className === 'pause active') {
     e.target.classList.toggle("active");
     btnPlay.classList.toggle("active");
     wave1.classList.toggle("active");
     wave2.classList.toggle("active");
     wave3.classList.toggle("active");
     wave4.classList.toggle("active");
     wave5.classList.toggle("active");
   }
   
   if (btnPlay.className === "play") {
     player.pause();
   }
   
 })