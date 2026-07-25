// Import gambar dan data yang dibutuhkan
const logotext = "ANDI";
const meta = {
    title: "Andi Arif R.",
    description: "I’m Andi Arif R. data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Andi Arif R.",
    animated: {
        first: "Creative Graphic Designer",
        second: "Data-Driven Problem Solver",
        third: "Tech-Savvy Web Developer",
    },
    description: "Informatics Engineering graduate bridging the gap between creative design and IT solutions. Specialized in visual storytelling, technical support, and digital optimization. Ready to bring adaptable skills and innovative thinking to a dynamic team.",
    your_img_url: "/assets/images/profile.png",
};

const dataabout = {
    title: "Summary",
    greeting: "Hello everyone,",
    aboutme: "I'm Andi, a versatile professional with a strong foundation in IT and a creative edge in graphic design. My journey spans from hands-on IT support to crafting compelling digital marketing campaigns and evaluating AI data solutions. I excel at translating complex requirements into engaging, user-focused experiences. Driven by continuous learning and data-backed strategies, I am passionate about optimizing digital interactions—whether through design, ad personalization, or technical problem-solving. Let's collaborate to build impactful solutions that resonate and deliver results.",
    question: "Ready to create something impactful together?",
};

const worktimeline = [{
        jobtitle: "Automation Architect & Content Creator",
        where: "YLive Studio",
        date: "2025 - Present",
    },
    {
        jobtitle: "IT Infrastructure & Solutions Specialist",
        where: "PT. Afresto Sistem Indonesia",
        date: "2020 - Present",
    },
    {
        jobtitle: "Personalized Internet Ads Asessor",
        where: "Telus International AI Data Solution",
        date: "2019 - 2024",
    },
    {
        jobtitle: "Ads Quality Rater",
        where: "Welocalized",
        date: "2023 - 2023",
    },
    {
        jobtitle: "Search Engine Evaluator",
        where: "Telus International AI Data Solution",
        date: "2019 - 2019",
    },
    {
        jobtitle: "Visual Brand Designer",
        where: "PT. Kaisa Rossie Tour & Travel",
        date: "2017 - 2020",
    },
];

const skills = [{
        name: "IT Infrastructure & Support",
        value: 90,
    },
    {
        name: "HTML5, CSS3 & Responsive Design",
        value: 90,
    },
    {
        name: "Graphic Design & Visual Communication",
        value: 85,
    },
    {
        name: "AI Prompt Engineering & Evaluation",
        value: 85,
    },
    {
        name: "PHP & Relational Databases (MySQL)",
        value: 80,
    },
    {
        name: "Python (Data Processing & Scripting)",
        value: 80,
    },
    {
        name: "JavaScript (ES6+) & React.js",
        value: 75,
    },
    {
        name: "Digital Marketing Analytics & SEO",
        value: 70,
    },
];

// const services = [{
//         title: "UI & UX Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Mobile Apps",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Wordpress Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
// ];

const certificates = [{
        title: "Cloud Practitioner Essentials",
        description: "Dicoding Indonesia",
    },
    {
        title: "Prediction Test of TOEFL",
        description: "Bina Bahasa Jaya Universitas Semarang",
    },
    {
        title: "Cisco 'CCNA Routing and Switching: Introduction to Networks'",
        description: "Cisco Networking Academy",
    },
    {
        title: "Motion Graphic 2D - Certificate of Competency",
        description: "Lembaga Sertifikasi Profesi TIK Indonesia",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "andiarifrahmatullah@gmail.com",
    YOUR_FONE: "+62 89609499706",
    description: "Thank you for stopping by! Whether you have a project in mind, need technical expertise, or just want to explore potential collaborations, I'm always open to new opportunities. Reach out via email or phone, and let's discuss how we can work together.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_78pt4qw",
    YOUR_TEMPLATE_ID: "template_dnnjedh",
    YOUR_USER_ID: "Dt8CDcJ-UAlaPc0C8",
};

const socialprofils = {
    github: "https://github.com/GMblong",
    instagram: "https://www.instagram.com/proofimhere_?igsh=MXVvZjg3dHZrbWQ4NQ==",
    linkedin: "https://www.linkedin.com/in/andi-arif-rahmatullah-86722b176/",
    twitter: "https://x.com/anaknomordua_",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    certificates,
    // services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
