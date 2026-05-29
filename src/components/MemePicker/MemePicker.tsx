import styles from "./MemePicker.module.css"

const img = [
    "../../meme1.jpg",
    "../../meme3.jpg",
    "../../meme4.webp",
    "../../meme5.jpg"
]

interface Prop  {
    onSelect: (img: string) => void
}

const MemePicker = ({onSelect}: Prop) => {
    return (
        <div className={styles.outerContainer}>
            {img.map((src, index) => (
                <div className={styles.imgContainer} key={index}>
                    <img
                    src={src}
                    style={{width: "250px", height: "300px", padding: "5px"}}
                    onClick={() => {onSelect(src)}}
                    />
                </div>
            ))}
        </div>
    )
}

export default MemePicker