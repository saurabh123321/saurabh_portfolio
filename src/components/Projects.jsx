import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Section from './Section';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <Section id="projects" title="Featured Projects" subtitle="Some things I've built">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resumeData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card flex flex-col h-full p-6 group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex gap-3">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 hover:text-primary transition-colors text-xl"
                                        title="View Code"
                                    >
                                        <FaGithub />
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-500 hover:text-primary transition-colors text-lg"
                                        title="Live Demo"
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs font-medium px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
