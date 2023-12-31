window.addEventListener('DOMContentLoaded', function() {
  // Tabs toggle
  const tabLinks = document.querySelectorAll('.team__nav-list-item-link');
  [...tabLinks].forEach((link, index) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const tabs = document.querySelectorAll('.team__tab');

      if (!link.classList.contains('team__link-active')) {
        [...tabLinks].forEach(link => link.classList.remove('team__link-active'));
        link.classList.add('team__link-active');

        [...tabs].forEach(tab => tab.classList.remove('team__tab-active'));
        tabs[index].classList.add('team__tab-active');
      }
    });
  });

  // Carousel slider
  const carouselNavButtons = document.querySelectorAll('.history__carousel-nav-item');
  [...carouselNavButtons].forEach((button, index) => {
    button.addEventListener('click', function() {
      const carouselSlider = document.querySelector('.history__carousel-slider');
      const imgWidth = carouselSlider.children[0].offsetWidth;
      const carouselSliderStyle = getComputedStyle(carouselSlider);
      const sliderGap = carouselSliderStyle.getPropertyValue('gap').valueOf().slice(0, -2);
      offSetValue = +sliderGap + imgWidth;

      if (!button.classList.contains('history__carousel-nav-item--active')) {
        [...carouselNavButtons].forEach(button => button.classList.remove('history__carousel-nav-item--active'));
        button.classList.add('history__carousel-nav-item--active');

        carouselSlider.style.transform = `translateX(${index * offSetValue}px)`;
      }
    });
  });

  // Accordion tabs toggle
  const accordionTab = document.querySelectorAll('.accordion__wrapper');
  [...accordionTab].forEach((tab, index) => {
    tab.addEventListener('click', function() {
      const accordionContent = document.querySelectorAll('.accordion__content');
      const accordion = document.querySelectorAll('.accordion');
      const accordionOpenCloseButton = document.querySelectorAll('.accordion__img');

      if (accordionOpenCloseButton[index].style.transform === '') {
        accordionOpenCloseButton[index].style.transform = 'rotate(0deg)'
      }

      accordionContent[index].style.display = accordionContent[index].style.display === 'block' ? 'none' : 'block';
      accordionOpenCloseButton[index].style.transform = accordionOpenCloseButton[index].style.transform === 'rotate(0deg)' ? 'rotate(90deg)' : 'rotate(0deg)'
      accordion[index].style.marginBottom = accordion[index].style.marginBottom === '0px' ? '10px' : '0';
    });
  });
});

