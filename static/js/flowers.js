document.addEventListener("DOMContentLoaded", function() {
    var petal1 = document.querySelectorAll('.Petal1');
    var petal2 = document.querySelectorAll('.Petal2');
    var petal3 = document.querySelectorAll('.Petal3');
    // changes color according to the button clicked
    document.getElementById("Sunflower").addEventListener("click", function() { 
      for (var i = 0; i < 12; i++) {
        petal1[i].style.background = "radial-gradient(circle, #ffffff 20%, #ffcc00 80%)";
        petal2[i].style.background = "radial-gradient(circle, #ffffff 20%, #ffcc00 80%)";
        petal3[i].style.background = "radial-gradient(circle, #ffffff 20%, #ffcc00 80%)";
      }  
    });
    document.getElementById("Orchid").addEventListener("click", function() { 
      for (var i = 0; i < 12; i++) {
        petal1[i].style.background = "radial-gradient(circle, #cc99ff 20%, #6600cc 80%)";
        petal2[i].style.background = "radial-gradient(circle, #cc99ff 20%, #6600cc 80%)";
        petal3[i].style.background = "radial-gradient(circle, #cc99ff 20%, #6600cc 80%)";
      }
    });
    document.getElementById("Tulip").addEventListener("click", function() { 
      for (var i = 0; i < 12; i++) {
        petal1[i].style.background = "radial-gradient(circle, #ffccff 20%, #cc99ff 80%)";
        petal2[i].style.background = "radial-gradient(circle, #ffccff 20%, #cc99ff 80%)";
        petal3[i].style.background = "radial-gradient(circle, #ffccff 20%, #cc99ff 80%)";
      }    
    });
    document.getElementById("Hibuscus").addEventListener("click", function() { 
      for (var i = 0; i < 12; i++) {
        petal1[i].style.background = "radial-gradient(circle, #fa0557, #ff7676)";
        petal2[i].style.background = "radial-gradient(circle, #fa0557, #ff7676)";
        petal3[i].style.background = "radial-gradient(circle, #fa0557, #ff7676)";
      }    
    });
    document.getElementById("Japenese aneomone").addEventListener("click", function() { 
      for (var i = 0; i < 12; i++) {
        petal1[i].style.background = "radial-gradient(circle, #f4b5ea 20%, #d93fab 80%)";
        petal2[i].style.background = "radial-gradient(circle, #f4b5ea 20%, #d93fab 80%)";
        petal3[i].style.background = "radial-gradient(circle, #f4b5ea 20%, #d93fab 80%)";
      }    
    });
    document.getElementById("Daisy").addEventListener("click", function() { 
      for (var i = 0; i < 12; i++) {
        petal1[i].style.background = "radial-gradient(circle, #ffffff 20%, #ceccc0 80%)";
        petal2[i].style.background = "radial-gradient(circle, #ffffff 20%, #ceccc0 80%)";
        petal3[i].style.background = "radial-gradient(circle, #ffffff 20%, #ceccc0 80%)";
      }    
    });
  });
  
    