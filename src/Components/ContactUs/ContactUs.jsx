import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./ContactUs.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    budget: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://backend-3ar-entertainment-codebase.onrender.com/brand', formData)
      .then((response) => {
        toast.success('Email sent successfully');
        closeModal();
        setFormData({
          first_name: '',
          last_name: '',
          phone_number: '',
          email: '',
          budget: '',
          company: '',
          message: '',
        });
      })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setIsSent(!isSent);
  };

  return (
    <>
      <Navbar />
      <div className='back mt-[82px]'>
        <div>
          <img className='w-[100%] h-[170px] md:h-[50%]' src="/6.png" alt="" />
        </div>
        <div className='flex justify-evenly flex-col md:flex-row'>
          <div>
            <h1 className='text-red-500 mt-9 ml-4 md:ml-[0]'>\\Let's Talk Business</h1>
            <h1 className='text-2xl md:text-4xl font-bold text-white ml-4 md:ml-[0] '>Ready to get started?</h1>
            <div className='flex flex-col gap-4 mt-10'>
              <form onSubmit={handleSubmit} className='form-scroll'>

                <div className='flex flex-col justify-center items-center gap-4'>
                  <div>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required className="input w-[300px] md:w-[350px]" placeholder="First Name!" />
                  </div>
                  <div>
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required className="input w-[300px] md:w-[350px]" placeholder="Last Name!" />
                  </div>
                  <div>
                    <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required className="input w-[300px] md:w-[350px]" placeholder="Phone Number!" />
                  </div>
                  <div>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} required className="input w-[300px] md:w-[350px]" placeholder="Email!" />
                  </div>
                </div>
                <div className='flex flex-col items-center gap-4'>
                  <div>
                    <input type="text" name="budget" className="input w-[300px] md:w-[350px] mt-4" value={formData.budget} onChange={handleChange} required placeholder="Budget Overview!" />
                  </div>
                  <div>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} required className="input w-[300px] md:w-[350px]" placeholder="Company Name!" />
                  </div>
                  <div>
                    <input type="text-area" name="message" value={formData.message} onChange={handleChange} required className="input w-[300px] md:w-[350px]" placeholder="Message!" />
                  </div>
                  <div className='text-center'>
                    <button className="button w-[255px] md:w-[315px]" onClick={handleClick}>
                      <div className="outline"></div>
                      <div className={`state ${isSent ? 'state--sent' : 'state--default'}`}>
                        <div className="icon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g style={{ filter: 'url(#shadow)' }}>
                              <path
                                d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                                fill="currentColor"
                              />
                              <path
                                d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                                fill="currentColor"
                              />
                            </g>
                            <defs>
                              <filter id="shadow">
                                <feDropShadow
                                  dx="0"
                                  dy="1"
                                  stdDeviation="0.6"
                                  floodOpacity="0.5"
                                />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                        <p>
                          {!isSent
                            ? ['S', 'e', 'n', 'd', 'M', 'e', 's', 's', 'a', 'g', 'e'].map((char, index) => (
                              <span key={index} style={{ '--i': index }}>
                                {char}
                              </span>
                            ))
                            : ['S', 'e', 'n', 't'].map((char, index) => (
                              <span key={index + 5} style={{ '--i': index + 5 }}>
                                {char}
                              </span>
                            ))}
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='ml-4'>
            <h1 className='mt-32 text-red-500'>\\REACH OUT TO US</h1>
            <h1 className='text-4xl font-bold'>Contact Us</h1>
            <p className='max-w-96 text-white'>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
            <div className='address p-2'>
              <div className='flex mt-6'>
                <img className='w-12' src="./placeholder.png" alt="" />
              </div>
              <div>
                <h1 className='text-2xl font-bold mt-2 text-white'>Our Address:</h1>
                <h2 className='text-xl font-medium text-white'>In India</h2>
                <p className='text-white'>Medical college, Gorakhpur-786151
                </p>
              </div>
            </div>
            <div className='address1 p-2'>
              <div className='flex mt-6'>
                <img className='w-12' src="./email.png" alt="" />
              </div>
              <div>
                <h1 className='text-2xl font-bold mt-2 text-white'>Our Mailbox:</h1>
                <p className='text-xl font-medium text-white'>hello@3arentertainment.com</p>
              </div>
            </div>
            <div className='address2 p-2'>
              <div className='flex mt-6'>
                <img className='w-12' src="./telephone.png" alt="" />
              </div>
              <div>
                <h1 className='text-2xl font-bold mt-2 text-white'>Our Phone Number:</h1>
                <p className='text-xl font-medium text-white'>+91-9127115177</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <ToastContainer />

      <Footer />
    </>
  )
}


export default ContactUs