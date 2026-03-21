import { Heart } from 'lucide-react'

const HOBBIES = [
  {
    label: 'Gaming',
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=120&fit=crop',
    alt: 'Gaming',
  },
  {
    label: 'Anime',
    src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=200&h=120&fit=crop',
    alt: 'Anime',
  },
  {
    label: 'Music (Coke Studio)',
    src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200&h=120&fit=crop',
    alt: 'Music',
  },
  {
    label: 'Gym',
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=120&fit=crop',
    alt: 'Gym',
  },
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
              className="flex-shrink-0 w-32 rounded-lg overflow-hidden border-[1.5px] dark:border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.02] backdrop-blur-md shadow-lg"
            >
              <p className="px-3 py-2 text-sm font-medium text-neutral-900 dark:text-white text-center truncate">
                {hobby.label}
              </p>
              <div className="h-20 w-full overflow-hidden">
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
