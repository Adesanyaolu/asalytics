import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className= {styles.nav} >
        <p> 
        <img src="/icon.png" alt="Asaltics Logo"/> <span className={styles.SAlytics} >SAlytics</span>
        </p>
        <button className={styles.btn}> <span className={styles.btntext}> ANALYZE ASAs</span> </button>
    </div>
  )
}

export default Header


