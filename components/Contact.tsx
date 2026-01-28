"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Send email using Formspree
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New inquiry from ${formData.name} - The Light Project`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-serif text-center mb-6">
          Contact
        </h2>
        <p className="text-center text-lg text-secondary mb-12">
          Interested in acquiring an original work, commissioning a custom painting, or exploring collaboration opportunities? All paintings are available for purchase and can be shipped internationally.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
              Name <span className="text-red-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 border border-divider focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
              Email <span className="text-red-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-divider focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
              Message <span className="text-red-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell me about your interest in the work, commission ideas, or collaboration opportunities..."
              className="w-full px-4 py-3 border border-divider focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-vertical"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-accent text-white px-12 py-4 hover:bg-accent-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg tracking-wide"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-center">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-center">
              Something went wrong. Please try again.
            </div>
          )}
        </form>

        {/* Instagram Link */}
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Follow the project on Instagram:</p>
          <a
            href="https://instagram.com/thelightproject.art"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl hover:text-accent transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @thelightproject.art
          </a>
        </div>

        {/* Privacy Note */}
        <p className="text-sm text-secondary text-center mt-8">
          Your information will only be used to respond to your inquiry and will never be shared with third parties.
        </p>
      </div>
    </section>
  );
}
