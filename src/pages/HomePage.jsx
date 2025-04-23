// import React from 'react'

// const HomePage = () => {
//   return (
//     <div>HomePage</div>
//   )
// }

// export default HomePage

// File: pages/HomePage.jsx
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Activities from '../components/Activities';
import Events from '../components/Events';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Activities />
      <Events />
      <Blog />
      <Contact />
    </main>
  );
}

export default HomePage;