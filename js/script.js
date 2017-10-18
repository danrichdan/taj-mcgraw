$(document).ready(function(){
    applyClickHandlers();
});

function applyClickHandlers() {
    mobileNavigation();
    lightBox();
    animateToTopButton();
    backToTop();
};

//FUNCTION FOR THE HAMBURGER MENU
function mobileNavigation() {
    var $hamburgerMenu = $(".hamburger-menu-container");
    $hamburgerMenu.click(function(){
        var $hamburgerContainer = this;
        $("div.hamburger-menu-container").find("div").toggleClass("change");
        $(".main-nav").toggleClass("hide-show responsive");
    });
};

//FUNCTION FOR IMAGE GALLERY LIGHTBOX
function lightBox() {
    //Create overlay
    var $overlay = $('<div>', {
        id: "overlay",
    });

    var $image = $("<img>");

    //Add An image to overlay
    $overlay.append($image);

    //Add overlay to page
    $("body").append($overlay);

    //Capture the click event on a link to an image
    $("#imageGallery a").click(function(event){
        event.preventDefault();
        var imageLocation = $(this).attr("href");

        //Update overlay with the image linked in the link
        $image.attr("src", imageLocation);

        //Show the overlay.
        $overlay.show();
    });
    //When overlay is clicked
    $overlay.click(function(){
        //Hide the overlay
        $($overlay).hide();
    });
};


//DISPLAY BACK TO TOP BUTTON
function animateToTopButton() {
    var $window = $(window);
    var $toTopButton = $('#back-to-top');
    $toTopButton.hide();
    var endZone = $('footer').offset().top - $window.height() - 3000;
    $window.on('scroll', function(){
        if( (endZone) < $window.scrollTop() ) {
            $toTopButton.show();
        } else {
            $toTopButton.hide();
        }
    });
};

//BACK TO TOP CLICK HANDLER
function backToTop() {
    $('#back-to-top').click(function( event ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 1200);
        $('#back-to-top').hide();
    });
}

