import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

export default function ColorChips() {
  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip label="Bearlish" color="error" icon={<FaceIcon />} />
        <Chip label="Bullish" color="success" icon={<FaceIcon />} />
      </Stack>
    </Stack>
  );
}
