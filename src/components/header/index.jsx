import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../configs/firebase';
import { selectCartHidden } from '../../store/cart/selectors';
import { selectCurrentUser } from '../../store/user/selectors';

import './styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser
          ? <div className="option" role="presentation" onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link className="option" to="/signin">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
