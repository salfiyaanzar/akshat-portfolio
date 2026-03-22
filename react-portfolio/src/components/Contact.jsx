import { MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 mb-1">
        <MessageSquare className="w-6 h-6 text-neutral-500 dark:text-neutral-400" strokeWidth={1.5} />
        Get in touch
      </h2>

      <form className="flex flex-col gap-4 mt-1">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-base font-normal text-neutral-600 dark:text-neutral-400 ml-1">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-neutral-50 dark:bg-white/[0.02] border-[1.5px] dark:border border-neutral-200 dark:border-white/10 shadow-lg rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-400 dark:focus:border-white/20 focus:bg-neutral-100 dark:focus:bg-white/[0.04] transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-normal"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-base font-normal text-neutral-600 dark:text-neutral-400 ml-1">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-neutral-50 dark:bg-white/[0.02] border-[1.5px] dark:border border-neutral-200 dark:border-white/10 shadow-lg rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-400 dark:focus:border-white/20 focus:bg-neutral-100 dark:focus:bg-white/[0.04] transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-normal"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-base font-normal text-neutral-600 dark:text-neutral-400 ml-1">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full bg-neutral-50 dark:bg-white/[0.02] border-[1.5px] dark:border border-neutral-200 dark:border-white/10 shadow-lg rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-400 dark:focus:border-white/20 focus:bg-neutral-100 dark:focus:bg-white/[0.04] transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600 resize-none font-normal"
            placeholder="How can I help you?"
          />
        </div>

        <button
          type="button"
          className="mt-2 self-start px-5 sm:px-6 py-2.5 sm:py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-medium rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center gap-2.5 shadow-lg dark:shadow-[0_4px_20px_rgba(255,255,255,0.15)] text-base sm:text-lg"
        >
          Send Message
          <Send className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </form>
    </section>
  )
}

