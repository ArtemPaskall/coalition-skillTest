window.addEventListener('DOMContentLoaded', function() {
    // Tabs toggle
    const tabLinks = document.querySelectorAll('.team__nav-list-item-link');
    [
        ...tabLinks
    ].forEach((link1, index)=>{
        link1.addEventListener('click', function(e) {
            e.preventDefault();
            const tabs = document.querySelectorAll('.team__tab');
            if (!link1.classList.contains('team__link-active')) {
                [
                    ...tabLinks
                ].forEach((link)=>link.classList.remove('team__link-active')
                );
                link1.classList.add('team__link-active');
                [
                    ...tabs
                ].forEach((tab)=>tab.classList.remove('team__tab-active')
                );
                tabs[index].classList.add('team__tab-active');
            }
        });
    });
    // Carousel slider
    const carouselNavButtons = document.querySelectorAll('.history__carousel-nav-item');
    [
        ...carouselNavButtons
    ].forEach((button1, index)=>{
        button1.addEventListener('click', function() {
            const carouselSlider = document.querySelector('.history__carousel-slider');
            const imgWidth = carouselSlider.children[0].offsetWidth;
            const carouselSliderStyle = getComputedStyle(carouselSlider);
            const sliderGap = carouselSliderStyle.getPropertyValue('gap').valueOf().slice(0, -2);
            offSetValue = +sliderGap + imgWidth;
            if (!button1.classList.contains('history__carousel-nav-item--active')) {
                [
                    ...carouselNavButtons
                ].forEach((button)=>button.classList.remove('history__carousel-nav-item--active')
                );
                button1.classList.add('history__carousel-nav-item--active');
                carouselSlider.style.transform = `translateX(${index * offSetValue}px)`;
            }
        });
    });
});

//# sourceMappingURL=index.09d9d7db.js.map