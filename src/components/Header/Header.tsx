import { Button, Icon } from "@chakra-ui/react";
import { NavMenu } from "../NavMenu/NavMenu";
import { Sidebar } from "../SideBar/SideBar";
import styles from "./Header.module.css";
import { LuCircleUser } from "react-icons/lu";
export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>{children}
        <a href="/home/dashboard/event" style={{ textDecoration: 'none' }}>
            <h1 className={styles.title}>Stintmaster</h1>
          </a>
        <div className={styles.navmenu}>
          <NavMenu />
        </div>
        <button>
        <Icon size={"xl"} color="accent">
          <LuCircleUser />
        </Icon>
        </button>
      </nav>

    </header>
  );
}