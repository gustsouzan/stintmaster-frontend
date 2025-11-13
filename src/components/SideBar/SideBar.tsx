import { useRouter } from "next/navigation";
import { NavMenu } from "../NavMenu/NavMenu";
import styles from "./SideBar.module.css";

export const Sidebar = () => {

  return (
    <nav className={styles.sidebar}>
      <NavMenu />
    </nav>
  );
}
