//Date edited
const v2018 = "19/10/2020"
const v2019 = "20/07/2020"
const v2020 = "03/11/2020 19:12"
const v2021 = "02/10/2021 22:00"

// Json Object in Local storage
if (localStorage.getItem("ARG") === null) {
    var ARGS = {
        2018: "",
        2019: "",
        2020: "",
        2021: ""
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
            document.getElementById("ARG2018").style.display = "none";
        }
        if (VisitedARGs[2019] == v2019) {
            document.getElementById("ARG2019").style.display = "none";
        }
        if (VisitedARGs[2020] == v2020) {
            document.getElementById("ARG2020").style.display = "none";
        }
        if (VisitedARGs[2021] == v2021) {
            document.getElementById("ARG2021").style.display = "none";
        }
    }
});

function Visit(id){
    VisitedARGs[eval(`${id}`)] = eval(`v${id}`);
    localStorage.setItem("ARG", JSON.stringify(VisitedARGs));
    window.location.href = `../ARGS/DarkHarvest${id}.html`
}

function Updated() {
    var dateArray = [v2018, v2019, v2020, v2021]
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
