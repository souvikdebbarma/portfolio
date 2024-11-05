import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-custom-snow dark:bg-custom-darkvoid">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-custom-darkvoid dark:text-custom-snow">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-custom-darkvoid dark:text-custom-snow">
              Contact Information
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:souvikdbarma23@gmail.com"
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-custom-liquidlava dark:hover:text-custom-liquidlava"
              >
                <FiMail size={24} />
                <span>souvikdbarma23@gmail.com</span>
              </a>
              <a 
                href="https://github.com/souvikdebbarma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-custom-liquidlava dark:hover:text-custom-liquidlava"
              >
                <FiGithub size={24} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/souvik-debbarma-060216244"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-custom-liquidlava dark:hover:text-custom-liquidlava"
              >
                <FiLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name"
                className="block mb-2 text-gray-600 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-custom-liquidlava outline-none"
              />
            </div>
            <div>
              <label 
                htmlFor="email"
                className="block mb-2 text-gray-600 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-custom-liquidlava outline-none"
              />
            </div>
            <div>
              <label 
                htmlFor="message"
                className="block mb-2 text-gray-600 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-custom-liquidlava outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-custom-liquidlava text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 