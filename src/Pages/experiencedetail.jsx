import { useParams } from "react-router-dom";
import experienceData from "../../src/Data/experienceData.json";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import './experiencedetail.css';
const ExperienceDetail = () => {
    const { t } = useTranslation();
    const { tag } = useParams();
    const experience = experienceData.find(exp => t(exp.tag) === tag);
    const [theme, setTheme] = useState('light');
    const [selectedImages, setSelectedImages] = useState([]);
    //View result
    const handleResultClick = (images) => {
        setSelectedImages(images); // cập nhật div phía dưới
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
                            <li key={index}>{t(desc)}</li>
                        ))}
                    </ul>
                </div>
                <div className="experience-detail-description-technologies">
                    <h2>Technologies</h2>
                    <ul className="experience-detail-technologies">
                        {experience.technologies.map((tech, index) => (
                            <li key={index}>{t(tech)}</li>
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
                            <th>Time</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {experience.workList.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.work}</td>
                                <td>{item.status}</td>
                                <td>{item.time}</td>
                                <td><button onClick={() => handleResultClick(item.img)}>result</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <section id="work-result">
                <h2 >📸 Hình ảnh công việc</h2>
                {selectedImages.length >= 0 && (
                    <div>
                        {selectedImages.map((src, i) => (
                            <img
                                src={src}
                                alt={`result-${i}`}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
export default ExperienceDetail;