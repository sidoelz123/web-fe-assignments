import React from 'react'

function Footer({route}) {
  return (
    <>
    {route == "/" ? null : (
      <footer>
        <p style={{textAlign:"center"}}>
          Build with ☕ dan 💟 by Ihza Maulana Zakiya 
        </p>  
      </footer>
      )}
    </>
  )
}

export default Footer