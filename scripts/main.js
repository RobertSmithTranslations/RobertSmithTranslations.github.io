const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Doorn WOI 4.jpg") {
    myImage.setAttribute("src", "images/sinterklaas.jpg");
  } else {
    myImage.setAttribute("src", "images/Doorn WOI 4.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to Robert Smith Translations, ${myName}`;
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Robert Smith Translations, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
