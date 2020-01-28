// **************
// FOOTER COMPONENT 
// Functional component 
// **************

import React from 'react'

function Footer() {
  return (
    <div className="Footer">
     <p>&copy; Samantha Russell</p>
     <p>Horoscopes Powered By <a href="http://ohmanda.com/api/horoscope/" 
        target="_blank" rel="noopener noreferrer" >Astrology API</a></p>
     <p>Images Powered By <a href="https://astrostyle.com/zodiac-signs/" 
        target="_blank" rel="noopener noreferrer" >Astro Style</a></p>
    </div>
  )
}

export default Footer
