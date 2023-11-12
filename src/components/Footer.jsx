import "../../main.css";
import facebook from "../images/icons/facebook.png";
import gmail from "../images/icons/gmail.png";
import inst from "../images/icons/inst.png";
import mas from "../images/img/footer/mas.png";
import nova from "../images/img/footer/nova.svg";
import prvt from "../images/img/footer/prvt.png";
import visa from "../images/img/footer/visa-512.webp";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__pay">
            <div className="pay__title">Приймаємо до оплати</div>
            <div className="pay__images">
              <img
                src={prvt}
                alt=""
              />
              <img
                src={visa}
                alt=""
              />
              <img
                src={mas}
                alt=""
              />
              <img
                src={nova}
                alt=""
              />
            </div>
          </div>

          <div className="footer__menu__item">
            <div className="menu__item__title">МИ В СОЦІАЛЬНИХ МЕРЕЖАХ</div>
            <img
              src=""
              alt=""
            />

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

            <div className="footer__info">
              <div className="info__tel">+38-(096)-899-16-67</div>
              <div className="info__post">book1cases@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
