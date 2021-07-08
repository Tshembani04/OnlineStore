import React from 'react'
import './Footer.Styles.scss'

function Footer() {
    //Getting the year to update automatically and then call the function. alt 0169
    // This footer is plane white for  millions of reasons, dont ask me because its clean 
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            {year} © All Things Cozzy 
            <h4> sWS.LLC</h4>
        </div>
    )
}

export default Footer
