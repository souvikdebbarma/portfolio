import { useState } from 'react';

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState(0); // Default to first company

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "ICM",
      period: "Feb 2024 - May 2024",
      points: [
        "Developed a software solution called the Automated Library Management System, aimed at streamlining and enhancing the management of books and library resources."
      ]
    },
    {
      title: "Tech Research Intern",
      company: "To-Let Globe",
      period: "Nov 2023 - Jan 2024",
      points: [
        "Focused on exploring new-age technology and enhancing user interaction on our website",
        "Led a team in successfully navigating a complex audit, ensuring compliance with industry regulations."
      ]
    },
    {
      title: "IT Manager",
      company: "Aptech",
      period: "Oct 2022 - Oct 2022",
      points: [
        "Was assigned as the site supervisor by the company",
        "Reported back to instructor to record day-to-day tasks and responsibilities",
        "Collaborated with cross-functional teams to develop and implement financial strategies",
        "Communicated effectively with faculty and staff and accepted critiques and suggestions for areas of improvement"
      ]
    },
    {
      title: "Intern",
      company: "Wadhwani Foundation",
      period: "Jan 2022 - May 2022",
      points: [
        "Analyzed problems and worked with faculty and staff and accepted critiques and suggestions for areas of improvement",
        "Analyzed problems and worked with teams to develop solutions",
        "Prepared project presentation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
            /
          </h2>
          <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
            experience
          </h2>
          <div className="flex-grow h-[1px] bg-custom-darkvoid/20 dark:bg-custom-snow/20"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company List - Horizontal on mobile, Vertical on desktop */}
          <div className="md:col-span-3">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible space-x-6 md:space-x-0 md:space-y-6 pb-4 md:pb-0 sticky top-24">
              {experiences.map((exp, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveCompany(index)}
                  className={`whitespace-nowrap text-left px-4 py-2 border-b-2 md:border-l-2 md:border-b-0 transition-all duration-300 ${
                    activeCompany === index 
                      ? 'border-custom-liquidlava text-custom-liquidlava'
                      : 'border-transparent text-custom-darkvoid/60 dark:text-custom-snow/60 hover:text-custom-liquidlava dark:hover:text-custom-liquidlava hover:border-custom-liquidlava/50'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="md:col-span-9">
            <div className="relative min-h-[300px]">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`absolute top-0 w-full transition-all duration-300 ${
                    activeCompany === index
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  <div className="pl-4 md:pl-8">
                    <div className="flex flex-col mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-custom-darkvoid dark:text-custom-snow">
                        {exp.title}
                        <span className="text-custom-liquidlava"> @ {exp.company}</span>
                      </h3>
                      <p className="text-custom-darkvoid/60 dark:text-custom-snow/60 mt-2">
                        {exp.period}
                      </p>
                    </div>

                    <ul className="space-y-4">
                      {exp.points.map((point, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-4 text-custom-darkvoid dark:text-custom-snow/80"
                        >
                          <span className="text-custom-liquidlava mt-2">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;