import { useParams } from "react-router-dom";
import experienceData from "../../src/Data/experienceData.json";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";
import './experiencedetail.css';
import ZoomableImage from "../Tool/ZoomableImage.jsx"
const ExperienceDetail = () => {
    const { t } = useTranslation();
    const { tag } = useParams();
    const sectionRef = useRef(null);
    const experience = experienceData.find(exp => t(exp.tag) === tag);
    const [theme, setTheme] = useState('dark');
    const [selectedContent, setSelectedContent] = useState();
    //View result
    const handleResultClick = (content) => {
        setSelectedContent(content);
        scrollToSection();
    };
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.className = theme;
        }
    }, [theme]);
    if (!experience) {
        return <div>Experience not found</div>;
    }

    return (
        <div className="experience-detail-container">
            <div className="experience-detail-header">
                <img src={experience.logo} alt={t(experience.titletitleKey)} className="experience-detail-logo tag" />
                <div className="experience-detail-title tag">
                    <h2>{t(experience.titleKey)}</h2>
                    <p>{t(experience.timeKey)}</p>
                </div>
            </div>
            <div className="experience-detail-description tag">
                <div className="experience-detail-description-text">
                    <h2>Description</h2>
                    <ul>
                        {experience.descriptionKeys.map((desc, index) => (
                            <li key={index}>•{" "}{t(desc)}</li>
                        ))}
                    </ul>
                </div>
                <div className="experience-detail-description-technologies">
                    <h2>Technologies</h2>
                    <ul className="experience-detail-technologies">
                        {experience.technologies.map((tech, index) => (
                            <li key={index}><i className={tech}></i></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="experience-detail-work-list tag">
                <h2>Work List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Work</th>
                            <th>Status</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {experience.workList.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.work}</td>
                                <td>{item.status}</td>
                                <td><button onClick={() => handleResultClick(item)}>result</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <section id="work-result" ref={sectionRef}>
                {selectedContent && (
                    <div className="work-result-container">
                        <div className="work-result-description">
                            <h3>📃Danh sách dự án:</h3>
                            {selectedContent.linkDemo.map((link, i) => (
                                <a key={i} href={`https://${link}`} target="_blank" rel="noopener noreferrer">•&nbsp;{link}</a>
                            ))}
                        </div>
                        <div className="work-result-images">
                            <h3>📸 Một số hình ảnh demo: </h3>
                            {selectedContent.img.map((src, i) => (
                                <ZoomableImage
                                    key={i}
                                    src={src}
                                    alt={`result-${i}`} />
                            ))}
                        </div>

                    </div>
                )}
            </section>
        </div>
    );
}
export default ExperienceDetail;