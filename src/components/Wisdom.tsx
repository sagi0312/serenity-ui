import styles from "./Wisdom.module.scss";

export const Wisdom = () => {
  return (
    <div className={styles.container}>
      <h1>Wisdom</h1>
      <div className={styles.title}>Here is some quotes for a fresh start</div>
      <div className={styles.quotes}>
        <p>"The secret of getting ahead is getting started." - Mark Twain</p>
        <p>"The beginning is the most important part of the work." - Plato</p>
        <p>
          "Take the first step in faith. You don't have to see the whole
          staircase, just take the first step." - Martin Luther King Jr.
        </p>
        <p>
          "The way to get started is to quit talking and begin doing." - Walt
          Disney
        </p>
        <p>"The journey of a thousand miles begins with one step." - Lao Tzu</p>
        <p>
          "Start where you are. Use what you have. Do what you can." - Arthur
          Ashe
        </p>
        <p>
          "The best time to plant a tree was 20 years ago. The second best time
          is now." - Chinese Proverb
        </p>
        <p>
          "Don't watch the clock; do what it does. Keep going." - Sam Levenson
        </p>
        <p>
          "Success is not the key to happiness. Happiness is the key to success.
          If you love what you are doing, you will be successful." - Albert
          Schweitzer
        </p>
        <p>
          "The only way to do great work is to love what you do." - Steve Jobs
        </p>
        <p>
          "Your time is limited, don't waste it living someone else's life." -
          Steve Jobs
        </p>
        <p>"You miss 100% of the shots you don't take." - Wayne Gretzky</p>
        <p>"Believe you can and you're halfway there." - Theodore Roosevelt</p>
        <p>
          "Act as if what you do makes a difference. It does." - William James
        </p>
      </div>
    </div>
  );
};
