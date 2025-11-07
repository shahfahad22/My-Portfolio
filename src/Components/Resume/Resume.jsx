// components/Resume.jsx
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Resume = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Shah_Fahad_CV',
    onAfterPrint: () => console.log('CV downloaded successfully!')
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Download Button */}
      <div className="text-center mb-8">
        <button
          onClick={handlePrint}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2 mx-auto"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Download CV as PDF</span>
        </button>
      </div>

      {/* CV Content */}
      <div ref={componentRef} className="bg-white p-8 rounded-lg shadow-lg">
        <style>
          {`
            @media print {
              body {
                margin: 0;
                padding: 0;
              }
              .no-print {
                display: none !important;
              }
              .cv-content {
                box-shadow: none !important;
                border: 1px solid #e5e7eb !important;
              }
              .project-link {
                color: #2563eb !important;
                text-decoration: underline !important;
              }
            }
            
            .cv-content {
              font-family: 'Inter', 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
            }
            
            .skill-tag, .tech-tag, .language-tag {
              page-break-inside: avoid;
            }
            
            .project {
              page-break-inside: avoid;
            }
          `}
        </style>

        {/* CV Header */}
        <div className="text-center mb-8 border-b-2 border-blue-500 pb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Shah Fahad</h1>
          <div className="text-xl text-blue-500 font-semibold mb-4">Frontend Developer | MERN Stack Enthusiast</div>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
            <div className="flex items-center space-x-1">
              <span>📧</span>
              <span>shahfahadkpk02@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📱</span>
              <span>+92 344 9762513</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📍</span>
              <span>Peshawar, Pakistan</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🔗</span>
              <span>linkedin.com/in/shah-fahad</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>💻</span>
              <span>github.com/shahfahad22</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Professional Summary</h2>
          <p className="text-gray-600 text-justify leading-relaxed">
            Passionate Frontend Developer with expertise in modern web technologies including React.js, JavaScript, and Tailwind CSS. 
            Currently expanding skills in MERN stack development with a strong foundation in building responsive, user-friendly web applications. 
            Proven ability to create dynamic interfaces with efficient state management and seamless user experiences. 
            Seeking opportunities to contribute to innovative projects while continuing to grow as a full-stack developer.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Redux', 'React Router', 'Axios', 'Local Storage'].map(skill => (
                  <span key={skill} className="skill-tag bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {['Git & GitHub', 'Vite', 'VS Code', 'Netlify', 'RESTful APIs', 'Responsive Design', 'UI/UX Principles'].map(tool => (
                  <span key={tool} className="skill-tag bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Projects</h2>
          <div className="space-y-6">
            {/* Project 1 */}
            <div className="project bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gadgets Mobile-Shop</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A responsive e-commerce web application for mobile gadgets built with React.js, Tailwind CSS, and Redux. 
                Features dynamic product listing, cart management using Local Storage, and smooth, interactive UI for browsing, 
                adding, and managing products. Frontend-only project with real-time state management and polished design.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {['React.js', 'Tailwind CSS', 'Local Storage', 'React Router DOM'].map(tech => (
                  <span key={tech} className="tech-tag bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="https://gadgetsmobileshop1.netlify.app/register" className="project-link text-blue-500 font-medium">Live Demo</a>
                <a href="https://github.com/shahfahad22/React-Projects-Collection/tree/main/11-Gadgets%20Mobile-Shop" className="project-link text-blue-500 font-medium">GitHub</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mini E-Commerce Website</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A responsive mini e-commerce web application built with React.js and styled using Tailwind CSS. 
                The app fetches product data from APIs using Axios, allows users to browse products, add items to the cart, 
                and view order summaries. Frontend-only project with dynamic data rendering and interactive UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {['React.js', 'Tailwind CSS', 'Axios', 'Local Storage', 'React Router DOM'].map(tech => (
                  <span key={tech} className="tech-tag bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="https://dapper-frangipane-2eaf10.netlify.app/login" className="project-link text-blue-500 font-medium">Live Demo</a>
                <a href="https://github.com/shahfahad22/React-Projects-Collection/tree/main/12-Hackathon" className="project-link text-blue-500 font-medium">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Education</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600">Peshawar University</p>
              </div>
              <div className="text-gray-500 font-medium">2021 - 2025</div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">Languages</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { language: 'Pashto', level: 'Native', color: 'bg-green-100 text-green-700 border-green-200' },
              { language: 'Urdu', level: 'Fluent', color: 'bg-blue-100 text-blue-700 border-blue-200' },
              { language: 'English', level: 'Professional', color: 'bg-purple-100 text-purple-700 border-purple-200' }
            ].map((lang, index) => (
              <div key={index} className={`language-tag ${lang.color} px-4 py-2 rounded-lg border text-sm font-medium`}>
                {lang.language} - {lang.level}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;





































