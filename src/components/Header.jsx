import logo from "./../images/logo-header.png";
import IconsSoc from "./IconsSoc";
const Header = () => {
  return (
    <div className="header-pos">
      <img
        className="logo"
        src={logo}
        alt="Logo"
      />
      <IconsSoc />
    </div>
  );
};
export default Header;
