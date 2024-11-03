import { RiReactjsLine, RiNodejsLine, RiDatabase2Line } from '@remixicon/react'

const About = () => {
  return (
    <section className="py-20 bg-custom-gluongrey">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-custom-snow inter-700">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-custom-snow/80 inter-400 leading-relaxed">
              I'm a passionate web developer with a keen eye for creating elegant solutions. 
              My journey in web development started with curiosity and has evolved into a 
              professional pursuit of crafting meaningful digital experiences.
            </p>
            <p className="text-custom-snow/80 inter-400 leading-relaxed">
              I specialize in building modern web applications using cutting-edge technologies 
              and best practices. My approach combines technical expertise with creative 
              problem-solving to deliver robust and user-friendly solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-custom-slateGrey p-6 rounded-lg">
              <RiReactjsLine className="text-4xl text-custom-liquidlava mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-custom-snow inter-600">Frontend</h3>
              <p className="text-custom-snow/70 inter-400">React, Next.js, Tailwind CSS</p>
            </div>
            
            <div className="bg-custom-slateGrey p-6 rounded-lg">
              <RiNodejsLine className="text-4xl text-custom-liquidlava mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-custom-snow inter-600">Backend</h3>
              <p className="text-custom-snow/70 inter-400">Node.js, Express, REST APIs</p>
            </div>
            
            <div className="bg-custom-slateGrey p-6 rounded-lg">
              <RiDatabase2Line className="text-4xl text-custom-liquidlava mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-custom-snow inter-600">Database</h3>
              <p className="text-custom-snow/70 inter-400">MongoDB, PostgreSQL</p>
            </div>
            
            <div className="bg-custom-slateGrey p-6 rounded-lg">
              <RiReactjsLine className="text-4xl text-custom-liquidlava mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-custom-snow inter-600">Tools</h3>
              <p className="text-custom-snow/70 inter-400">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 