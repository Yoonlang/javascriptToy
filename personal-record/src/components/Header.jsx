import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header header_left">
        <Link to={`/web`} className="menu_name" id="menu_home">
          HOME
        </Link>
      </div>
      <div className="header header_right">
        <Link to={`/web/signup`} className="menu_name" id="menu_signup">
          SIGNUP
        </Link>
      </div>
    </header>
  );
};

export default Header;
