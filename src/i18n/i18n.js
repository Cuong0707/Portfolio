import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      darkMode: "Dark",
      lightMode: "Light",
      home: "Home",
      name: "Huynh Nhat Cuong",
      im: "I'm a",
      welcome: "Welcome to my bilingual website!",
      sortDescription: "I'm a full stack developer (React.js & Springboot) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive.",
      Available: "Available for new projects",
      about: "About",
      aboutTitle: "Curious about me? Here you have it:",
      aboutText1: "I'm a passionate, self-taught designer and developer who specializes in full stack development (React.js & Spring Boot). I care deeply about bringing both the <strong>technical and visual</strong> aspects of digital products to life — whether it's crafting a seamless user experience, fine-tuning pixel-perfect designs, or writing clean, performant, and maintainable code.",
      aboutText2: "My journey into web development began in <strong>2018</strong>, driven by curiosity and a love for building things on the web. In <strong>2021</strong>, I took it a step further by formally studying <strong>Computer Engineering</strong> at university, where I continue to grow both academically and practically.",
      aboutText3: "I'm a forward-thinking developer who enjoys working on products end-to-end — from ideation, design, to full-blown development and optimization. Whether it’s a solo passion project or a team collaboration, I love building impactful web experiences.",
      aboutText4: "When I’m not deep in code, you’ll likely find me browsing Facebook, following the journey of early-stage startups, or just recharging. I often share tech tidbits and build in public — feel free to follow me on Twitter or explore my projects on GitHub.",
      quickFacts: "Quick Facts",
      fact1: "🎓 B.E. in Computer Engineering (currently studying)",
      fact2: "🚀 Avid learner & problem solver",
      fact3: "💼 Full-time freelancer",
      fact4: "📬 Open for freelance work — feel free to reach out and say hello!",
      skill: "Skills",
      skillTitle: "The skills, tools and technologies I am really good at:",
      experience: "Experience",
      experienceTitle: "Here is a quick summary of my most recent experiences:",
      experience1Title: "Information Technology Student – FPT Polytechnic College",
      experience1Description1: "Built a full-stack web application using ReactJS and Spring Boot.",
      experience1Description2: "Worked in a team of 4 to simulate real-world development environment.",
      experience1Time: "2021-2024",
      experience2Title: "Frontend Developer (WordPress) - VIO Agency",
      experience2Description1: "Developed and customized responsive WordPress themes using HTML, CSS, and JavaScript.",
      experience2Description2: "Integrated UI designs into WordPress with page builders like Elementor and WPBakery.",
      experience2Description3: "Optimized website performance, ensuring SEO-friendly and mobile-first design.",
      experience2Description4: "Collaborated with backend developers and designers to deliver high-quality websites for clients.",
      experience2Description5: "Maintained and updated existing WordPress sites based on client requirements.",
      experience2Time: "7/2024-Present",
      work: "Projects",
      workTitle: "Here are some of the projects I have worked on:",
      footerTitle: "Get in touch",
      footerText: "What's next? Feel free to reach out to me if you are looking for a developer, or just want to say hi!",


      language: "Language",
      english: "English",
      vietnamese: "Vietnamese",
      currentLanguage: "English"
    },
  },
  vi: {
    translation: {
      darkMode: "Tối",
      lightMode: "Sáng", 
      home: "Trang Chủ",
      name: "Huỳnh Nhật Cường",
      im: "Tôi là",
      welcome: "Chào mừng bạn đến với trang web song ngữ của tôi!",
      sortDescription: "Tôi là một nhà phát triển full stack (React.js & Springboot) tập trung vào việc tạo (và đôi khi thiết kế) những trải nghiệm kỹ thuật số đặc biệt, nhanh chóng, dễ truy cập, hấp dẫn về mặt hình ảnh và đáp ứng tốt.",
      Available: "Sẵn cho các dự án mới",
      about: "Giới Thiệu",
      aboutTitle: "Bạn có muốn biết về tôi không? Đây là điều bạn cần biết:",
      aboutText1: "Tôi là một nhà thiết kế và phát triển viên tự học đam mê, chuyên về phát triển full stack (React.js & Spring Boot). Tôi rất quan tâm đến việc mang cả các khía cạnh <strong>kỹ thuật và hình ảnh</strong> của sản phẩm số vào cuộc sống — cho dù đó là tạo ra trải nghiệm người dùng liền mạch, tinh chỉnh thiết kế hoàn hảo từng pixel, hay viết mã sạch, hiệu suất cao và dễ bảo trì.",
      aboutText2: "Hành trình của tôi vào phát triển web bắt đầu từ <strong>2018</strong>, được thúc đẩy bởi sự tò mò và tình yêu với việc xây dựng những thứ trên web. Vào năm <strong>2021</strong>, tôi đã tiến xa hơn bằng cách học chính thức ngành <strong>Kỹ thuật Máy tính</strong> tại trường đại học, nơi tôi tiếp tục phát triển cả về học thuật và thực tiễn.",
      aboutText3: "Tôi là một nhà phát triển tư duy tiến bộ, thích làm việc với các sản phẩm từ đầu đến cuối — từ ý tưởng, thiết kế, đến phát triển và tối ưu hóa hoàn chỉnh. Dù là một dự án đam mê cá nhân hay một sự hợp tác trong nhóm, tôi đều yêu thích việc xây dựng những trải nghiệm web có tác động.",
      aboutText4: "Khi tôi không tập trung vào việc lập trình, bạn sẽ thấy tôi lướt Facebook, theo dõi hành trình của các công ty khởi nghiệp giai đoạn đầu, hoặc chỉ là thư giãn. Tôi thường chia sẻ các mẹo công nghệ và xây dựng trong công khai — hãy thoải mái theo dõi tôi trên Twitter hoặc khám phá các dự án của tôi trên GitHub.",
      quickFacts: "Thông tin nhanh",
      fact1: "🎓 Cử nhân Kỹ thuật Máy tính (đang học)",
      fact2: "🚀 Người học hỏi say mê & giải quyết vấn đề",
      fact3: "💼 Freelancer toàn thời gian",
      fact4: "📬 Mở cửa cho công việc freelance — hãy thoải mái liên hệ và chào hỏi!",
      skill: "Kỹ Năng",
      skillTitle: "Những kỹ năng, công cụ và công nghệ mà tôi thực sự giỏi:",
      experience: "Kinh Nghiệm",
      experienceTitle: "Dưới đây là một tóm tắt nhanh về những kinh nghiệm gần đây nhất của tôi:",
      experience1Title: "Sinh viên Công nghệ Thông tin – Trường Cao đẳng FPT Polytechnic",
      experience1Description1: "Xây dựng ứng dụng web full-stack sử dụng ReactJS và Spring Boot.",
      experience1Description2: "Làm việc trong nhóm 4 người để mô phỏng môi trường phát triển thực tế.",
      experience1Time: "2021-2024",
      experience2Title: "Nhà phát triển Frontend (WordPress) - VIO Agency",
      experience2Description1: "Phát triển và tùy chỉnh các giao diện WordPress responsive bằng HTML, CSS và JavaScript.",
      experience2Description2: "Tích hợp thiết kế giao diện người dùng vào WordPress với các trình tạo trang như Elementor và WPBakery.",
      experience2Description3: "Tối ưu hóa hiệu suất website, đảm bảo thiết kế thân thiện với SEO và di động.",
      experience2Description4: "Hợp tác với các nhà phát triển backend và nhà thiết kế để cung cấp các trang web chất lượng cao cho khách hàng.",
      experience2Description5: "Bảo trì và cập nhật các trang WordPress hiện có dựa trên yêu cầu của khách hàng.",
      experience2Time: "7/2024-Hiện tại",
      work: "Dự Án",
      workTitle: "Dưới đây là một số dự án mà tôi đã làm việc:",
      footerTitle: "Liên hệ",
      footerText: "Điều gì tiếp theo? Hãy thoải mái liên hệ với tôi nếu bạn đang tìm kiếm một nhà phát triển, hoặc chỉ muốn chào hỏi!",

      language: "Ngôn ngữ",
      english: "Tiếng Anh",
      vietnamese: "Tiếng Việt",
      currentLanguage: "Tiếng Việt"
    },
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "vi", 
    interpolation: {
      escapeValue: false 
    },
  });

export default i18n;
