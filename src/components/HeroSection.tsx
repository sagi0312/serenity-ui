import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
  onStart: () => void;
}

export const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Find peace in the present moment</h1>
        <p className={styles.subtext}>
          A compassionate AI companion blending Buddhist, Taoist, and modern
          psychology wisdom
        </p>
        <button className={styles.cta} onClick={onStart}>
          Begin Your Journey
        </button>
      </div>
    </div>
  );
};
