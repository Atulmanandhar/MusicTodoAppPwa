function runJS() {
  const titleEl = document.getElementById("songTitle");
  const artistEl = document.getElementById("artistName");
  const addSongBtnEl = document.getElementById("addSongBtn");
  const songListWrapperEl = document.getElementsByClassName("songsWrapper")[0];

  const errorTitleEl = document.getElementById("error-title");
  const errorArtistEl = document.getElementById("error-artist");

  addSongBtnEl.addEventListener("click", () => {
    if (!titleEl.value || !artistEl.value) {
      if (!titleEl.value) {
        errorTitleEl.classList.remove("hidden");
      } else {
        errorTitleEl.classList.add("hidden");
      }
      if (!artistEl.value) {
        errorArtistEl.classList.remove("hidden");
      } else {
        errorArtistEl.classList.add("hidden");
      }
      return;
    }

    errorTitleEl.classList.add("hidden");
    errorArtistEl.classList.add("hidden");

    const songItemEl = document.createElement("div");
    const songItemTitleEl = document.createElement("h4");
    const artistTitleEl = document.createElement("h5");
    songItemEl.classList = "song-item";
    songItemTitleEl.innerText = titleEl.value;
    artistTitleEl.innerText = artistEl.value;
    songItemEl.appendChild(songItemTitleEl);
    songItemEl.appendChild(artistTitleEl);
    songListWrapperEl.appendChild(songItemEl);
    titleEl.value = "";
    artistEl.value = "";
  });
}

function registerSW() {
  if ("serviceWorker" in navigator) {
    console.log("service worker available");
    navigator.serviceWorker
      .register("/service-worker.js", { scope: "/" })
      .then((registration) => {
        console.log("registered success", registration);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("not available");
  }
}

runJS();
registerSW();
