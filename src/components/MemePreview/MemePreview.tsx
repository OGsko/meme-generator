import styles from "./MemePreview.module.css"

interface Prop  {
   img : string
   topText: string
   bottomText: string
   topSize: number
   bottomSize: number
}

const MemePreview = ({img, topText, bottomText, topSize, bottomSize}: Prop) => {
    return <>
    <div className={`${styles.memeContainer} meme`}>
        <div className={styles.topText}>
            <p style = {{fontSize: topSize}}>{topText}</p>
        </div>
        <img 
        src={img} 
        alt="" 
        style={{width: "350px", height: "400px", padding: "5px"}}
        />     
        <div className={styles.bottomText}>
            <p style = {{fontSize: bottomSize}}>{bottomText}</p>
        </div>
    </div>
    </>
}

export default MemePreview