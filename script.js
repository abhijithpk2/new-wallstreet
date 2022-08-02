//header part
   /* window.onscroll = function() {
      if (document.documentElement.scrollTop>50){
        document.getElementById("header").style.height="70px";
        document.getElementById("header").style.fontSize="15px";
        document.getElementById("imgh").style.width="80px";
      }
      else{
        document.getElementById("header").style.height="90px";
        document.getElementById("header").style.fontSize="16px";
        document.getElementById("imgh").style.width="112px";
      }
    }*/

//form particles
    $(document).ready(function(){
      $("#contact-form").validate({
        rules:{
          name:{
              required:true,
              minlength:4,
          },
          emaila:{
            required:true,
            email: true,
          },
          subject:{
            required:true,
            minlength:4,
          },
          message:{
            required:true,
            minlength:4,
          },
        }
      })
    })    

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}