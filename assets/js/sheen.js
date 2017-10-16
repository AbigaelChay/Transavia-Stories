var counter = 0;
function rotate(afbeelding) {
    "use strict";
    if (counter === 360) {
        counter = 0;
    }
    if (counter === 270 || counter === 90) {
        afbeelding.style.height = "100vw";
    } else {
        afbeelding.style.height = "auto";
    }
    afbeelding.style.transform = "rotate(" + counter + "deg)";
    counter += 90;
}

document.querySelector("main img").addEventListener("click", function () {
    "use strict";
    rotate(this);
});

