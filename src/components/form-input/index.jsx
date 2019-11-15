import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabel } from './styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer className="group">
    <FormInputContainer onChange={handleChange} {...otherProps} />

    {label ? (
      <FormInputLabel
        htmlFor={label}
        className={otherProps.value.length ? 'shrink' : ''}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
