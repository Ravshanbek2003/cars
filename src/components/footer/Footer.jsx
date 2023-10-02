import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top1">
          <h2>MORENT</h2>
          <p>
            Our vision is to provide convenience and <br /> help increase your
            sales business.
          </p>
        </div>
        <div className="footer-top2">
          <ul>
            <p>About</p>
            <li>
              <a href="">How it works </a>
            </li>
            <li>
              <a href="">Featured</a>
            </li>
            <li>
              <a href=""> Partnership </a>
            </li>
            <li>
              <a href="">Busines relation</a>
            </li>
          </ul>
          <ul>
            <p>Community</p>
            <li>
              <a href="">Events </a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href=""> Podcast </a>
            </li>
            <li>
              <a href="">Invite a friend</a>
            </li>
          </ul>
          <ul>
            <p>Socials</p>
            <li>
              <a href="">Discord </a>
            </li>
            <li>
              <a href="">Instagram </a>
            </li>
            <li>
              <a href="">Twitter </a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <h4>©2022 MORENT. All rights reserved</h4>
        <div className="privace">
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
