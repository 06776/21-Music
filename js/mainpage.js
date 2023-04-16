const music = new Audio("audio-mp3/1.mp3");
// music.play();

const songs = [
  {
    id: "1",
    songName: `Substitution <br />
        <div class="subtitle">Purple Disco Machine, Kungs</div>`,
    poster: "img/1.png",
  },
  {
    id: "2",
    songName: `Say Say Say <br />
        <div class="subtitle">Kygo, Paul McCartney, Michael Jackson</div>`,
    poster: "img/2.png",
  },
  {
    id: "3",
    songName: `Waterfall <br />
        <div class="subtitle">Michael Schulte, R3HAB</div>`,
    poster: "img/3.png",
  },
  {
    id: "4",
    songName: `Rewind <br />
        <div class="subtitle">Loving Arms</div>`,
    poster: "img/4.png",
  },
  {
    id: "5",
    songName: `What If <br />
        <div class="subtitle">KERRIA, Amirchik</div>`,
    poster: "img/5.png",
  },
  {
    id: "6",
    songName: `Crying On The Dancefloor <br />
        <div class="subtitle">Sam Feldt, Jonas Blue, Endless Summer, Violet Days</div>`,
    poster: "img/6.png",
  },
  {
    id: "7",
    songName: `Do It Again <br />
        <div class="subtitle">Ray Dalton</div>`,
    poster: "img/7.png",
  },
  {
    id: "8",
    songName: `Háborgó Mélység 4 <br />
        <div class="subtitle">Lotfi Begi, Burai</div>`,
    poster: "img/8.png",
  },
  {
    id: "9",
    songName: `Run Till Dark <br />
        <div class="subtitle">R3HAB, Now United</div>`,
    poster: "img/9.png",
  },
  {
    id: "10",
    songName: `2 Be Loved (Am I Ready) <br />
        <div class="subtitle">Lizzo</div>`,
    poster: "img/10.png",
  },
  {
    id: "11",
    songName: `Sweet Goodbye <br />
        <div class="subtitle">Robin Schulz</div>`,
    poster: "img/11.png",
  },
  {
    id: "12",
    songName: `Drive <br />
        <div class="subtitle">Clean Bandit, Topic, Wes Nelson</div>`,
    poster: "img/12.png",
  },
  {
    id: "13",
    songName: `Memories <br />
        <div class="subtitle">Minelli</div>`,
    poster: "img/13.png",
  },
  {
    id: "14",
    songName: `Fénybenjárók <br />
        <div class="subtitle">Pápai Joci, KKevin</div>`,
    poster: "img/14.png",
  },
  {
    id: "15",
    songName: `Cold As Ice <br />
        <div class="subtitle">Ava Max</div>`,
    poster: "img/15.png",
  },
  {
    id: "16",
    songName: `Forget You <br />
        <div class="subtitle">FAST BOY, Topic</div>`,
    poster: "img/16.png",
  },
  {
    id: "17",
    songName: `Gravity <br />
        <div class="subtitle">twocolors, ÁSDÍS</div>`,
    poster: "img/17.png",
  },
  {
    id: "18",
    songName: `Heartbreak <br />
        <div class="subtitle">Lotfi Begi, Cecilia Gault</div>`,
    poster: "img/18.png",
  },
  {
    id: "19",
    songName: `Radio <br />
        <div class="subtitle">Sigala, MNEK</div>`,
    poster: "img/19.png",
  },
  {
    id: "20",
    songName: `All Or Nothing <br />
        <div class="subtitle">Topic, HRVY</div>`,
    poster: "img/20.png",
  },

  {
    id: "21",
    songName: `Prisoner <br />
        <div class="subtitle">Miley Cyrus, Dua Lipa</div>`,
    poster: "img/21.png",
  },
  {
    id: "22",
    songName: `10:35 <br />
        <div class="subtitle">Tiësto, Tate McRae</div>`,
    poster: "img/22.png",
  },
  {
    id: "23",
    songName: `Million Dollar Baby <br />
        <div class="subtitle">Ava Max</div>`,
    poster: "img/23.png",
  },
  {
    id: "24",
    songName: `What's Love Got to Do with It <br />
        <div class="subtitle">Kygo, Tina Turner</div>`,
    poster: "img/24.png",
  },
  {
    id: "25",
    songName: `Nirvana <br />
        <div class="subtitle">A7S</div>`,
    poster: "img/25.png",
  },
  {
    id: "26",
    songName: `Me Provocas <br />
        <div class="subtitle">Dynoro, Fumaratto</div>`,
    poster: "img/26.png",
  },
  {
    id: "27",
    songName: `Leave Before You Love Me <br />
        <div class="subtitle">Marshmello, Jonas Brothers</div>`,
    poster: "img/27.png",
  },
  {
    id: "28",
    songName: `Let It Rain Down <br />
        <div class="subtitle">Alle Farben, PollyAnna</div>`,
    poster: "img/28.png",
  },
  {
    id: "29",
    songName: `In The Dark <br />
        <div class="subtitle">Purple Disco Machine, Sophie and the Giants</div>`,
    poster: "img/29.png",
  },
  {
    id: "30",
    songName: `Cold Heart - PNAU Remix <br />
        <div class="subtitle">Elton John, Dua Lipa, PNAU</div>`,
    poster: "img/30.png",
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
    index = 1;
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
