"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import styles from "./page.module.css";

const DEFAULT_EMAIL = "hello@cultscribe.example";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !email.trim()) return;
    const subj = encodeURIComponent(`CultScribe — message from ${name || "site"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\nName: ${name || "(not provided)"}\nEmail: ${email}`,
    );
    window.location.href = `mailto:${DEFAULT_EMAIL}?subject=${subj}&body=${body}`;
  };

  return (
    <>
      <SiteHeader />
      <div className={styles.glow} aria-hidden />
      <div className={styles.page}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Get in touch</span>
          <h1 className={styles.title}>Let&apos;s write the next page</h1>
          <p className={styles.lead}>
            Wholesales, custom drops, or questions about the collection—send a
            note. We read every message.
          </p>

          <form className={styles.block} onSubmit={handleSubmit} noValidate>
            <p className={styles.hint}>
              Sends your message through your default email app. You can also
              write to{" "}
              <a className={styles.hintLink} href={`mailto:${DEFAULT_EMAIL}`}>
                {DEFAULT_EMAIL}
              </a>{" "}
              — replace that placeholder in the code with your business email.
            </p>
            <label className={styles.label} htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              className={styles.input}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className={styles.label} htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              className={styles.input}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className={styles.label} htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              className={styles.textarea}
              name="message"
              placeholder="Tell us what you need—orders, partnerships, or a hello."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
            />
            <button className={styles.submit} type="submit">
              Send message
            </button>
          </form>

          <Link className={styles.back} href="/">
            ← Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
