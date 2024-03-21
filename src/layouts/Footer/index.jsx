import { Link } from "react-router-dom";

const FooterLink = ({ text, to }) => (
  <Link className="footer-link" to={to}>
    {text}
  </Link>
);

const Footer = () => {
  return (
    <div className="footer flex gap-xl items-center p-y-md">
      <FooterLink to="/terms-conditions" text="Terms & Conditions" />
      <FooterLink to="/privacy-policy" text="Privacy Policy" />
      <FooterLink to="/faqs" text="FAQ" />
      <FooterLink to="/contact-us" text="Contact Us" />
    </div>
  );
};

export default Footer;
