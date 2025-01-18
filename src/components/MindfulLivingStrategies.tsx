import styles from "./MindfulLivingStrategies.module.scss";

export const MindfulLivingStrategies = () => {
  return (
    <div className={styles.container}>
      <p>
        Welcome to the Mindful Living Strategies page. Here you will find tips
        and techniques to live a more mindful and peaceful life.
      </p>
      <ul>
        <li>Practice deep breathing exercises daily.</li>
        <li>Take regular breaks to stretch and relax.</li>
        <li>Engage in mindful meditation for at least 10 minutes a day.</li>
        <li>
          Keep a gratitude journal and write down things you are thankful for.
        </li>
        <li>Spend time in nature and appreciate the beauty around you.</li>
      </ul>
    </div>
  );
};
