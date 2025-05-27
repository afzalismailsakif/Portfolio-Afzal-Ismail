import { useState } from "react";
import { toast } from "@/hooks/use-toast";

// ✅ Replace this with your deployed Google Apps Script Web App URL (must end in /exec)
const GOOGLE_FORM_URL = "https://script.google.com/macros/s/AKfycbway0Ogw8LLwLBHemgSlK8buWLZTiH4mDJA3kaLd5GsmfB8LPpxx2XQWG813lhQbvkw/exec";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // prevents CORS errors by not expecting a response
        body: formData,
      });

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll be in touch soon 🚀",
      });

      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Submit error:", err);
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-[65vh] flex flex-col items-center justify-center animate-fade-in-up">
      <div className="w-full max-w-xl bg-card p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-1">Contact Me</h2>
        <p className="mb-7 text-muted-foreground">
          Let's connect! Fill out the form below, and I'll respond ASAP.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="bg-background border border-border px-4 py-2 rounded focus:ring-2 focus:ring-accent outline-none"
            value={form.name}
            onChange={handleChange}
            disabled={submitting}
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="bg-background border border-border px-4 py-2 rounded focus:ring-2 focus:ring-accent outline-none"
            value={form.email}
            onChange={handleChange}
            disabled={submitting}
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="bg-background border border-border px-4 py-2 rounded focus:ring-2 focus:ring-accent outline-none"
            value={form.message}
            onChange={handleChange}
            disabled={submitting}
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-accent text-primary font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 focus:ring-2 focus:ring-accent"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
