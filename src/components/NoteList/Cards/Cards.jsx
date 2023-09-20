import { useState } from "react";
import "./Cards.css";
import CardsItem from "../CardsItem";

const cards = [
  {
    id: 1,
    title: "خلاصه جلسه ۱۲ صدکدرز ",
    description: "دیزاین یه ماشین حساب رو...",
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
];
function Cards() {
    const [selected, setSelected] = useState(null);

  return (
    <div className="card-notess">
      {cards.map((item) => {
        return (
          <CardsItem
            key={item.title}
            selected={item.id === selected}
            onClick={() => setSelected(item.id)}
            title={item.title}
            description={item.description}
            date={item.date}
            color={item.color}
          />
        );
      })}
    </div>
  );
}

export default Cards;
