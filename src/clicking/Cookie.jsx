import "./Cookie.css"

export default function Cookie(props) {
  return (
    <div className="cookie-wrapper">
      <button id="cookie" onClick={props.onClick}></button>
    </div>
  )
}
