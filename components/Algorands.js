import Algorand from './Algorand'
import styles from '../styles/Algorands.module.css'


const Algorands = ({ assets }) => {
  return (
    <div className={styles.algos}>
       {assets.map((asset) => (
        <Algorand key = {asset.id} asset={ asset }/>
      ))}
    </div>
  )
}

export default Algorands
