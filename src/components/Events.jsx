// import React from 'react'

// const Events = () => {
//   return (
//     <div>Events</div>
//   )
// }

// export default Events

function Events() {
    const upcomingEvents = [
      {
        id: 1,
        title: "ALX x AWS UG AI/ML Kenya Community Hangout",
        date: "April 4, 2025",
        time: "1:00 PM - 6:00 PM",
        location: "ALX Piano Hub, Westlands",
        description: "Come and connect with fellow community builders as we exchange ideas on the AI/ML landscape in Kenya and Africa"
      },
      {
        id: 2,
        title: "AI Use Cases in African Business",
        date: "April 28, 2025",
        time: "5:30 PM - 7:30 PM",
        location: "Virtual (Zoom)",
        description: "Panel discussion on how AI is transforming businesses across Africa."
      },
      {
        id: 3,
        title: "AWS AI Hackathon",
        date: "May 10-11, 2025",
        time: "9:00 AM - 5:00 PM",
        location: "Nairobi Garage",
        description: "Build innovative solutions using AWS AI/ML services in this 2-day hackathon."
      }
    ];
  
    return (
      <section id="events" className="events bg-light py-5">
        <div className="container py-5">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Upcoming Events</h2>
              <p className="lead">Join us at our next learning and networking opportunities.</p>
            </div>
          </div>
          
          <div className="row g-4">
            {upcomingEvents.map(event => (
              <div className="col-md-6 col-lg-4" key={event.id}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge bg-primary">{event.date}</span>
                      <span className="text-muted small">{event.time}</span>
                    </div>
                    <h4 className="card-title mb-3">{event.title}</h4>
                    <p className="card-text mb-4">{event.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">
                        <i className="bi bi-geo-alt me-1"></i> {event.location}
                      </span>
                      <button className="btn btn-sm btn-outline-primary">RSVP</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <a href="#" className="btn btn-primary">View All Events</a>
          </div>
        </div>
      </section>
    );
  }

  export default Events