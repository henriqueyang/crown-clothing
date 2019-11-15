import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../store/directory/selectors';

import MenuItem from '../menu-item';

import DirectoryContainer from './styles';

// Menu-items container to home page
const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...othersSectionProps }) => (
      <MenuItem key={id} {...othersSectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
