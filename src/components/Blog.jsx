// import React from 'react'

// const Blog = () => {
//   return (
//     <div>Blog</div>
//   )
// }

// export default Blog


// function Blog() {
//     const blogPosts = [
//       {
//         id: 1,
//         title: "Getting Started with Amazon Comprehend for NLP",
//         excerpt: "Learn how to implement natural language processing solutions using Amazon Comprehend...",
//         author: "Jane Doe",
//         date: "March 25, 2025",
//         image: "/assets/blogs/aws-comprehend.webp",
//         link: "https://docs.aws.amazon.com/comprehend/latest/dg/getting-started.html"
//       },
//       {
//         id: 2,
//         title: "Building Computer Vision Apps with AWS Rekognition",
//         excerpt: "A step-by-step guide to implementing image and video analysis using AWS Rekognition...",
//         author: "John Smith",
//         date: "March 10, 2025",
//         image: "/assets/blogs/aws-rekognition.webp",
//         link: "https://aws.amazon.com/blogs/machine-learning/build-a-computer-vision-model-using-amazon-rekognition-custom-labels-and-compare-the-results-with-a-custom-trained-tensorflow-model/"
//       },
//       {
//         id: 3,
//         title: "Deploying ML Models at Scale with AWS Lambda",
//         excerpt: "Best practices for serverless deployment of machine learning models using AWS Lambda...",
//         author: "Alice Johnson",
//         date: "February 28, 2025",
//         image: "/assets/blogs/aws-lambda.webp",
//         link: "https://aws.amazon.com/blogs/compute/deploying-machine-learning-models-with-serverless-templates/"
//       }
//     ];
  
//     return (
//       <section id="blog" className="blog py-5">
//         <div className="container py-5">
//           <div className="row justify-content-center mb-5">
//             <div className="col-md-8 text-center">
//               <h2 className="display-5 fw-bold mb-4">Latest from Our Blog</h2>
//               <p className="lead">Insights, tutorials, and community stories from our members.</p>
//             </div>
//           </div>
          
//           <div className="row g-4">
//             {blogPosts.map(post => (
//               <div className="col-md-6 col-lg-4" key={post.id}>
//                 <div className="card h-100 border-0 shadow-sm">
//                   <img 
//                     src={post.image} 
//                     className="card-img-top" 
//                     alt={post.title} 
//                   />
//                   <div className="card-body">
//                     <h4 className="card-title mb-3">{post.title}</h4>
//                     <p className="card-text mb-4">{post.excerpt}</p>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="d-flex align-items-center">
//                         <img 
//                           src={`https://via.placeholder.com/40x40?text=${post.author.charAt(0)}`} 
//                           className="rounded-circle me-2" 
//                           alt={post.author} 
//                           width="32" 
//                           height="32"
//                         />
//                         <div>
//                           <small className="d-block fw-semibold">{post.author}</small>
//                           <small className="text-muted">{post.date}</small>
//                         </div>
//                       </div>
//                       <a href={post.link} target="_blank" className="btn btn-sm btn-outline-primary">Read More</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="text-center mt-5">
//             <a href="#" className="btn btn-primary">View All Posts</a>
//           </div>
//         </div>
//       </section>
//     );
//   }
  
//   export default Blog


function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Amazon Comprehend for NLP",
      excerpt: "Learn how to implement natural language processing solutions using Amazon Comprehend...",
      author: "Jane Doe",
      date: "March 25, 2025",
      image: "/assets/blogs/aws-comprehend.webp",
      link: "https://docs.aws.amazon.com/comprehend/latest/dg/getting-started.html"
    },
    {
      id: 2,
      title: "Building Computer Vision Apps with AWS Rekognition",
      excerpt: "A step-by-step guide to implementing image and video analysis using AWS Rekognition...",
      author: "John Smith",
      date: "March 10, 2025",
      image: "/assets/blogs/aws-rekognition.webp",
      link: "https://aws.amazon.com/blogs/machine-learning/build-a-computer-vision-model-using-amazon-rekognition-custom-labels-and-compare-the-results-with-a-custom-trained-tensorflow-model/"
    },
    {
      id: 3,
      title: "Deploying ML Models at Scale with AWS Lambda",
      excerpt: "Best practices for serverless deployment of machine learning models using AWS Lambda...",
      author: "Alice Johnson",
      date: "February 28, 2025",
      image: "/assets/blogs/aws-lambda.webp",
      link: "https://aws.amazon.com/blogs/compute/deploying-machine-learning-models-with-serverless-templates/"
    }
  ];

  // Handle image load errors
  const handleImageError = (e, title) => {
    e.target.onerror = null; // Prevent infinite fallback loop
    e.target.src = `https://via.placeholder.com/400x225?text=${title.replace(/\s+/g, '+')}`;
  };

  return (
    <section id="blog" className="blog py-5">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h2 className="display-5 fw-bold mb-4">Latest from Our Blog</h2>
            <p className="lead">Insights, tutorials, and community stories from our members.</p>
          </div>
        </div>
        
        <div className="row g-4">
          {blogPosts.map(post => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-wrapper" style={{ 
                  height: '225px', 
                  overflow: 'hidden', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa'
                }}>
                  <img 
                    src={post.image} 
                    className="card-img-top" 
                    alt={post.title}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    onError={(e) => handleImageError(e, post.title)}
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title mb-3">{post.title}</h4>
                  <p className="card-text mb-4">{post.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img 
                        src={`/assets/default-user.webp`} 
                        className="rounded-circle me-2" 
                        alt={post.author} 
                        width="32" 
                        height="32"
                      />
                      <div>
                        <small className="d-block fw-semibold">{post.author}</small>
                        <small className="text-muted">{post.date}</small>
                      </div>
                    </div>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a href="#" className="btn btn-primary">View All Posts</a>
        </div>
      </div>
    </section>
  );
}

export default Blog;