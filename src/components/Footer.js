// components/Footer.jsx
import React from 'react';

const Footer = () => (
    <footer className="bg-white shadow-lg py-4">
        <div className="container mx-auto text-center">
            <p className="text-sm">© 2024 . All rights reserved.</p>
            <div className="mt-2">
                <a href="/" className="text-blue-400 hover:underline">Home</a> | 
                <a href="/about" className="text-blue-400 hover:underline"> About</a> | 
                <a href="/contact" className="text-blue-400 hover:underline"> Contact</a>
            </div>
        </div>
    </footer>
);

export default Footer;
