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
      <div className="text-center mb-8 no-print">
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

      {/* CV Content - EXACT COPY OF YOUR CV */}
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
            }
          `}
        </style>

        {/* ===== YOUR EXACT CV CONTENT ===== */}
        <div className="cv-content" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
          
          {/* HEADER */}
          <div style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '2px solid #2563eb', paddingBottom: '15px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#1f2937' }}>SHAH FAHAD</h1>
            <p style={{ fontSize: '18px', fontWeight: '600', color: '#2563eb', margin: '0 0 10px 0' }}>Full-Stack Developer | MERN Stack Enthusiast</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 20px', fontSize: '14px', color: '#4b5563' }}>
              <span>🔗 LinkedIn: linkedin.com/in/shah-fahad</span>
              <span>📧 Email: shahfahadkpk02@gmail.com</span>
              <span>💻 GitHub: github.com/shahfahad22</span>
              <span>📱 Phone: +92 344 9762513</span>
            </div>
          </div>

          {/* PROFESSIONAL SUMMARY */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '12px' }}>PROFESSIONAL SUMMARY</h2>
            <p style={{ fontSize: '15px', color: '#4b5563', textAlign: 'justify', lineHeight: '1.7' }}>
              Passionate Full-Stack Developer with expertise in React.js, Node.js, Express.js, and MongoDB. Strong foundation in building responsive, user-friendly web applications with RESTful APIs, efficient state management, and cloud-based image storage. Seeking opportunities to contribute to innovative projects while continuing to grow as a full-stack developer.
            </p>
          </div>

          {/* TECHNICAL SKILLS */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '12px' }}>TECHNICAL SKILLS</h2>
            
            <div style={{ marginBottom: '10px' }}>
              <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#374151' }}>Frontend Development:</p>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#4b5563' }}>
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>React.js, Redux, React Router</li>
                <li>Tailwind CSS, Responsive Design</li>
                <li>Axios, Local Storage, RESTful APIs</li>
              </ul>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#374151' }}>Backend Development:</p>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#4b5563' }}>
                <li>Node.js, Express.js, MongoDB, Mongoose, ImageKit, CORS</li>
              </ul>
            </div>

            <div>
              <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#374151' }}>Tools &amp; Others:</p>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#4b5563' }}>
                <li>Git &amp; GitHub, Vite, VS Code</li>
                <li>Netlify, Figma, Problem Solving, Team Collaboration</li>
              </ul>
            </div>
          </div>

          {/* PROJECTS */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '12px' }}>PROJECTS</h2>
            
            {/* Project 1 */}
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#1f2937' }}>SnapBoard — Full Stack Image Posting App</h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '15px', color: '#4b5563' }}>
                Full-stack image posting platform with a React.js frontend and Node.js/Express.js backend, using MongoDB/Mongoose and ImageKit for cloud image hosting. Upload, browse, and instantly delete posts via a RESTful CRUD API.
              </p>
              <p style={{ margin: '0', fontSize: '14px', color: '#2563eb' }}>
                GitHub: https://github.com/shahfahad22/Backend/tree/main/04-SnapBoard
              </p>
            </div>

            {/* Project 2 */}
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#1f2937' }}>Gadgets Mobile-Shop</h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '15px', color: '#4b5563' }}>
                A responsive e-commerce web application for mobile gadgets built with React.js, Tailwind CSS, and Redux. Features dynamic product listing, cart management using Local Storage, and smooth, interactive UI for browsing, adding, and managing products.
              </p>
              <p style={{ margin: '0 0 3px 0', fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>Technologies</p>
              <p style={{ margin: '0 0 3px 0', fontSize: '14px', color: '#4b5563' }}>React.js, Tailwind CSS, Local Storage, React Router DOM</p>
              <p style={{ margin: '0', fontSize: '14px', color: '#2563eb' }}>
                Live Demo: https://gadgetsmobileshop1.netlify.app/login
              </p>
              <p style={{ margin: '0', fontSize: '14px', color: '#2563eb' }}>
                GitHub: https://github.com/shahfahad22/React-Projects-Collection/tree/main/11-Gadgets%20Mobile-Shop
              </p>
            </div>

            {/* Project 3 */}
            <div>
              <h3 style={{ fontSize: '17px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#1f2937' }}>Mini E-Commerce Website</h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '15px', color: '#4b5563' }}>
                A responsive mini e-commerce web application built with React.js and styled using Tailwind CSS. The app fetches product data from APIs using Axios, allows users to browse products, add items to the cart, and view order summaries.
              </p>
              <p style={{ margin: '0 0 3px 0', fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>Technologies</p>
              <p style={{ margin: '0 0 3px 0', fontSize: '14px', color: '#4b5563' }}>React.js, Tailwind CSS, Axios, Local Storage, React Router DOM</p>
              <p style={{ margin: '0', fontSize: '14px', color: '#2563eb' }}>
                Live Demo: https://dapper-frangipane-2eaf10.netlify.app/login
              </p>
              <p style={{ margin: '0', fontSize: '14px', color: '#2563eb' }}>
                GitHub: https://github.com/shahfahad22/React-Projects-Collection/tree/main/12-Hackathon
              </p>
            </div>
          </div>

          {/* EDUCATION - NEW SECTION ADDED */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '12px' }}>EDUCATION</h2>
            <div style={{ backgroundColor: '#f9fafb', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px', color: '#1f2937' }}>Bachelor of Science in Computer Science</p>
                  <p style={{ margin: '0', fontSize: '15px', color: '#4b5563' }}>University of Peshawar, Pakistan</p>
                </div>
                <p style={{ fontWeight: '500', margin: '0', fontSize: '15px', color: '#6b7280' }}>2021 - 2025</p>
              </div>
            </div>
          </div>

          {/* LANGUAGES */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '12px' }}>LANGUAGES</h2>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#4b5563' }}>
              <li>Pashto (Native), Urdu (Fluent), English (Fluent)</li>
            </ul>
          </div>

          {/* CERTIFICATIONS & ACHIEVEMENTS */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '12px' }}>CERTIFICATIONS &amp; ACHIEVEMENTS</h2>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#4b5563' }}>
              <li>Frontend Development Certification (In Progress)</li>
              <li>Multiple React.js Projects Completed</li>
              <li>Active Open Source Contributor</li>
            </ul>
          </div>

          {/* AVAILABILITY */}
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '8px', marginBottom: '12px' }}>AVAILABILITY</h2>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#4b5563' }}>
              <li>Available for freelance projects</li>
              <li>Open to full-time opportunities</li>
              <li>Ready to relocate for suitable position</li>
            </ul>
          </div>

        </div>
        {/* ===== END OF CV CONTENT ===== */}
      </div>
    </div>
  );
};

export default Resume;