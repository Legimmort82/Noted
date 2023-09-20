import "./More.css";
import NavBarItem from "../NavBarItem/NavBarItem";

const more = [
  {
    name: "علاقه مندی ها",
  },
  {
    name: "حذف شده ها",
  },
];

function More() {
  return (
    <section className="more-note">
      <h5>بیشتر</h5>

      <div className="more-notes">
        {more.map((item, index) => {
          return (
            <NavBarItem
              key={item.name}
              text={item.name}
              icon={
                index === 0
                  ? "./src/assets/images/favorite.png"
                  : "./src/assets/images/delete.png"
              }
            />
          );
        })}
      </div>
    </section>
  );
}

export default More;
