import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { resumeData } from '../data/resume';

const Education = () => {
    return (
        <Section id="education" title="Education & Achievements" className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl my-20">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Education Column */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-2">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        Education
                    </h3>
                    <div className="space-y-8">
                        {resumeData.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-6"
                            >
                                <h4 className="text-lg font-bold text-slate-800 dark:text-white">{edu.school}</h4>
                                <p className="text-primary font-medium">{edu.degree}</p>
                                <div className="flex justify-between mt-2 text-sm text-slate-500 dark:text-slate-400">
                                    <span>{edu.period}</span>
                                    <span>{edu.gpa}</span>
                                </div>
                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{edu.location}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements Column */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-2">
                        <span className="w-8 h-1 bg-secondary rounded-full"></span>
                        Achievements
                    </h3>
                    <div className="space-y-4">
                        {resumeData.achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
                            >
                                <span className="text-yellow-500 text-xl">★</span>
                                <p className="text-slate-700 dark:text-slate-300">{achievement}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;
