import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel autoPlay={true} indicators={false} 
        swipe = {true} 
        cycleNavigation = {true}
        navButtonsAlwaysVisible = {false}
        fullHeightHover= {true}
        animation = 'slide'
        duration = {500}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }

        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}