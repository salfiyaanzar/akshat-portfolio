const CARDS = [
  { src: '/imgleft.jpeg', alt: 'Project 1' },
  { src: '/imgmid.jpeg', alt: 'Project 2' },
  { src: '/imgright.jpeg', alt: 'Project 3' },
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
