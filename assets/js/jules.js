// Dit heb ik samen met Folkert gemaakt //
"use strict";
//Hier roepen we alle images in de main aan//
var allImg = document.querySelectorAll("main img");
//Hier roepen we de lightswitch image aan//
var lightSwitch = document.querySelector("[data-id='lightSwitch']");

var staat = 0; // staat = uit
//Hier zeggen we dat als ie maar twee opties heeft, namelijk uit en anders aan en daaronder zeggen we dat ie dat aan moet passen als ie aangeklikt wordt //
function switchOneImg(afbeelding) {
    if (afbeelding.src.indexOf("UIT") > -1) {
        afbeelding.src = afbeelding.src.split("UIT").join("AAN");
    } else if (afbeelding.src.indexOf("AAN") > -1) {
        afbeelding.src = afbeelding.src.split("AAN").join("UIT");
    }
}

function switchImgsOn(afbeelding) {
    if (afbeelding.src.indexOf("UIT") > -1) {
        afbeelding.src = afbeelding.src.split("UIT").join("AAN");
    }
}
function switchImgsOff(afbeelding) {
    if (afbeelding.src.indexOf("AAN") > -1) {
        afbeelding.src = afbeelding.src.split("AAN").join("UIT");
    }
}

//En hij moet ook 180 graden draaien als ie aangeklikt wordt (uit>aan>uit>aan//
function switchAllImg() {
    if (staat === 0) {
        allImg.forEach(function (img) {
            switchImgsOn(img);
        });
        lightSwitch.style.transform = "rotate(180deg)";
        staat = 1;
        
    } else {
        allImg.forEach(function (img) {
            switchImgsOff(img);
        });
        lightSwitch.style.transform = "rotate(0deg)";
        staat = 0;
    }
}

//Hier dus zeggen we dat ie "switch" on-click//
allImg.forEach(function (element) {
    element.addEventListener("click", function () {switchOneImg(element); });
});

lightSwitch.addEventListener("click", function () { switchAllImg(); }); 
            
            
            
