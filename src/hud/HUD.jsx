import "./HUD.css"

export default function HUD(props) {
  return (
    <div className="HUD">
      <div className="cookies-summary">Cookies: {props.cookies.toFixed(2)}</div>
      <div className="cps-summary">CPS: {props.cps.toFixed(1)}</div>
    </div>
  )
}
