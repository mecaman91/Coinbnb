import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LineChart from './chart.js'
import btcImage from '../image/BTC.PNG'

let lineData = [
    {
      "id": "japan",
      "color": "hsl(79, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 291
        },
        {
          "x": "helicopter",
          "y": 242
        },
        {
          "x": "boat",
          "y": 156
        },
        {
          "x": "train",
          "y": 150
        },
        {
          "x": "subway",
          "y": 164
        },
        {
          "x": "bus",
          "y": 187
        },
        {
          "x": "car",
          "y": 283
        },
        {
          "x": "moto",
          "y": 248
        },
        {
          "x": "bicycle",
          "y": 2
        },
        {
          "x": "horse",
          "y": 246
        },
        {
          "x": "skateboard",
          "y": 89
        },
        {
          "x": "others",
          "y": 101
        }
      ]
    }
  ]

export default function CardArea() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={btcImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BTC/USDT
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            $19,166
          </Typography>
            <LineChart data = {lineData}></LineChart>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
