let dino = document.querySelector('.dino');
let cactus = document.querySelector('.cactus');
let count = document.querySelector('.count');

function jump() {
  if (dispatchEvent.classList != 'jump') {
    dino.classList.add('jump');
    setTimeout(function () {
      dino.classList.remove('jump');
    }, 300);
  }
}

const funcLive = setInterval(function () {
  let tepaga = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let chapga = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );

  if (chapga > 0 && chapga < 60 && tepaga >= 150) {
    dino.style.animationPlayState = 'paused';
    cactus.style.animationPlayState = 'paused';

    alert('GAME OVER!');
    window.location.replace("/home.html")
  }
});

document.addEventListener('keydown', function () {
  jump();
  count.innerHTML++;
});

