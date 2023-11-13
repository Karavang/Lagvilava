import PropTypes from "prop-types";
const Hero = ({ setIsModal }) => {
  return (
    <div className="hero-pos">
      <div className="hero">
        <h1 className="main-title">Етажерки в стилі “ПРОВАНС”</h1>{" "}
        <h3 className="delivery-h3">Доставка по всій Україні</h3>
        <button
          className="make-order-button"
          onClick={() => {
            setIsModal(true);
          }}
        >
          Замовити послугу
        </button>
      </div>
    </div>
  );
};
Hero.propTypes = {
  setIsModal: PropTypes.func.isRequired,
};
export default Hero;
