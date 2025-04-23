// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact


// File: components/Contact.jsx
function Contact() {
    return (
      <section id="contact" className="contact bg-light py-5">
        <div className="container py-5">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Get in Touch</h2>
              <p className="lead">Have questions or want to join our community? Reach out to us!</p>
            </div>
          </div>
          
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-4">Contact Information</h4>
                  
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-3 text-primary">
                      <i className="bi bi-envelope-fill fs-4"></i>
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1">Email</h5>
                      <p>awsaimlkenyaug@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0 me-3 text-primary">
                      <i className="bi bi-telephone-fill fs-4"></i>
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1">Phone</h5>
                      <p>+254 705 021 210</p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0 me-3 text-primary">
                      <i className="bi bi-geo-alt-fill fs-4"></i>
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1">Location</h5>
                      <p>Nairobi, Kenya</p>
                    </div>
                  </div>
                  
                  <h4 className="mb-3">Follow Us</h4>
                  <div className="d-flex gap-3">
                    <a href="https://x.com/awsaimlkenyaug" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg rounded-circle">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/aws-ai-ml-kenya/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg rounded-circle">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://chat.whatsapp.com/JwpFOWVXsfLApP3nANZfWQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg rounded-circle">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/awsaimlkenyaug/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg rounded-circle">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-4">Send us a Message</h4>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="5" required></textarea>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="newsletter" />
                          <label className="form-check-label" htmlFor="newsletter">
                            Subscribe to our newsletter
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="button" className="btn btn-primary">Send Message</button> {/* type="submit" */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Contact