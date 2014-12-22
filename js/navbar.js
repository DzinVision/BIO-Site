if (window.innerWidth < 995) {
    document.getElementById("jsNavigation").setAttribute("align", "center");
    document.getElementById("jsNavigation").setAttribute("style", "margin-left: 0.8em;");
    document.getElementById("jsNavigation").innerHTML += "<br>";
    document.getElementById("jsNavigation2").setAttribute("style", "");
} else {
    document.getElementById("jsNavigation").setAttribute("style", "position: fixed;");
}