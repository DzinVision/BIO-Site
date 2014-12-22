if (window.innerWidth < 995) {
    document.getElementById("jsNavigation").setAttribute("align", "center");
    document.getElementById("jsNavigation").setAttribute("style", "");
    document.getElementById("jsNavigation").innerHTML += "<br>";
} else {
    document.getElementById("jsNavigation").setAttribute("style", "position: fixed;");
}