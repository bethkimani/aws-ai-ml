// import React from 'react'

// const Hero = () => {
//   return (
//     <div>Hero</div>
//   )
// }

// export default Hero

function Hero() {
    return (
      <section className="hero bg-primary text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">AWS AI/ML User Group Kenya</h1>
              {/* <p className="lead mb-4">Join Kenya's vibrant community of AI and Machine Learning enthusiasts, developers, and experts exploring AWS technologies.</p> */}
              <p className="lead mb-4">This is a community of Cloud Enthusiasts, Machine Learning Practitioners, Data Scientists and AI Innovators who meet to explore and discuss possibilities of AWS Technologies in Artificial Intelligence (AI) and Machine Learning (ML)</p>
              <div className="d-flex gap-3">
                <a href="#events" className="btn btn-warning btn-lg">Upcoming Events</a>
                <a href="#about" className="btn btn-outline-light btn-lg">Learn More</a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img 
                src="/assets/hero.webp" 
                alt="AWS AI/ML Kenya Community" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Hero