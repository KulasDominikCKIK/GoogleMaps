document.addEventListener("DOMContentLoaded", function() {
    var images = [
        { id: "1", src: "images/1.jpg" },
        { id: "2", src: "images/2.jpg" },
        { id: "3", src: "images/3.png" },
        { id: "4", src: "images/4.png" },
        { id: "5", src: "images/5.png" }
    ];

    var currentImageIndex = 0;

    var dot = document.getElementById("dot");
    var back = document.getElementById("back");

    function showImage(index) {
        images.forEach(function(image, i) {
            var imgElement = document.getElementById(image.id);
            if (i === index) {
                imgElement.src = image.src;
                imgElement.style.display = "block";
            } else {
                imgElement.style.display = "none";
            }
        });
    }

    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = images.length - 1;
        }
        showImage(currentImageIndex);
        updateControls();
    }

    function prevImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = 0;
        }
        showImage(currentImageIndex);
        updateControls();
    }

    function updateControls() {
        back.style.display = currentImageIndex > 0 ? "block" : "none";
        dot.style.display = currentImageIndex < images.length - 1 ? "block" : "none";
    }

    dot.addEventListener("click", nextImage);
    back.addEventListener("click", prevImage);
    showImage(currentImageIndex);
    updateControls();
});