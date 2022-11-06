import * as React from 'react';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';

export default function ColorChips(props) {
  let chipLabel = ''
  let chipColor = 'default'

  switch (props.label) {
    case 'bull':
      chipLabel = 'Bullish'
      break
    case 'bear':
      chipLabel = 'Bearlish'
      break
  }

  switch (props.color) {
    case 'bull':
      chipColor = 'success'
      break
    case 'bear':
      chipColor = 'error'
      break
  }

  return (
    <Chip label={chipLabel} color={chipColor} icon={<FaceIcon />} />
  );
}
