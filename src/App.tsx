import { useState } from "react"
import MemePicker from "./components/MemePicker/MemePicker"
import MemePreview from "./components/MemePreview/MemePreview"
import TextControlTop from "./components/TextControlTop/TextControlTop"
import TextControlBottom from "./components/TextControlBottom/TextControlBottom"
import DownloadBtn from "./components/DownloadBtn/DownloadBtn"

import styles from "./App.module.css"

const App = () => {

    const [showMemePicker, setShowMemePicker] = useState(false)

    const [selectedMeme, setSelectedMeme] = useState("")

    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")

    const [topSize, setTopSize] = useState(16)
    const [bottomSize, setBottomSize] = useState(16)
    return (
        <>
        <div className={styles.homeContainer}>
            <h1>Meme Generator</h1>
               <button onClick={() => {
                    setShowMemePicker(true)
                    setTopText("")
                    setBottomText("")
                    setSelectedMeme("")
                }}>
                Välj meme
               </button> 

        </div>
        {showMemePicker && (
            <MemePicker
            onSelect={(img) => {
                setSelectedMeme(img)
                setShowMemePicker(false)
            }}
            />
        )} 

        {selectedMeme && 
        <> 
        <div>
            <TextControlTop 
            setTopText = {setTopText} 
            setTopSize = {setTopSize}
            topSize = {topSize}
            topText = {topText}
            
            />
        </div>
        <MemePreview 
        img= {selectedMeme}
        topText= {topText}
        bottomText= {bottomText}
        topSize= {topSize}
        bottomSize= {bottomSize}
        />
        <div>
            <TextControlBottom
            setBottomText = {setBottomText} 
            setBottomSize = {setBottomSize}
            bottomSize = {bottomSize}
            bottomText = {bottomText}
            />
        </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px"
        }}>
            <DownloadBtn/>   
        </div>

        </>
        }
               
        </>
    )
}

export default App