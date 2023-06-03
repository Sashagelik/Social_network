import Logo from "../img/logo.svg";
import s from "../components/Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={Logo} alt="Logo-company" />
    </header>
  );
};

export default Header;
