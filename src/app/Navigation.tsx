import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Goals from "../components/Goals";
import { GuidedMeditation } from "../components/GuidedMeditation";
import { MindfulLivingStrategies } from "../components/MindfulLivingStrategies";
import { Wisdom } from "../components/Wisdom";

export const routes = [
  {
    path: "/mindful",
    element: <MindfulLivingStrategies />,
    label: "Mindful Living Strategies",
  },
  {
    path: "/meditation",
    element: <GuidedMeditation />,
    label: "Guided Meditation",
  },
  {
    path: "/wisdom",
    element: <Wisdom />,
    label: "Wisdom",
  },
  {
    path: "/goals",
    element: <Goals />,
    label: "Goals",
  },
];

export const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      {routes.map((route) => (
        <NavLink key={route.path} to={route.path} className={styles.navItem}>
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
};
