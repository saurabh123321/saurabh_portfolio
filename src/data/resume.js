import profileImg from '../assets/profile.jpg';

export const resumeData = {
    name: "Saurabh Khule",
    role: "Full-Stack Software Engineer",
    summary: "Full-Stack Software Engineer with 2+ years of development experience in enterprise-grade systems using C++, ReactJS, Java and Python. Proficient in developing reusable UI components, high-performance APIs, and automation scripts that streamline development and boost scalability. Experienced in Agile environments, CI/CD pipelines, and cross-functional collaboration.",
    contact: {
        phone: "+91 7888268378",
        email: "saurabhkhule143@gmail.com",
        location: "Pune, India",
        social: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/saurabh-khule-a8212a202/", icon: "FaLinkedin" },
            { name: "GitHub", url: "https://github.com/saurabh123321", icon: "FaGithub" },
            { name: "LeetCode", url: "https://leetcode.com/saurabh_exe/", icon: "SiLeetcode" },
            { name: "HackerRank", url: "https://www.hackerrank.com/Saurabhkhule143", icon: "FaHackerrank" },
            { name: "Instagram", url: "https://www.instagram.com/__saurabh__jain_/", icon: "FaInstagram" }
        ]
    },
    skills: {
        languages: ["C++", "Java", "Python", "JavaScript", "SQL"],
        frameworks: ["Spring Boot", "ReactJS", "Tailwind CSS", "Jest", "jUnit", "xUnit", "Git", "GWT"],
        databases: ["MySQL", "MongoDB", "Firebase", "PostgreSQL", "SQLite"],
        other: ["Agile", "Microservices", "REST APIs", "CI/CD", "AWS (Certified)", "Jenkins", "Jira", "Bitbucket"]
    },
    experience: [
        {
            title: "Associate Software Engineer",
            company: "Siemens Digital Industries Software",
            location: "Pune, Maharashtra",
            period: "July 2023 -- Sept 2025",
            description: [
                "Designed and implemented new UI features for Teamcenter using ReactJS, significantly enhancing user experience and responsiveness for enterprise users.",
                "Developed robust, modular backend APIs in C++ following a Service-Oriented Architecture (SOA) model to ensure scalable, maintainable, and loosely coupled server-client communication.",
                "Optimized critical backend APIs, reducing execution time from 85s to 2.43s (~97% improvement), enabling seamless processing of high-volume enterprise customer data.",
                "Worked in Agile sprints to deliver features with 95%+ unit test coverage using Jest, jUnit, and xUnit, and performed end-to-end UI testing with Playwright.",
                "Automated log triaging with Python, cutting manual debugging effort by over 70% and accelerating issue resolution across QA and DevOps teams.",
                "Mentored and contributed to the Build Combinations Copilot, integrating Teamcenter (C++), Python Flask, and Claude LLM APIs."
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Siemens Digital Industries Software",
            location: "Pune, Maharashtra",
            period: "July 2022 -- June 2023",
            description: [
                "Contributed to a large-scale enterprise web application, implementing new business logic and user workflows across frontend and backend.",
                "Developed server-side logic using Java and C++ to support dynamic data rendering.",
                "Collaborated with cross-functional teams to review design specs, write unit tests, and debug complex issues."
            ]
        }
    ],
    projects: [
        {
            title: "TaskMe",
            github: "https://github.com/saurabh123321/TaskManager",
            description: "A full-stack task management app with user roles, status tracking, and analytics dashboard. Built REST APIs with Spring Boot and PostgreSQL.",
            tech: ["React", "Tailwind CSS", "Java", "Spring Boot", "PostgreSQL"]
        },
        {
            title: "FilmyHub",
            link: "https://saurahub.netlify.app/",
            github: "https://github.com/saurabh123321/entertainmenthub",
            description: "Frontend app to explore trending movies/TV shows using TMDb API. Features include dynamic search, filters, cast info, and trailer links.",
            tech: ["HTML", "CSS", "JavaScript", "ReactJS"]
        },
        {
            title: "LendingCircle",
            github: "https://github.com/saurabh123321/LendingCircles",
            description: "Web application helping needy persons to borrow money from lenders. Lenders can verify mortgage and propose interest rates.",
            tech: ["HTML", "CSS", "JavaScript", "NodeJS", "MongoDB"]
        },
        {
            title: "Quick Donar",
            github: "https://github.com/saurabh123321/QuickDonar",
            description: "Web application to simplify finding blood donors during emergencies via email requests.",
            tech: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"]
        },
        {
            title: "AmazonClone",
            github: "https://github.com/saurabh123321/amazon_clone",
            description: "Full stack Amazon Clone with user auth, cart management, and Stripe Payment Gateway integration.",
            tech: ["ReactJS", "NodeJS", "MaterialUI", "Firebase"]
        },
        {
            title: "StoreToDoor",
            link: "https://saurabh123321.github.io/StoreToDoor/",
            github: "https://github.com/saurabh123321/StoreToDoor",
            description: "Web application for local business to order food, grocery and medicines to doorstep.",
            tech: ["HTML", "CSS", "JavaScript", "Formspree API"]
        }
    ],
    education: [
        {
            school: "Vishwakarma Institute of Technology",
            location: "Pune, India",
            degree: "Bachelor of Technology in Computer Engineering",
            gpa: "CGPA: 8.96",
            period: "Aug. 2019 -- 2023"
        },
        {
            school: "SDM Newasa",
            location: "Newasa, India",
            degree: "PCMB State Board",
            gpa: "Percentage: 87.69",
            period: "Aug. 2017 -- 2019"
        }
    ],
    achievements: [
        "STAR Performance Award: Awarded for outstanding contributions to Teamcenter 2506 product Development.",
        "Finalist, IBM Z Datathon (Top 1% among 1600+ participants)",
        "AWS Cloud Technical Essentials Certified",
        "5 star in problem-solving on Hackerrank",
        "Solved 500+ coding questions on various coding platforms"
    ]
};
