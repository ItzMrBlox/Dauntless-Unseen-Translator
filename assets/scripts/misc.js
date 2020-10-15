function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
};


// Local Storage
var ARG2018 = localStorage.getItem('2018');
var ARG2019 = localStorage.getItem('2019')
var ARG2020 = localStorage.getItem('2020')

function NewInformation() {
  if(ARG2018 == "20/07/2020"){
    document.getElementById("2018").style.display = "none";
  }
  if(ARG2019 == "20/07/2020"){
    document.getElementById("2019").style.display = "none";
  }
  if(ARG2019 == "20/07/2020"){
    document.getElementById("2019").style.display = "none";
  }
}

function Visited2018() {
    localStorage.setItem("2018", "20/07/2020");
}

function Visited2019() {
    localStorage.setItem("2019", "20/07/2020");
}

function Visited2020() {
  localStorage.setItem("2019", "16/10/2020");
}


//sa421343r54235 23b523  523 g5235e<btrewteT 345t345 
function MouseOver() {
    document.getElementById("myImg").src = "../assets/images/Dauntless-logo.gif";
}

function MouseOut() {
    document.getElementById("myImg").src = "../assets/images/Dauntless Logo.png";
}
