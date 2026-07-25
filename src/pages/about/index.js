import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Ages from "../../components/ages";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  const meta = t('meta', { returnObjects: true });
  const dataabout = t('dataabout', { returnObjects: true });
  const worktimeline = t('worktimeline', { returnObjects: true });
  const skills = t('skills', { returnObjects: true });
  const certificates = t('certificates', { returnObjects: true });

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {t('about.title')} | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{t('about.title')}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t('about.age_title')}</h3>
          </Col>
          <Col lg="7">
            <div>
              <Ages />
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="summary-text">
              <p>{dataabout.greeting}</p>
              <p>{dataabout.aboutme}</p>
              <p>{dataabout.question}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t('about.journey')}</h3>
          </Col>
          <Col lg="7">
            <div className="timeline-wrapper">
              {worktimeline.map((data, i) => {
                return (
                  <div className="timeline-item" key={i}>
                    <div className="timeline-marker">
                      <div className="timeline-dot"></div>
                      <div className="timeline-line"></div>
                    </div>
                    <div className="timeline-content">
                      <span className="timeline-date">{data.date}</span>
                      <h4 className="timeline-title">{data.jobtitle}</h4>
                      <p className="timeline-company">{data.where}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t('about.skills')}</h3>
          </Col>
          <Col lg="7">
            <div className="skills-grid">
              {skills.map((data, i) => {
                return (
                  <div className="skill-item" key={i}>
                    <div className="skill-info">
                      <span className="skill-name">{data.name}</span>
                      <span className="skill-value">{data.value}%</span>
                    </div>
                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-fill"
                        style={{
                          width: `${data.value}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        {/* <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">{t('about.certs')}</h3>
          </Col>
          <Col lg="7">
            <div className="cert-grid">
              {certificates.map((data, i) => {
                return (
                  <div className="cert-card" key={i}>
                    <div className="cert-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <div className="cert-content">
                      <h5 className="cert-title">{data.title}</h5>
                      <p className="cert-desc">{data.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
