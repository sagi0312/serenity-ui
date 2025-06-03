import { useState } from "react";
import styles from "./WellnessTools.module.scss";

export const WellnessTools = () => {
  enum Reminder {
    Breathe = "breathe",
    Hydrate = "hydrate",
    Pause = "pause",
  }

  const [journal, setJournal] = useState("");
  const [reminders, setReminders] = useState<Record<Reminder, boolean>>({
    [Reminder.Breathe]: true,
    [Reminder.Hydrate]: false,
    [Reminder.Pause]: false,
  });

  return (
    <section className={styles.wellnessTools}>
      <div className={styles.scrollContainer}>
        {/* Meditation */}
        <div className={styles.card}>
          <h3>5-Minute Meditation</h3>
          <p style={{ fontStyle: "italic", color: "#666" }}>
            [Audio coming soon...]
          </p>
        </div>

        {/* Gratitude Journal */}
        <div className={styles.card}>
          <h3>Gratitude Journal</h3>
          <textarea
            placeholder="What are you thankful for today?"
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
          />
        </div>

        {/* Mindfulness Reminders */}
        <div className={styles.card}>
          <h3>Mindfulness Reminders</h3>
          {Object.values(Reminder).map((key) => (
            <label key={key}>
              <input
                type="checkbox"
                checked={reminders[key]}
                onChange={() =>
                  setReminders({ ...reminders, [key]: !reminders[key] })
                }
              />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};
