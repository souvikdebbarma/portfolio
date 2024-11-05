const About = () => {
    const technologies = [
      "C", "HTML / CSS", "Python", "JavaScript", "MERN", "C#", "Critical Thinking"
    ];
  
    return (
      <section id="about" className="py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
              /
            </h2>
            <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
              about me
            </h2>
            <div className="flex-grow h-[1px] bg-custom-darkvoid/20 dark:bg-custom-snow/20"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left side - image */}
            <div className="md:col-span-5">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-custom-liquidlava mx-auto">
                <img
                  src="/assets/hero.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
  
            {/* Right side - About content */}
            <div className="md:col-span-7 space-y-8">
              <div className="space-y-6 text-lg text-custom-darkvoid/80 dark:text-custom-snow/80">
                <p>
                  I'm <span className="text-custom-liquidlava">Souvik Debbarma</span>, motivated computer science student with a background 
                  of software development and problem solving. Working toward personal 
                  development and eager to contribute my skill in a dynamic environment 
                  that fosters continuous learning and innovation.
                </p>
  
                <div>
                  <h3 className="text-xl font-semibold text-custom-darkvoid dark:text-custom-snow mb-4">
                    Here are some technologies I have been working with:
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-custom-liquidlava">▹</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
  
                <p>
                  Outside of work, I'm interested in following the developments of science. 
                  I also play a lot of video games. And I like to click pictures.
                </p>
  
                {/* Education Section */}
                <div>
                  <h3 className="text-xl font-semibold text-custom-darkvoid dark:text-custom-snow mb-4">
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Bachelors in computer science engineering</h4>
                      <p className="text-sm">Assam Down Town University</p>
                      <p className="text-custom-liquidlava">2022 - 2025</p>
                      <p className="text-sm">Specialization in Cloud Technology and Information Security.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Diploma in Electrical engineering</h4>
                      <p className="text-sm">TTAADC Polytechnic Institute</p>
                      <p className="text-custom-liquidlava">2019 - 2022</p>
                      <p className="text-sm">Relevant coursework in Electrical Engineering.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About; 