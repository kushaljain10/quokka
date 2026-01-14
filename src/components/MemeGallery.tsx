import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Masonry from 'react-masonry-css'
import './MemeGallery.css'

interface Meme {
  id: number
  imageSrc: string
  alt: string
}

const MemeGallery = () => {
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null)

  // Placeholder memes - users can replace these with actual images
  const memes: Meme[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    imageSrc: `https://placehold.co/400x${300 + (i % 4) * 100}/1a1a1f/c3f73a?text=Meme+${i + 1}`,
    alt: `Quokka meme ${i + 1}`
  }))

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  const downloadImage = async (imageSrc: string, filename: string) => {
    try {
      const response = await fetch(imageSrc)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  return (
    <section id="memes" className="meme-gallery">
      <div className="meme-gallery-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meme Gallery
        </motion.h2>
        <motion.p
          className="meme-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          scroll. screenshot. post.
        </motion.p>
      </div>

      <Masonry
        breakpointCols={breakpointColumns}
        className="meme-masonry-grid"
        columnClassName="meme-masonry-column"
      >
        {memes.map((meme, index) => (
          <motion.div
            key={meme.id}
            className="meme-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
              scale: 1.03,
              y: -8,
              transition: { duration: 0.2 }
            }}
            onClick={() => setSelectedMeme(meme)}
          >
            <img src={meme.imageSrc} alt={meme.alt} loading="lazy" />
          </motion.div>
        ))}
      </Masonry>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMeme && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMeme(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedMeme.imageSrc} alt={selectedMeme.alt} />
              
              <div className="lightbox-actions">
                <button
                  className="lightbox-btn"
                  onClick={() => downloadImage(selectedMeme.imageSrc, `quokka-meme-${selectedMeme.id}.jpg`)}
                  title="Download"
                >
                  ⬇️
                </button>
                <button
                  className="lightbox-btn"
                  onClick={() => setSelectedMeme(null)}
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default MemeGallery