document.addEventListener("DOMContentLoaded", function () {
    var gate = document.getElementById("1");
    var images = {
       "lobby": document.getElementById("2"),
       "lobby_forward1": document.getElementById("3"),
       "lobby_forward2": document.getElementById("4"),
       "lobby_left": document.getElementById("5"),
       "lobby_right1": document.getElementById("8"),
       "lobby_right_12": document.getElementById("9"),
       "lobby_right_14": document.getElementById("11"),
       "cafeteria_map": document.getElementById("6"),
       "gymnasium1_map": document.getElementById("7"),
       "class12_map": document.getElementById("10"),
       "class14_map": document.getElementById("12")
    };
 
    var buttons = {
       "forward": document.getElementById("forward"),
       "left": document.getElementById("left"),
       "right": document.getElementById("right"),
       "back": document.getElementById("back")
    };
 
    var maps = {
       "cafeteriaMap": document.querySelector('area[id="cafeteria"]'),
       "gymnasium1Map": document.querySelector('area[id="gymnasium1"]'),
       "class12Map": document.querySelector('area[id="class12"]'),
       "class14Map": document.querySelector('area[id="class14"]')
    }
 
    gate.style.display = "block";
    buttons.forward.style.display = "block";
    buttons.left.style.display = "none";
    buttons.right.style.display = "none";
    buttons.back.style.display = "none";
    Object.values(images).forEach(image => image.style.display = "none");
    Object.values(maps).forEach(map => map.style.display = "none");
 
    buttons.forward.addEventListener("click", function () {
       switch (true) {
          case gate.style.display === "block":
             gate.src = "images/lobby.jpg";
             showImageAndHideImage(gate.id, images.lobby.id);
             hideLeftAndRight();
             showForwardAndBack();
             showLeftAndRight();
             break;
          case images.lobby.style.display === "block":
             images.lobby.src = "images/lobby_forward1.jpg";
             showImageAndHideImage(images.lobby.id, images.lobby_forward1.id);
             hideLeftAndRight();
             showForwardAndBack();
             break;
          case images.lobby_forward1.style.display === "block":
             images.lobby_forward1.src = "images/lobby_forward2.jpg";
             showImageAndHideImage(images.lobby_forward1.id, images.lobby_forward2.id);
             hideLeftAndRight();
             showBackAndHideForward();
             break;
          case images.lobby_right1.style.display === "block":
             images.lobby_right1.src = "images/lobby_right_12.jpg";
             showImageAndHideImage(images.lobby_right1.id, images.lobby_right_12.id);
             hideLeftAndRight();
             showForwardAndBack();
             break;
          case images.lobby_right_12.style.display === "block":
             images.lobby_right_12.src = "images/lobby_right_14.jpg";
             showImageAndHideImage(images.lobby_right_12.id, images.lobby_right_14.id);
             hideLeftAndRight();
             showForwardAndBack();
             break;          
       }
    });
 
    buttons.left.addEventListener("click", function () {
       switch (true) {
          case images.lobby.style.display === "block":
             gate.src = "images/lobby_left.jpg";
             showImageAndHideImage(images.lobby.id, images.lobby_left.id);
             showBackAndHideForward();
             hideLeftAndRight();
             break;
       }
    });
 
    buttons.right.addEventListener("click", function () {
       switch (true) {
          case images.lobby.style.display === "block":
             images.lobby.src = "images/lobby_right1.jpg";
             showImageAndHideImage(images.lobby.id, images.lobby_right1.id);
             showForwardAndBack();
             hideLeftAndRight();
             break;
       }
    });
 
    buttons.back.addEventListener("click", function () {
       switch (true) {
          case images.lobby.style.display === "block":
             gate.src = "images/gate.jpg";
             showImageAndHideImage(images.lobby.id, gate.id);
             hideLeftAndRight();
             showForwardAndHideBack();
             break;
          case images.lobby_forward1.style.display === "block":
             images.lobby.src = "images/lobby.jpg";
             showImageAndHideImage(images.lobby_forward1.id, images.lobby.id);
             showForwardAndBack();
             showLeftAndRight();
             break;
          case images.lobby_forward2.style.display === "block":
             images.lobby_forward1.src = "images/lobby_forward1.jpg";
             showImageAndHideImage(images.lobby_forward2.id, images.lobby_forward1.id);
             showForwardAndBack();
             hideLeftAndRight();
             break;
          case images.cafeteria_map.style.display === "block":
             images.lobby_forward2.src = "images/lobby_forward2.jpg";
             showImageAndHideImage(images.cafeteria_map.id, images.lobby_forward2.id);
             showBackAndHideForward();
             hideLeftAndRight();
             break;
          case images.gymnasium1_map.style.display === "block":
             images.lobby_forward2.src = "images/lobby_forward2.jpg";
             showImageAndHideImage(images.gymnasium1_map.id, images.lobby_forward2.id);
             showBackAndHideForward();
             hideLeftAndRight();
             break; 
          case images.lobby_left.style.display === "block":
             images.lobby.src = "images/lobby.jpg";
             showImageAndHideImage(images.lobby_left.id, images.lobby.id);
             showForwardAndBack();
             showLeftAndRight();
             break;
          case images.lobby_right1.style.display === "block":
             images.lobby.src = "images/lobby.jpg";
             showImageAndHideImage(images.lobby_right1.id, images.lobby.id);
             showForwardAndBack();
             showLeftAndRight();
             break;
          case images.lobby_right_12.style.display === "block":
             images.lobby_right1.src = "images/lobby_right1.jpg";
             showImageAndHideImage(images.lobby_right_12.id, images.lobby_right1.id);
             showForwardAndBack();
             hideLeftAndRight();
             break;
          case images.class12_map.style.display === "block":
             images.lobby_right_12.src = "images/lobby_right_12.jpg";
             showImageAndHideImage(images.class12_map.id, images.lobby_right_12.id);
             showForwardAndBack();
             hideLeftAndRight();
             break;
          case images.lobby_right_14.style.display === "block":
             images.lobby_right_12.src = "images/lobby_right_12.jpg";
             showImageAndHideImage(images.lobby_right_14.id, images.lobby_right_12.id);
             showForwardAndBack();
             hideLeftAndRight();
             break;
          case images.class14_map.style.display === "block":
             images.lobby_right_14.src = "images/lobby_right_14.jpg";
             showImageAndHideImage(images.class14_map.id, images.lobby_right_14.id);
             showForwardAndBack();
             hideLeftAndRight();
             break;            
       }
    });
 
    maps.cafeteriaMap.addEventListener("click", function (event) {
       if (event.target.tagName === "AREA") {
          images.lobby_forward2.src = "images/areas/cafeteria.jpg";
          showImageAndHideImage(images.lobby_forward2.id, images.cafeteria_map.id)
          loadMapProperties();
       }
    });

    maps.gymnasium1Map.addEventListener("click", function (event) {
      if (event.target.tagName === "AREA") {
         images.lobby_forward2.src = "images/areas/gymnasium1.jpg";
         showImageAndHideImage(images.lobby_forward2.id, images.gymnasium1_map.id)
         loadMapProperties();
      }
   });

   maps.class12Map.addEventListener("click", function (event) {
      if (event.target.tagName === "AREA") {
         images.lobby_right_12.src = "images/areas/class12.jpg";
         showImageAndHideImage(images.lobby_right_12.id, images.class12_map.id)
         loadMapProperties();
      }
   });

   maps.class14Map.addEventListener("click", function (event) {
      if (event.target.tagName === "AREA") {
         images.lobby_right_14.src = "images/areas/class14.jpg";
         showImageAndHideImage(images.lobby_right_14.id, images.class14_map.id)
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