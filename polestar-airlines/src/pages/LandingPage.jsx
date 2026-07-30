import { Link } from "react-router-dom";
import Clouds from "../components/Clouds";
import Planes from "../components/Planes";
import OffersPopup from "../components/OffersPopup";
import AirportMap from "../components/AirportMap";
import AirportDetails from "../components/AirportDetails";
import "../styles/landing.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <header className="hero">
        <Clouds />
        <Planes />

        <nav className="navbar">
          <div className="logo">
            <span className="logo__star">&#10038;</span>
            <span className="logo__text">Pole Star</span>
          </div>
          <div className="nav-actions">
            <Link to="/login" className="btn btn--ghost">
              Log in
            </Link>
            <Link to="/signup" className="btn btn--solid">
              Sign up
            </Link>
          </div>
        </nav>

        <div className="hero-copy">
          <p className="hero-eyebrow">Domestic travel, India</p>
          <h1>
            Fly by the star that
            <br />
            never loses its way.
          </h1>
          <p className="hero-sub">
            Book flights across every corner of India — on time, every time.
          </p>
          <div className="hero-actions">
            <Link to="/signup" className="btn btn--solid btn--lg">
              Start booking
            </Link>
            <a href="#map" className="btn btn--ghost btn--lg">
              Explore airports
            </a>
          </div>
        </div>

        <div className="runway" aria-hidden="true" />
        <OffersPopup />
      </header>

      <AirportMap />
      <AirportDetails />

      <footer className="footer">
        <div className="logo logo--footer">
          <span className="logo__star">&#10038;</span>
          <span className="logo__text">Pole Star</span>
        </div>
        <p>Domestic flights across India. &copy; {new Date().getFullYear()} Pole Star Airlines.</p>
      </footer>
    </div>
  );
}
