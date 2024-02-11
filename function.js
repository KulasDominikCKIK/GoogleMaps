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
            hideLeftAndRight();
            showBackAndHideForward();
            showImageAndHideImage(start.id, start_forward.id);
        } else if (start_left.style.display === "block") {
            start_left.src = "images/sleft_forward.jpg";
            hideLeftAndRight();
            showBackAndHideForward();
            showImageAndHideImage(start_left.id, sleft_forward.id);
        }
    });

    left.addEventListener("click", function() {
        if (start.style.display === "block") {
            start.src = "images/start_left.jpg";
            showForwardAndBack();
            hideLeftAndRight();
            showImageAndHideImage(start.id, start_left.id);
        }
    });

    right.addEventListener("click", function() {
        if (start.style.display === "block") {
            start.src = "images/start_right.jpg";
            showBackAndHideForward();
            hideLeftAndRight();
            showImageAndHideImage(start.id, start_right.id);
        }
    });

    back.addEventListener("click", function() {
        if (start_forward.style.display === "block") {
            start.src = "images/start.jpg";
            showLeftAndRight();
            showForwardAndHideBack();
            showImageAndHideImage(start_forward.id, start.id);
        } else if (start_right.style.display === "block") {
            start.src = "images/start.jpg";
            showImageAndHideImage(start_right.id, start.id);
            showForwardAndHideBack();
            showLeftAndRight();
        } else if (start_left.style.display == "block") {
            start.src = "images/start.jpg";
            showImageAndHideImage(start_left.id, start.id);
            showForwardAndHideBack();
            showLeftAndRight();
        } else if (sleft_forward.style.display == "block") {
            start_left.src = "images/start_left.jpg";
            showImageAndHideImage(sleft_forward.id, start_left.id);
            showForwardAndBack();
            hideLeftAndRight();
        }
    });

    function hideLeftAndRight() {
        left.style.display = "none";
        right.style.display = "none";
    }

    function showForwardAndHideBack() {
        forward.style.display = "block";
        back.style.display = "none";
    }

    function showBackAndHideForward() {
        forward.style.display = "none";
        back.style.display = "block";
    }

    function showLeftAndRight() {
        left.style.display = "block";
        right.style.display = "block";
    }

    function showForwardAndBack() {
        forward.style.display = "block";
        back.style.display = "block";
    }

    function showImageAndHideImage(image1Id, image2Id) {
        document.getElementById(image1Id).style.display = "none";
        document.getElementById(image2Id).style.display = "block";
    }
});