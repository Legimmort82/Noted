import './NavBar.css'
import LastNote from './LastNote'
import Folder from './Folder'
import logo from "@/assets/images/logo.png"
import plus from "@/assets/images/plus.png"
import search from "@/assets/images/search.png"
import { Link} from "react-router-dom";

function NavBar() {
  return (
    <div className='NavBar'>
      <div className="HeadNav">
        <Link to={"/"}>
        <img src={logo} alt="" className='logo' />
        </Link>
        <img src={search} alt="" className='search' />
      </div>
      <Link to="/note/0">
      <button className="NewNote">
        <img src={plus} alt="" className='plus' />
        <span>یادداشت جدید</span>
      </button>
      </Link>
      <LastNote/>
      <Folder/>
    </div>
  )
}

export default NavBar