import { Heart } from 'lucide-react'

const HOBBIES = [
  { label: 'Gaming', src: '/gaming.jpg', alt: 'Gaming' },
  { label: 'Anime', src: '/anime.jpg', alt: 'Anime' },
  { label: 'Music', src: '/music.jpg', alt: 'Music' },
  { label: 'Gym', src: '/gym.jpg', alt: 'Gym' },
]

export default function Hobbies() {
  return (
    <section className="flex flex-col gap-3 overflow-hidden">
      <h2 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 mb-1">
        <Heart className="w-6 h-6 text-neutral-500 dark:text-neutral-400" strokeWidth={1.5} />
        Hobbies & Interests
      </h2>

      <div className="relative overflow-hidden rounded-xl">
        <div className="flex gap-3 animate-scroll-horizontal w-max">
          {[...HOBBIES, ...HOBBIES].map((hobby, i) => (
            <div
              key={`${hobby.label}-${i}`}
              className="flex-shrink-0 w-28 sm:w-32 rounded-lg overflow-hidden border-[1.5px] dark:border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.02] backdrop-blur-md shadow-lg"
            >
              <p className="px-3 py-2 text-sm font-medium text-neutral-900 dark:text-white text-center truncate">
                {hobby.label}
              </p>
              <div className="h-16 sm:h-20 w-full overflow-hidden">
                <img
                  src={hobby.src}
                  alt={hobby.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
