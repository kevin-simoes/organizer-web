import Logo from "../assets/icons/logo.svg"
import "./Header.css"
import "../styles/responsive.css";

const Header = () => {
  return (
    <>
            <header>
              <span>
                <img src={Logo} />
                <h3>Organizer Web</h3>
              </span>
      
              <div>
                <a href="https://kevin-simoes.github.io/organizer-landingpage/">Landing Page</a>
              </div>
            </header>
    </>
  )
}

export default Header
