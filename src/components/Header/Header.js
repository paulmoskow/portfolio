import { useLocation, NavLink } from 'react-router-dom';

import './Header.css';
import logo from '../../images/pm_logo.svg';
import github from '../../images/github-icon.svg';
import telegram from '../../images/telegram-icon.svg';
import email from '../../images/email-icon.svg';

function Header() {

  const location = useLocation();

  function sendEmail() {
      const mailtoLink = `mailto:pavel.moskov@gmail.com`;
      window.location.href = mailtoLink;
  };

  return (
    <header className="header">
      {location.pathname === '/portfolio/' ? (
        <>
          <div className="header__logo" data-info="Use my contacts for more details">
            <img className="header__logo-icon" src={logo} alt="Logo Paulmoskow" />
            <span className="header__logo-icon_sibling">&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;&nbsp;&nbsp;</span>
            <h1 className="header__logo-text">
              <span className="header__logo-text_zoom">P</span>
              <span className="header__logo-text_zoom">a</span>
              <span className="header__logo-text_zoom">v</span>
              <span className="header__logo-text_zoom">e</span>
              <span className="header__logo-text_zoom">l </span> 
              <span className="header__logo-text_zoom">M</span>
              <span className="header__logo-text_zoom">o</span>
              <span className="header__logo-text_zoom">s</span>
              <span className="header__logo-text_zoom">k</span>
              <span className="header__logo-text_zoom">o</span>
              <span className="header__logo-text_zoom">v</span>
              <br/>
              <span className="header__logo-text_small">web engineer</span>
            </h1>
            <span className="header__logo-icon_sibling">&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;&nbsp;&nbsp;</span>
          </div>
          <nav className="header__contacts" data-description="Contact me via Email, Telegram or GitHub">
            <img alt="E-mail" className="link header__link" src={email} onClick={sendEmail} />
            <a href="https://t.me/paulmoskow" className="link" target="_blank"><img alt="Telegram" className="header__link" src={telegram} /></a>
            <a href="https://github.com/paulmoskow" className="link" target="_blank"><img alt="GitHub" className="header__link" src={github} /></a>
          </nav>
        </>
      ) : (
        <>
          <NavLink className="link" to="/portfolio/"><nav className="header__nav-text">&larr; go back</nav></NavLink>
        </>
      )
    }

    </header>
  );
}

export default Header;

