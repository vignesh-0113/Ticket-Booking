import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";


export function Home() {
  return (
    <div className='home' id='home'>
        <h1>Event Booking</h1>
        <section className="carsoul">
        <motion.div
          className="anime"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className='wrapper'>

          <Carousel>
            <div>
              <img src="https://static.meraevents.com/content/images/banners/1170x370px-Serendipity-Launch-Post1726037450pMbbE1726833106.jpg" alt='...'/>
            </div>
            <div>
              <img src="https://static.meraevents.com/content/images/banners/mera-events-header-011720162279ogmRk1724392984.jpg" alt='...'/>
              
            </div>
            <div>
              <img src="https://static.meraevents.com/content/images/banners/Spectrum-20241723787361.jpeg" alt='...'/>
              
            </div>
          </Carousel>
          </div>

        <Carousel>
        <div>
        <img alt="hero_banner" src="https://cmsimages.shoppersstop.com/new10_sale_strip_web_a9f20f5168/new10_sale_strip_web_a9f20f5168.jpg" className="md:pl-[2px]" loading="eager" />        
        </div>
        <div>
        <img alt="hero_banner" src="https://cmsimages.shoppersstop.com/STYLE_24_strip_web_147c1c0d9d/STYLE_24_strip_web_147c1c0d9d.jpg" className="md:pl-[2px]" loading="eager"/>
        </div>
        </Carousel>
        </motion.div>
        </section> 


      <div className='contact'>
        <div className='list'>
        <div className='list1'>
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Sell Event Tickets</li>
            <li>Event Registration</li>
            <li>Enterprice</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className='list2'>
          <h4>Event Booking</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Sign Up</li>
            <li>Sign In</li>
            
          </ul>
        </div>

        <div className='list3'>
          <h4>Help & Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Enterprice</li>
            <li>Pricing</li>
          </ul>
        </div>
        </div>
        <hr/>
      <div className='social-media'>
          <p><FaFacebookSquare /></p>
          <p><FaInstagramSquare /></p>
          <p><FaYoutube /></p>
          <p><FaTwitter /></p>
      </div>
      </div>  
               
    </div>
  );
};
