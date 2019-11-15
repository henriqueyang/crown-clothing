import React from 'react';

import CollectionItem from '../collection-item';

import {
  CollectionPreviewContainer,
  CollectionTitle,
  CollectionItemContainer,
} from './styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionTitle>{title.toUpperCase()}</CollectionTitle>

    <CollectionItemContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionItemContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
