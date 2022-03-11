import { Link } from "react-router-dom"
import Logo from "../Logo.png"

const Nav = () => {
    return (
        <div className="footer">
            <Link to="/"><img className="logo" src={Logo} alt="" /></Link>
        </div>
    )
}

export default Nav