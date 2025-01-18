import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.scss";
import { Navigation, routes } from "./Navigation";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <Router>
      <div className={styles.header}>
        <h1>Fresh Start</h1>
        <Navigation />
      </div>
      <div className={styles.container}>
        <AppRoutes routes={routes} />
      </div>
    </Router>
  );
};
