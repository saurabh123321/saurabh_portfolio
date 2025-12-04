import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { resumeData } from '../data/resume';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Background Blobs */}
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

                    <div className="flex gap-4">
                        <Link to="projects" smooth={true} offset={-70} duration={500}>
                            <button className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30">
                                View Work
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} offset={-70} duration={500}>
                            <button className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:border-primary hover:text-primary transition-all">
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
