import { ReactNode } from "react"
import "./TextPanel.css"
import { PanelStyleType } from "../PanelStyleType"

interface TextPanelProps {
  title: string,
  subtitle: string,
  text: string,
  button: ReactNode,
  styleType: PanelStyleType
}

export const TextPanel: React.FC<TextPanelProps> = ({title, subtitle, text, button, styleType}) => {
  return <div className={`TextPanel-${styleType}`}>
     <div className="Container">
      <div className="Title">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div> 
      <div className="TextBox">{text}</div>
      {button} 
     </div>
  </div>
}