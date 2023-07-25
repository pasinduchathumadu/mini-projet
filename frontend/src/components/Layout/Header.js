import React from "react";
import {AppBar, Box, Toolbar, Typography } from '@mui/material'

const Header = () =>{
    return (
        <div>
            <Box>
                <AppBar component={"nav"}  sx={{backgroundColor:"black"}}>
                    <Toolbar>
                        <Typography>My Resturant</Typography>

                    </Toolbar>
                </AppBar>

            </Box>


        </div>
    )
}

export default Header