import styles from "./Time.module.css";

export function Time() {
    return (
    <>
    <section className={styles.team}>
        <span className={styles.square}></span> 
        <h2>
          A <span>Pearson Hardman</span> tem um time de especialistas a sua
          disposição
        </h2>
        <div className={styles.employees}>
          <div className={styles.employee}>
            <img src="img/mike.jpg" alt="Mike Ross" />
            <p className={styles.employeeName}>Mike Ross</p>
            <p className={styles.employeeRole}>Advogado</p>
          </div>
          <div className={styles.employee}>
            <img src="img/harvey.png" alt="Harvey Specter" />
            <p className={styles.employeeName}>Harvey Specter</p>
            <p className={styles.employeeRole}>Advogado Sênior</p>
          </div>
          <div className={styles.employee}>
            <img src="img/louis.jpg" alt="Louis Litt" />
            <p className={styles.employeeName}>Louis Litt</p>
            <p className={styles.employeeRole}>Advogado</p>
          </div>
          <div className={styles.employee}>
            <img src="img/jessica.jpg" alt="Jessica Pearson" />
            <p className={styles.employeeName}>Jessica Pearson</p>
            <p className={styles.employeeRole}>CEO</p>
          </div>
        </div>
    </section>
    </>
    )
}