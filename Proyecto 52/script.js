function changeAdColor() {
    var ad = document.getElementById("ad_fill");
    var ad_img = document.getElementById("ad_img");
    var r1, r2, r3;
    for (i = 1; i < 4; i++) {
        if (i == 1) {
            r1 = random(0, 255);
        }
        else if (i == 2) {
            r2 = random(0, 255)
        }
        else {
            r3 = random(0, 255);
        }
    }
    var randColor = "rgb(" + r1 + "," + r2 + "," + r3 + ")";
    ad.setAttribute("style", "background-color: " + randColor + ";");
    var randColor = "rgb(" + (r1 / 2) + "," + (r2 / 2) + "," + (r3 / 2) + ")";
    ad_img.setAttribute("style", "color: " + randColor + ";");
}
function random(min, max) {
    return Math.round(Math.floor((Math.random() * max) + min));
}