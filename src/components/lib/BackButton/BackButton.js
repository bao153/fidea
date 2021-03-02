import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const BackButton = (props) => {
  return (
    <Button>Back</Button>
  )
}

export default withLastLocation(BackButton);