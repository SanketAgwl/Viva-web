const light = document.getElementsByClassName('light');
const dark = document.getElementsByClassName('dark');
const planet= document.getElementById('trippy');
// const planet = document.getElementById('planet');


function darkMode() {
    console.log("dark")
    planet.src= "/assets/img/moon.png"
    dark[0].style.visibility = "visible";
    light[0].style.visibility = "hidden";
    // trippl.style.backgroundImage = "url('/assets/img/moon.png')";
}
