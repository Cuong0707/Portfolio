import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';
const About = () => {
    const { t } = useTranslation();
    return (
        <div className='about'>
            <div className='title'>
                <p>{t('about')}</p>
            </div>
            <div className='about-container'>
                <div className="about-img">
                    <img loading='lazy' src="/img/avt2.avif" alt="Avatar" />
                </div>
                <div className="about-content">
                    <h1>{t('aboutTitle')}</h1>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: t('aboutText1') }} />
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: t('aboutText2') }} />
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: t('aboutText3') }} />
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: t('aboutText4') }} />
                    <br />
                    <h3>{t('quickFacts')}</h3>
                    <p>{t('fact1')}</p>
                    <p>{t('fact2')}</p>
                    <p>{t('fact3')}</p>
                    <p>{t('fact4')}</p>
                </div>
            </div>
        </div>
    );
};

export default About;