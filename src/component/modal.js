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
import ColorChips from './chip'
import ApexChart from './apexChart';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TrendingTooltip from './trendingTooltip'
import Box from '@mui/material/Box';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper' : {
    minWidth: '40vw'
  },
  '& .css-140puxv-MuiTypography-root-MuiDialogTitle-root' : {
    padding: '16px 0.5vw'
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

export default function DetailModal(props) {

  const tooltipMSG = `
    Based on a well-known strategy.
    As we mentioned, this is not a coin recommendation or something.
    `;

  const toolTipStyle = { paddingTop: '1vw'};

  return (
    <div>
      <BootstrapDialog
        onClose={props.closeModal}
        aria-labelledby="customized-dialog-title"
        open= {true}
        
      >
        <Box sx={{display:'flex'}}>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={props.closeModal}>
            Market Detail
          </BootstrapDialogTitle>
          <TrendingTooltip tooltipMSG = {tooltipMSG} toolTipStyle = {toolTipStyle}></TrendingTooltip>
        </Box>
        <DialogContent dividers>
          <ApexChart></ApexChart>
            <Stack direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={2}>
              <Stack justifyContent="space-evenly" spacing={5}>
                <ColorChips label='bull' color ='bull'></ColorChips>
                <ColorChips label='bull' color ='bull'></ColorChips>
                <ColorChips label='bull' color ='bull'></ColorChips>
                <ColorChips label='bull' color ='bull'></ColorChips>
              </Stack>
              <Stack justifyContent="space-evenly" spacing={5} alignItems="center">
                <Typography variant="subtitle1" gutterBottom>
                  Moving Average(MA)
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Bollinger Band(BB)
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  RSI
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  MACD
                </Typography>
              </Stack>
              <Stack justifyContent="space-evenly" spacing={5}>
                <ColorChips label='bear' color ='bear'></ColorChips>
                <ColorChips label='bear' color ='bear'></ColorChips>
                <ColorChips label='bear' color ='bear'></ColorChips>
                <ColorChips label='bear' color ='bear'></ColorChips>
              </Stack>
            </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.closeModal}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
