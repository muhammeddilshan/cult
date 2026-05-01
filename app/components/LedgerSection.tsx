"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LedgerScrub, type LedgerMode } from "./LedgerScrub";
import styles from "./LedgerSection.module.css";

export function LedgerSection() {
  const [mode, setMode] = useState<LedgerMode>("problem");

  return (
    <section id="ledger" className={styles.ledger} aria-labelledby="ledger-title">
      <div className={styles.ledgerGlow} aria-hidden />
      <div className={styles.ledgerGrid} aria-hidden />
      <div className={styles.ledgerInner}>
        <p className={styles.eyebrow}>The ledger</p>
        <h2 id="ledger-title" className={styles.title}>
          Truth on one side. Legacy on the other.
        </h2>
        <p className={styles.lead}>
          Drag the seal, or choose a side — the tension Cult Scribe exists to
          resolve.
        </p>

        <div className={styles.controls}>
          <div className={styles.toggle}>
            <button
              type="button"
              onClick={() => setMode("problem")}
              className={`${styles.toggleBtn} ${
                mode === "problem" ? styles.toggleBtnActiveProblem : ""
              }`}
            >
              The problem
            </button>
            <button
              type="button"
              onClick={() => setMode("solution")}
              className={`${styles.toggleBtn} ${
                mode === "solution" ? styles.toggleBtnActiveSolution : ""
              }`}
            >
              The solution
            </button>
          </div>

          <LedgerScrub value={mode} onChange={setMode} />
        </div>

        <div className={styles.panelWrap}>
          <AnimatePresence mode="wait">
            {mode === "problem" ? (
              <motion.div
                key="problem"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.3 }}
                className={styles.panelGlass}
              >
                <h3 className={styles.panelTitleProblem}>
                  Most stationery is soulless.
                </h3>
                <ul className={styles.list}>
                  <li>Generic by design — zero cultural depth.</li>
                  <li>Creativity tools that don&apos;t inspire.</li>
                  <li>No identity, no story, no emotional pull.</li>
                  <li>
                    The things we love — music, art, rebellion — are nowhere to
                    be found.
                  </li>
                </ul>
              </motion.div>
            ) : (
              <motion.div
                key="solution"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3 }}
                className={`${styles.panelGlass} ${styles.panelSolution}`}
              >
                <h3 className={styles.panelTitleSolution}>
                  Notebooks with a legacy.
                </h3>
                <ul className={`${styles.list} ${styles.listLight}`}>
                  <li>Cultural and musical depth in every line.</li>
                  <li>Each cover is a piece of history.</li>
                  <li>Built to inspire bold expression.</li>
                  <li>
                    Every detail carries meaning — from texture to typography.
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
