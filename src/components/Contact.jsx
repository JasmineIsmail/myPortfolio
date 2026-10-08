import {useState} from 'react';
import { FaGithub,FaLinkedin } from "react-icons/fa6";
import{MdEmail} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";

function Contact() {
    const [status ,setStatus]= useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        try{
            const response = fetch('https://formspree.io/f/xwlvegnk', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setStatus('Message sent successfully!');
                form.reset();
            } else {
                setStatus('Failed to send message.');
            }   
        }catch (error) {
            setStatus('An error occurred. Please try again later.');
        }
    }
  return (
    <section id="contact" className='bg-blue-950 text-white py-10'>
      <div className='container mx-auto max-w-2xl px-4'>
        <h2 className='text-3xl font-bold mb-6 text-center'>Get in Touch</h2>
        <p className='m-4 text-center text-base sm:m-6 sm:text-lg'>
         Feel free to reach out regarding full-stack development projects, frontend roles, or engineering inquiries. I'm always open to new technical opportunities and collaborations!
        </p>
      </div>
      <form 
        action='https://formspree.io/f/xwlvegnk'
        method='POST'
        onSubmit={handleSubmit}
        className='mx-4 max-w-2xl rounded-lg bg-slate-900 p-5 shadow-md sm:mx-auto sm:p-8'>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium mb-1'>Name</label>
          <input type='text' id='name' name='name' className='w-full px-3 py-2 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' required />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
          <input type='email' id='email' name='email' className='w-full px-3 py-2 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' required />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-sm font-medium mb-1'>Message</label>
          <textarea id='message' name='message' rows='5' className='w-full px-3 py-2 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' required></textarea>
        </div>
        <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'>
          Send Message
        </button>
         {status && (
        <p className="mt-4 text-green-400">
          {status}
        </p>
        )}
      </form>
      <div className='mt-6 flex flex-wrap items-center justify-center gap-x-2 bg-transparent p-4 text-center shadow-mds sm:gap-x-3'>
        
        <a href='https://github.com/jasmineismail' target='_blank' rel='noopener noreferrer' className='text-white hover:text-blue-400'>
        <FaGithub className='w-6 h-6 text-white m-2' />
        </a>
        <a href='mailto:jasmineismail95@gmail.com' className='text-white hover:text-blue-400'>
          <MdEmail className='w-6 h-6 text-white m-2' />
        </a>
        <a href='https://www.linkedin.com/in/jasmine-ismail-a49501131/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-blue-400'>
          <FaLinkedin className='w-6 h-6 text-white m-2' />
        </a>
        <FaPhoneAlt className='m-2 h-6 w-6 text-white' />
        <span className='break-words'>+91 8891393487</span>
      </div>
      <div className='text-center mt-4'>
        <p className='text-sm text-gray-400'>© 2026 Jasmine Ismail. All rights reserved.</p>
      </div>
    </section>
  )
}
 
export default Contact;