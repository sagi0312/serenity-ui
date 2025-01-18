import { useState } from "react";
import styles from "./Goals.module.scss";

const Goals = () => {
  const [goals, setGoals] = useState({
    personalGoal: "",
    professionalGoal: "",
    healthGoal: "",
    spiritualGoal: "",
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setGoals((prevGoals) => ({
      ...prevGoals,
      [id]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Goals</h1>
      <p className={styles.goalsTitle}>Set and track your goals here.</p>
      <div className={styles.goalsInputContainer}>
        <div className={styles.goalsInput}>
          <label htmlFor="personalGoal">Personal Goal</label>
          <input type="text" id="personalGoal" onBlur={handleBlur} />
        </div>
        <div className={styles.goalsInput}>
          <label htmlFor="professionalGoal">Professional Goal</label>
          <input type="text" id="professionalGoal" onBlur={handleBlur} />
        </div>
        <div className={styles.goalsInput}>
          <label htmlFor="healthGoal">Health Goal</label>
          <input type="text" id="healthGoal" onBlur={handleBlur} />
        </div>
        <div className={styles.goalsInput}>
          <label htmlFor="spiritualGoal">Spiritual Goal</label>
          <input type="text" id="spiritualGoal" onBlur={handleBlur} />
        </div>
      </div>
    </div>
  );
};

export default Goals;
