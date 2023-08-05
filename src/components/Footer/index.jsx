import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaPinterest, 
  FaTwitter 
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="subscribe">
        <h3>subscribe to our newsletter and receive the latest products updates</h3>
        <div className="form">
          <input type="text" placeholder='Enter your email address' />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-base">
        <Link to='/'>
          <h4 className='logo'>Furniture</h4>
        </Link>
        <div className="row">
          {
            footerlinks.map((item, index) =>{
              const { title, content } = item;
              return (
                <ul key={index}>
                  <li className='list-head'>{title}</li>
                  {
                    content.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })
                  }
                </ul>
              )
            })
          }
          <div className="socials">
            <h5>Socials</h5>
            <div className="icons-container">
              {
                icons.map((item, index) => {
                  return (
                    <span key={index}>
                      {item}
                    </span>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const footerlinks = [
  {
    title: 'Info',
    content: [
      "our story",
      "faqs",
      "returns",
      "terms of privacy",
      "privacy policy",
    ]
  },
  {
    title: 'Shop',
    content: [
      "sofa",
      "chairs",
      "tables",
      "lights",
      "",
    ]
  },
];

const icons = [
  <FaFacebook />,
  <FaInstagram />,
  <FaPinterest />,
  <FaTwitter />
]