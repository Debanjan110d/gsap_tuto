var initialPath = "M 10 100 Q 500 10 990 100";

var finalPath = "M 10 100 Q 500 190 990 100";


var string = document.querySelector("#string")


string.addEventListener("mouseenter", function (dets) {
    console.log(dets);
})

string.addEventListener("mouseleave", function () {
    console.log("left");
})