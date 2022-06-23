function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("nav-span").style.display = "none";
    document.getElementById("background-changer").style.opacity = "0.5";
    document.getElementById("background-changer").style.zIndex = "2";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("nav-span").style.display = "block";
    document.getElementById("background-changer").style.opacity = "0";
    document.getElementById("background-changer").style.zIndex = "-1";
}