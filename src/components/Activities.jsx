// import React from 'react'

// const Activities = () => {
//   return (
//     <div>Activities</div>
//   )
// }

// export default Activities


function Activities() {
    return (
      <section id="activities" className="activities py-5">
        <div className="container py-5">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Our Activities</h2>
              <p className="lead">Engaging programs to help you learn, grow, and connect with the community.</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src='/assets/activities/technical-workshops.webp'
                      className="img-fluid rounded-start h-100 object-fit-cover" 
                      alt="Workshops" 
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">Technical Workshops</h4>
                      <p className="card-text">Hands-on sessions where you learn practical skills on AWS AI/ML services like SageMaker, Rekognition, and Comprehend.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src='/assets/activities/tech-talks.webp' 
                      className="img-fluid rounded-start h-100 object-fit-cover" 
                      alt="Tech Talks" 
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">Tech Talks</h4>
                      <p className="card-text">Expert presentations on cutting-edge topics, best practices, and real-world case studies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                     src='/assets/activities/hackathons.webp'
                      className="img-fluid rounded-start h-100 object-fit-cover" 
                      alt="Hackathons" 
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">Hackathons</h4>
                      <p className="card-text">Collaborative coding events to solve real-world problems using AWS AI/ML solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src='/assets/activities/networking.webp'
                      className="img-fluid rounded-start h-100 object-fit-cover" 
                      alt="Networking" 
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">Networking Sessions</h4>
                      <p className="card-text">Connect with fellow developers, industry experts, and potential employers in the AI/ML space.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Activities