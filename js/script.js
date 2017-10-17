$(document).ready(function(){
    applyClickHandlers();
});

function applyClickHandlers() {
    mobileNavigation();
}

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



