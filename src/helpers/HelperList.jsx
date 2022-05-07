import "./HelperList.css"
import helpers from "./helpers"
import HelperItem from "./HelperItem"

export default function HelperList(props) {
  return (
    <div className="helper-list">
      {helpers.map(item => (
        <HelperItem
          item={item}
          key={item.id}
          onClick={() => props.onHelperItemClick(item.cps, item.price)}
        />
      ))}
    </div>
  )
}
