menu(1);
function menu(n){
    var menu1=document.getElementById("p1");
    var menu2 = document.getElementById("p2");
    var menu3 = document.getElementById("p3");
    var menu4 = document.getElementById("p4");
    var home1=document.getElementById("Home");
    var about1=document.getElementById("About");
    var contact1=document.getElementById("Contact");
    var output1=document.getElementById("Output");
    menu1.style.color = "rgba(30, 30, 30)";
    menu2.style.color = "rgba(30, 30, 30)";
    menu3.style.color = "rgba(30, 30, 30)";
    menu4.style.color = "rgba(30, 30, 30)";
    switch (n) {
      case 1:
        menu1.style.color = "red";
        home1.style.display = "block";
        about1.style.display = "none";
        contact1.style.display = "none";
        output1.style.display = "none";
        break;
      case 2:
        menu2.style.color = "red";
        home1.style.display = "none";
        about1.style.display = "block";
        contact1.style.display = "none";
        output1.style.display = "none";
        break;
      case 3:
        menu3.style.color = "red";
        home1.style.display = "none";
        about1.style.display = "none";
        contact1.style.display = "block";
        output1.style.display = "none";
        break;
      case 4:
        menu4.style.color = "red";
        home1.style.display = "none";
        about1.style.display = "none";
        contact1.style.display = "none";
        output1.style.display = "block";
        break;
    }
}