import { useState, useEffect } from 'react'

function Team() {
  const [teamMembers, setTeamMembers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    // Fetch team data from the JSON file
    fetch('/team.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch team data')
        }
        return response.json()
      })
      .then(data => {
        setTeamMembers(data.members)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  const handleImageError = (e, name) => {
    e.target.onerror = null
    e.target.src = `https://picsum.photos/100/50`
  }
  
  if (isLoading) {
    return (
      <section id="team" className="team bg-light py-5">
        <div className="container text-center py-5">
          <p>Loading team members...</p>
        </div>
      </section>
    )
  }
  
  if (error) {
    return (
      <section id="team" className="team bg-light py-5">
        <div className="container text-center py-5">
          <p className="text-danger">Error loading team members: {error}</p>
        </div>
      </section>
    )
  }
  
  return (
    <section id="team" className="team bg-light py-5">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h2 className="display-5 fw-bold mb-4">Our Team</h2>
            <p className="lead">Meet the passionate individuals driving our community forward.</p>
          </div>
        </div>
        
        <div className="flex justify-content-center row g-4">
          {teamMembers.map((member) => (
            <div className="col-md-6 col-lg-4" key={member.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img 
                  src={member.image} 
                  className="card-img-top" 
                  alt={member.name} 
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">{member.name}</h5>
                  <p className="text-muted small mb-3">{member.role}</p>
                  <p className="card-text">{member.expertise}</p>
                  <div className="d-flex justify-content-center gap-2">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-twitter"></i>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team




// function Team() {

//     return (
//       <section id="team" className="team bg-light py-5">
//         <div className="container py-5">
//           <div className="row justify-content-center mb-5">
//             <div className="col-md-8 text-center">
//               <h2 className="display-5 fw-bold mb-4">Our Team</h2>
//               <p className="lead">Meet the passionate individuals driving our community forward.</p>
//             </div>
//           </div>
          
//           <div className="row g-4">
//             {[1, 2, 3, 4].map((member) => (
//               <div className="col-md-6 col-lg-3" key={member}>
//                 <div className="card h-100 border-0 shadow-sm">
//                   <img 
//                     src={`https://via.placeholder.com/300x300?text=Team+Member+${member}`} 
//                     className="card-img-top" 
//                     alt={`Team Member ${member}`} 
//                   />
//                   <div className="card-body text-center">
//                     <h5 className="card-title mb-1">Kevin Tuei</h5>
//                     <p className="text-muted small mb-3">Community Lead</p>
//                     <p className="card-text">AWS Certified Developer with expertise in Amazon SageMaker and AWS Lambda.</p>
//                     <div className="d-flex justify-content-center gap-2">
//                       <a href="#" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a>
//                       <a href="#" className="btn btn-sm btn-outline-primary"><i className="bi bi-twitter"></i></a>
//                       <a href="#" className="btn btn-sm btn-outline-primary"><i className="bi bi-github"></i></a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }

//   export default Team