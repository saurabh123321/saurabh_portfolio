import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { resumeData } from '../data/resume';

const Experience = () => {
    return (
        <Section id="experience" title="Work Experience" subtitle="My professional journey">
            <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 space-y-12">
                {resumeData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></span>

                        <div className="glass-card p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.title}</h3>
                                    <h4 className="text-lg font-medium text-primary">{exp.company}</h4>
                                </div>
                                <div className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0 font-medium">
                                    {exp.period} | {exp.location}
                                </div>
                            </div>

                            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600 dark:text-slate-300">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
