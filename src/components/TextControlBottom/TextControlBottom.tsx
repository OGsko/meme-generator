import Styles from "./TextControlBottom.module.css"


type Props = {
  setBottomText: React.Dispatch<React.SetStateAction<string>>
  setBottomSize: React.Dispatch<React.SetStateAction<number>>
  bottomSize: number
  bottomText: string
}


const TextControlBottom = ({setBottomText, setBottomSize, bottomSize, bottomText} : Props) => {
    return (
      <div className={Styles.controlContainer}>
        <input 
        type="text" 
        onChange = {(e) => setBottomText(e.target.value)}
        value={bottomText}
        />
        <input 
        type="range" 
        min={8}
        max={32}
        value={bottomSize}
        onChange = {(e) => setBottomSize(Number(e.target.value))}
        />
        <p>{`${bottomSize}px`}</p>
      </div>
    )
}

export default TextControlBottom