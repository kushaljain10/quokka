import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      {/* gradient blobs removed to enforce solid color scheme */}
      
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">The Unbothered Quokka</h1>
          <p className="hero-subtitle">no thoughts. just vibes.</p>
          <p className="hero-tagline">the trenches are screaming. he is smiling.</p>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="quokka-card"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="quokka-placeholder">
              <img
                className="quokka-image"
                src="/pfp.png"
                alt="Quokka PFP"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Join community button moved from Community section */}
        <motion.div
          className="hero-community-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="button community-btn"
          >
            Join $QUOKKA Community
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero