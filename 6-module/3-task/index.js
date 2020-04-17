'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">

       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>

      </ul>
    </li>

    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">

       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>

       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>

      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.template;

    for (let item of this.el.querySelectorAll('.list-group-item')) {
      item.addEventListener('pointerenter', this.show)
    }

    for (let item of this.el.querySelectorAll('.list-group-item')) {
      item.addEventListener('pointerleave', this.hide)
    }
  }

  show(ev) {
    ev.target.querySelector('.dropdown-menu').classList.add('show');
    document.querySelector('.backdrop').classList.add('show');
  }

  hide(ev) {
    ev.target.querySelector('.dropdown-menu').classList.remove('show');
    document.querySelector('.backdrop').classList.remove('show');
  }
}


// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
