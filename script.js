document.addEventListener("DOMContentLoaded", function() {
    var index = 0;
    var images = document.querySelectorAll(".slider-img");
    images[index].style.display = "block";

    setInterval(function() {
        images[index].style.display = "none";
        index = (index + 1) % images.length;
        images[index].style.display = "block";
    }, 3000); // Change image every 3 seconds
});
