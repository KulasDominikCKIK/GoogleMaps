document.addEventListener("DOMContentLoaded", function() {
    var start = document.getElementById("1");
    var start_left = document.getElementById("2");
    var start_right = document.getElementById("3");
    var start_forward = document.getElementById("4");
    var sleft_forward = document.getElementById("5");
    var forward = document.getElementById("forward");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var back = document.getElementById("back");

    start.style.display = "block";
    start_forward.style.display = "none";
    start_left.style.display = "none";
    start_right.style.display = "none";
    sleft_forward.style.display = "none";

    forward.addEventListener("click", function() {
        if (start.style.display === "block") {
            start.src = "images/start_.jpg";
            back.style.display = "block";
            forward.style.display = "none";
            left.style.display = "none";
            right.style.display = "none";
            start_forward.style.display = "block";
            start.style.display = "none"; //Starttól előre
        } else if (start_left.style.display === "block") {
            start_left.src = "images/sleft_forward.jpg";
            forward.style.display = "none";
            left.style.display = "none";
            right.style.display = "none";
            back.style.display = "block";
            sleft_forward.style.display = "block";
            start_left.style.display = "none";
        }
    });

    left.addEventListener("click", function() {
        if (start.style.display === "block") {
            start.src = "images/start_left.jpg";
            back.style.display = "block";
            forward.style.display = "block";
            left.style.display = "none";
            right.style.display = "none";
            start_left.style.display = "block";
            start.style.display = "none"; //Starttól balra
        }
    });

    right.addEventListener("click", function() {
        if (start.style.display === "block") {
            start.src = "images/start_right.jpg";
            back.style.display = "block";
            forward.style.display = "none";
            left.style.display = "none";
            right.style.display = "none";
            start_right.style.display = "block";
            start.style.display = "none"; //Starttól jobbra
        }
    });

    back.addEventListener("click", function() {
        if (start_forward.style.display === "block") {
            start_forward.src = "images/start.jpg";
            back.style.display = "none";
            forward.style.display = "block";
            left.style.display = "block";
            right.style.display = "block";
            img2.style.display = "none";
            img1.style.display = "block";
        } else if (start_right.style.display === "block") {
            start.src = "images/start.jpg";
            start.style.display = "block";
            start_right.style.display = "none";
            back.style.display = "none";
            forward.style.display = "block";
            left.style.display = "block";
            right.style.display = "block";
        } else if (start_left.style.display == "block") {
            start.src = "images/start.jpg";
            start.style.display = "block";
            start_left.style.display = "none";
            back.style.display = "none";
            forward.style.display = "block";
            left.style.display = "block";
            right.style.display = "block";
        } else if (sleft_forward.style.display == "block") {
            start_left.src = "images/start_left.jpg";
            start_left.style.display = "block";
            sleft_forward.style.display = "none";
            back.style.display = "block";
            forward.style.display = "block";
            left.style.display = "none";
            right.style.display = "none";
        }
    });
});