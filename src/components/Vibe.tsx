import { motion } from 'framer-motion'
import './Vibe.css'

const Vibe = () => {
  const vibes = [
    'Dissociated',
    'Head Empty',
    'Happily Clueless',
    'Emotionally AFK'
  ]

  return (
    <section id="vibe" className="vibe">
      <div className="vibe-content">
        <motion.h2
          className="vibe-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          No thoughts. Just vibes.
        </motion.h2>

        <motion.div
          className="vibe-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>The trenches are loud.</p>
          <p>Charts are red.</p>
          <p>Everyone is screaming.</p>
          <br />
          <p>Quokka is smiling.</p>
          <br />
          <p>Not because he's winning.</p>
          <p>Because his brain logged out.</p>
          <br />
          <p>At some point, something snapped.</p>
          <p>The inner monologue shut off.</p>
          <p>Now it's just elevator music.</p>
          <br />
          <p>$QUOKKA is the meme of being cooked</p>
          <p>but somehow chilling.</p>
          <br />
          <p>If everything is chaos,</p>
          <p>at least hold the smile.</p>
        </motion.div>

        <motion.div
          className="vibe-pills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {vibes.map((vibe) => (
            <motion.div
              key={vibe}
              className="vibe-pill"
              whileHover={{
                rotate: [0, -2, 2, -2, 0],
                scale: 1.05
              }}
              transition={{ duration: 0.3 }}
            >
              {vibe}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Vibe