import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white bg-black py-8 mt-16 ">
      <div className="container mx-auto flex flex-col items-center max-w-[1300px]">
        <div className="flex flex-col md:flex-row justify-center w-full ">
          <div className="mb-4 ">
            <h3 className="text-2xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Data Science & AI</a></li>
              <li><a href="#" className="hover:text-gray-400">Product Management</a></li>
              <li><a href="#" className="hover:text-gray-400">Business Analytics</a></li>
              <li><a href="#" className="hover:text-gray-400">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-gray-400">Business Management</a></li>
              <li><a href="#" className="hover:text-gray-400">Project Management</a></li>
              <li><a href="#" className="hover:text-gray-400">Strategy & Leadership</a></li>
              <li><a href="#" className="hover:text-gray-400">Senior Management</a></li>
              <li><a href="#" className="hover:text-gray-400">Fintech</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 ml-0 md:ml-10">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="hover:text-gray-400">admissions@accredian.com</a></li>
              <li>Email us (For Product Management Queries): <a href="mailto:pm@accredian.com" className="hover:text-gray-400">pm@accredian.com</a></li>
              <li>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</li>
              <li>Product Management Admission Helpline: +91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969322507</li>
              <li>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 ml-0 md:ml-10">
            <h3 className="text-2xl font-bold mb-4">Accredian</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Career</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:text-gray-400">Admission Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Referral Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms Of Service</a></li>
              <li><a href="#" className="hover:text-gray-400">Master FAQs</a></li>
            </ul>
          </div>
          {/* <div className="mb-4 md:mb-0 ml-0 md:ml-10">
            
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-youtube"></i></a>
            </div>
          </div> */}
        </div>
        <p className="text-center text-sm mt-8">&copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;