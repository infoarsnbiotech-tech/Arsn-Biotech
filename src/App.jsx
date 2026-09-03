import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Process from './components/Process.jsx'
import About from './components/About.jsx'
import FAQ from './components/FAQ.jsx'
import CTABanner from './components/CTABanner.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <WhyUs />
        <Process />
        <About />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
