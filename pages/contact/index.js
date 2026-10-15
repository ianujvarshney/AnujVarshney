import React, { useState, useEffect } from 'react';
// icons
import { BsArrowRight, BsCheckCircleFill, BsExclamationTriangleFill } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
// framer
import { motion, AnimatePresence } from 'framer-motion'
// variants
import { fadeIn } from '../../variants'
// components
import Seo from '../../components/Seo';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyForm = { name: '', email: '', subject: '', message: '' };

const validate = (data) => {
  const errors = {};
  if (data.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(data.email.trim())) errors.email = 'Please enter a valid email address.';
  if (data.subject.trim().length < 3) errors.subject = 'Please add a short subject.';
  if (data.message.trim().length < 10) errors.message = 'Your message should be at least 10 characters.';
  return errors;
};

const StatusPopup = ({ type, message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      role={type === 'success' ? 'status' : 'alert'}
      className={`fixed top-6 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[420px] z-[100] flex items-center gap-x-4 p-4 rounded-xl shadow-2xl border backdrop-blur-md ${type === 'success'
        ? 'bg-primary/90 border-accent text-accent'
        : 'bg-primary/90 border-red-400 text-red-300'
        }`}
    >
      <div className='text-2xl shrink-0' aria-hidden="true">
        {type === 'success' ? <BsCheckCircleFill /> : <BsExclamationTriangleFill />}
      </div>
      <div className='flex-1 font-medium'>
        {message}
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss"
        className='text-xl w-10 h-10 shrink-0 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200'
      >
        <IoClose aria-hidden="true" />
      </button>
    </motion.div>
  );
}

const Field = ({ id, label, error, children }) => (
  <div className='flex flex-col gap-y-2 text-left w-full'>
    <label htmlFor={id} className='text-sm text-white/80'>{label}</label>
    {children}
    {error && <p id={`${id}-error`} className='text-sm text-red-300 leading-snug'>{error}</p>}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Auto-hide popup after 6 seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError('');
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear a field's error as soon as it becomes valid
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        if (!validate({ ...formData, [name]: value })[name]) delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // bots fill the hidden field; pretend it worked and drop the message
    if (e.target.elements.company?.value) {
      setSuccess(true);
      setFormData(emptyForm);
      return;
    }

    const found = validate(formData);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    const data = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    try {
      // the Firebase and EmailJS SDKs load only when someone sends a message
      const [{ db }, { collection, addDoc, serverTimestamp }, { default: emailjs }] = await Promise.all([
        import('../../lib/firebase'),
        import('firebase/firestore'),
        import('@emailjs/browser'),
      ]);

      // 1. Save to Firebase
      await addDoc(collection(db, 'contacts'), {
        ...data,
        timestamp: serverTimestamp()
      });

      // 2. Send Email via EmailJS
      const templateParams = {
        ...data,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData(emptyForm);
      setErrors({});
    } catch (err) {
      console.error('Contact form error: ', err);
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        setError('You seem to be offline. Please check your connection and try again.');
      } else {
        setError('Sorry, your message could not be sent right now. Please try again in a moment, or reach me on LinkedIn.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: formData[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <div className='page-section'>
      <Seo
        title="Contact"
        path="/contact"
        description="Get in touch with Anuj Varshney for full-stack, Next.js and Web3 development work."
      />

      {/* Popups */}
      <AnimatePresence>
        {success && (
          <StatusPopup
            key="success"
            type="success"
            message="Thanks! Your message was sent. I'll get back to you soon."
            onClose={() => setSuccess(false)}
          />
        )}
        {error && (
          <StatusPopup
            key="error"
            type="error"
            message={error}
            onClose={() => setError('')}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto text-center xl:text-left flex items-center justify-center">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center mb-3'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='text-center mb-10 max-w-[480px] mx-auto'
          >
            Have a project, a role or an idea in mind? Send me a message and
            I&apos;ll reply by email.
          </motion.p>

          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex-1 flex flex-col gap-5 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex flex-col sm:flex-row gap-5 w-full'>
              <Field id="contact-name" label="Name" error={errors.name}>
                <input type="text" placeholder='Your name' className='input' autoComplete="name" maxLength={100} required {...fieldProps('name')} />
              </Field>
              <Field id="contact-email" label="Email" error={errors.email}>
                <input type="email" placeholder='you@example.com' className='input' autoComplete="email" inputMode="email" maxLength={150} required {...fieldProps('email')} />
              </Field>
            </div>
            <Field id="contact-subject" label="Subject" error={errors.subject}>
              <input type="text" placeholder='What is it about?' className='input' maxLength={150} required {...fieldProps('subject')} />
            </Field>
            <Field id="contact-message" label="Message" error={errors.message}>
              <textarea placeholder='Tell me a little about it' className='textarea' maxLength={5000} required {...fieldProps('message')}></textarea>
            </Field>

            {/* honeypot: hidden from people, filled in by spam bots */}
            <div className='hidden' aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input type="text" id="contact-company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className='btn relative rounded-full border border-white/50 w-full sm:max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-60 disabled:cursor-wait mx-auto xl:mx-0'
            >
              {loading ? (
                <span className='flex items-center gap-x-3'>
                  <span className='w-4 h-4 rounded-full border-2 border-white/30 border-t-accent animate-spin' aria-hidden="true" />
                  Sending...
                </span>
              ) : (
                <>
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                    Let&apos;s talk
                  </span>
                  <BsArrowRight aria-hidden="true" className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
