$(document).ready(function(){
    mobileNavigation();
    openContactModal();
});

//FUNCTION FOR THE HAMBURGER MENU
function mobileNavigation() {
    var $hamburgerMenu = $(".hamburger-menu-container");
    $hamburgerMenu.click(function(){
        var $hamburgerContainer = this;
        $("div.hamburger-menu-container").find("div").toggleClass("change");
        console.log("Clicking on hamburger");
        $(".main-nav").toggleClass("hide-show responsive");
    });
};

//FUNCTION TO OPEN THE CONTACT MODAL ON THE HOME PAGE
function openContactModal() {
    $(".contact-link").click(function() {
        $("#contact").toggleClass("hide-show");
    });
    $(".close-contact-modal").click(function(){
        $("#contact").toggleClass("hide-show");
    });
};

