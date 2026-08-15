function openPlayer() {

    var menu = document.getElementById("menu");
    var player = document.getElementById("player");

    if (menu) {
        menu.style.display = "none";
    }


    if (player) {

        player.style.display = "block";

        player.className = "page-flip";

    }

}
