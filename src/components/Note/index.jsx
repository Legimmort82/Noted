import React from 'react'
import './Note.css'
function Note() {
  return (
    <div className='Note'>
      <div className="CenterContent">
        <img src="./src/assets/images/Big.png" alt="" className='bigimg' />
        <p className='Title'>یک یادداشت را برای نمایش انتخاب کنید</p>
        <p>از لیست سمت راست یک يادداشت را انتخاب کنید، یا یک یادداشت جدید </p>
        <span>ایجاد کنید</span>
      </div>
    </div>
  )
}

export default Note