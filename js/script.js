
$(document).ready(function() {

//TIMELINE HEADER LEFT & RIGHT WAYPOINTS
    $('.js--timeline-container').waypoint(function(direction) {
        $('.timeline-item__head--right').addClass('timeline-item__head--animated-right');
    }, {
       offset:'10%'                                    
    })
    
    $('.js--timeline-container').waypoint(function(direction) {
        $('.timeline-item__head--left').addClass('timeline-item__head--animated-left');
    }, {
        offset: '10%'
    })
   
// TIMELINE DATE WAYPOINT    
    $('.js--timeline-container').waypoint(function(direction) {
        $('.timeline-item__date').addClass('timeline-item__date--animated');
    }, {
        offset:'10%'
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
