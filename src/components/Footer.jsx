import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
                    Made with <FaHeart className="text-red-500 animate-pulse" /> by Saurabh Khule
                </p>
                <p className="text-sm text-slate-500 mt-2">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
