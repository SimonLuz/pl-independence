
$(document).ready(function() {

    $('.js--timeline-container').waypoint(function(direction) {
        $('.timeline-item__head').addClass('timeline-item__head--animated');
    }, {
       offset:'50%'                                    
    })
    
    $('.js--timeline-container').waypoint(function(direction) {
        $('.timeline-item__box').addClass('timeline-item__box--animated');
    }, {
        offset:'50%'
    })
    
    $('.js--timeline-container').waypoint(function(direction) {
        $('.timeline-item__date').addClass('timeline-item__date--animated');
    }, {
        offset:'50%'
    })

    
})

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
