function moveCardSlider(direction) {
    var cardSlider = document.querySelector('.card-slider');
    var cardWidth = document.querySelector('.card').offsetWidth;
    var cardMargin = parseInt(window.getComputedStyle(document.querySelector('.card')).getPropertyValue('margin-right'));
    var cardCount = cardSlider.querySelectorAll('.card').length;
    var cardSliderWidth = (cardWidth + cardMargin) * cardCount - cardMargin;
    var currentPosition = parseInt(cardSlider.style.left) || 0;
    var newPosition;
  
    if (direction === 'next') {
      newPosition = currentPosition - (cardWidth + cardMargin);
      if (newPosition < -(cardSliderWidth - cardWidth)) {
        newPosition = 0;
      }
    } else if (direction === 'prev') {
      newPosition = currentPosition + (cardWidth + cardMargin);
      if (newPosition > 0) {
        newPosition = -(cardSliderWidth - cardWidth);
      }
    }
  
    cardSlider.style.left = newPosition + 'px';
  }

var nextButton = document.querySelector('.next-button');
var prevButton = document.querySelector('.prev-button');

nextButton.addEventListener('click', function() {
  moveCardSlider('next');
});

prevButton.addEventListener('click', function() {
  moveCardSlider('prev');
});