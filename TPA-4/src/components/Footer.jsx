import React from 'react'

function Footer({route}) {
  return (
    <>
    {route == "/" ? null : (
      <footer style={{textAlign:"center", padding:"2rem 0"}}>
        <p>Build with ☕ and 🚬 by Ihza Maulana Zakiya</p>
      </footer>
      )}
    </>
  )
}

export default Footer