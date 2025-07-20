
import styles from './marquee.module.css';

const Marquee = () => (
  <div className={styles['marquee-container']}>
    <div className={styles['marquee-label']}>NEWS</div>
    <div className={styles['marquee-content-wrapper']}>
      <div className={styles['marquee-content']}>
        <a href="#">ADMISSIONS OPEN ON THE AUSPICIOUS DAY OF UGADI | Admissions are open for 2025-26 - Register Now</a>
      </div>
    </div>
  </div>
);

export default Marquee;
