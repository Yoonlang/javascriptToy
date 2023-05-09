import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div class="header header_left">
        <Link to={`/web`} class="menu_name" id="menu_home">
          HOME
        </Link>
      </div>
      <div class="header header_right">
        <Link to={`/web/signup`} class="menu_name" id="menu_signup">
          SIGNUP
        </Link>
      </div>
    </header>
  );
};

export default Header;
