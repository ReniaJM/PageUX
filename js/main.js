(function ($){

$(document).ready(function(){
    $('.gallery-wrapper').owlCarousel({
    items:4,
    navigation: true,
    navigationText:['',''],
    pagination: false
      });

    $('.gallery-item').magnificPopup({
        type:'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
});

})(jQuery);

