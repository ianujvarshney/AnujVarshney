import React, { useState } from 'react';
// icons
import { BsArrowRight } from 'react-icons/bs'
// framer
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../../variants'
// firebase
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import emailjs from '@emailjs/browser';

import Circles from '../../components/Circles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // 1. Save to Firebase
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp()
      });

      // 2. Send Email via EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error("Firebase Error: ", err);
      if (err.code === 'permission-denied') {
        setError('Firestore permission denied. Please check your database rules.');
      } else if (err.code === 'not-found') {
        setError('Firestore collection not found.');
      } else {
        setError('Something went wrong: ' + (err.message || 'Unknown error'));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input
                type="text"
                name="name"
                placeholder='name'
                className='input'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder='email'
                className='input'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder='subject'
              className='input'
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder='message'
              className='textarea'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className={`${loading ? 'hidden' : 'block'} group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500`}>
                Let&apos;s talk
              </span>
              <BsArrowRight className={`${loading ? 'hidden' : 'block'} -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]`} />
              <span className={`${loading ? 'block' : 'hidden'}`}>Sending...</span>
            </button>

            {success && <p className="text-accent mt-4">Message sent successfully!</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
