import { NavLink, Link } from 'react-router';
export default function Header() {
    return (
        <>
        <header className="navbar" role="banner">
  <div className="navbar__container">
    <a href="#" className="navbar__brand">
      Music <span>Collector</span> 
    </a>
    {/* <button
      className="navbar__toggle"
      id="navbarToggle"
      aria-label="Toggle navigation"
      aria-controls="navbarMenu"
      aria-expanded="false"
    >
      <span className="bar" />
    </button> */}
    <nav
      id="navbarMenu"
      className="navbar__menu"
      role="navigation"
      aria-labelledby="navbarToggle"
    >
      <ul className="navbar__list">
        
        <li className="navbar__item">
          <Link to="/" className="navbar__link navbar__link--active">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Catalog
          </a>
        </li>
         <li className="navbar__item">
          <a href="#" className="navbar__link">
            My Collection
          </a>
        </li>
        <li className="navbar__item">
          <Link to="/register" className="navbar__link">
            Register
          </Link>
        </li>
        <li className="navbar__item navbar__item--cta">
          <Link to="/login" className="navbar__link navbar__link--cta">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>

        </>
    );
}