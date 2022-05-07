import "./HUD.css"

export default function HUD(props) {
  return (
    <div className="hud">
      <div className="hud-item cookies-summary">
        Cookies: {props.cookies.toFixed(2)}
      </div>
      <div className="hud-item cps-summary">CPS: {props.cps.toFixed(1)}</div>
      <div className="hud-item click-power">Per click: {props.clickPower}</div>
    </div>
  )
}
