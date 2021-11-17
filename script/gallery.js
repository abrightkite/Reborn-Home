$(function(){

    $('.grid').imagesLoaded( function() {
        // images have loaded
        $('.grid').masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            // use element for option
            columnWidth: '.grid-sizer',
            percentPosition: true
          })
    });

    $info2 = $('.info2');
    $scrollBox = $('.scrollBox');
{/* <i class="fas fa-angle-down"></i> */}


})