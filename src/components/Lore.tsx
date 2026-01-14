import { motion } from 'framer-motion'
import './Lore.css'

const Lore = () => {
  return (
    <section id="lore" className="lore">
      <div className="lore-content">
        <motion.h2
          className="lore-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Lore
        </motion.h2>

        <motion.div
          className="lore-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p>
            The trenches are hell. Everyone is screaming. $QUOKKA is the lore of total dissociation. He isn't smiling because life is good. He is smiling because his brain has finally snapped. It's that feeling when you're down 90% and you just start laughing at your phone. He is unbothered because he is no longer mentally present. The face of "I'm cooked but I'm chilling."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Lore