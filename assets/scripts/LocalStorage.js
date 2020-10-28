//Date edited
const v2018 = "19/10/2020"
const v2019 = "20/07/2020"
const v2020 = "28/10/2020 21:39"

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
    LastUpdatedDate(event)
    if (event.target.location.pathname == "/") {
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

function LastUpdatedDate(event) {
    if (event.target.location.pathname != "/") {
        var updateDate = document.getElementById("date")
        var path = event.target.location.pathname;
        var pathSplice = path.substring(17, 21);
        var v = eval(`v${pathSplice}`);

        var day = v.toString().substring(0, 2);

        var m = v.substring(3, 5)
        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var year = v.toString().substring(6, 10)

        updateDate.innerHTML = `${day} ${month[m - 1]}. ${year}`
    }
}