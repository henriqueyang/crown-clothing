import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../store/cart/actions';

import {
  CheckoutItemContainer,
  ItemImageContainer,
  TextContainer,
  ItemQuantityContainer,
  RemoveButtonContainer,
} from './styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ItemImageContainer>
        <img src={imageUrl} alt="item" />
      </ItemImageContainer>

      <TextContainer>{name}</TextContainer>

      <ItemQuantityContainer>
        <div onClick={() => removeItem(cartItem)} role="presentation">
          &#10094;
        </div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)} role="presentation">
          &#10095;
        </div>
      </ItemQuantityContainer>

      <TextContainer>{price}</TextContainer>

      <RemoveButtonContainer onClick={() => clearItem(cartItem)} role="presentation">
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
