let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
let myButton = document.querySelector('button');

myButton.onclick = function() {
    setUserName();
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    setHeadingContent(storedName);
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefoxLogo.png') {
        myImage.setAttribute('src', 'images/firefoxLogo2.png');
    } else {
        myImage.setAttribute('src', 'images/firefoxLogo.png');
    }
}


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
        return;
    }
    localStorage.setItem('name', myName);
    setHeadingContent(myName);
}

function setHeadingContent(name) {
    myHeading.textContent = 'Mozilla is cool, ' + name;
}