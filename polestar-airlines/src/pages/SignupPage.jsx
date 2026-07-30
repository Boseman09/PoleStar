import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function SignupPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="logo">
          <span className="logo__star">&#10038;</span>
          <span className="logo__text">Pole Star</span>
        </Link>
        <h1>Create your account</h1>
        <p className="auth-sub">Join Pole Star to book domestic flights across India.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Full name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" required />
          </label>
          <button type="submit" className="btn btn--solid btn--lg">
            Sign up
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
