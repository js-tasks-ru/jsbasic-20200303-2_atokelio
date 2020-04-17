class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
    this.el.innerHTML = `<div class="row justify-content-end">
    <div class="col-lg-9">
        <h3 class="section-title">Top Recommendations for You</h3>
        <div class="row homepage-cards">
            <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
        </div>
        </div>
    </div>`
    this.cart = JSON.parse( localStorage.getItem('cart-products') ) || [];
    this.el.querySelector('.homepage-cards').addEventListener('click', ev => this.add(ev))
  }

  show() {
      return fetch("/assets/data/products.json").then(response => {
        return response.json();
      }).then(data => {
        this.products = data;
        const cardContainer = this.el.querySelector('.homepage-cards');

        data.forEach(item => {
          const card = `<div data-product-id="${item.id}" class="products-list-product col-md-6 col-lg-4 mb-4">
          <div class="card">
              <div class="card-img-wrap">
                  <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
              </div>
              <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  ${item.rating ? `<div class="rate">
                        ${item.rating.stars === 1 ? '<i class="icon-star checked"></i>' : ''}
                        ${item.rating.stars === 2 ? '<i class="icon-star checked"></i><i class="icon-star checked"></i>' : ''}
                        ${item.rating.stars === 3 ? '<i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i>' : ''}
                        ${item.rating.stars === 4 ? '<i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i>' : ''}
                        ${item.rating.stars === 5 ? '<i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i>' : ''}
                      <span class="rate-amount ml-2">${item.rating.reviewsAmount}</span>
                  </div>` : ''}
                  <p class="card-text price-text discount"><strong>${item.price}</strong>
                  ${item.oldPrice ? `<small class="ml-2">${item.oldPrice}</small>` : ''}</p>
                  <button class="product-add-to-cart" data-button-role="add-to-cart">
                    Add to cart
                  </button>
              </div>
          </div>
      </div>`;

          cardContainer.insertAdjacentHTML('beforeend', card);
        })
      });
  }

  add(ev) {
    const target = ev.target;

    if (target.dataset.buttonRole !== 'add-to-cart') {
      return;
    }

    // получить id
    const itemId = +target.parentElement.parentElement.parentElement.dataset.productId;

    // найти товар по соответствующему id
    const item = this.products.find( product => product.id === itemId);

    // проверить есть ли товар в свойстве объекта
    const cart = !!this.cart.find( product => product.id === itemId);
    if (cart) {
      alert('Товар уже добавлен в корзину!');
      return;
    }

    // спросить пользователя
    const agreement = confirm('Вы уверенны, что хотите добавить этот товар в корзину?');

    // занести товар в свойство объекта
    if (agreement) {
      this.cart.push(item);
    } else {
      return;
    }

    // записать свойство в LS
    localStorage.clear();
    localStorage.setItem('cart-products', JSON.stringify(this.cart));
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
