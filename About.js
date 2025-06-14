import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800 bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block">About Me</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 relative floating">
              <img src="https://via.placeholder.com/500x500" alt="Vicky Nanda Ferdianto" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <h3 className="text-2xl font-bold text-blue-400">Professional Data Analyst & Frontend Developer</h3>
            <p className="text-lg">
              I am a detail-oriented Data Analyst with a strong background in IT support, currently pursuing a degree in Statistics at Universitas Terbuka.
              With experience in data processing, visualization, and statistical analysis, I help organizations make data-driven decisions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p><span className="font-semibold">Name:</span> Vicky Nanda Ferdianto</p>
                <p><span className="font-semibold">Education:</span> Statistics (3.29 GPA)</p>
                <p><span className="font-semibold">Experience:</span> 3+ Years</p>
              </div>
              <div className="space-y-1">
                <p><span className="font-semibold">Email:</span> ferdiantovicky00@gmail.com</p>
                <p><span className="font-semibold">Phone:</span> (+62) 895-3737-70641</p>
                <p><span className="font-semibold">Location:</span> Tangerang, Indonesia</p>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition flex items-center">
                <i className="fas fa-file-download mr-2"></i> Download CV
              </a>
              <a href="#contact" className="px-6 py-2 border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded-lg font-medium transition flex items-center">
                <i className="fas fa-envelope mr-2"></i> Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
