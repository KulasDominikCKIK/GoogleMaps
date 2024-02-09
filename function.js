document.addEventListener("DOMContentLoaded", function() {
    var img1 = document.getElementById("1");
    var img2 = document.getElementById("2");
    var img3 = document.getElementById("3");
    var img4 = document.getElementById("4");
    var dot = document.getElementById("dot");
    var back = document.getElementById("back");

    img1.style.display = "block";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";

    dot.addEventListener("click", function() {
        if (img1.style.display === "block") {
            img1.src = "images/2.jpg";
            back.style.display = "block";
            dot.style.display = "block";
            img2.style.display = "block";
            img1.style.display = "none";
        } else if (img2.style.display === "block") {
            img2.src = "images/3.png";
            img3.style.display = "block";
            img2.style.display = "none";
            back.style.display = "block";
            dot.style.display = "block";
        } else if (img3.style.display == "block") {
            img3.src = "images/4.png";
            img3.style.display = "none";
            img4.style.display = "block";
            back.style.display = "block";
            dot.style.display = "none";
        } 
    });

    back.addEventListener("click", function() {
        if (img2.style.display === "block") {
            img1.src = "images/1.jpg";
            back.style.display = "none";
            dot.style.display = "block";
            img2.style.display = "none";
            img1.style.display = "block";
        } else if (img3.style.display === "block") {
            img2.src = "images/2.jpg";
            img2.style.display = "block";
            img3.style.display = "none";
            back.style.display = "block";
            dot.style.display = "block";
        } else if (img4.style.display == "block") {
            img3.src = "images/3.png";
            img3.style.display = "block";
            img4.style.display = "none";
            back.style.display = "block";
            dot.style.display = "block";
        }
    });
});