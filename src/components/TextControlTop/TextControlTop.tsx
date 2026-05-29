import Styles from "./TextControlTop.module.css"

type Props = {
  setTopText: React.Dispatch<React.SetStateAction<string>>
  setTopSize: React.Dispatch<React.SetStateAction<number>>
  topSize: number
  topText: string
}


const TextControlTop = ({setTopText, setTopSize, topSize, topText } : Props) => {
    return (
      <div className={Styles.controlContainer}>
        <input 
        type="text" 
        onChange = {(e) => setTopText(e.target.value)}
        value= {topText}
        />
        <input 
        type="range" 
        min={8}
        max={32}
        value={topSize}
        onChange = {(e) => setTopSize(Number(e.target.value))}
        />
        <p>{`${topSize}px`}</p>
      </div>
    )
}

export default TextControlTop