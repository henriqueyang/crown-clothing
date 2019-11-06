import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../store/cart/actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" role="presentation" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
