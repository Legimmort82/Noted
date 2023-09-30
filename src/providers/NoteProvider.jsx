import { createContext, useState } from "react";
const noteProvide = createContext();
const initialNotes = [
  {
    id: 1,
    title: "خلاصه جلسه ۱۲ صدکدرز ",
    description: `  دیزاین یه ماشین حساب رو پیاده کردیم و مروری بر مطالب گذشته شد.
    دیزاین ماشین حساب شبیه ماشین حساب آیفون بود.
    مطالبی که مرور کردیم:
    - html tags
    - css flex
    - dom
    - functions
    - event listener
    
    در ادامه GIT رو نصب کردیم و با دستورات زیر name, email رو کانفیگ کردیم:
    git config --global user.name "FIRST_NAME LAST_NAME"
    git config --global user.email "MY_NAME@example.com"
    
    برای کامیت کردن، ابتدا باید تغییرات رو با دستور زیر به stage اضافه کنیم:
    git add .
    بعد برای کامیت کردن تغییرات تو stage دستور زیر رو استفاده می‌کنیم:
    git commit -m "this is my message for changes"
    
    برای کلون کردن یک ریپازیتوری از دستور زیر استفاده می‌کنیم:
    git clone https://... `,
    date: "۱۸ شهریور ۱۴۰۲",
    color: "#4C86A8",
  },
  {
    id: 2,
    title: "کتاب هایی که میخواهم بخونم",
    description: "کتابخونه نمیشه شب...",
    date: "۱ شهریور ۱۴۰۲",
    color: "#38A3A5",
  },
  {
    id: 3,
    title: "هدف من برای سال جدید",
    description: "اولین هدفم اینکه بتونم...",
    date: "۲ فروردین ۱۴۰۲",
    color: "#8377D1",
  },
  {
    id: 4,
    title: " سال جدید",
    description: "اولین هدف",
    date: "۲ فروردین ۱۴۰۲",
    color: "#8377D1",
  },
];
const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const updateNote = (newDescription) => {
    const newNotes = notes.map((item) => {
      if (item.id !== selectedNoteId) {
        return item;
      }
      item.description = newDescription;
      return item;
    });
    setNotes(newNotes);
  };
  const handleCreateNote = () => {
    setSelectedNoteId(selectedNoteId === 0 ? null : 0);
  };
  const value = {
    updateNote,
    selectedNoteId,
    setSelectedNoteId,
    notes,
    handleCreateNote,
  };
  return <noteProvide.Provider value={value}>{children}</noteProvide.Provider>;
};

export { NoteProvider, noteProvide };