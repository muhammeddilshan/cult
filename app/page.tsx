"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { LedgerSection } from "./components/LedgerSection";
import { PosterSlider } from "./components/PosterSlider";
import { SiteHeader } from "./components/SiteHeader";
import styles from "./page.module.css";

const ESSENCE = [
  "Rebellion",
  "Creativity",
  "Timelessness",
  "Art",
  "Music culture",
] as const;

const NOTEBOOKS = [
  {
    id: "01",
    title: "The Legends line",
    description:
      "Premium hardcovers with finishes inspired by the era when album art was sacred. Your space for lyrics, riffs, and real ideas.",
    note: "Specs & pricing — coming as you share them",
  },
  {
    id: "02",
    title: "Studio & sketch",
    description:
      "Lay-flat pages for sketches, setlists, and setpiece notes. Built for dorms, studios, and late-night writing sessions.",
    note: "Paper weights & sizes — TBD from you",
  },
  {
    id: "03",
    title: "Tour edition",
    description:
      "Durable, road-ready build—because ideas don’t wait for a desk. Every cover tells a story worth carrying forward.",
    note: "Colorways & limited drops — you define",
  },
] as const;

export default function Home() {
  const reduceMotion = useReducedMotion();

  const heroContainer = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: reduceMotion ? 0 : 0.1,
          delayChildren: reduceMotion ? 0 : 0.06,
        },
      },
    }),
    [reduceMotion],
  );

  const fadeUp = useMemo(
    () => ({
      hidden: reduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 18 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reduceMotion ? 0.01 : 0.62,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      },
    }),
    [reduceMotion],
  );

  const filmBar = useMemo(
    () => ({
      hidden: reduceMotion
        ? { opacity: 0 }
        : { opacity: 0, scaleX: 0 },
      show: {
        opacity: 1,
        scaleX: 1,
        transition: {
          duration: reduceMotion ? 0.01 : 0.75,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      },
    }),
    [reduceMotion],
  );

  return (
    <>
      <SiteHeader />

      <main className={styles.main} id="top">
        <motion.section
          className={styles.hero}
          aria-label="Intro"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <div className={styles.heroGlow} aria-hidden />
          <div className={styles.heroGrid} aria-hidden />

          <motion.div className={styles.logoWrap} variants={fadeUp}>
            <Image
              src="/logo.png"
              alt="CultScribe — Raw. Real. Written."
              width={520}
              height={200}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </motion.div>

          <motion.p className={styles.heroEst} variants={fadeUp}>
            Analog soul · Hand-finished spirit
          </motion.p>

          <motion.div
            className={styles.heroFilmBar}
            variants={filmBar}
            aria-hidden
          />

          <motion.h1 className={styles.tagline} variants={fadeUp}>
            Where <span>legends</span> live forever
          </motion.h1>
          <motion.p className={styles.heroSub} variants={fadeUp}>
            Notebooks that honor the timeless spirit of rock and metal—born from
            a love of musical history, built for students and creators who refuse
            generic stationery.
          </motion.p>
          <motion.div className={styles.ctaRow} variants={fadeUp}>
            <a className={`${styles.btn} ${styles.btnPrimary}`} href="#notebooks">
              Explore notebooks
            </a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="#identity">
              Our story
            </a>
          </motion.div>
          <motion.p className={styles.scrollHint} variants={fadeUp}>
            Scroll
          </motion.p>
        </motion.section>

        <section
          className={styles.posterSection}
          aria-labelledby="poster-showcase-title"
        >
          <div className={styles.posterSectionInner}>
            <span className={styles.posterEyebrow}>The art</span>
            <h2 id="poster-showcase-title" className={styles.posterTitle}>
              Covers that hit like classic posters
            </h2>
            <PosterSlider ariaLabelledBy="poster-showcase-title" />
          </div>
        </section>

        <section
          className={styles.section}
          id="identity"
          aria-labelledby="identity-title"
        >
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Brand identity</span>
            <h2 id="identity-title" className={styles.title}>
              Write boldly. Think freely.
            </h2>
            <p className={styles.lead}>
              CultScribe fuses design with the stories behind the bands you grew up
              on—The Beatles, Pink Floyd, Guns N’ Roses, Led Zeppelin, Metallica,
              and the legends still echoing in your headphones. This isn’t filler
              merch: every cover is treated as a piece of cultural history, and every
              page is a companion for notes, lyrics, dreams, and sketches.
            </p>
          </div>

          <div className={styles.brandBlock}>
            <p className={styles.lead} style={{ marginTop: 0, maxWidth: "none" }}>
              We stand against flat, forgettable notebooks. We’re for rebellion,
              creativity, timeless art, and music culture—stamped into something you
              can hold, flip through, and fill.
            </p>
            <blockquote className={styles.quote}>
              Every cover is a piece of cultural history—a place where your own
              voice joins the story.
            </blockquote>
            <div
              className={styles.essenceGrid}
              role="list"
              aria-label="Brand essence"
            >
              {ESSENCE.map((word) => (
                <div
                  className={styles.essenceCard}
                  key={word}
                  role="listitem"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </section>

        <LedgerSection />

        <div className={styles.notebookStrip} id="notebooks">
          <section
            className={styles.section}
            style={{ maxWidth: 1200, margin: "0 auto" }}
            aria-labelledby="notebooks-title"
          >
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>The collection</span>
              <h2 id="notebooks-title" className={styles.title}>
                Notebooks like album art
              </h2>
              <p className={styles.lead}>
                A gallery of covers and formats—tuned for the way you create. When
                you share final names, paper specs, and price points, we can swap
                these cards for your real lineup.
              </p>
            </div>
            <div className={styles.cards}>
              {NOTEBOOKS.map((item) => (
                <article className={styles.card} key={item.id}>
                  <span className={styles.cardNum}>Series {item.id}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <p className={styles.cardTag}>{item.note}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section
          className={styles.footerCta}
          aria-label="Call to action"
        >
          <h2 className={styles.title} style={{ fontSize: "2rem" }}>
            Your story. Your pages.
          </h2>
          <p>
            Drop your notebook details, imagery, and links when you’re ready—we’ll
            wire them into this layout so the page stays as bold as the brand.
          </p>
          <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/contact">
            Get in touch
          </Link>
        </section>

        <footer className={styles.footer} role="contentinfo">
          <span>CultScribe</span> — Where legends live forever
          <small>Raw. Real. Written. · Inspired by the spirit of rock &amp; metal</small>
        </footer>
      </main>
    </>
  );
}
