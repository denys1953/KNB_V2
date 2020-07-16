let buttons = document.getElementsByClassName('btn')
let imageInner = document.getElementById('imageInner')
let img = document.getElementById('img')
let imgBot = document.getElementById('imgBot')
let score = document.getElementById('text')
let array = ['img/rock.png', 'img/scissors.png', 'img/paper.png']
let playerScore = 0
let botScore = 0
for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click', innerImg)
}
function innerImg(e) {
   imgBot.src = randomArr()
   console.log(imgBot.src)
   if (e.target.dataset.tab == 0) {
      img.src = 'img/rock.png'
      if (imgBot.src == 'https://denys1953.github.io/KNB/img/scissors.png') {
         playerScore++
         score.innerHTML = `${playerScore}:${botScore}`
      } else if(imgBot.src == 'https://denys1953.github.io/KNB/img/paper.png') {
         botScore++
         score.innerHTML = `${playerScore}:${botScore}`
      }
   } else if (e.target.dataset.tab == 1) {
      img.src = 'img/scissors.png'
      if (imgBot.src == 'https://denys1953.github.io/KNB/img/paper.png') {
         playerScore++
         score.innerHTML = `${playerScore}:${botScore}`
      } else if(imgBot.src == 'https://denys1953.github.io/KNB/img/rock.png') {
         botScore++
         score.innerHTML = `${playerScore}:${botScore}`
      }
   } else {
      img.src = 'img/paper.png'
      if (imgBot.src == 'https://denys1953.github.io/KNB/img/rock.png') {
         playerScore++
         score.innerHTML = `${playerScore}:${botScore}`
      } else if(imgBot.src == 'https://denys1953.github.io/KNB/img/scissors.png') {
         botScore++
         score.innerHTML = `${playerScore}:${botScore}`
      }
   }
}
function randomArr() {
   return array[Math.floor(Math.random() * array.length)]
}