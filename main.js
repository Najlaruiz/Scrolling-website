let starts = document.getElementById('starts');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let laluna= document.querySelector('.laluna');
window .onscroll = function (){
   let value = scrollY
   starts.style.left = value +'px';
   moon.style.top = value * 4 +'px';
   mountains3.style.top = value * 2 +'px';
   mountains4.style.top = value * 1.5 +'px';
   river5.style.top = value +'px';
   boat6 .style.top = value +'px';
   boat6 .style.left = value * 3 +'px';
   laluna.style.fontSize = value +'px';
   if(scrollY >= 70){
      laluna.style.fontSize = 70 + 'px';
      laluna.style.position= 'fixed' ;
      if(scrollY >= 439){
      laluna.style.display = 'none' ;
      }else{
         laluna.style.display = 'block';
      }
      if(scrollY >= 127){
         document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
      }else{
         document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)' 
      }
       
   } 


 
}