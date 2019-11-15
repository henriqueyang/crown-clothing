import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../store/cart/actions';

import {
  CollectionItemContainer,
  BackgroundImageContainer,
  CollectionFooterContainer,
  ItemNameContainer,
  ItemPriceContainer,
  AddItemToCartButton,
} from './styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImageContainer imageUrl={imageUrl} />

      <CollectionFooterContainer>
        <ItemNameContainer>{name}</ItemNameContainer>
        <ItemPriceContainer>{price}</ItemPriceContainer>
      </CollectionFooterContainer>

      <AddItemToCartButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddItemToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
