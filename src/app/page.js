'use client'
import styles from "./page.module.css";
import EventsFunctionsState from "./components/EventsFunctionsState";

export default function Home() {
  return (
     <main className={styles.main}>
        <h2>Alex Pandian</h2>
        <EventsFunctionsState />
     </main>
  );
}
