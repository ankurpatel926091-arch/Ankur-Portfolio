const ContactForm = () => {
  return (
    <form className="space-y-6">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-xl border border-cyan-500/20 bg-white/5 px-5 py-4 text-white outline-none"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full rounded-xl border border-cyan-500/20 bg-white/5 px-5 py-4 text-white outline-none"
      />

      <input
        type="text"
        placeholder="Subject"
        className="w-full rounded-xl border border-cyan-500/20 bg-white/5 px-5 py-4 text-white outline-none"
      />

      <textarea
        rows="6"
        placeholder="Your Message"
        className="w-full rounded-xl border border-cyan-500/20 bg-white/5 px-5 py-4 text-white outline-none"
      ></textarea>

      <button
        type="submit"
        className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-400 transition"
      >
        Send Message
      </button>

    </form>
  );
};

export default ContactForm;