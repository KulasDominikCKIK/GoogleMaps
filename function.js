document.addEventListener("DOMContentLoaded", function () {
    var start = document.getElementById("1");
    var images = {
       "start_left": document.getElementById("2"),
       "start_right": document.getElementById("3"),
       "start_forward": document.getElementById("4"),
       "sleft_forward": document.getElementById("5"),
       "start_toilet_map": document.getElementById("6")
    };
 
    var buttons = {
       "forward": document.getElementById("forward"),
       "left": document.getElementById("left"),
       "right": document.getElementById("right"),
       "back": document.getElementById("back")
    };
 
 
    var maps = {
       "toiletMap": document.querySelector('map[name="toilet"]')
    }
 
    start.style.display = "block";
    Object.values(images).forEach(image => image.style.display = "none");
    Object.values(maps).forEach(map => map.style.display = "none");
 
    buttons.forward.addEventListener("click", function () {
       switch (true) {
          case start.style.display === "block":
             start.src = "images/start_.jpg";
             showImageAndHideImage(start.id, images.start_forward.id);
             hideLeftAndRight();
             showBackAndHideForward();
             break;
          case images.start_left.style.display === "block":
             images.start_left.src = "images/sleft_forward.jpg";
             showImageAndHideImage(images.start_left.id, images.sleft_forward.id);
             utils.hideLeftAndRight();
             utils.showBackAndHideForward();
             break;
       }
    });
 
    buttons.left.addEventListener("click", function () {
       switch (true) {
          case start.style.display === "block":
             start.src = "images/start_left.jpg";
             showImageAndHideImage(start.id, images.start_left.id);
             showForwardAndBack();
             hideLeftAndRight();
             break;
       }
    });
 
    buttons.right.addEventListener("click", function () {
       switch (true) {
          case start.style.display === "block":
             start.src = "images/start_right.jpg";
             showImageAndHideImage(start.id, images.start_right.id);
             showBackAndHideForward();
             hideLeftAndRight();
             break;
       }
    });
 
    buttons.back.addEventListener("click", function () {
       switch (true) {
          case images.start_forward.style.display === "block":
             start.src = "images/start.jpg";
             showImageAndHideImage(images.start_forward.id, start.id);
             showLeftAndRight();
             showForwardAndHideBack();
             break;
          case images.start_right.style.display === "block":
             start.src = "images/start.jpg";
             showImageAndHideImage(images.start_right.id, start.id);
             showForwardAndHideBack();
             showLeftAndRight();
             break;
          case images.start_left.style.display === "block":
             start.src = "images/start.jpg";
             showImageAndHideImage(images.start_left.id, start.id);
             showForwardAndHideBack();
             showLeftAndRight();
             break;
          case images.sleft_forward.style.display === "block":
             images.start_left.src = "images/start_left.jpg";
             showImageAndHideImage(images.sleft_forward.id, images.start_left.id);
             showForwardAndBack();
             hideLeftAndRight();
             break;
          case images.start_toilet_map.style.display === "block":
             start.src = "images/start.jpg";
             showImageAndHideImage(images.start_toilet_map.id, start.id);
             showForwardAndHideBack();
             showLeftAndRight();
             break;
       }
    });
 
    maps.toiletMap.addEventListener("click", function (event) {
       if (event.target.tagName === "AREA") {
          start.src = "images/areas/start_toilet.jpg";
          showImageAndHideImage(start.id, images.start_toilet_map.id)
          loadMapProperties();
       }
    });
 
    function hideLeftAndRight() {
       buttons.left.style.display = "none";
       buttons.right.style.display = "none";
    }
 
    function showForwardAndHideBack() {
        buttons.forward.style.display = "block";
        buttons.back.style.display = "none";
    }
 
    function showBackAndHideForward() {
        buttons.forward.style.display = "none";
        buttons.back.style.display = "block";
    }
 
    function showLeftAndRight() {
        buttons.left.style.display = "block";
        buttons.right.style.display = "block";
    }
 
    function showForwardAndBack() {
        buttons.forward.style.display = "block";
        buttons.back.style.display = "block";
    }

    function loadMapProperties() {
        buttons.forward.style.display = "none";
        buttons.left.style.display = "none";
        buttons.right.style.display = "none";
        buttons.back.style.display = "block";
    }
 
    function showImageAndHideImage(image1Id, image2Id) {
       document.getElementById(image1Id).style.display = "none";
       document.getElementById(image2Id).style.display = "block";
    }
 });