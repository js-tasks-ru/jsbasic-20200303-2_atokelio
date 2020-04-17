'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.index = 0;
    this.activeSlide = {
      title: this.slides[this.index].title,
      img: this.slides[this.index].img
    }
    this.el = element;
    this.el.innerHTML = `<div id="mainCarousel" class="main-carousel carousel slide">
    <ol class="carousel-indicators">
        <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator active"></li>
        <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
    <img src="assets/images/default-slide-img.jpg" alt="Activelide">
    <div class="container">
        <div class="carousel-caption">
            <h3 class="h1">${this.activeSlide.title}</h3>
            <div>
                <a class="btn" href="#" role="button">
                    View all DEALS
                    <img src="${this.activeSlide.img}" class="ml-3" alt="">
                </a>
            </div>
        </div>
    </div>
</div>
    </div>
    <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
</div>`;

    this.el.querySelector('.carousel-control-next').addEventListener('click', () => this.next());
    this.el.querySelector('.carousel-control-prev').addEventListener('click', () => this.prev());
    this.el.querySelector('.carousel-indicators').addEventListener('click', (ev) => this.dotsHandle(ev));
  }

  changeSlide() {
    this.activeSlide.title = this.slides[this.index].title;
    this.activeSlide.img = this.slides[this.index].img;
  }

  changeDot() {
    const activeDot = this.el.querySelector(`[data-slide-to="${this.index}"]`);

    for (let dot of document.querySelectorAll('.carousel-indicators li')) {
      dot.classList.remove('active');
    }

    activeDot.classList.add('active');
  }

  render() {
    this.el.querySelector('.carousel-inner').innerHTML = `<div class="carousel-item active">
    <img src="assets/images/default-slide-img.jpg" alt="Activelide">
    <div class="container">
        <div class="carousel-caption">
            <h3 class="h1">${this.activeSlide.title}</h3>
            <div>
                <a class="btn" href="#" role="button">
                    View all DEALS
                    <img src="${this.activeSlide.img}" class="ml-3" alt="">
                </a>
            </div>
        </div>
    </div>`
  }

  next() {
    if (this.index === this.slides.length - 1) {
      this.index = 0;
    } else {
      this.index += 1;
    }

    this.changeSlide();
    this.changeDot();
    this.render();
  }

  prev() {
    if (this.index === 0) {
      this.index = this.slides.length - 1;
    } else {
      this.index -= 1;
    }

    this.changeSlide();
    this.changeDot();
    this.render();
  }

  dotsHandle(ev) {
    if (ev.target.tagName !== 'LI') return;

    this.index = +ev.target.dataset.slideTo;

    this.changeSlide();
    this.changeDot();
    this.render();
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
