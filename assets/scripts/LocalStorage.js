//Date edited
const v2018 = "20/07/2020"
const v2019 = "20/07/2020"
const v2020 = "16/10/2020"

// Json Object in Local storage
if (localStorage.getItem("ARG") === null) {
    var ARGS = {
        2018: "",
        2019: "",
        2020: ""
    };
    localStorage.setItem("ARG", JSON.stringify(ARGS));
    console.log("Created a new local storage item")
    var VisitedARGs = JSON.parse(localStorage.getItem("ARG"));
} else {
    var VisitedARGs = JSON.parse(localStorage.getItem("ARG"));
    console.log("Retrieved the localstorage")
}

window.addEventListener('load', (event) => {
    Updated();
    if (VisitedARGs[2018] == v2018) {
        document.getElementById("2018").style.display = "none";
    }
    if (VisitedARGs[2019] == v2019) {
        document.getElementById("2019").style.display = "none";
    }
    if (VisitedARGs[2020] == v2020) {
        document.getElementById("2020").style.display = "none";
    }
});

function Visited2018() {
    VisitedARGs[2018] = v2018
    localStorage.setItem("ARG", JSON.stringify(VisitedARGs));
}

function Visited2019() {
    VisitedARGs[2019] = v2019
    localStorage.setItem("ARG", JSON.stringify(VisitedARGs));
}

function Visited2020() {
    VisitedARGs[2020] = v2020
    localStorage.setItem("ARG", JSON.stringify(VisitedARGs));
}

function Updated() {
    var dateArray = [v2018, v2019, v2020]
    var updateMarkers = document.getElementsByClassName("updated");
    for (let i = 0; i < updateMarkers.length; i++) {
        updateMarkers[i].title = dateArray[i];
    }
}