import React from 'react'

function Footer({route}) {
  return (
    <>
    {route == "/" ? null : (
      <footer>
          Diciptakan dengan ☕ dan 💟 oleh: <br />
          Ihza MZ
      </footer>
      )}
    </>
  )
}

export default Footer