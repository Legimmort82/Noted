import React from 'react'
import './NavBar.css'
import LastNote from './LastNote/LastNote'
import More from './More/More'
import Folder from './Folder/Folder'

function NavBar() {
  return (
    <div className='NavBar'>
      <div className="HeadNav">
        <img src="./src/assets/images/logo.png" alt="" className='logo' />
        <img src="./src/assets/images/search.png" alt="" className='search' />
      </div>
      <div className="NewNote">
        <img src="./src/assets/images/plus.png" alt="" className='plus' />
        <span>یادداشت جدید</span>
      </div>
      <LastNote/>
      <Folder/>
      <More/>
    </div>
  )
}

export default NavBar