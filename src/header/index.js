import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import { useTranslation } from "react-i18next";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const { t, i18n } = useTranslation();
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const changeLanguage = () => {
    const langs = ['en', 'id', 'ja', 'zh'];
    const currentIndex = langs.indexOf(i18n.language.split('-')[0]) !== -1 ? langs.indexOf(i18n.language.split('-')[0]) : 0;
    const nextIndex = (currentIndex + 1) % langs.length;
    i18n.changeLanguage(langs[nextIndex]);
  };

  const getLangLabel = () => {
    const lang = i18n.language.split('-')[0];
    if (lang === 'id') return 'ID';
    if (lang === 'ja') return 'JA';
    if (lang === 'zh') return 'ZH';
    return 'EN';
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {t('logotext')}
          </Link>
          <div className="d-flex align-items-center">
          <button className="nav_ac border-0 bg-transparent fw-bold me-3 lang-btn" onClick={changeLanguage} style={{fontSize: '1rem', cursor: 'pointer', color: 'var(--text-color)'}}>
            {getLangLabel()}
          </button>
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">{t('nav.home')}</Link>
                  </li>
                  {/* <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li> */}
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">{t('nav.about')}</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3">{t('nav.contact')}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.instagram}>Instagram</a>
            <a href={socialprofils.github}>Github</a>
            <a href={socialprofils.twitter}>X</a>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
