import { IoIosSearch } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Rezon</h1>
      <div className={styles.searchbar}>
        <IoIosSearch className={styles.lupa}/>
        <span>Pesquise no site...</span>
        </div>
        <FaCartShopping className={styles.cart}/>
      <HiMenu className={styles.user} />
    </div>
  );
}