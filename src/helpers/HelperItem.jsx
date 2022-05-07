import { useState } from "react"
import "./HelperItem.css"

export default function HelperItem(props) {
  const [amount, setAmount] = useState(0)

  return (
    <div className="helper-item">
      <div>{props.item.name}</div>
      <div>${props.item.price}</div>
      <div>{props.item.cps} cps</div>
      <div>x{amount}</div>
      <button
        onClick={() => {
          const ok = props.onClick()
          if (ok) setAmount(amount + 1)
        }}
      >
        Buy x1
      </button>
    </div>
  )
}
