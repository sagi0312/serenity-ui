import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
  onStart: () => void;
}

export const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Embrace the power of now</h1>
        <p className={styles.subtext}>
          A compassionate AI companion sharing wisdom from "The Power of Now" by
          Eckhart Tolle
        </p>
        <button className={styles.cta} onClick={onStart}>
          Enter the Now
        </button>
      </div>
    </div>
  );
};
