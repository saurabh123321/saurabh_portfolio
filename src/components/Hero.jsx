import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { resumeData } from '../data/resume';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="absolute top-20 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 -left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-2">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
                        {resumeData.name}
                    </h1>
                    <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6 h-12">
                        <Typewriter
                            words={[resumeData.role, 'Software Engineer', 'Java Developer', 'C++ Developer']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                        {resumeData.summary}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="projects" smooth={true} offset={-70} duration={500}>
                            <button className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                </svg>
                                View Work
                            </button>
                        </Link>
                        <a href="/resume.pdf" download="Saurabh_Khule_Resume.pdf">
                            <button className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Resume
                            </button>
                        </a>
                        <Link to="contact" smooth={true} offset={-70} duration={500}>
                            <button className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                Contact Me
                            </button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-60 animate-pulse"></div>
                        <img
                            src={resumeData.profileImage || "/src/assets/profile.jpg"}
                            alt={resumeData.name}
                            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
