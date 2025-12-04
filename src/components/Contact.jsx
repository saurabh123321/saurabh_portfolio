import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaHackerrank, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Section from './Section';
import { resumeData } from '../data/resume';

const iconMap = {
    FaLinkedin: FaLinkedin,
    FaGithub: FaGithub,
    SiLeetcode: SiLeetcode,
    FaHackerrank: FaHackerrank,
    FaInstagram: FaInstagram
};

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch" subtitle="Let's work together">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Contact Information</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary text-xl">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                                <p className="font-medium">{resumeData.contact.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary text-xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                                <a href={`mailto:${resumeData.contact.email}`} className="font-medium hover:text-primary transition-colors">
                                    {resumeData.contact.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                                <p className="font-medium">{resumeData.contact.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">Follow Me</h4>
                        <div className="flex gap-4">
                            {resumeData.contact.social.map((social) => {
                                const Icon = iconMap[social.icon] || FaExternalLinkAlt;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                                        title={social.name}
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8"
                >
                    <form className="space-y-6" action="https://formspree.io/f/mvgerjye"
                        method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Your message..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-primary text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
