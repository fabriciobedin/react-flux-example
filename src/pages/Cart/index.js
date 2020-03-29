import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';
import * as cartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <td />
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <td />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formatedPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#555" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#555" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#f00" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Checkout</button>
        <Total>
          <span>TOTAL:</span>
          <strong>299,80</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount)
  }))
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
