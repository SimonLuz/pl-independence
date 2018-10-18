
$(document).ready(function() {

//TIMELINE HEADER LEFT & RIGHT WAYPOINTS
    $('.js--timeline-container').waypoint(function(direction) {
        $('.timeline-item__head--right').addClass('timeline-item__head--animated-right');
    }, {
       offset:'30%'                                    
    })
    
    $('.js--timeline-container').waypoint(function(direction) {
        $('.timeline-item__head--left').addClass('timeline-item__head--animated-left');
    }, {
        offset: '30%'
    })
   
// TIMELINE DATE WAYPOINT    
    $('.js--timeline-container').waypoint(function(direction) {
        $('.timeline-item__date').addClass('timeline-item__date--animated');
    }, {
        offset:'30%'
    })

// SCROLL TO SECTION 
    $(".js--scroll-to-section-intro").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-intro").offset().top}, 600);
    });
    
    $(".js--scroll-to-section-about").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-about").offset().top}, 600);
    });
    
    $(".js--scroll-to-section-timeline").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-timeline").offset().top}, 1000);
    });
    
    $(".js--scroll-to-section-march").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-march").offset().top}, 1200);
    });
    
    $(".js--scroll-to-section-intro-cards").click(function() {
        $("html, body").animate({scrollTop: $(".js--section-intro-cards").offset().top}, 600);
    })
    
/*
// svastika & commy ICON ANIMATION STYLES --- STILL ANIMATES AAAAAAALLLLLLLL ICONS, NOT JUST THE PARENT
    $('.timeline-item__date').hover(function() {
        $('.timeline-item__date').next().toggleClass('timeline-item__box--animated');
    })
*/  
    
    /* $('.timeline-item__box').mouseover(function() {
        $(this).css("transform", 'scale(1.4)');
    })
     
    $('.timeline-item__box').mouseout(function() {
        $(this).css("transform", 'scale(1)');
    })
    */
})

    
    /*
$(document).ready(function() {
    
    $('.timeline-item__box').click(function() {
        $(this).css("color", 'blue');
    })


// JQuery: CHANGING STATE of another element ON HOVER 

PROBLEM: JQuery LEAVES the element in the 

$(document).ready(function(){
     $(".timeline-item__date").mouseover(function(){
         $(".timeline-item__date:hover").prev().css("background-color", "red");
     });
});
*/




/*
    $('.js--timeline-container').waypoint(function(direction) {
        $('.timeline-item__head').addClass('timeline-item__head--animated')
    }, {
        offset: '50%'
    });
*/



/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})


$(document).ready(function() {
    
    $('h1').click(function() {
        $(this).css("color", 'blue');
    })
    
})
*/
