import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../store/cart/actions';
import { selectCartItemsCount } from '../../store/cart/selectors';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer role="presentation" onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
