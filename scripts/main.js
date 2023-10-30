const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Doorn WOI 4.jpg") {
    myImage.setAttribute("src", "images/sinterklaas.jpg");
  } else {
    myImage.setAttribute("src", "images/Doorn WOI 4.jpg");
  }
};


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
