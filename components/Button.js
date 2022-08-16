import { useState } from "react"
import styles from '../styles/Button.module.css'

const Button = ( {asset} ) => {
  const [assetValue, setassetValue] = useState(asset.available == true ? 'Available' : 'Unavailable') 

  return (
    <div>
      <button className={asset.available ? styles.availableBtn : styles.unavailableBtn}>{assetValue}</button>
    </div>
  )
}

export default Button
