// mixitup plugins start =========
 var mixer = mixitup('#portfolio');
// mixitup plugins ends =========
// skillbar plugins jquery start ========
jQuery(document).on('ready' ,function(){
	jQuery('.skillbar').on('each' ,function(){
        "use strict";
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});
// skillbar plugins jquery ends ========
// counter start here ========
$('.counter').counterUp({
    delay: 10,
    time: 3000
});
// counter ends here ========


$top_to_btn=300;
$('.top_to').on('click',function(){
    "use strict";
    $('html,body').animate({
        scrollTop: 0
    },1000);
});
// menufix start here =========
$navOffset=$('.navigation').offset().top;
$(window).on('scroll' ,function(){
    $scrolling=$(this).scrollTop();
    if($scrolling > $navOffset){
        $('.navigation,.menu').addClass('fixed');   
    }
    else{
        $('.navigation,.menu').removeClass('fixed');  
    }
    if($scrolling >= $top_to_btn){
       $('.top_to').fadeIn();
    }else{
        $('.top_to').fadeOut();
    }
});
// menufix ends here =========

// smooth Scroll all body ========
$('#home nav a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click',function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
          };
        });
      }
    }
  });
// smooth Scroll all body ========

// smooth Scroll about ========
$('.banner h3 a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click',function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
          };
        });
      }
    }
  });
// smooth Scroll about ========



//Scrollspy Menubar start here ========
$('body').scrollspy({ target: '#navbarNav' });
//Scrollspy Menubar ends here ========


// preloader ==========
$(window).on('load',function(){
    "use strict";
  $("#loader").delay(300).animate({
    'opacity' : '1'
	}, 300, function() {
	$("#loader").css("display","none");
  });  
});
// preloader ============



