window.onload = () => {
  let canvas = document.getElementById("canvas")

  let ctx = canvas.getContext("2d")

  let player = new Image();
  player.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/player-removebg-preview.png";

  let police = new Image()
  police.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/policecar.png";

  let numbersOneToTen = ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix']

  let pickRandom = (listOfWords) => {
    return listOfWords[Math.floor(Math.random() * listOfWords.length)]
  }

  let pickRandomPositionX = () => {
    let randomX = Math.floor(Math.random() * 900)
    if (randomX < 10) 
    randomX += 10
    else if (randomX > 870) 
    randomX -= 10
    return randomX
  }

  let pickRandomPositionY = () => {
    let randomY = Math.floor(Math.random() * 450)
    if (randomY < 30) 
    randomY += 30
    else if (randomY > 420) 
    randomY -= 30
    return randomY
  }

  let numberOneImg = new Image();
  numberOneImg.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/un.png"

  let numberTwoImg = new Image();
  numberTwoImg.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/deux.jpg"

  let numberThreeImg = new Image();
  numberThreeImg.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/trois.jpg"

  let numberFourImg = new Image();
  numberFourImg.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/quatre.jpg"

  let numberFiveImg = new Image();
  numberFiveImg.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/cinq.jpg"

  let numberSixImg = new Image();
  numberSixImg.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/six.jpg"

  let numberSevenImg = new Image();
  numberSevenImg.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/sept.jpg"

  let numberEightImg = new Image();
  numberEightImg.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/huit.jpg"

  let numberNineImg = new Image();
  numberNineImg.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/neuf.jpg"

  let numberTenImg = new Image();
  numberTenImg.src = "/Users/laurence.rega/Documents/Laurence/ironhack/project1-game/images/dix.jpg"

  let gameStarted = false

  document.getElementById('start-numbers').onclick = () => {
    if (!gameStarted) {
      startGame();
      gameStarted = true
    }    
  };

  let numbersObjArray = [{
    x: pickRandomPositionX(),
    y: pickRandomPositionY(),
    width: 10,
    height: 30,
    number: "un",
    img: numberOneImg,
    found: false
  },
  {
    x: pickRandomPositionX(),
    y: pickRandomPositionY(),
    width: 10,
    height: 30,
    number: "deux",
    img: numberTwoImg,
    found: false
  },
  {
    x: pickRandomPositionX(),
    y: pickRandomPositionY(),
    width: 10,
    height: 30,
    number: "trois",
    img: numberThreeImg,
    found: false
  },
  {
    x: pickRandomPositionX(),
    y: pickRandomPositionY(),
    width: 10,
    height: 30,
    number: "quatre",
    img: numberFourImg,
    found: false
  },
  {
    x: pickRandomPositionX(),
    y: pickRandomPositionY(),
    width: 10,
    height: 30,
    number: "cinq",
    img: numberFiveImg,
    found: false
  },
  {
    x: pickRandomPositionX(),
    y: pickRandomPositionY(),
    width: 10,
    height: 30,
    number: "six",
    img: numberSixImg,
    found: false
  },
  {
    x: pickRandomPositionX(),
    y: pickRandomPositionY(),
    width: 10,
    height: 30,
    number: "sept",
    img: numberSevenImg,
    found: false
  },
  {
    x: pickRandomPositionX(),
    y: pickRandomPositionY(),
    width: 10,
    height: 30,
    number: "huit",
    img: numberEightImg,
    found: false
  },
  {
    x: pickRandomPositionX(),
    y: pickRandomPositionY(),
    width: 10,
    height: 30,
    number: "neuf",
    img: numberNineImg,
    found: false
  },
  {
    x: pickRandomPositionX(),
    y: pickRandomPositionY(),
    width: 10,
    height: 30,
    number: "dix",
    img: numberTenImg,
    found: false
  }]

  let playerObj = {
    x: 225,
    y: 300,
    width: 50,
    height: 40,
    lives: 5,
    score: 0
  }

  let policeObj = {
    x: 0,
    y: 0,
    width: 45,
    height: 40,
    speedX: 2,
    speedY: 2
  }

  let intersect = (obj1, obj2) => {
    var obj1left = obj1.x;
    var obj1top = obj1.y;
    var obj1right = obj1.x + obj1.width/1.9;
    var obj1bottom = obj1.y + obj1.height/1.9;
    var obj2left = obj2.x;
    var obj2top = obj2.y;
    var obj2right = obj2.x + obj2.width/1.9;
    var obj2bottom = obj2.y + obj2.height/1.9;
    return !(
      obj1left > obj2right ||
      obj1top > obj2bottom ||
      obj1right < obj2left ||
      obj1bottom < obj2top
    );
  }

  function startGame() {
    let draw = () => {
      ctx.clearRect(0, 0, 900, 450)
      for (let i = 0; i < numbersObjArray.length; i++) {
        ctx.drawImage(numbersObjArray[i].img, numbersObjArray[i].x, numbersObjArray[i].y, numbersObjArray[i].width, numbersObjArray[i].height)
      }

      ctx.drawImage(player, playerObj.x, playerObj.y, playerObj.width, playerObj.height)
      ctx.drawImage(police, policeObj.x, policeObj.y, policeObj.width, policeObj.height)

      if (policeObj.x + policeObj.width >= 900) {
        policeObj.speedX = -3
      }
      if (policeObj.x + policeObj.width <= 0 + policeObj.width) {
        policeObj.speedX = 3
      }
      policeObj.x += policeObj.speedX;
      if (policeObj.y + policeObj.height >= 450) {
        policeObj.speedY = -3
      }
      if (policeObj.y + policeObj.height <= 0 + policeObj.height) {
        policeObj.speedY = 3
      }
      policeObj.y += policeObj.speedY;

      for (let i = 0; i < numbersObjArray.length; i++) {
        if (intersect(playerObj, numbersObjArray[i]) === true
          && document.querySelector('#word-to-catch').innerText === numbersObjArray[i].number) {
            console.log("true")
          playerObj.score += 1
          //numbersObjArray[i].width = 0
          //numbersObjArray[i].height = 0
          numbersObjArray[i].found = true
          // console.log(numbersObjArray[i])
          numbersObjArray.splice(i, 1);
          document.querySelector('#word-to-catch').innerText = pickRandom(numbersObjArray).number
          console.log(numbersObjArray)
        }
        else if (intersect(playerObj, numbersObjArray[i]) === true
        && document.querySelector('#word-to-catch').innerText !== numbersObjArray[i].number) {
          console.log("false")
        playerObj.score -= 1
        alert('Wrong number. Please try harder!')
        playerObj.x = 0
        playerObj.y = 0
        }
        
      }

      if (numbersObjArray.length === 0) {
        alert('Bravo! You won.')
        ctx.clearRect(0, 0, 900, 450)
        location.reload()
        numbersObjArray = [{
          x: pickRandomPositionX(),
          y: Math.floor(Math.random() * 450),
          width: 10,
          height: 30,
          number: "un",
          img: numberOneImg,
          found: false
        },
        {
          x: pickRandomPositionX(),
          y: Math.floor(Math.random() * 450),
          width: 10,
          height: 30,
          number: "deux",
          img: numberTwoImg,
          found: false
        },
        {
          x: pickRandomPositionX(),
          y: Math.floor(Math.random() * 450),
          width: 10,
          height: 30,
          number: "trois",
          img: numberThreeImg,
          found: false
        },
        {
          x: pickRandomPositionX(),
          y: Math.floor(Math.random() * 450),
          width: 10,
          height: 30,
          number: "quatre",
          img: numberFourImg,
          found: false
        },
        {
          x: pickRandomPositionX(),
          y: Math.floor(Math.random() * 450),
          width: 10,
          height: 30,
          number: "cinq",
          img: numberFiveImg,
          found: false
        },
        {
          x: pickRandomPositionX(),
          y: Math.floor(Math.random() * 450),
          width: 10,
          height: 30,
          number: "six",
          img: numberSixImg,
          found: false
        },
        {
          x: pickRandomPositionX(),
          y: Math.floor(Math.random() * 450),
          width: 10,
          height: 30,
          number: "sept",
          img: numberSevenImg,
          found: false
        },
        {
          x: pickRandomPositionX(),
          y: Math.floor(Math.random() * 450),
          width: 10,
          height: 30,
          number: "huit",
          img: numberEightImg,
          found: false
        },
        {
          x: pickRandomPositionX(),
          y: Math.floor(Math.random() * 450),
          width: 10,
          height: 30,
          number: "neuf",
          img: numberNineImg,
          found: false
        },
        {
          x: pickRandomPositionX(),
          y: Math.floor(Math.random() * 450),
          width: 10,
          height: 30,
          number: "dix",
          img: numberTenImg,
          found: false
        }]
      
        let playerObj = {
          x: 225,
          y: 300,
          width: 50,
          height: 40,
          lives: 5,
          score: 0
        }
      
        let policeObj = {
          x: 0,
          y: 0,
          width: 45,
          height: 40,
          speedX: 2,
          speedY: 2
        }
      }

     

      let doIntersectPolice = intersect(playerObj, policeObj)

      if (doIntersectPolice === true) {
        alert('You got caught. Be careful. Say "Je suis désolé" and keep on playing.')
        playerObj.x = 0
        playerObj.y = 0
        playerObj.lives -= 1
        console.log(playerObj.lives)
        if (playerObj.lives === 0) {
          alert('Game over. Adieu la France !')
          ctx.clearRect(0, 0, 900, 450)
          location.reload()
        }
      }

      document.querySelector('#lives').innerText = `${playerObj.lives}`
      document.querySelector('#score').innerText = `${playerObj.score}`
    }

    document.querySelector('#word-to-catch').innerText = pickRandom(numbersObjArray).number 

    setInterval(draw, 1000 / 60)


    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 39: //right arrow
          if (playerObj.x < 855) {
            playerObj.x += 30;
          }
          else playerObj.x
          break;
        case 37: // left arrow
          if (playerObj.x > 0) {
            playerObj.x -= 30;
          }
          break;
        case 38: // up arrow
          if (playerObj.y > 0) {
            playerObj.y -= 30;
          }
          break;
        case 40: // down arrow
          if (playerObj.y < 410) {
            playerObj.y += 30;
          }
          break;
      }
    })
  }
}
