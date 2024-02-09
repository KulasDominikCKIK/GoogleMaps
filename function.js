document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dot").addEventListener("click", function() {
        var img = document.getElementById("1");
        img.src = "images/2.jpg"; 
        document.getElementById("back").style.display = "block";
        document.getElementById("dot").style.display = "none";
    });

    document.getElementById("back").addEventListener("click", function() {
        var img = document.getElementById("1");
        img.src = "images/1.jpg"; 
        document.getElementById("back").style.display = "none"; 
        document.getElementById("dot").style.display = "block";
    });
});