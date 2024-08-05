let myButton = document.querySelector (" button ");
let myTitle = document.querySelector ( " h1 ");

function setusername() {
    let myName = prompt (" Please, insert your name ");
    localStorage.setItem("name", myName );
    myTitle.textContent=  " Web page is awesome, " + myName;
}

if ( !localStorage.getItem("name")){
    setusername();
} else {
    let storedName= localStorage.getItem ("name");
    myHeading.textContent= 'Web page is awesome, ${storedName} ';
}
myButton.onclick = () => {  
    setusername();
};

