import { currentTimeZone } from "./calendar";

const getTimeOfDay = (currentTimeZone) => {
  return currentTimeZone == 0
    ? "night"
    : currentTimeZone == 1
    ? "morning"
    : currentTimeZone == 2
    ? "afternoon"
    : "evening";
};

let body = document.querySelector("body");
let slideNext = document.querySelector(".slide-next");
let slidePrev = document.querySelector(".slide-prev");
const fotoStacks = document.querySelectorAll("input[name='foto']");

let dinamicUrl;
let dinamicId;

let getRundomNum = () => {
  return Math.ceil(Math.random() * 20);
};

let randomNum = getRundomNum();

function setBg(timeOfDay, bgNum, id = "git", url) {
  let sourse;
  let bgNumber = String(bgNum).padStart(2, "0");
  if (id == "git") {
    sourse = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNumber}.jpg`;
  } else if (id == "unspl") {
    sourse = url;
  } else if (id == "flick") {
    sourse = url;
  }

  const img = new Image();
  img.src = `${sourse}`;
  img.addEventListener("load", () => {
    body.style.backgroundImage = `url('${sourse}')`;
    // body.addEventListener("transitionend", function () {

    // });
  });
  setTimeout(function () {
    slideNext.disabled = false;
    slidePrev.disabled = false;
  }, 1000);
}

function getSlideNext(id, time) {
  slideNext.disabled = true;
  randomNum++;

  if (randomNum > 20) randomNum = 1;

  if (id == "unspl") {
    getLinkToImageUnsplash(id, time);
    return;
  } else if (id == "flick") {
    getLinkToImageFlickr(id, time);
    return;
  }
  setBg(time, randomNum, dinamicId, dinamicUrl);
}

function getSlidePrev(id, time) {
  slidePrev.disabled = true;
  randomNum--;
  if (randomNum < 1) randomNum = 20;

  if (id == "unspl") {
    getLinkToImageUnsplash(id, time);
    return;
  } else if (id == "flick") {
    getLinkToImageFlickr(id, time);
    return;
  }
  setBg(getTimeOfDay(currentTimeZone), randomNum, dinamicId, dinamicUrl);
}

slideNext.addEventListener("click", function () {
  if (!slideNext.disabled) {
    getSlideNext(dinamicId, getTimeOfDay(currentTimeZone));
  }
});
slidePrev.addEventListener("click", function () {
  if (!slidePrev.disabled) {
    getSlidePrev(dinamicId, getTimeOfDay(currentTimeZone));
  }
});

setBg(getTimeOfDay(currentTimeZone), randomNum);

let selectStack;

fotoStacks.forEach((item) => {
  if (item.checked) {
    selectStack = item.id;
  }
});

fotoStacks.forEach((item) => {
  item.addEventListener("change", function () {
    if (this.id == "git") {
      dinamicId = this.id;
      setBg(getTimeOfDay(currentTimeZone), randomNum, dinamicId);
    } else if (this.id == "unspl") {
      dinamicId = this.id;
      getLinkToImageUnsplash(dinamicId, getTimeOfDay(currentTimeZone));
    } else if (this.id == "flick") {
      dinamicId = this.id;
      getLinkToImageFlickr(dinamicId, getTimeOfDay(currentTimeZone));
    }
  });
});

async function getLinkToImageUnsplash(id, time) {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${time}&client_id=gy1iVo2gyQUJrsG5heWiEn9fXVIvJjqUbG0Lc6Ed43Y`;
  const res = await fetch(url);
  const data = await res.json();
  dinamicUrl = data.urls.regular;
  setBg(time, randomNum, id, dinamicUrl);
}

async function getLinkToImageFlickr(id, time) {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e1c205a032712c88d65cd8f5b63fb482&tags=${time}&extras=url_h&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  dinamicUrl = data.photos.photo[randomNum].url_h;
  console.log(dinamicUrl);
  setBg(time, randomNum, id, dinamicUrl);
}

let id = localStorage.sourse;

if (id) document.getElementById(id).checked = true;

const setLocalStorage = (sourse) => {
  localStorage.setItem("sourse", sourse);
};

fotoStacks.forEach((item) => {
  item.addEventListener("click", function () {
    localStorage.sourse = this.id;
  });
});