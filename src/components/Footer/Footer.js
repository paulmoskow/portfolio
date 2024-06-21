import './Footer.css';

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">&copy; {year} designed by paulmoskow</p>
    </footer>
  )
}

export default Footer;