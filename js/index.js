$(document).ready(function (){
   $('#menu').click(function(ev) {
      ev.preventDefault();
      $(this).next().slideToggle();
   });
});