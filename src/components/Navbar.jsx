import s from "../components/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <li>
          <a href="/">My Message</a>
        </li>
        <li>
          <a href="/">My Profile</a>
        </li>
        <li>
          <a href="/">My Music</a>
        </li>
        <li>
          <a href="/">My Mews</a>
        </li>
        <li>
          <a href="/">My Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
