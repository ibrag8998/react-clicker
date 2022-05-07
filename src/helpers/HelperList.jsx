import "./HelperList.css"
import helpers from "./helpers"
import HelperItem from "./HelperItem"

export default function HelperList(props) {
  return (
    <div className="helper-list">
      {helpers.map((item, i) => (
        <div key={item.id}>
          <HelperItem
            item={item}
            onClick={() => props.onHelperItemClick(item.cps, item.price)}
          />
          <div
            className="helper-item-divider"
            style={i === helpers.length - 1 ? { display: "none" } : null}
          ></div>
        </div>
      ))}
    </div>
  )
}
