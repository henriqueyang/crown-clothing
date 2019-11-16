import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item';

import {
  CollectionPreviewContainer,
  CollectionTitle,
  CollectionItemContainer,
} from './styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <CollectionTitle onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </CollectionTitle>

    <CollectionItemContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionItemContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
