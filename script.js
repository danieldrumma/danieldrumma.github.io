$(document).ready(function() {
  //for social media tag show
  var originalContent = $('#tag h3').html();
  //navigation click actions
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
  var sectionID = $(this).attr("data-id");
  scrollToID('#' + sectionID, 750);
  });

  $('.scroll-top').on('click', function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');
  });
                   
   $('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});  
  
  
function orig() {
    $('#tag h3').html(originalContent);
  };

$('#email').hover(function() {
     $('#tag h3').html('boaiteyd7@gmail.com');   
      
});
  
$('#git').hover(function() {
     $('#tag h3').html('@DanielDrumma');  
   
});
  
$('#linkd').hover(function() {
     $('#tag h3').html('Just look up "Daniel Boaitey"');   
});
  
$('#twit').hover(function() {
     $('#tag h3').html('@DanielDrumma');   
});
  
$('#ig').hover(function() {
     $('#tag h3').html('@DanielDrumma');   
});
                   
});

function scrollToID(id, speed){
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({scrollTop:targetOffset}, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  } 
}

if (typeof console === "undefined"){
  console = {
    log: function() {}
  };
}
 