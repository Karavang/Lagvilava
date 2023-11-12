import logo from "./../images/logo-header.png";
const Header = () => {
  return (
    <div className="header-pos">
      <img
        className="logo"
        src={logo}
        alt="Logo"
      />
      <ul className="social-icons">
        <li>aboba</li>
        <li>aboba</li>
        <li>aboba</li>
      </ul>
    </div>
  );
};
export default Header;
