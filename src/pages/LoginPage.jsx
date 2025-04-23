// import React from 'react'

// const LoginPage = () => {
//   return (
//     <div>LoginPage</div>
//   )
// }

// export default LoginPage


import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <h2 className="fw-bold mb-1">Welcome Back</h2>
                  <p className="text-muted">Log in to access your AWS AI/ML Kenya account</p>
                </div>
                
                <form>
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
                  
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label htmlFor="password" className="form-label">Password</label>
                      <Link to="#" className="text-decoration-none small">Forgot Password?</Link>
                    </div>
                    <input 
                      type="password" 
                      className="form-control form-control-lg" 
                      id="password" 
                      placeholder="Enter your password" 
                      required 
                    />
                  </div>
                  
                  <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">Sign In</button>
                  </div>
                </form>
                
                <div className="text-center mt-4">
                  <p className="mb-0">Don't have an account? <Link to="/signup" className="text-decoration-none">Sign up</Link></p>
                </div>
                
                <div className="divider d-flex align-items-center my-4">
                  <span className="text-muted mx-3">OR CONTINUE WITH</span>
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

export default LoginPage;