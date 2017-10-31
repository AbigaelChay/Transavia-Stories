// Dit heb ik gekopieerd en aangepast van de jules.js die ik met Folkert heb gemaakt //
"use strict";
//Hier zeg ik welke images die waar staan worden aangeroepen //
var allImg = document.querySelectorAll("article > div img");
//Hier maak ik de functie die ervoor zorgt dat de images on-click worden vervangen door een eenmalig afspelend gifje, dit geldt voor alle vier de afbeeldingen en dat kan omdat ze allemaal als png de naam ietsUIT.png hebben en de gifjes allemaal ietsAAN.gif heten//
function switchOneImg(afbeelding) {
    if (afbeelding.src.indexOf("UIT.png") > -1) {
        afbeelding.src = afbeelding.src.split("UIT.png").join("AAN.gif");
    } else if (afbeelding.src.indexOf("AAN.gif") > -1) {
        afbeelding.src = afbeelding.src.split("AAN.gif").join("UIT.png");
    }
}

allImg.forEach(function (element) {
    element.addEventListener("click", function () {switchOneImg(element); });
});