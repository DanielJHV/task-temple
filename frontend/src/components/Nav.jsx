function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <a className="nav__link" href="/register">
            Register
          </a>
        </li>
        <li>
          <a className="nav__link" href="/login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
