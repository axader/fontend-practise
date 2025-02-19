import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Frontend
        Practice.
      </p>
    </footer>
  );
}

export default Footer;
