import "./AutoList.css"
import autoItems from "./autoItems"
import AutoItem from "./AutoItem"

export default function AutoList(props) {
  return (
    <div className="auto-list">
      {autoItems.map(item => (
        <AutoItem
          item={item}
          key={item.id}
          onClick={() => props.onAutoItemClick(item.cps, item.price)}
        />
      ))}
    </div>
  )
}
