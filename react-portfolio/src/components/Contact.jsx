import { MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-6">
      <h2 className="text-3xl font-medium tracking-tight text-white flex items-center gap-3 mb-2">
        <MessageSquare className="w-7 h-7 text-neutral-400" strokeWidth={1.5} />
        Get in touch
      </h2>

      <form className="flex flex-col gap-6 mt-2">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2.5">
            <label className="text-lg font-normal text-neutral-400 ml-1">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-white/[0.02] border border-white/10 shadow-lg rounded-xl px-5 py-3.5 text-xl text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all placeholder:text-neutral-600 font-normal"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="text-lg font-normal text-neutral-400 ml-1">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-white/[0.02] border border-white/10 shadow-lg rounded-xl px-5 py-3.5 text-xl text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all placeholder:text-neutral-600 font-normal"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-lg font-normal text-neutral-400 ml-1">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full bg-white/[0.02] border border-white/10 shadow-lg rounded-xl px-5 py-3.5 text-xl text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all placeholder:text-neutral-600 resize-none font-normal"
            placeholder="How can I help you?"
          />
        </div>

        <button
          type="button"
          className="mt-4 self-start px-7 py-3.5 bg-white text-black font-medium rounded-xl hover:bg-neutral-200 transition-colors flex items-center gap-2.5 shadow-[0_4px_20px_rgba(255,255,255,0.15)] text-lg"
        >
          Send Message
          <Send className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </form>
    </section>
  )
}

