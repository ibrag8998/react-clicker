import { useState } from "react"
import "./HelperItem.css"

export default function HelperItem(props) {
  const [amount, setAmount] = useState(0)

  return (
    <div className="helper-item">
      <div className="helper-item-row">
        <div className="helper-item-element">{props.item.name}</div>
        <div className="helper-item-element">${props.item.price}</div>
      </div>

      <div className="helper-item-row">
        <div className="helper-item-amount helper-item-element">x{amount}</div>
        <div className="helper-item-element">+{props.item.cps} cps</div>
        <div className="helper-item-element">
          <button
            onClick={() => {
              const ok = props.onClick()
              if (ok) setAmount(amount + 1)
            }}
          >
            Buy x1
          </button>
        </div>
      </div>
    </div>
  )
}
