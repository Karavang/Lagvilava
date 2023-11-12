import facebook from "../images/icons/facebook.png";
import gmail from "../images/icons/gmail.png";
import inst from "../images/icons/inst.png";
const IconsSoc = () => {
  return (
    <ul className="flexator">
      <li className="footer-icons">
        <img src={inst} />
      </li>
      <li className="footer-icons">
        <img src={facebook} />
      </li>
      <li className="footer-icons">
        <img src={gmail} />
      </li>
    </ul>
  );
};
export default IconsSoc;
