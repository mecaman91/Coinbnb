import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchAppBar from './component/header.js'
import TrendingCarousel from './component/carousel.js'
import StickyHeadTable from './component/table.js'
import DetailModal from './component/modal'
import TrendingTooltip from './component/trendingTooltip'

export default function App() {
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const tooltipMSG = `
    Trending is the most interesting coin at the moment.
    This is not a coin recommendation or something.
    `;

  const toolTipStyle = { paddingLeft: '0.5vw' , paddingTop: '0.5vw'};

  var gridData = new WebSocket("ws://localhost:8000/ws/ticker/busd");
  gridData.onopen = function(event) {
    console.log('socket connected')
  };

  gridData.onmessage = function(event) {
    console.log(event.data)
  };

  return (
      <div>
        <SearchAppBar></SearchAppBar>
        <Box sx={{ my: 4 , paddingTop : '5vh' , marginLeft : '5vh', marginRight : '5vh'}}>
          <Box sx={{display:'flex'}}>
            <Typography variant="h4" component="h1" gutterBottom>
            Trending
            </Typography>
            <TrendingTooltip tooltipMSG = {tooltipMSG} toolTipStyle = {toolTipStyle}></TrendingTooltip>
          </Box>
          <TrendingCarousel></TrendingCarousel>
          <StickyHeadTable openModal = {openModal}></StickyHeadTable>
          {open ? <DetailModal closeModal = {closeModal}></DetailModal> : ''}
        </Box>
      </div>
  );
}
