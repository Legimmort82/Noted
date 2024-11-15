import "@/components/NavBar/Navbar.css";
import NavBarItem from "./NavBarItem";
import favorite from "@/assets/images/favorite.png"
import deleted from "@/assets/images/delete.png"

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
                  ? {favorite}
                  : {deleted}
              }
            />
          );
        })}
      </div>
    </section>
  );
}

export default More;
