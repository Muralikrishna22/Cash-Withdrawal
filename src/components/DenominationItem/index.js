import './index.css'

const DenominationItem = props => {
  const {denominationDetails, withdrawal} = props
  const {value} = denominationDetails

  const withdraw = () => {
    withdrawal(value)
  }

  return (
    <li className="item-container">
      <button className="withdarw-btn" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
