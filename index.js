
function show() {
    document.getElementById("show").classList.toggle("active");
}

function openPage() {
    var y = document.getElementById("search").value;
    var x = y.toLowerCase();
    if(x !== ""){
        if (x === "kgf 2" || x === "kgf chapter 2") {
            window.open("downloadpage-kgf2.html");
        }
        else if (x === "spiderman noway home" || x === "spiderman no way home") {
            window.open("downloadpage-spidermannwh.html");
        }
        else if (x === "rrr") {
            window.open("downloadpage-rrr.html");
        }
        else if (x === "rocketry") {
            window.open("downloadpage-rocketry.html");
        }
        else if (x === "shamshera") {
            window.open("downloadpage-shamshera.html");
        }
        else if (x === "jug jug jeeyo" || x === "jug jug jiyo") {
            window.open("downloadpage-jjj.html");
        }
        else if (x === "anek") {
            window.open("downloadpage-anek.html");
        }
        else if (x === "war") {
            window.open("downloadpage-war.html");
        }
        else if (x === "bhool bhulaiya 2" || x === "bhool bhulaiyaa 2" || x === "bhool bhuliya 2") {
            window.open("downloadpage-bhoolbhulaiyaa.html");
        }
        else{
            window.open("error.html");
        }
    }
}