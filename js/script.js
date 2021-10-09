$(document).ready(function () {
  applyClickHandlers();
});

function applyClickHandlers() {
  mobileNavigation();
  lightBox();
  animateToTopButton();
  backToTop();
  includeHeaderEmail();
  includeAboutEmail();
}

//FUNCTION FOR THE HAMBURGER MENU
function mobileNavigation() {
  var $hamburgerMenu = $(".hamburger-menu-container");
  $hamburgerMenu.click(function () {
    var $hamburgerContainer = this;
    $("div.hamburger-menu-container").find("div").toggleClass("change");
    $(".main-nav").toggleClass("hide-show responsive");
  });
}

//FUNCTION FOR IMAGE GALLERY LIGHTBOX
function lightBox() {
  //Create overlay
  var $overlay = $("<div>", {
    id: "overlay",
  });

  var $image = $("<img>");

  //Add An image to overlay
  $overlay.append($image);

  //Add overlay to page
  $("body").append($overlay);

  //Capture the click event on a link to an image
  $("#imageGallery div").click(function () {
    // event.preventDefault();
    var imageLocation = $(this).find("img").attr("src");

    //Update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //Show the overlay.
    $overlay.fadeIn();
  });
  //When overlay is clicked
  $overlay.click(function () {
    //Hide the overlay
    $($overlay).fadeOut();
  });
}

//DISPLAY BACK TO TOP BUTTON
function animateToTopButton() {
  var $window = $(window);
  var $toTopButton = $("#back-to-top");
  $toTopButton.hide();
  var endZone = $("footer").offset().top - $window.height() - 3000;
  $window.on("scroll", function () {
    if (endZone < $window.scrollTop()) {
      $toTopButton.show();
    } else {
      $toTopButton.hide();
    }
  });
}

//BACK TO TOP CLICK HANDLER
function backToTop() {
  $("#back-to-top").click(function (event) {
    event.preventDefault();
    $("#back-to-top").hide();
    $("html, body").animate(
      {
        scrollTop: $("header").offset().top,
      },
      1200
    );
  });
}

//ADD EMAIL TO HEADER
function includeHeaderEmail() {
  var headerEmailElement = document.getElementById("headerEmail");
  headerEmailElement.textContent = "Email: tajmcgrawstudios@gmail.com";
}

//ADD EMAIL TO About Page
function includeAboutEmail() {
  var aboutEmailElement = document.querySelectorAll(".about-email");
  for (var i = 0; i < aboutEmailElement.length; i++) {
    aboutEmailElement[i].textContent = " tajmcgrawstudios@gmail.com";
  }
}
