import $ from 'jquery' // Jquery 

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands/'

// Add the icon to the library so you can use it in your page
fontawesome.library.add(solid);
fontawesome.library.add(brands);

$(function(){

    /** Smooth Scrollin */
    $('YOUR CLASS').click(function(e){

        e.preventDefault();
        $('html  , body').animate({
            scrollTop: $(this.hash).length === 0 ? 
                        $(this).offset().top : 
                        $(this.hash).offset().top
        }, 1000);
    });

    // Your code here....

});