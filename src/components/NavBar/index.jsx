import React, { useContext } from 'react'
import './NavBar.css'
import LastNote from './LastNote'
import More from './More'
import Folder from './Folder'
import { noteProvide } from '@/providers/NoteProvider'

function NavBar() {
  const value = useContext(noteProvide)
  const handleCreate = () => {
  value.handleCreateNote()
  }
  return (
    <div className='NavBar'>
      <div className="HeadNav">
        <img src="./src/assets/images/logo.png" alt="" className='logo' />
        <img src="./src/assets/images/search.png" alt="" className='search' />
      </div>
      <button className="NewNote" onClick={handleCreate}>
        <img src="./src/assets/images/plus.png" alt="" className='plus' />
        <span>یادداشت جدید</span>
      </button>
      <LastNote/>
      <Folder/>
      {/* <More/> */}
    </div>
  )
}

export default NavBar