import React from "react";
import Navigation from '../Navigation'
import './layout.css'
import { Pane } from 'evergreen-ui'

// Generates site layout on each page
// location prop should ALWAYS equal this.constructor.name
const Layout = ({ children, location }) => {
    return (
        <Pane
            clearfix
            height='100vh'
            width='100vw'
            display='flex'
            flexDirection='row'
            justifyContent='flex-start'
        >
            <Navigation location={location} />
            <Pane 
                className='disableScrollbar'
                width='30vw'
                minWidth='600px'
                background="#f0f8ff"
                display='flex'
                flexDirection='column'
                padding="1em"
                overflowY="scroll"
                overflowX="hidden"
                scrollbarWidth="none"
            >
                {children}
            </Pane>
        </Pane>
    )

}

export default Layout

