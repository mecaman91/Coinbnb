import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createStore } from 'redux'
import SearchAppBar from './component/header.js'
import Carousel from './component/carousel.js'
import StickyHeadTable from './component/table.js'
import CustomizedDialogs from './component/modal'

import './coinbnb.css'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

store.dispatch({ type: 'INCREMENT' })

export default function App() {
  
  return (
      <div>
        <SearchAppBar className='header'></SearchAppBar>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
          Trending
          </Typography>
          <Carousel></Carousel>
          <StickyHeadTable></StickyHeadTable>
          <CustomizedDialogs></CustomizedDialogs>
        </Box>
      </div>
  );
}
