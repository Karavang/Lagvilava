import facebook from "../images/icons/facebook.png";
import gmail from "../images/icons/gmail.png";
import inst from "../images/icons/inst.png";
const IconsSoc = () => {
  const handleInstagramClick = () => {
    window.location.href = "https://www.instagram.com/etajerki/";
  };
  const handleFacebookClick = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=100091782077322";
  };
  const handleGmailClick = () => {
    const recipientEmail = "book1cases@gmail.com";
    const subject = "Subject of the email";
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject,
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <ul className="flexator">
      <li
        className="footer-icons"
        onClick={handleInstagramClick}
      >
        <img src={inst} />
      </li>
      <li
        className="footer-icons"
        onClick={handleFacebookClick}
      >
        <img src={facebook} />
      </li>
      <li
        className="footer-icons"
        onClick={handleGmailClick}
      >
        <img src={gmail} />
      </li>
    </ul>
  );
};
export default IconsSoc;
