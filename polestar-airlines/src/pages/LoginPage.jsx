import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="logo">
          <span className="logo__star">&#10038;</span>
          <span className="logo__text">Pole Star</span>
        </Link>
        <h1>Welcome back</h1>
        <p className="auth-sub">Log in to manage your bookings.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" required />
          </label>
          <button type="submit" className="btn btn--solid btn--lg">
            Log in
          </button>
        </form>

        <p className="auth-switch">
          New to Pole Star? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
