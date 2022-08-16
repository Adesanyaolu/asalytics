import Button from './Button'
import style from '../styles/Algorand.module.css'

const Algorand = ({ asset }) => {
  return (
    <div className={style.algo}>
      <img  className={style.logo} src={asset.logo} alt="" />
      <h3 key={asset.id}>{asset.name}</h3>
      <Button asset={asset} />
    </div>
  )
}

export default Algorand
