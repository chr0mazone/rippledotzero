window.RufflePlayer = window.RufflePlayer || {};

window.addEventListener("DOMContentLoaded", () => {
  const ruffle = window.RufflePlayer.newest();
  const player = ruffle.createPlayer();

  player.config = {
    autoplay: "on",
    muted: false,

    scale: "showall",
    letterbox: "on",
    forceScale: false,
    forceAlign: false,

    // splashScreen: false,
    // allowFullscreen: false
  };

  const container = document.getElementById("flash");
  container.appendChild(player);

  player.style.width = "100%";
  player.style.height = "100%";

  player.load("./rdz/rippledotzero.swf");
});
