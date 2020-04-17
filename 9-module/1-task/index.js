'use strict';

class CheckoutProductList {
  productsStoreKey = JSON.parse( localStorage.getItem('cart-products') );

  constructor(parentElement) {
    this.el = parentElement;
    this.el.innerHTML = `<div class="product-list-box">
        <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
    </div>`;

    const cardContainer = this.el.querySelector('.product-list-box');
    this.el.querySelector('.product-list-box').addEventListener('click', ev => this.remove(ev))

    this.productsStoreKey.forEach(item => {
      const card = `<div data-product-id="${item.id}" class="product-wrapper box-inner-col description-col">
        <div class="product-image-container">
          <img class="product-image" src="${item.imageUrl}" alt="img">
        </div>

        <div class="product-description">
          <h4 class="col-title mb-2">${item.title}</h4>
          ${item.rating ? `<div class="rate">
                ${item.rating.stars === 1 ? '<i class="icon-star checked"></i>' : ''}
                ${item.rating.stars === 2 ? '<i class="icon-star checked"></i><i class="icon-star checked"></i>' : ''}
                ${item.rating.stars === 3 ? '<i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i>' : ''}
                ${item.rating.stars === 4 ? '<i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i>' : ''}
                ${item.rating.stars === 5 ? '<i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i><i class="icon-star checked"></i>' : ''}
          </div>
          <p class="rate-amount d-none d-md-block mt-1">${item.rating.reviewsAmount} reviews</p>` : ''}
        </div>
        <div class="product-price">
          <p class="mb-0 font-weight-light">Price:</p>
          <h4 class="col-title price-text mb-2">${item.price}</h4>
        </div>
        <div class="product-remove-button-wrapper">
          <button type="button"
                  data-button-role="checkout-remove-product"
                  class="product-remove-button">
            X
          </button>
        </div>
      </div>`;

      cardContainer.insertAdjacentHTML('beforeend', card);
    });
  }
  remove(ev) {
    const target = ev.target;

    if (target.dataset.buttonRole !== 'checkout-remove-product') {
      return;
    }

    // получить id
    const itemId = +target.parentElement.parentElement.dataset.productId;

    // спросить пользователя
    const agreement = confirm('Вы уверенны, что хотите удалить этот товар из корзины?');

    if (agreement) {
      this.productsStoreKey = this.productsStoreKey.filter( product => product.id !== itemId);
      target.parentElement.parentElement.remove();
    } else {
      return;
    }

    // // записать свойство в LS
    localStorage.clear();
    localStorage.setItem('cart-products', JSON.stringify(this.productsStoreKey));
  }
}

window.CheckoutProductList = CheckoutProductList;
