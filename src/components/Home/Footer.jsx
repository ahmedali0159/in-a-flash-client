import "./Footer.css";
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
  return (
    <section>
      <div className="text-center py-5">
        <h1>Contact Us</h1>
      </div>
    <footer>
      <div className="body">
        <div className="container">
          <div className="sec about-us">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              velit iusto ipsum perspiciatis eveniet tempore magni? Cupiditate
              quibusdam corporis consectetur!
            </p>
            <ul className="social-icon">
              <li>
                <a href="facebookicon">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="linkedInIcon">
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a href="youtubeicon">
                  <YouTubeIcon />{" "}
                </a>
              </li>
              <li>
                <a href="instagram">
                  {" "}
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="blog">Blog</a>
              </li>
              <li>
                <a href="OurTeams">Our Teams</a>
              </li>
              <li>
                <a href="contactUs">Contact Us</a>
              </li>
              <li>
                <a href="shop">Shop</a>
              </li>
            </ul>
          </div>
          <div className=" sec quick-links">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="news">News</a>
              </li>
              <li>
                <a href="shop">Shop</a>
              </li>
              <li>
                <a href="license">License</a>
              </li>
            </ul>
          </div>
          <div className="sec contact-us">
            <h2>Contact us</h2>
            <ul className="info">
              <li>
                <p>
                  San Francisco <br />
                  772 East Olive Ave.Flemington, SF 08822
                </p>
              </li>
              <li>
                <p>
                  <a href="tel:+01234567890">+999 99 999</a>
                </p>
                <p>
                  <a href="tel:+01234567890">+999 99 9999</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="inaflash@.com">inaflash@.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-sec">
        <p>Copyright {new Date().getFullYear()} All Right Reserved.</p>
      </div>
    </footer>
  </section>
  );
};
