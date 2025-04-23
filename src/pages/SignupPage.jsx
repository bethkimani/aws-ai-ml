// import React from 'react'

// const SignupPage = () => {
//   return (
//     <div>SignupPage</div>
//   )
// }

// export default SignupPage


import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <h2 className="fw-bold mb-1">Create an Account</h2>
                  <p className="text-muted">Join the AWS AI/ML Kenya community</p>
                </div>
                
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        id="firstName" 
                        placeholder="John" 
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        id="lastName" 
                        placeholder="Doe" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control form-control-lg" 
                      id="email" 
                      placeholder="name@example.com" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control form-control-lg" 
                      id="password" 
                      placeholder="Create a password" 
                      required 
                    />
                    <div className="form-text">
                      Password must be at least 8 characters with a number and a special character.
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input 
                      type="password" 
                      className="form-control form-control-lg" 
                      id="confirmPassword" 
                      placeholder="Confirm your password" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="termsAgree" required />
                    <label className="form-check-label" htmlFor="termsAgree">
                      I agree to the <Link to="#" className="text-decoration-none">Terms of Service</Link> and <Link to="#" className="text-decoration-none">Privacy Policy</Link>
                    </label>
                  </div>
                  
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">Create Account</button>
                  </div>
                </form>
                
                <div className="text-center mt-4">
                  <p className="mb-0">Already have an account? <Link to="/login" className="text-decoration-none">Log in</Link></p>
                </div>
                
                <div className="divider d-flex align-items-center my-4">
                  <span className="text-muted mx-3">OR SIGN UP WITH</span>
                </div>
                
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-dark btn-lg">
                    <i className="bi bi-github me-2"></i> GitHub
                  </button>
                  <button className="btn btn-outline-primary btn-lg">
                    <i className="bi bi-google me-2"></i> Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;