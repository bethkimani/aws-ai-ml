function About() {
    return (
        <section id="about" className="about py-5">
            <div className="container py-5">
                <div className="row justify-content-center mb-5">
                <div className="col-md-8 text-center">
                    <h2 className="display-5 fw-bold mb-4">About Our Community</h2>
                    <p className="lead">Building a thriving ecosystem of AI and Machine Learning practitioners in Kenya to transform ideas into impact with AWS AI/ML Solutions.</p>
                </div>
                </div>
                
                <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                        <div className="text-primary mb-3">
                        <i className="bi bi-people-fill fs-1"></i>
                        </div>
                        <h4 className="card-title mb-3">Community Driven</h4>
                        <p className="card-text">A community by developers for developers focused on AWS AI/ML technologies and solutions.</p>
                    </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                        <div className="text-primary mb-3">
                        <i className="bi bi-lightbulb-fill fs-1"></i>
                        </div>
                        <h4 className="card-title mb-3">Knowledge Sharing</h4>
                        <p className="card-text">Regular workshops, talks and hands-on sessions to share knowledge and best practices.</p>
                    </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                        <div className="text-primary mb-3">
                        <i className="bi bi-graph-up fs-1"></i>
                        </div>
                        <h4 className="card-title mb-3">Career Growth</h4>
                        <p className="card-text">Opportunities to network, showcase your skills, and advance your career in AI/ML.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default About