import { useEffect, useState } from 'react'
import { poseImages, type GuidePose } from './poses'

interface Layer {
  id: number
  pose: GuidePose
  visible: boolean
}

let layerId = 0

export default function GuideCharacter({ pose }: { pose: GuidePose }) {
  const [layers, setLayers] = useState<Layer[]>([{ id: layerId++, pose, visible: true }])

  // When the pose prop changes, stack a new (invisible) layer on top
  useEffect(() => {
    setLayers((prev) => {
      if (prev[prev.length - 1].pose === pose) return prev
      return [...prev, { id: layerId++, pose, visible: false }]
    })
  }, [pose])

  // Next frame, fade the new top layer in
  useEffect(() => {
    const top = layers[layers.length - 1]
    if (top && !top.visible) {
      const raf = requestAnimationFrame(() => {
        setLayers((prev) => prev.map((l) => (l.id === top.id ? { ...l, visible: true } : l)))
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [layers])

  // Once the top layer finishes fading in, drop everything beneath it
  const handleTransitionEnd = (id: number) => {
    setLayers((prev) => {
      const idx = prev.findIndex((l) => l.id === id)
      if (idx === -1 || idx !== prev.length - 1) return prev
      return prev.slice(idx)
    })
  }

  return (
    <div className="relative w-[220px] h-[280px]">
      {layers.map((layer, i) => (
        <img
          key={layer.id}
          src={poseImages[layer.pose]}
          alt="Portfolio AI guide"
          onTransitionEnd={() => handleTransitionEnd(layer.id)}
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-out"
          style={{ opacity: layer.visible ? 1 : 0, zIndex: i }}
        />
      ))}
    </div>
  )
}