function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Teclado: ao focar um card (Tab), o carrossel gira até ele e o efeito de destaque aparece
    card.addEventListener('focus', function () {
      const button = document.getElementById(String(index + 1));
      if (button) selectCarouselItem(button);
      handleMouseEnter.call(this);
    });
    card.addEventListener('blur', handleMouseLeave);
  }
}

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  // Cada card ocupa uma fatia do círculo (3 cards = 120 graus), como no original
  const totalCards = document.getElementsByClassName('s-card').length;
  const rotateYDeg = -(360 / totalCards) * (Number(selectedItem) - 1);

  // translateZ vem da variável CSS --s-carousel-depth (muda no celular)
  carousel.style.transform = `translateZ(var(--s-carousel-depth)) rotateY(${rotateYDeg}deg)`;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}

// Vai para o card anterior (-1) ou seguinte (+1), com volta ao início/fim
function moveCarousel(direction) {
  const buttons = Array.from(document.getElementsByClassName('s-controller__button'));
  const current = buttons.findIndex(button => button.classList.contains('s-controller__button--active'));
  const next = (current + direction + buttons.length) % buttons.length;
  selectCarouselItem(buttons[next]);
}

function addKeyboardAndTouchControls() {
  // Enter ou Espaço nos botões 01, 02, 03
  const buttons = document.getElementsByClassName('s-controller__button');
  for (const button of buttons) {
    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectCarouselItem(button);
      }
    });
  }

  // Setas do teclado
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') moveCarousel(1);
    if (event.key === 'ArrowLeft') moveCarousel(-1);
  });

  // Deslizar o dedo no celular
  const container = document.querySelector('.s-container');
  let touchStartX = 0;
  container.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  container.addEventListener('touchend', (event) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 50) moveCarousel(deltaX < 0 ? 1 : -1);
  }, { passive: true });
}

function init() {
  addEventListenersToCards();
  addKeyboardAndTouchControls();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, false);
} else {
  init();
}
