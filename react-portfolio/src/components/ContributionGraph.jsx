const CARDS = [
  {
    src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
    alt: 'Project 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    alt: 'Project 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    alt: 'Project 3',
  },
]

export default function ContributionGraph() {
  return (
    <section className="flex flex-col gap-3 w-full overflow-hidden">
      <div className="grid grid-cols-3 gap-4">
        {CARDS.map((card) => (
          <a
            key={card.alt}
            href="#"
            className="block overflow-hidden rounded-xl border-[1.5px] dark:border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.02] transition-transform duration-300 hover:scale-105"
          >
            <img
              src={card.src}
              alt={card.alt}
              className="w-full h-28 object-cover"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
