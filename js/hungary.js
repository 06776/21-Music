const music = new Audio("audio-mp3/31.mp3");
// music.play();

const songs = [
  {
    id: "31",
    songName: `A csúcson túl <br />
        <div class="subtitle">Majka, Curtis, Nika</div>`,
    poster: "img/31.png",
  },
  {
    id: "32",
    songName: `A hold dala <br />
        <div class="subtitle">Lotfi Begi, Náksi, Ámokfutók, DR BRS</div>`,
    poster: "img/32.png",
  },
  {
    id: "33",
    songName: `A múltunk nem felejt <br />
        <div class="subtitle">Compact Disco</div>`,
    poster: "img/33.png",
  },
  {
    id: "34",
    songName: `Angyal <br />
        <div class="subtitle">Burai, Misshmusic, Discoshit</div>`,
    poster: "img/34.png",
  },
  {
    id: "35",
    songName: `Bánat utca <br />
        <div class="subtitle">Lotfi Begi, Zsaya</div>`,
    poster: "img/35.png",
  },
  {
    id: "36",
    songName: `Bolond szívem <br />
        <div class="subtitle">Dred</div>`,
    poster: "img/36.png",
  },
  {
    id: "37",
    songName: `Csak a szívemet dobom eléd <br />
        <div class="subtitle">Zséda</div>`,
    poster: "img/37.png",
  },
  {
    id: "38",
    songName: `Csakazértis Szerelem <br />
        <div class="subtitle">Dallos Bogi, Freddie</div>`,
    poster: "img/38.png",
  },
  {
    id: "39",
    songName: `Csillagkép <br />
        <div class="subtitle">Pál Dénes, Lotfi Begi</div>`,
    poster: "img/39.png",
  },
  {
    id: "40",
    songName: `Electrical <br />
        <div class="subtitle">YOULÏ</div>`,
    poster: "img/40.png",
  },
  {
    id: "41",
    songName: `Engedd el <br />
        <div class="subtitle">Compact Disco</div>`,
    poster: "img/41.png",
  },
  {
    id: "42",
    songName: `Éjfél Után <br />
        <div class="subtitle">HoneyBeast</div>`,
    poster: "img/42.png",
  },
  {
    id: "43",
    songName: `Életben maradni <br />
        <div class="subtitle">Zséda</div>`,
    poster: "img/43.png",
  },
  {
    id: "44",
    songName: `Falevél <br />
        <div class="subtitle">Zareh Kan, Solange</div>`,
    poster: "img/44.png",
  },
  {
    id: "45",
    songName: `Felhők alatt <br />
        <div class="subtitle">New Level Empire, Draft</div>`,
    poster: "img/45.png",
  },
  {
    id: "46",
    songName: `Gyémánt <br />
        <div class="subtitle">Swing à la Django, Lotfi Begi, Tarján Zsófi, Curtis</div>`,
    poster: "img/46.png",
  },
  {
    id: "47",
    songName: `Hozzád <br />
        <div class="subtitle">Bakos Betti, PRIBELSZKI</div>`,
    poster: "img/47.png",
  },
  {
    id: "48",
    songName: `Indulj el <br />
        <div class="subtitle">Szakács Gergő</div>`,
    poster: "img/48.png",
  },
  {
    id: "49",
    songName: `Indulj hát <br />
        <div class="subtitle">Pápai Joci</div>`,
    poster: "img/49.png",
  },
  {
    id: "50",
    songName: `Kell egy ház <br />
        <div class="subtitle">Irie Maffia</div>`,
    poster: "img/50.png",
  },
  {
    id: "51",
    songName: `Kétszázhúsz felett <br />
        <div class="subtitle">Dred, Doris</div>`,
    poster: "img/51.png",
  },
  {
    id: "52",
    songName: `Kicsit őrült <br />
        <div class="subtitle">Pápai Joci, Lotfi Begi</div>`,
    poster: "img/52.png",
  },
  {
    id: "53",
    songName: `Ki visz haza <br />
        <div class="subtitle">Amigod, Quixotic</div>`,
    poster: "img/53.png",
  },
  {
    id: "54",
    songName: `Kinek játszod magad <br />
        <div class="subtitle">Dj Szatmári, Jucus, Phat Beat</div>`,
    poster: "img/54.png",
  },
  {
    id: "55",
    songName: `Közel <br />
        <div class="subtitle">Compact Disco</div>`,
    poster: "img/55.png",
  },
  {
    id: "56",
    songName: `Közeli helyeken <br />
        <div class="subtitle">Amigod, Quixotic</div>`,
    poster: "img/56.png",
  },
  {
    id: "57",
    songName: `Lazul a város <br />
        <div class="subtitle">Compact Disco</div>`,
    poster: "img/57.png",
  },
  {
    id: "58",
    songName: `Légyszi <br />
        <div class="subtitle">Erkoben</div>`,
    poster: "img/58.png",
  },
  {
    id: "59",
    songName: `Lélegzem <br />
        <div class="subtitle">Burai, Lotfi Begi</div>`,
    poster: "img/59.png",
  },
  {
    id: "60",
    songName: `Megbántam <br />
        <div class="subtitle">DÁNIELFY, Lotfi Begi, Rácz Gergő</div>`,
    poster: "img/60.png",
  },
  {
    id: "61",
    songName: `Melodráma <br />
        <div class="subtitle">kristoaf, Lil Frakk, Hundred Sins</div>`,
    poster: "img/61.png",
  },
  {
    id: "62",
    songName: `Menj tovább <br />
        <div class="subtitle">Pádár Alexandra</div>`,
    poster: "img/62.png",
  },
  {
    id: "63",
    songName: `Még sohasem <br />
        <div class="subtitle">Rony</div>`,
    poster: "img/63.png",
  },
  {
    id: "64",
    songName: `Nekem jó <br />
        <div class="subtitle">Horváth Tamás</div>`,
    poster: "img/64.png",
  },
  {
    id: "65",
    songName: `Noé <br />
        <div class="subtitle">Geszti Péter, Káté, Franky, Erik Ray</div>`,
    poster: "img/65.png",
  },
  {
    id: "66",
    songName: `November <br />
        <div class="subtitle">Nox</div>`,
    poster: "img/66.png",
  },
  {
    id: "67",
    songName: `Osztálytalálkozó <br />
        <div class="subtitle">Carson Coma</div>`,
    poster: "img/67.png",
  },
  {
    id: "68",
    songName: `Oye <br />
        <div class="subtitle">Hundred Sins, Azahriah</div>`,
    poster: "img/68.png",
  },
  {
    id: "69",
    songName: `Úristen <br />
        <div class="subtitle">VALMAR, Szikora Róbert</div>`,
    poster: "img/69.png",
  },
  {
    id: "70",
    songName: `Szembeszél <br />
        <div class="subtitle">Rúzsa Magdolna</div>`,
    poster: "img/70.png",
  },

  {
    id: "71",
    songName: `Régi nyár <br />
        <div class="subtitle">Lotfi Begi, Kollányi Zsuzsi, DR BRS</div>`,
    poster: "img/71.png",
  },
  {
    id: "72",
    songName: `Sunglasses <br />
        <div class="subtitle">Discoshit</div>`,
    poster: "img/72.png",
  },
  {
    id: "73",
    songName: `Te csak így vagy jó <br />
        <div class="subtitle">New Level Empire, Wolf Kati, Horváth Boldi</div>`,
    poster: "img/73.png",
  },
  {
    id: "74",
    songName: `Újra <br />
        <div class="subtitle">Molnár Ferenc Caramel</div>`,
    poster: "img/74.png",
  },
  {
    id: "75",
    songName: `Üres Szívek 2 <br />
        <div class="subtitle">Nemazalány, Sofi, Lotfi Begi</div>`,
    poster: "img/75.png",
  },
  {
    id: "76",
    songName: `Visszavágyom <br />
        <div class="subtitle">Molnár Ferenc Caramel, Willcox</div>`,
    poster: "img/76.png",
  },
  {
    id: "77",
    songName: `Megszakad <br />
        <div class="subtitle">Horváth Tamás</div>`,
    poster: "img/77.png",
  },
  {
    id: "78",
    songName: `Násztánc <br />
        <div class="subtitle">DÁNIELFY</div>`,
    poster: "img/78.png",
  },
  {
    id: "79",
    songName: `Szétszeretlek <br />
        <div class="subtitle">Halott Pénz, Oláh Heléna</div>`,
    poster: "img/79.png",
  },
  {
    id: "80",
    songName: `Vigyázz rám angyal <br />
        <div class="subtitle">Ámokfutók</div>`,
    poster: "img/80.png",
  },
  {
    id: "81",
    songName: `Elmegyek <br />
        <div class="subtitle">Rúzsa Magdolna</div>`,
    poster: "img/81.png",
  },
  {
    id: "82",
    songName: `Van az úgy <br />
        <div class="subtitle">Compact Disco</div>`,
    poster: "img/82.png",
  },
  {
    id: "83",
    songName: `Te csak játszol velem <br />
        <div class="subtitle">Josh, Betti, Dj Szatmári</div>`,
    poster: "img/83.png",
  },
  {
    id: "84",
    songName: `Te meg én <br />
        <div class="subtitle">Compact Disco</div>`,
    poster: "img/84.png",
  },
  {
    id: "85",
    songName: `Promise <br />
        <div class="subtitle">Tolvai Reni, DJ Metzker Viktória, No!End</div>`,
    poster: "img/85.png",
  },
  {
    id: "86",
    songName: `Rövid éj <br />
        <div class="subtitle">VALMAR</div>`,
    poster: "img/86.png",
  },
  {
    id: "87",
    songName: `Táncolj ma <br />
        <div class="subtitle">Kiss Kevin</div>`,
    poster: "img/87.png",
  },
  {
    id: "88",
    songName: `Színvak <br />
        <div class="subtitle">VALMAR</div>`,
    poster: "img/88.png",
  },
  {
    id: "89",
    songName: `Szabadon <br />
        <div class="subtitle">MYNEA, Curtis, Sofi</div>`,
    poster: "img/89.png",
  },
  {
    id: "90",
    songName: `Pezsgőeső <br />
        <div class="subtitle">Wellhello, VALMAR</div>`,
    poster: "img/90.png",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

// search data start
let search_results = document.getElementsByClassName("search_results")[0];

songs.forEach((element) => {
  const { id, songName, poster } = element;
  // console.log(poster);
  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;
  card.innerHTML = `
<img src="${poster}" alt="">
              <div class="content">
                ${songName}
              </div>
  `;
  search_results.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];

input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase();
  let items = search_results.getElementsByTagName("a");

  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("content")[0];
    let text_value = as.textContent || as.innerHTML;

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }

    if (input_value == 0) {
      search_results.style.display = "none";
    } else {
      search_results.style.display = "";
    }
  }
});

// search data end

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-circle-fill");
    masterPlay.classList.remove("bi-pause-circle-fill");
  }
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-fill");
    el.classList.remove("bi-pause-fill");
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `audio-mp3/${index}.mp3`;
    poster_master_play.src = `img/${index}.png`;
    music.play();
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });

    makeAllplays();
    el.target.classList.remove("bi-play-fill");
    el.target.classList.add("bi-pause-fill");
    wave.classList.add("active1");
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  // console.log(min1);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  // console.log(seek.value);

  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `audio-mp3/${index}.mp3`;
  poster_master_play.src = `img/${index}.png`;
  music.play();
  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllplays();
  el.target.classList.remove("bi-play-fill");
  el.target.classList.add("bi-pause-fill");
  wave.classList.add("active1");
});

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index + 1;
  }
  music.src = `audio-mp3/${index}.mp3`;
  poster_master_play.src = `img/${index}.png`;
  music.play();
  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllplays();
  el.target.classList.remove("bi-play-fill");
  el.target.classList.add("bi-pause-fill");
  wave.classList.add("active1");
});

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 220;
});

pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 220;
});

let shuffle = document.getElementsByClassName("shuffle")[0];

shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;

  switch (a) {
    case "next":
      shuffle.classList.add("bi-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";
      break;

    case "repeat":
      shuffle.classList.remove("bi-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "random";
      break;

    case "random":
      shuffle.classList.remove("bi-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next";
      break;
  }
});

const next_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `audio-mp3/${index}.mp3`;
  poster_master_play.src = `img/${index}.png`;
  music.play();
  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllplays();
  el.target.classList.remove("bi-play-fill");
  el.target.classList.add("bi-pause-fill");
  wave.classList.add("active1");
};

const repeat_music = () => {
  index;
  music.src = `audio-mp3/${index}.mp3`;
  poster_master_play.src = `img/${index}.png`;
  music.play();
  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllplays();
  el.target.classList.remove("bi-play-fill");
  el.target.classList.add("bi-pause-fill");
  wave.classList.add("active1");
};

const random_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length + 1);
  }
  music.src = `audio-mp3/${index}.mp3`;
  poster_master_play.src = `img/${index}.png`;
  music.play();
  masterPlay.classList.remove("bi-play-circle-fill");
  masterPlay.classList.add("bi-pause-circle-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllplays();
  el.target.classList.remove("bi-play-fill");
  el.target.classList.add("bi-pause-fill");
  wave.classList.add("active1");
};

music.addEventListener("ended", () => {
  let b = shuffle.innerHTML;

  switch (b) {
    case "repeat":
      repeat_music();
      break;
    case "next":
      next_music();
      break;
    case "random":
      random_music();
      break;
  }
});
