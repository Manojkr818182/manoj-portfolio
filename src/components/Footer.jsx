import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark-400 py-10 mt-3">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://github.com/Manojkr818182"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white transition duration-300"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/manoj-kumar-m818182/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-teal-500 hover:bg-teal-500 hover:text-white transition duration-300"
          >
            <FaTwitter size={20} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Manoj Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer