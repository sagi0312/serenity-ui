import styles from "./GuidedMeditation.module.scss";

export const GuidedMeditation = () => {
  return (
    <div className={styles.container}>
      <p>Welcome to your guided meditation session. </p>
      Please choose a type of meditation to begin:
      <div className={styles.meditationButtons}>
        <button
          onClick={() => {
            const videoContainer = document.getElementById("videoContainer");
            if (videoContainer) {
              videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/inpok4MKVLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
          }}
        >
          Body Scan Meditation
        </button>
        <button
          onClick={() => {
            const videoContainer = document.getElementById("videoContainer");
            if (videoContainer) {
              videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/sm18M2Rz8z4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
          }}
        >
          Loving Kindness Meditation
        </button>
        <button
          onClick={() => {
            const videoContainer = document.getElementById("videoContainer");
            if (videoContainer) {
              videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/6p_yaNFSYao" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
          }}
        >
          Mindfulness Meditation
        </button>
      </div>
      <div className={styles.videoContainer} id="videoContainer"></div>
    </div>
  );
};
