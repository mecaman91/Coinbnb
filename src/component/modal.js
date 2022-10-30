import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import LineChart from './chart'
import ColorChips from './chip'

const data =
[
    {
      "id": "japan",
      "color": "hsl(189, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 148
        },
        {
          "x": "helicopter",
          "y": 138
        },
        {
          "x": "boat",
          "y": 156
        },
        {
          "x": "train",
          "y": 257
        },
        {
          "x": "subway",
          "y": 161
        },
        {
          "x": "bus",
          "y": 28
        },
        {
          "x": "car",
          "y": 166
        },
        {
          "x": "moto",
          "y": 294
        },
        {
          "x": "bicycle",
          "y": 151
        },
        {
          "x": "horse",
          "y": 115
        },
        {
          "x": "skateboard",
          "y": 158
        },
        {
          "x": "others",
          "y": 107
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(31, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 293
        },
        {
          "x": "helicopter",
          "y": 199
        },
        {
          "x": "boat",
          "y": 144
        },
        {
          "x": "train",
          "y": 160
        },
        {
          "x": "subway",
          "y": 54
        },
        {
          "x": "bus",
          "y": 73
        },
        {
          "x": "car",
          "y": 121
        },
        {
          "x": "moto",
          "y": 253
        },
        {
          "x": "bicycle",
          "y": 49
        },
        {
          "x": "horse",
          "y": 228
        },
        {
          "x": "skateboard",
          "y": 247
        },
        {
          "x": "others",
          "y": 121
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(135, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 202
        },
        {
          "x": "helicopter",
          "y": 25
        },
        {
          "x": "boat",
          "y": 34
        },
        {
          "x": "train",
          "y": 286
        },
        {
          "x": "subway",
          "y": 58
        },
        {
          "x": "bus",
          "y": 92
        },
        {
          "x": "car",
          "y": 61
        },
        {
          "x": "moto",
          "y": 259
        },
        {
          "x": "bicycle",
          "y": 133
        },
        {
          "x": "horse",
          "y": 136
        },
        {
          "x": "skateboard",
          "y": 115
        },
        {
          "x": "others",
          "y": 252
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(13, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 45
        },
        {
          "x": "helicopter",
          "y": 64
        },
        {
          "x": "boat",
          "y": 76
        },
        {
          "x": "train",
          "y": 141
        },
        {
          "x": "subway",
          "y": 285
        },
        {
          "x": "bus",
          "y": 147
        },
        {
          "x": "car",
          "y": 54
        },
        {
          "x": "moto",
          "y": 161
        },
        {
          "x": "bicycle",
          "y": 141
        },
        {
          "x": "horse",
          "y": 192
        },
        {
          "x": "skateboard",
          "y": 130
        },
        {
          "x": "others",
          "y": 95
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(2, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 88
        },
        {
          "x": "helicopter",
          "y": 239
        },
        {
          "x": "boat",
          "y": 188
        },
        {
          "x": "train",
          "y": 97
        },
        {
          "x": "subway",
          "y": 233
        },
        {
          "x": "bus",
          "y": 51
        },
        {
          "x": "car",
          "y": 214
        },
        {
          "x": "moto",
          "y": 126
        },
        {
          "x": "bicycle",
          "y": 11
        },
        {
          "x": "horse",
          "y": 58
        },
        {
          "x": "skateboard",
          "y": 32
        },
        {
          "x": "others",
          "y": 299
        }
      ]
    }
]

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Market Detail
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <LineChart data = {data}></LineChart>
          <ColorChips></ColorChips> Moving Average(MA) <ColorChips></ColorChips>
          <ColorChips></ColorChips> Bollinger Band(BB) <ColorChips></ColorChips>
          <ColorChips></ColorChips> RSI <ColorChips></ColorChips>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
