window.onload = () => {
  let canvas = document.getElementById("canvas")
  let ctx = canvas.getContext("2d")

  // the function that will give random positions to the images
  let pickRandomPositionX = () => {
    let randomX = Math.floor(Math.random() * 900)
    if (randomX < 10)
      randomX += 20
    else if (randomX > 870)
      randomX -= 20
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

  // all images 
  let player = new Image();
  player.src = "./images/player-removebg-preview.png";
  let police = new Image()
  police.src = "./images/policecar.png";

  let numberOneImg = new Image();
  numberOneImg.src = "./images/un.png"
  let numberTwoImg = new Image();
  numberTwoImg.src = "./images/deux.jpg"
  let numberThreeImg = new Image();
  numberThreeImg.src = "./images/trois.jpg"
  let numberFourImg = new Image();
  numberFourImg.src = "./images/quatre.jpg"
  let numberFiveImg = new Image();
  numberFiveImg.src = "./images/cinq.jpg"
  let numberSixImg = new Image();
  numberSixImg.src = "./images/six.jpg"
  let numberSevenImg = new Image();
  numberSevenImg.src = "./images/sept.jpg"
  let numberEightImg = new Image();
  numberEightImg.src = "./images/huit.jpg"
  let numberNineImg = new Image();
  numberNineImg.src = "./images/neuf.jpg"
  let numberTenImg = new Image();
  numberTenImg.src = "./images/dix.jpg"

  let pommeImg = new Image();
  pommeImg.src = "./images/pomme-removebg-preview.png"
  let poireImg = new Image();
  poireImg.src = "./images/poire-removebg-preview.png"
  let orangeImg = new Image();
  orangeImg.src = "./images/orange-removebg-preview.png"
  let bananeImg = new Image();
  bananeImg.src = "./images/banane-removebg-preview.png"
  let ceriseImg = new Image();
  ceriseImg.src = "./images/cerises-removebg-preview.png"
  let citronImg = new Image();
  citronImg.src = "./images/citron-removebg-preview.png"
  let fraiseImg = new Image();
  fraiseImg.src = "./images/fraise-removebg-preview.png"
  let pastequeImg = new Image();
  pastequeImg.src = "./images/pasteque-removebg-preview.png"
  let pruneImg = new Image();
  pruneImg.src = "./images/prune-removebg-preview.png"
  let raisinsImg = new Image();
  raisinsImg.src = "./images/raisins-removebg-preview.png"

  let aneImg = new Image();
  aneImg.src = "./images/ane-removebg-preview.png"
  let canardImg = new Image();
  canardImg.src = "./images/canard-removebg-preview.png"
  let chevalImg = new Image();
  chevalImg.src = "./images/cheval-removebg-preview.png"
  let chienImg = new Image();
  chienImg.src = "./images/chien-removebg-preview.png"
  let cochonImg = new Image();
  cochonImg.src = "./images/cochon-removebg-preview.png"
  let lapinImg = new Image();
  lapinImg.src = "./images/lapin-removebg-preview.png"
  let moutonImg = new Image();
  moutonImg.src = "./images/mouton.png"
  let pouleImg = new Image();
  pouleImg.src = "./images/poule-removebg-preview.png"
  let renardImg = new Image();
  renardImg.src = "./images/renard-removebg-preview.png"
  let vacheImg = new Image();
  vacheImg.src = "./images/vache-removebg-preview.png"

  let blancImg = new Image();
  blancImg.src = "./images/blanc.png"
  let bleuClairImg = new Image();
  bleuClairImg.src = "./images/bleu-clair.png"
  let bleuFonceImg = new Image();
  bleuFonceImg.src = "./images/bleu-fonce.png"
  let grisImg = new Image();
  grisImg.src = "./images/gris.png"
  let jauneImg = new Image();
  jauneImg.src = "./images/jaune.png"
  let noirImg = new Image();
  noirImg.src = "./images/noir.png"
  let orangeColorImg = new Image();
  orangeColorImg.src = "./images/orange.png"
  let roseImg = new Image();
  roseImg.src = "./images/rose.png"
  let rougeImg = new Image();
  rougeImg.src = "./images/rouge.png"
  let vertClairImg = new Image();
  vertClairImg.src = "./images/vert-clair.png"
  let vertFonceImg = new Image();
  vertFonceImg.src = "./images/vert-fonce.png"
  let violetImg = new Image();
  violetImg.src = "./images/violet.png"

  // function to check if player and objects intersect
  let intersect = (obj1, obj2) => {
    var obj1left = obj1.x;
    var obj1top = obj1.y;
    var obj1right = obj1.x + obj1.width / 1.9;
    var obj1bottom = obj1.y + obj1.height / 1.9;
    var obj2left = obj2.x;
    var obj2top = obj2.y;
    var obj2right = obj2.x + obj2.width / 1.9;
    var obj2bottom = obj2.y + obj2.height / 1.9;
    return !(
      obj1left > obj2right ||
      obj1top > obj2bottom ||
      obj1right < obj2left ||
      obj1bottom < obj2top
    );
  }

  // images to appears on the field when theme is selected 
  let numbersObjArray = [{
    width: 15,
    height: 30,
    number: "un",
    img: numberOneImg,
    found: false
  },
  {
    width: 15,
    height: 30,
    number: "deux",
    img: numberTwoImg,
    found: false
  },
  {
    width: 15,
    height: 30,
    number: "trois",
    img: numberThreeImg,
    found: false
  },
  {
    width: 15,
    height: 30,
    number: "quatre",
    img: numberFourImg,
    found: false
  },
  {
    width: 15,
    height: 30,
    number: "cinq",
    img: numberFiveImg,
    found: false
  },
  {
    width: 15,
    height: 30,
    number: "six",
    img: numberSixImg,
    found: false
  },
  {
    width: 15,
    height: 30,
    number: "sept",
    img: numberSevenImg,
    found: false
  },
  {
    width: 15,
    height: 30,
    number: "huit",
    img: numberEightImg,
    found: false
  },
  {
    width: 15,
    height: 30,
    number: "neuf",
    img: numberNineImg,
    found: false
  },
  {
    width: 20,
    height: 30,
    number: "dix",
    img: numberTenImg,
    found: false
  }]

  let fruitsArrayObj = [{
    width: 25,
    height: 40,
    number: "la pomme",
    img: pommeImg,
    found: false
  },
  {
    width: 25,
    height: 30,
    number: "l'orange",
    img: orangeImg,
    found: false
  },
  {
    width: 20,
    height: 35,
    number: "la poire",
    img: poireImg,
    found: false
  },
  {
    width: 50,
    height: 30,
    number: "la banane",
    img: bananeImg,
    found: false
  },
  {
    width: 20,
    height: 30,
    number: "la fraise",
    img: fraiseImg,
    found: false
  },
  {
    width: 25,
    height: 30,
    number: "la cerise",
    img: ceriseImg,
    found: false
  },
  {
    width: 35,
    height: 30,
    number: "le citron",
    img: citronImg,
    found: false
  },
  {
    width: 50,
    height: 30,
    number: "la pastèque",
    img: pastequeImg,
    found: false
  },
  {
    width: 25,
    height: 30,
    number: "les raisins",
    img: raisinsImg,
    found: false
  },
  {
    width: 20,
    height: 30,
    number: "la prune",
    img: pruneImg,
    found: false
  }]

  let animalsArrayObj = [{
    width: 40,
    height: 35,
    number: "l'âne",
    img: aneImg,
    found: false
  },
  {
    width: 30,
    height: 30,
    number: "le canard",
    img: canardImg,
    found: false
  },
  {
    width: 40,
    height: 35,
    number: "le cheval",
    img: chevalImg,
    found: false
  },
  {
    width: 28,
    height: 30,
    number: "le chien",
    img: chienImg,
    found: false
  },
  {
    width: 30,
    height: 25,
    number: "le cochon",
    img: cochonImg,
    found: false
  },
  {
    width: 30,
    height: 30,
    number: "le lapin",
    img: lapinImg,
    found: false
  },
  {
    width: 35,
    height: 25,
    number: "le mouton",
    img: moutonImg,
    found: false
  },
  {
    width: 30,
    height: 30,
    number: "la poule",
    img: pouleImg,
    found: false
  },
  {
    width: 30,
    height: 30,
    number: "le renard",
    img: renardImg,
    found: false
  },
  {
    width: 35,
    height: 30,
    number: "la vache",
    img: vacheImg,
    found: false
  }]

  let colorsArrayObj = [{
    width: 28,
    height: 28,
    number: "blanc",
    img: blancImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "bleu clair",
    img: bleuClairImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "bleu foncé",
    img: bleuFonceImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "gris",
    img: grisImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "jaune",
    img: jauneImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "noir",
    img: noirImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "orange",
    img: orangeColorImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "rose",
    img: roseImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "rouge",
    img: rougeImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "vert clair",
    img: vertClairImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "vert foncé",
    img: vertFonceImg,
    found: false
  },
  {
    width: 28,
    height: 28,
    number: "violet",
    img: violetImg,
    found: false
  }]

  // player and police 
  let playerObj = {
    x: 0,
    y: 0,
    width: 50,
    height: 40,
    lives: 5,
    score: 0
  }

  let policeObj = {
    x: 225,
    y: 300,
    width: 45,
    height: 40,
    speedX: 2,
    speedY: 2
  }

  // give random postions that do not intersect 

  let givePositionsToObjects = (arrayObject) => {
    arrayObject.forEach((numberObj) => {

      let positionedObjects = arrayObject.filter(nObj => nObj.x)

      numberObj.x = pickRandomPositionX()
      numberObj.y = pickRandomPositionY()

      //console.log("positionedObjects", positionedObjects)

      let intersectingObject = positionedObjects.find(otherNumberObj => intersect(numberObj, otherNumberObj))

      //console.log("intersectingObject", intersectingObject)

      while (intersectingObject) {
        console.log("happened")
        numberObj.x = pickRandomPositionX()
        numberObj.y = pickRandomPositionY()
        intersectingObject = positionedObjects.find(otherNumberObj => intersect(numberObj, otherNumberObj))
        console.log("intersectingObject", intersectingObject)
      }

    })
  }

  givePositionsToObjects(numbersObjArray)
  givePositionsToObjects(fruitsArrayObj)
  givePositionsToObjects(animalsArrayObj)
  givePositionsToObjects(colorsArrayObj)



  // the event that launches the game
  let gameStarted = false

  document.querySelectorAll('.start-buttons > button').forEach(button => {
    button.onclick = (event) => {

      event.currentTarget.innerText
      if (!gameStarted && event.currentTarget.innerText === "Les nombres") {
        startGame(numbersObjArray);
        gameStarted = true
        let word = pickRandom(numbersObjArray).number
        document.querySelector('#word-to-catch').innerText = word
        let msg = new SpeechSynthesisUtterance(
          word
        );
        window.speechSynthesis.speak(msg);
      }
      else if (!gameStarted && event.currentTarget.innerText === "Les fruits") {
        startGame(fruitsArrayObj);
        gameStarted = true
        let word = pickRandom(fruitsArrayObj).number
        document.querySelector('#word-to-catch').innerText = word
        let msg = new SpeechSynthesisUtterance(
          word
        );
        window.speechSynthesis.speak(msg);
      }
      else if (!gameStarted && event.currentTarget.innerText === "Les animaux") {
        startGame(animalsArrayObj);
        gameStarted = true
        let word = pickRandom(animalsArrayObj).number
        document.querySelector('#word-to-catch').innerText = word
        let msg = new SpeechSynthesisUtterance(
          word
        );
        window.speechSynthesis.speak(msg);
      }
      else if (!gameStarted && event.currentTarget.innerText === "Les couleurs") {
        startGame(colorsArrayObj);
        gameStarted = true
        let word = pickRandom(colorsArrayObj).number
        document.querySelector('#word-to-catch').innerText = word
        let msg = new SpeechSynthesisUtterance(
          word
        );
        window.speechSynthesis.speak(msg);
      }
    };
  })

  // the logic that is behind the game 
  let pickRandom = (listOfWords) => {
    return listOfWords[Math.floor(Math.random() * listOfWords.length)]
  }

  let gameOver = false

  function startGame(vocabulary) {
    let draw = () => {
      if (gameOver) return
      ctx.clearRect(0, 0, 900, 450)
      for (let i = 0; i < vocabulary.length; i++) {
        ctx.drawImage(vocabulary[i].img, vocabulary[i].x, vocabulary[i].y, vocabulary[i].width, vocabulary[i].height)
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

      for (let i = 0; i < vocabulary.length; i++) {
        if (intersect(playerObj, vocabulary[i]) === true
          && document.querySelector('#word-to-catch').innerText === vocabulary[i].number) {
          playerObj.score += 1
          vocabulary[i].found = true
          vocabulary.splice(i, 1);
          let word = pickRandom(vocabulary).number
          document.querySelector('#word-to-catch').innerText = word
          let msg = new SpeechSynthesisUtterance(
            word
          );
          window.speechSynthesis.speak(msg);
        }
        else if (intersect(playerObj, vocabulary[i]) === true
          && document.querySelector('#word-to-catch').innerText !== vocabulary[i].number) {
          console.log("false")
          playerObj.score -= 1
          alert('Wrong item. Please try harder!')
          playerObj.x = 0
          playerObj.y = 0
        }
      }

      if (vocabulary.length === 0) {
        policeObj.speedX = 0
        policeObj.speedX = 0
        ctx.clearRect(0, 0, 900, 450)
        document.getElementById('winsound').play()
        ctx.font = '40px Courier New'
        if (playerObj.score > 7) {
          ctx.strokeText(`Félicitations! You won with ${playerObj.score} points.`, 150, 200, 650)
          ctx.fillText("Let's try again with another topic.", 145, 250, 650)
        }
        else {
          if (playerObj.score === 1) {
            ctx.strokeText(`Félicitations! You won with ${playerObj.score} point.`, 150, 200, 650)
          }
          else {
            ctx.strokeText(`Félicitations! You won with ${playerObj.score} points.`, 150, 200, 650)
          }
          ctx.fillText("Not a great score though. Let's practice more.", 145, 250, 650)
        }
        gameOver = true

        setTimeout(() => {
          location.reload()
        }, 3000);
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
    setInterval(draw, 1000 / 60)



    // controllers for the players 
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 39: //right arrow
          if (playerObj.x < 855) {
            playerObj.x += 30;
          }
          else playerObj.x
          document.getElementById('playersound').play()
          break;
        case 37: // left arrow
          if (playerObj.x > 0) {
            playerObj.x -= 30;
          }
          document.getElementById('playersound').play()
          break;
        case 38: // up arrow
          if (playerObj.y > 0) {
            playerObj.y -= 30;
          }
          document.getElementById('playersound').play()
          break;
        case 40: // down arrow
          if (playerObj.y < 410) {
            playerObj.y += 30;
          }
          document.getElementById('playersound').play()
          break;
      }
    })
  }
}
