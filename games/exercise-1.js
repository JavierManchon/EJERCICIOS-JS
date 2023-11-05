let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];

  const container$$ = document.querySelector(".b-grid");
  const attempts$$ = document.querySelector('[data-function = "attempts"]');
  const score$$ = document.querySelector('[data-function = "score"]');
  let score = 0;
  let attempts = 0;
  let okList = [];

  for (let card of cardArray) {
    let img$$ = document.createElement("img");
    img$$.setAttribute("data-name", card.name);
    img$$.setAttribute("data-id", card.id);
    img$$.setAttribute("src", card.img);

    let item$$ = document.createElement("div");
    item$$.classList.add("item");
    item$$.appendChild(img$$);

    container$$.appendChild(item$$);

    img$$.classList.add("hidden");

    item$$.addEventListener("click", showImg);

  }

  let firstImage$$ = null;
  let secondImage$$ = null;
  function showImg() {
    imgSelected = this.querySelector("img");
    imgSelected.classList.remove("hidden");
    if(!okList.includes(imgSelected.getAttribute("data-id"))){
        if(firstImage$$ === null || firstImage$$.getAttribute("data-id") === imgSelected.getAttribute("data-id")) {
            firstImage$$ = imgSelected;
        } else {
            secondImage$$ = imgSelected;
            attempts++;
            attempts$$.textContent = attempts;
            checkImage();
        }
    }
  }

  function checkImage() {
    if (secondImage$$ !== null && firstImage$$ !== null) {
        if (firstImage$$.getAttribute("data-name") !== secondImage$$.getAttribute("data-name")) {
            setTimeout(function() {
            firstImage$$.classList.add("hidden");
            secondImage$$.classList.add("hidden");
            firstImage$$ = null;
            }, 500);
        } else {
            score++;
            score$$.textContent = score;
            setTimeout(function() {
            firstImage$$.setAttribute("src", "public/exercise-1/tick.svg");
            secondImage$$.setAttribute("src", "public/exercise-1/tick.svg");
            okList.push(firstImage$$.getAttribute("data-id"));
            okList.push(secondImage$$.getAttribute("data-id"));
            firstImage$$ = null;
            }, 500);
            setTimeout(function() {
                if (okList.length === cardArray.length) {
                    alert("Has ganado el juego");
                }
            }, 550);
        }
    }
  }

  