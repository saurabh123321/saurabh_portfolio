import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { resumeData } from '../data/resume';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <Section id="skills" title="Technical Skills" subtitle="My technical proficiency and toolset">
            <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(resumeData.skills).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card p-6"
                    >
                        <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
