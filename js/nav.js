  $(document).ready(function(){
	   $(window).bind('scroll', function() {
             var navHeight = $( '.navbar' ).height();
			 if ($(window).scrollTop() > navHeight) {
                 $(".sectionNavbar").addClass('fixed_nav');
                 $(".sectionNavbar nav").addClass('fixed_navbar');
                 $(".sectionNavbar .navbar-light .navbar-nav .nav-link").addClass('fixed-nav-link');
                 $(".sectionNavbar .navbar-light .navbar-brand span").addClass('fixed-span');

             }
			 else {
				 $('.sectionNavbar').removeClass('fixed_nav');
				 $('.sectionNavbar nav').removeClass('fixed_navbar');
                 $(".sectionNavbar .navbar-light .navbar-nav .nav-link").removeClass('fixed-nav-link');
                 $(".sectionNavbar .navbar-light .navbar-brand span").removeClass('fixed-span');
	             
             }
		});
	});