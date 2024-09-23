"use client";

import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-100 py-8 text-center">
      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="#"
            className="text-gray-600 hover:text-rose-600 transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-rose-600 transition-colors duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-rose-600 transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-rose-600 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-gray-500 mb-4">
          © {new Date().getFullYear()} Mustafa Diaa. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  );
};

export default Footer;
