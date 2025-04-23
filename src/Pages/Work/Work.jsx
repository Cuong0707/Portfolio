import React from 'react';
import './Work.css';
import WorkTag from '../../Component/WorkTag/WorkTag';
import { useTranslation } from 'react-i18next';
const Works = [
    {
        title: "Vioacademy",
        content: "VioAcademy là nền tảng giáo dục trực tuyến tích hợp, hỗ trợ học viên tiếp cận các khóa học từ cơ bản đến nâng cao trong lĩnh vực công nghệ thông tin. Dự án kết hợp giữa React cho frontend và Spring Boot cho backend, đảm bảo tốc độ phản hồi nhanh và bảo mật dữ liệu. Hệ thống quản lý khóa học, đăng ký tài khoản và giao bài kiểm tra đều được xử lý hoàn chỉnh với Java và MySQL.",
        techTags: ["Wordpress", "HTML", "CSS", "JavaScript", "PHP"],
        link:"http://vioacademy.edu.vn/"
    },
    {
        title: "Project 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus.",
        techTags: ["React", "Spring Boot", "Java", "MySQL"],
        // link:"https://myshop-gray.vercel.app/"
    },
    {
        title: "Project 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus.",
        techTags: ["React", "Spring Boot", "Java", "MySQL"],
        // link:'https://c-travel.vercel.app/'
    },
];
const Work = () => {
    const { t } = useTranslation();
    return (
        <div className='work-container'>
            <div className='title'>
                <p>{t('work')}</p>
            </div>
            <p>{t('workTitle')}</p>
            <div className='work-list'>
                {Works.map((work, index) => (
                    <WorkTag
                        key={index}
                        title={work.title}
                        content={work.content}
                        techTags={work.techTags}
                        reverse={index % 2 !== 0} 
                        link={work.link} 
                    />
                ))}
            </div>

        </div>
    );
};

export default Work;