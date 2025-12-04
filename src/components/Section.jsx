import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                {title && (
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                        {title}
                    </h2>
                )}
                {subtitle && (
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </motion.div>
            {children}
        </section>
    );
};

export default Section;
