import styles from '../styles/Navbar.module.scss';
import CnButton from './elements/Button';

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.navBar}>
        <div className={styles.navLogo}>
          LOGO
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Services
            </li>
            <li>
              Specialities
            </li>
            <li>
              <CnButton>Book an Appointment</CnButton>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;