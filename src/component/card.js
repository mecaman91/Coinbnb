import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Stack from '@mui/material/Stack';

export default function CoinCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          BTC/BUSD
        </Typography>
        <Typography variant="h5" component="div">
          $20,000
        </Typography>
        <Stack direction="row">
            <ArrowDropUpIcon></ArrowDropUpIcon> 
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                +0.60%
            </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}