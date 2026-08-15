function showMenu() {

    var app = document.getElementById("app");

    app.innerHTML =
    '<div class="menu page">' +

        '<img class="logo" src="images/sprout.png">' +

        '<img class="watch-button" ' +
        'src="images/TV.png" ' +
        'onclick="openPlayer();">' +

    '</div>';

    setTimeout(function () {
        var menu = document.getElementsByClassName("menu")[0];

        if (menu) {
            menu.className = "menu page fade-in";
        }

    }, 20);
}


function openPlayer() {

    var app = document.getElementById("app");

    var streamURL =
    "https://app.viloud.tv/hls/channel/5e8820aab90d2a5f3f2cf78848b7814d.m3u8";


    app.innerHTML =
    '<div class="player-page page">' +

        '<div class="ticker">' +
            '<span>' +
            'ReSprout Live • Welcome to ReSprout • Guide system coming soon' +
            '</span>' +
        '</div>' +

        '<div class="video-box">' +
            '<video id="sproutVideo" ' +
            'controls ' +
            'autoplay ' +
            'playsinline ' +
            'width="100%">' +
            '</video>' +
        '</div>' +

    '</div>';


    var video = document.getElementById("sproutVideo");

    if (video) {

        video.src = streamURL;

        video.load();

        video.play();

    }


    setTimeout(function () {

        var player = document.getElementsByClassName("player-page")[0];

        if (player) {
            player.className = "player-page page fade-in";
        }

    }, 20);

}
