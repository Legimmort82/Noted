import React from 'react'
import './LastNote.css'
import NavBarItem from '../NavBarItem/NavBarItem';

const lastNotes = [
    {
        note: "هدفم برای سال جدید",
    },
    {
        note: "کتاب هایی که میخوام بخونم",
    },
    {
        note: "خلاصه جلسه ۱۲ صدکدرز",
    }
];

function LastNote() {
  return (
    <section className="last-note-container">
      <h5>آخرین یادداشت‌ها</h5>

      <div className="last-notes">
        {lastNotes.map((item) => {
          return <NavBarItem key={item.note} text={item.note} 
          icon='./src/assets/images/doc.png'
          />;
        })}
      </div>
    </section>
  );
}

export default LastNote