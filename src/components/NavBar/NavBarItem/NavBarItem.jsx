import "./NavBarItem.css";
function NavBarItem(props,selected,onClick) {
  const style = {
    backgroundColor: selected ? "white" : "#F8EEE2",
  };
  return (
    <div className="nav-bar-item" style={style} onClick={onClick}>
      <img src={props.icon} className="docicon" />
      {props.text}
    </div>
  );
}

export default NavBarItem;
