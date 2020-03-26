import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="http://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_zoom1.jpg"
                alt="Product"
              />
            </td>
            <td>
              <strong>The best product</strong>
              <span>$149,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#555" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#555" />
                </button>
              </div>
            </td>
            <td>
              <strong>$299,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#555" />
              </button>
            </td>
          </tr>
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
