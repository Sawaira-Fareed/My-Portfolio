import { useMemo } from 'react'
import { techStack, iconUrl, type TechItem } from '../content/techStack'

interface PlacedItem extends TechItem {
  leftPct: number
  topPct: number
  floatDuration: number
  floatDelay: number
  size: number
}

// Jittered-grid distribution: divides the area into roughly-square cells
// (so items are evenly spread) then nudges each item randomly within its
// own cell. This keeps spacing organic without any item landing too close
// to — or too far from — its neighbors, which a pure random scatter can't
// guarantee and a rigid grid doesn't feel "alive."
function distributeItems(items: TechItem[]): PlacedItem[] {
  const cols = Math.ceil(Math.sqrt(items.length * 1.4))
  const rows = Math.ceil(items.length / cols)
  const cellW = 100 / cols
  const cellH = 100 / rows

  return items.map((item, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const jitterX = (Math.random() - 0.5) * cellW * 0.5
    const jitterY = (Math.random() - 0.5) * cellH * 0.5

    return {
      ...item,
      leftPct: Math.min(94, Math.max(2, col * cellW + cellW / 2 + jitterX)),
      topPct: Math.min(90, Math.max(4, row * cellH + cellH / 2 + jitterY)),
      floatDuration: 3.5 + Math.random() * 2.5,
      floatDelay: Math.random() * 2,
      size: 40 + Math.random() * 16,
    }
  })
}

export default function TechStack() {
  const placed = useMemo(() => distributeItems(techStack), [])

  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 md:px-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-light mb-4 text-center">
        Tools of the Trade
      </h2>
      <p className="text-sm text-white/50 text-center max-w-md mx-auto mb-14">
        Not a badge collection — just what she's actually reached for, project after project.
      </p>

      <div className="relative w-full max-w-4xl mx-auto h-[420px] sm:h-[480px] md:h-[540px]">
        {placed.map((item) => (
          <div
            key={item.name}
            className="absolute flex flex-col items-center gap-2 group"
            style={{
              left: `${item.leftPct}%`,
              top: `${item.topPct}%`,
              transform: 'translate(-50%, -50%)',
              animation: `tech-float ${item.floatDuration}s ease-in-out ${item.floatDelay}s infinite`,
            }}
          >
            <div
              className="flex items-center justify-center rounded-full border border-rose-primary/15 bg-midnight-charcoal/60 backdrop-blur-sm transition-all duration-300 group-hover:border-rose-primary/50 group-hover:scale-110"
              style={{ width: item.size, height: item.size, boxShadow: '0 0 0 rgba(214,64,126,0)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = '0 0 24px rgba(214,64,126,0.25)')
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 rgba(214,64,126,0)')}
            >
              {item.iconSlug ? (
                <img
                  src={iconUrl(item.iconSlug)}
                  alt={item.name}
                  className="w-1/2 h-1/2 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    // If a devicon slug ever 404s, fall back to a text badge
                    // instead of showing a broken image icon.
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
              ) : null}
              <span
                className="text-[9px] font-semibold text-rose-glow items-center justify-center text-center px-1"
                style={{ display: item.iconSlug ? 'none' : 'flex' }}
              >
                {item.name.length > 8 ? item.name.slice(0, 6) + '…' : item.name}
              </span>
            </div>
            <span className="text-[10px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes tech-float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
