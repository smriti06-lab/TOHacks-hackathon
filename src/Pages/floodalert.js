import React from 'react'
import { BackHeader, Headername, Box, MyLine } from './PageElements';
import './animations/raining.css';
import img from './photos/stormypic.jpg';

function Floodalert() {
    return (
        <div>
            {/* the rain effect */}
            <Box className = "rain" />
            <MyLine />
            <BackHeader style={{ backgroundImage: `url(${img})` }}> 
                <Headername> Flood Alert  </Headername>
            </BackHeader>
            
        </div>
    )
}

export default Floodalert
