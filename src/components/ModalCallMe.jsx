import iconClose from "../images/icons/cross.png";
import CallMeFrom from "./CallMeFrom";
export default function ModalCallMe({ setIsModal }) {
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className="backdrop">
      <div className="cardback">
        <h1>Я вам передзвоню!</h1>
        <CallMeFrom closeModal={closeModal} />{" "}
        <img
          onClick={closeModal}
          src={iconClose}
          alt="close-icon"
          className="close-icon"
        />
      </div>
    </div>
  );
}
