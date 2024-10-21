'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

 
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok) {
        console.log('Message sent.', resData);
        setEmailSubmitted(true);
        setFormData({
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.error('Error:', resData.error);
        setError(resData.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-12 bg-gray-900">

      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10 max-w-3xl mx-auto px-4">
        <h5 className="text-4xl font-bold text-white mt-14">Let&apos;s Connect</h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll surely get back to you!
        </p>

        {/* Social Links Without <a> Tags */}
        <div className="socials flex flex-row items-center gap-8 mb-8">
          <Link href="https://github.com/joyuusuf/joyuusuf" target="_blank" rel="noopener noreferrer">
            <Image src="/images/git-icon.png" alt="GitHub Icon" width={90} height={90} />
          </Link>

          <Link href="https://www.linkedin.com/in/jawad-olamide-yuusuf" target="_blank" rel="noopener noreferrer">
            <Image src="/images/linkedin.png" alt="LinkedIn Icon" width={70} height={70} />
          </Link>

          <Link href="https://www.facebook.com/yuusuf.olamide.9/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/facebook.png" alt="Facebook Icon" width={70} height={70} />
          </Link>

          <Link href="https://wa.me/2348142417877" target="_blank" rel="noopener noreferrer">
            <Image src="/images/whatsapp.png" alt="WhatsApp Icon" width={70} height={70} />
          </Link>

          <Link href="https://twitter.com/mideyuusuf" target="_blank" rel="noopener noreferrer">
            <Image src="/images/x.png" alt="Twitter Icon" width={70} height={70} />
          </Link>
        </div>

        {/* Success Message */}
        {emailSubmitted && (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully! I&apos;ll get back to you shortly.
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error}
          </p>
        )}

        {/* Email Form */}
        {!emailSubmitted && (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                value={formData.email} // Maintain controlled input
                onChange={handleChange} // Capture input change
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="yuusufjawadolamide67@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                value={formData.subject} // Maintain controlled input
                onChange={handleChange} // Capture input change
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                value={formData.message} // Maintain controlled input
                onChange={handleChange} // Capture input change
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
