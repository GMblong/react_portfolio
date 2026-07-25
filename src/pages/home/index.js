import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const generateStars = (num) => {
  const stars = [];
  for (let i = 0; i < num; i++) {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 2 + 1}s, ${Math.random() * 5 + 5}s linear infinite`,
    };
    stars.push(<div key={i} className="star" style={style}></div>);
  }
  return stars;
};

export const Home = () => {
  const { t, i18n } = useTranslation();
  const introdata = t('introdata', { returnObjects: true });
  const meta = t('meta', { returnObjects: true });
  
  // State untuk theme (agar gambar bisa ganti)
  const [currentTheme, setCurrentTheme] = useState(document.documentElement.getAttribute('data-theme') || 'dark');

  useEffect(() => {
    // Observer untuk memantau perubahan data-theme di elemen <html>
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setCurrentTheme(document.documentElement.getAttribute('data-theme'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  console.log(introdata.your_img_url); // Untuk memastikan URL benar
  
  // Memaksa Typewriter merender ulang setiap kali bahasa berubah
  const typeWriterKey = i18n.language; 

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="stars">
            {generateStars(100)}
          </div>
          <div className="h_bg-image-wrapper order-1 order-lg-2 h-100" style={{ width: '50%', height: '100%' }}>
            <div
              className="h_bg-image h-100"
              style={{
                backgroundImage: `url(${currentTheme === 'light' ? introdata.your_img_url_light : introdata.your_img_url})`,
                position: "relative",
                zIndex: 1, // Ensure the background image is above the stars
                width: '100%'
              }}
            ></div>
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x intro-title">
                  {introdata.title}
                </h2>
                <h1 className="fluidz-48 mb-1x type-wrap">
                  <span className="type-prefix">{t('home.prefix')} </span>
                  <Typewriter
                    key={typeWriterKey}
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                        introdata.animated.sixth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                      wrapperClassName: "type-text",
                      cursorClassName: "type-cursor"
                    }}
                  />
                </h1>
                <p className="mb-1x intro-desc">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/about" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      {t('home.btn_about')}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      {t('home.btn_contact')}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
