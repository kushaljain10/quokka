import { motion } from 'framer-motion'
import './ContractAddress.css'

const CONTRACT_ADDRESS = 'PASTE_CA_HERE'

const ContractAddress = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <section id="ca" className="contract-address">
      <div className="ca-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contract Address
        </motion.h2>

        <motion.div
          className="ca-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="ca-display">
            <code>{CONTRACT_ADDRESS}</code>
            <button
              className="copy-icon"
              aria-label="Copy Contract Address"
              title="Copy"
              onClick={() => handleCopy(CONTRACT_ADDRESS)}
            >
              📋
            </button>
          </div>
        </motion.div>

        {/* Minimal UI: toast removed */}
      </div>
    </section>
  )
}

export default ContractAddress