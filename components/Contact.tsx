"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

import type { Dict } from "@/lib/i18n";

export default function Contact({ t }: { t: Dict }) {
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/thelightproject.art@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-surface py-28 md:py-40" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-content gap-16 px-6 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">{c.eyebrow}</p>
          <h2 id="contact-heading" className="section-title">
            {c.h2a} <em>{c.h2b}</em>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-secondary text-pretty">
            {c.intro}
          </p>
          <a
            href="https://instagram.com/thelightproject.art"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-10"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @thelightproject.art
          </a>
        </div>

        <div className="lg:col-span-7">
          {status === "sent" ? (
            <div role="status" className="rounded-[2rem] border border-divider bg-background p-10 md:p-14">
              <p className="font-serif text-4xl md:text-5xl">{c.thanks}</p>
              <p className="mt-4 text-lg text-secondary">
                {c.thanksBody}
              </p>
              <button onClick={() => setStatus("idle")} className="btn-ghost mt-8">
                {c.another}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_subject" value="New Inquiry - The Light Project" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow mb-2 block">{c.name}</label>
                  <input id="name" name="name" type="text" required autoComplete="name" placeholder={c.namePh} className="field" />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow mb-2 block">{c.email}</label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder={c.emailPh} className="field" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="eyebrow mb-2 block">{c.message}</label>
                <textarea id="message" name="message" required rows={6} placeholder={c.messagePh} className="field resize-y" />
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <button type="submit" disabled={status === "sending"} className="btn-solid disabled:opacity-60">
                  {status === "sending" ? c.sending : c.send}
                  <span aria-hidden>→</span>
                </button>
                <p className="text-sm text-secondary">{c.privacy}</p>
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-red-accent">
                  {c.error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
