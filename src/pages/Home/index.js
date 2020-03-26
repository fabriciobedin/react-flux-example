import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_zoom1.jpg"
          alt="Product"
        />
        <strong> The best product </strong>
        <span> $79,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_zoom1.jpg"
          alt="Product"
        />
        <strong> The best product </strong>
        <span> $79,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_zoom1.jpg"
          alt="Product"
        />
        <strong> The best product </strong>
        <span> $79,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_zoom1.jpg"
          alt="Product"
        />
        <strong> The best product </strong>
        <span> $79,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_zoom1.jpg"
          alt="Product"
        />
        <strong> The best product </strong>
        <span> $79,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_zoom1.jpg"
          alt="Product"
        />
        <strong> The best product </strong>
        <span> $79,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}
