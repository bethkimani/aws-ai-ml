// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer


// File: components/Footer.jsx
function Footer() {
    return (
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="fw-bold mb-3">AWS AI/ML User Group Kenya</h5>
              <p>A community-driven initiative to promote learning and collaboration around AWS AI and Machine Learning services in Kenya.</p>
              <div className="d-flex gap-3 mt-3">
                <a href="https://x.com/awsaimlkenyaug" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-twitter fs-5"></i>
                </a>
                <a href="https://www.linkedin.com/company/aws-ai-ml-kenya/" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a href="https://chat.whatsapp.com/JwpFOWVXsfLApP3nANZfWQ" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-whatsapp fs-5"></i>
                </a>
                <a href="https://www.instagram.com/awsaimlkenyaug/" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-4">
              <h5 className="fw-bold mb-3">Navigate</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#about" className="text-white text-decoration-none">About</a></li>
                <li className="mb-2"><a href="#team" className="text-white text-decoration-none">Team</a></li>
                <li className="mb-2"><a href="#activities" className="text-white text-decoration-none">Activities</a></li>
                <li className="mb-2"><a href="#events" className="text-white text-decoration-none">Events</a></li>
                <li className="mb-2"><a href="#blog" className="text-white text-decoration-none">Blog</a></li>
                <li className="mb-2"><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-4">
              <h5 className="fw-bold mb-3">Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">AWS Documentation</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">AI/ML Glossary</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Free Tutorials</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Certification Paths</a></li>
                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Code Samples</a></li>
              </ul>
            </div>
            
            <div className="col-lg-4 col-md-4">
              <h5 className="fw-bold mb-3">Join Our Newsletter</h5>
              <p>Stay updated with our latest events and news.</p>
              <form className="mt-3">
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Your email address" required />
                  <button className="btn btn-warning" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          
          <hr className="my-4" />
          
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="small mb-0">&copy; {new Date().getFullYear()} AWS AI/ML User Group Kenya. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="small mb-0">
                <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
                <a href="#" className="text-white text-decoration-none">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;