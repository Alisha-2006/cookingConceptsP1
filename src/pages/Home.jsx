import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import AboutChef from '../components/AboutChef.jsx'
import Expertise from '../components/Expertise.jsx'
import Works from '../components/Works.jsx'
import Testimonials from '../components/Testimonals.jsx'


const Home = () => {
    return (
    <div>
      <Navbar />
      <Hero />
      <AboutChef />
      <Expertise />
      <Works />
      <Testimonials />
    </div>
    )
}

export default Home