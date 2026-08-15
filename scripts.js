function showMenu() {

    var app = document.getElementById("app");

    app.innerHTML =
    '<div class="menu page">' +

        '<img class="logo" src="images/sprout.png">' +

        '<img class="watch-button" ' +
        'src="images/TV.png" ' +
        'onclick="openPlayer();">' +

    '</div>';

    setTimeout(function(){
        document.getElementsByClassName("menu")[0].className =
        "menu page fade-in";
    },20);
}


function openPlayer() {

    var app = document.getElementById("app");

    app.innerHTML =
    '<div class="player-page page">' +

        '<div class="ticker">' +
            '<span>ReSprout Live • Guide system coming soon • Enjoy the channel</span>' +
        '</div>' +

        '<div class="video-box">' +
            '<video controls autoplay>' +
                '<source src="TV.m3u8" type="application/x-mpegURL">' +
            '</video>' +
        '</div>' +

    '</div>';

    setTimeout(function(){
        document.getElementsByClassName("player-page")[0].className =
        "player-page page fade-in";
    },20);
}
